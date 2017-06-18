import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { IntroPage } from '../intro/intro';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/utils/local-storage.service';
import { VisibilityService } from '../../services/utils/visibility.service';

import { User } from '../../model/user';
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
export class ProfilePage implements OnInit {

  loading: any;
  alert: any;

  user: User;

  constructor(
    private _app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private visibilityService: VisibilityService) {

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging out...'
    });
  }

  ngOnInit() {
    this.user = this.localStorageService.getUser();

    if (!this.user) {
      var token = this.localStorageService.getUserToken();

      if (token) {
        this.authService.getLoggedInUser(token).subscribe((res) => {
          if (res.ok) {
            this.user = res.user;
            this.localStorageService.saveUser(res.user);
          }
        });
      }
    }
  }

  logout() {
    this.loading.present();

    var token = this.localStorageService.getUserToken();

    if (token) {
      this.authService.logout(token).subscribe((res) => {
        this.loading.dismiss();

        if (res.ok) {
          this.localStorageService.clear();

          this.visibilityService.hideMusicBar();
          this.visibilityService.hideTabs();
          this.visibilityService.hideScrollContentMargin();

          this.navCtrl.setRoot(IntroPage);
        } else {
          this.alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: res,
            buttons: ['Dismiss']
          });
          this.alert.present();
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

}
