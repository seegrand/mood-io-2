import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/utils/local-storage.service';

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
    private localStorageService: LocalStorageService) {

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging in...'
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
    var token = this.localStorageService.getUserToken();

    if (token) {
      this.authService.logout(token).subscribe((res) => {
        if (res.ok) {
          this.localStorageService.clear();

          const root = this._app.getRootNav();
          root.popToRoot();
        } else {
          console.log(res);

          // this.alert = this.alertCtrl.create({
          //   title: 'Error',
          //   subTitle: res,
          //   buttons: ['Dismiss']
          // });
          // this.alert.present();
        }

        this.localStorageService.clear();

        const root = this._app.getRootNav();
        root.popToRoot();
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

}
