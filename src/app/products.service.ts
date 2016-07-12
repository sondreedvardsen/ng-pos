import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable()
export class ProductsService {

    constructor(private http: Http) {}

    private catUrl = 'https://mystore-api.no/categories.json?api_key=INTERIORAPI-C5AC97B2-41';

    private _dataObs = new ReplaySubject<any>(1);
    private _catObs = new ReplaySubject<any>(1);
    private _prodObs = new Array();
    private allProds;

    getData(forceRefresh?: boolean) : Observable<any> {
        // On Error the Subject will be Stoped and Unsubscribed, if so, create another one
        this._dataObs = this._dataObs.isUnsubscribed ? new ReplaySubject(1) : this._dataObs;

        // If the Subject was NOT subscribed before OR if forceRefresh is requested
        if (!this._dataObs.observers.length || forceRefresh) {
                this.http.get('http://jsonplaceholder.typicode.com/posts/2')
                  .subscribe(
                    requestData => {
                      this._dataObs.next(requestData);
                    },
                    error => this._dataObs.error(error));
            }

            return this._dataObs;
    }

    getCategories(forceRefresh?: boolean) : Observable<any> {
        this._catObs = this._catObs.isUnsubscribed ? new ReplaySubject(1) : this._catObs;
        if (!this._catObs.observers.length || forceRefresh) {
            this.http.get(this.catUrl)
                        .map(this.extractData)
                        .subscribe(requestData => this._catObs.next(requestData));
        }
        return this._catObs;
    }
    private extractData(res: Response) {
        let body = res.json();
        let arr = Object.keys(body.data.category_data).map(function(k) { return body.data.category_data[k] });
        return arr || { };
    }
    getProducts(catId: number, forceRefresh?: boolean) : Observable<any> {
        let url = 'https://mystore-api.no/products/' + catId + '.json?api_key=INTERIORAPI-C5AC97B2-41';

        this._prodObs[catId] = !this._prodObs[catId] ? new ReplaySubject<any>(1) : this._prodObs[catId];
        this._prodObs[catId] = this._prodObs[catId].isUnsubscribed ? new ReplaySubject(1) : this._prodObs[catId];
        if (!this._prodObs[catId].observers.length || forceRefresh) {
            this.http.get(url)
                        .map(this.extractProdData)
                        .subscribe(requestData => this._prodObs[catId].next(requestData));
        }
        return this._prodObs[catId];
    }
    private extractProdData(res: Response) {
        let body = res.json();
        let arr = Object.keys(body.data.product_data).map(function(k) { return body.data.product_data[k] });
        return arr || { };
    }
    getAllProducts() : Observable<any> {
        let url = 'https://mystore-api.no/products.json?api_key=INTERIORAPI-C5AC97B2-41&page_size=250';
        return this.http.get(url)
                        .map(this.extractProdData);
    }
    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }

}
