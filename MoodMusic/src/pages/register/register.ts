import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LikedGenresPage } from '../liked-genres/liked-genres';

import { AuthService } from '../../services/auth.service';
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

  data: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private visibilityService: VisibilityService) { }

  register() {
    this.authService.register(this.data.username, this.data.password).subscribe((res) => {

    });

    this.navCtrl.setRoot(LikedGenresPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
