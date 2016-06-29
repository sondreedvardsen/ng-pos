import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
      MdButton,
      MD_CARD_DIRECTIVES,
      MD_LIST_DIRECTIVES,
      MD_SIDENAV_DIRECTIVES,
      MD_TOOLBAR_DIRECTIVES,
      MdIcon,
      CartComponent,
      ROUTER_DIRECTIVES
  ],
  providers: [MdIconRegistry]
})

export class AppComponent implements OnInit {

    constructor() {}

    title = 'Angular2 test!';

    ngOnInit() {

    }

}
