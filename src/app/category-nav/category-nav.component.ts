import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
  moduleId: module.id,
  selector: 'app-category-nav',
  templateUrl: 'category-nav.component.html',
  styleUrls: ['category-nav.component.css'],
  directives: [
      MD_CARD_DIRECTIVES,
      MdIcon,
      ROUTER_DIRECTIVES,
      MD_TABS_DIRECTIVES
  ],
  providers: [MdIconRegistry]
})
export class CategoryNavComponent implements OnInit {

    private categories: any;

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
    }

}
