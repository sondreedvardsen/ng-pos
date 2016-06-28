import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry, ProductsService],
})
export class CategoryComponent implements OnInit {

    private sub: any;
    private id: number;
    private lid: number;
    private products: any;
    private pCache = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsservice: ProductsService
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.productsservice.getProducts(this.id)
                .subscribe(
                    data => {
                        this.products = data;
                        this.pCache[this.id] = data;
                    }
                );
            if(this.pCache[this.id]) {
                this.products = this.pCache[this.id];
            }
        });
    }

}
