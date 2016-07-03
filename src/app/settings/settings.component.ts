import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MdButton } from '@angular2-material/button';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';

@Component({
    moduleId: module.id,
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_TABS_DIRECTIVES,
        MdButton,
        MD_SLIDE_TOGGLE_DIRECTIVES
    ]
})
export class SettingsComponent implements OnInit {

    private settings: Object;
    private featProducts: Object;

    constructor() {}

    ngOnInit() {
    }

}
