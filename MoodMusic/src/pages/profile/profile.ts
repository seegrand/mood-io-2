import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(private _app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  logout() {
    // this.authService.logout().subscribe(() => {
    //   const root = this._app.getRootNav();
    //   root.popToRoot();
    // });

    const root = this._app.getRootNav();
    root.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

}
