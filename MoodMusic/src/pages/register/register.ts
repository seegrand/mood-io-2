import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';

import { LikedGenresPage } from '../liked-genres/liked-genres';

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

  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) { }

  register() {
    // if (this.data.username && this.data.username.length > 0 && this.data.password && this.data.username)
    // this.authService.register(data.)

    this.navCtrl.setRoot(LikedGenresPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
