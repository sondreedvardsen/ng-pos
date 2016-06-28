import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

    constructor(private http: Http) {}

    private catUrl = 'https://mystore-api.no/categories.json?api_key=INTERIRGALLERIET-53A24AB7-41';

    getCategories() : Observable<any> {
        return this.http.get(this.catUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        let arr = Object.keys(body.data.category_data).map(function(k) { return body.data.category_data[k] });
        return arr || { };
    }
    getProducts(catId: number) : Observable<any> {
        let url = 'https://mystore-api.no/products/' + catId + '.json?api_key=INTERIRGALLERIET-53A24AB7-41';
        return this.http.get(url)
                            .map(this.extractProdData)
                            .catch(this.handleError);
    }
    private extractProdData(res: Response) {
        let body = res.json();
        let arr = Object.keys(body.data.product_data).map(function(k) { return body.data.product_data[k] });
        return arr || { };
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
