import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Settingz } from './settingz';

@Injectable()
export class SettingsService {

    private settingsObj: Settingz;

    constructor() {}


    getSettings() : Observable<Settingz> {
        this.settingsObj = JSON.parse(localStorage.getItem('settings'));
        this.settingsObj = !this.settingsObj ? new Settingz() : this.settingsObj;
        return Observable.of(this.settingsObj);
    }

    setSettings(setObj: Object) {
        localStorage.setItem('settings', JSON.stringify(setObj));
    }

}
