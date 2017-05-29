import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/utils/local-storage.service';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private localStorageService: LocalStorageService) {
  }

  login() {
    this.authService.login(this.data.username, this.data.password).subscribe((user) => {
      if(user.ok){
        this.localStorageService.saveUserToken(user.token);
        this.navCtrl.push(TabsPage, {}, { animate: true, direction: 'forward' });
      }

      else {
        this.data.err = user.message;
      }
    });

  }

  forgotPassword() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
