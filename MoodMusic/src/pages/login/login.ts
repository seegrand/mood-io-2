import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/auth.service';

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

  validationPattern: RegExp = /^[a-zA-Z0-9_-]*$/;

  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  login() {
    console.log(this.data);
    // TODO: Check login credentials with the API.
    this.authService.login(this.data.username, this.data.password).subscribe(() => {
      this.navCtrl.push(TabsPage, {}, { animate: true, direction: 'forward' });
    });

    // this.authService.login(this.data.username, this.data.password).subscribe((res) => {
    //   console.log(res);
    // });

    // TEMP: Navigate to TabsPage
    this.navCtrl.push(TabsPage, {}, { animate: true, direction: 'forward' });
  }

  forgotPassword() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
