import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
    moduleId: module.id,
    selector: 'app-category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MdIcon,
        ROUTER_DIRECTIVES,
        MD_TABS_DIRECTIVES
    ],
    providers: [MdIconRegistry, ProductsService],
})
export class CategoryComponent implements OnInit {

    private sub: any;
    private id: number;
    private categories: any;
    private products: any;
    private pCache = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsservice: ProductsService
    ) {}

    ngOnInit() {
        this.productsservice.getCategories()
            .subscribe(
                data => this.categories = data,
                err => console.error(err)
            );

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.productsservice.getProducts(this.id)
                .subscribe(
                    data => {
                        this.products = data;
                        this.pCache[this.id] = data;
                    },
                    err => console.error(err)
                );
            if(this.pCache[this.id]) {
                this.products = this.pCache[this.id];
            }
        });
    }

}
