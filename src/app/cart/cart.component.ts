import { Component, OnInit } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  directives: [
      MdIcon
  ],
  providers: [MdIconRegistry]
})
export class CartComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
