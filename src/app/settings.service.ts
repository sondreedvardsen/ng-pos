import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Settingz } from './settingz';

@Injectable()
export class SettingsService {

    private settingsObj;

    constructor() {}


    getSettings() : Observable<Object> {
        this.settingsObj = JSON.parse(localStorage.getItem('settings'));
        if(!this.settingsObj) {
            this.settingsObj = {
                                    "decimals": false,
                                    "dispzero": false
                                };
                                // new Settings() will throw, but why!? :(((
        }
        this.settingsObj = new Settingz();
        return Observable.of(this.settingsObj);
    }

    setSettings(setObj: Object) {
        localStorage.setItem('settings', JSON.stringify(setObj));
    }

}
