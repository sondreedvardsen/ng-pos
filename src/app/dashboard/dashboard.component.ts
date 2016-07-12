import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
      MD_CARD_DIRECTIVES,
      MdIcon
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private productsservice: ProductsService,
      private route: ActivatedRoute,
      private router: Router) {}

  private products: any;

  ngOnInit() {
      this.productsservice.getAllProducts()
          .subscribe(
              data => this.products = data,
              err => console.error(err)
          );
  }

}
