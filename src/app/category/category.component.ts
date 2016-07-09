import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'app-category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MdIcon
    ],
    providers: [MdIconRegistry],
})
export class CategoryComponent implements OnInit {

    private sub: any;
    private id: number;
    private products: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsservice: ProductsService
    ) {}

    ngOnInit() {
        this.sub = this.route.params
            .switchMap(params => this.productsservice.getProducts(+params['id']))
            .subscribe(
                data => this.products = data,
                err => console.error(err));
    }

    addToCart(id) {
        console.log('Add '+id+' to cart!');
    }
}
