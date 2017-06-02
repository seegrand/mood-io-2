import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { LikedGenresPage } from '../liked-genres/liked-genres';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/utils/local-storage.service';
import { VisibilityService } from '../../services/utils/visibility.service';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

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
        content: 'Registering...'
      });
    }

  register() {
    this.loading.present();

    this.authService.register(this.data.username, this.data.password).subscribe((user) => {
      this.loading.dismiss();

      if (user.ok) {
        this.localStorageService.saveUserToken(user.token);
        this.navCtrl.setRoot(LikedGenresPage, {}, { animate: true, direction: 'forward' });
      } else {
        this.alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: "Uh-oh, something went wrong. Please try again.",
          buttons: ['Dismiss']
        });
        this.alert.present();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
