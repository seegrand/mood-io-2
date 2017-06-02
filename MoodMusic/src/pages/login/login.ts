import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/auth.service';
import { VisibilityService } from '../../services/utils/visibility.service';
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

  loading: any;
  alert: any;
  data: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private visibilityService: VisibilityService,
    private localStorageService: LocalStorageService) {

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loggin in...'
    });
  }

  login() {
    this.loading.present();
    this.authService.login(this.data.username, this.data.password).subscribe((user) => {
      this.loading.dismiss();
      if(user.ok){
        this.localStorageService.saveUserToken(user.token);
        this.navCtrl.push(TabsPage, {}, { animate: true, direction: 'forward' });
      }
      else {
        this.alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: user.message,
          buttons: ['Dismiss']
        });
        this.alert.present();
      }
    });
  }

  forgotPassword() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
