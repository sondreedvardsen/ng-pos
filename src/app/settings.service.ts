import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService {

    constructor() {}

    private settingsObj: Object;

    getSettings() : Observable<Object> {
        this.settingsObj = JSON.parse(localStorage.getItem('settings'));
        return Observable.of(this.settingsObj);
    }

    setSettings(setObj: Object) {
        localStorage.setItem('settings', JSON.stringify(setObj));
    }

}
