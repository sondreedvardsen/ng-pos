import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productsservice: ProductsService) {}

  private test: any;

  ngOnInit() {
      this.productsservice.getData()
          .subscribe(
              data => this.test = data,
              err => console.error(err)
          );
  }

}
