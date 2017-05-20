import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private _app: App, public navParams: NavParams, private authService: AuthService) { }

  logout() {
    // this.authService.logout().subscribe(() => {
    //   const root = this._app.getRootNav();
    //   root.popToRoot();
    // });

    const root = this._app.getRootNav();
    root.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
