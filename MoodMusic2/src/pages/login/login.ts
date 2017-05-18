import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    // TODO: Check login credentials with the API.
    // TEMP: Navigate to TabsPage
    this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
