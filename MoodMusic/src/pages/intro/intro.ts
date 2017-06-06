import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

import { VisibilityService } from '../../services/utils/visibility.service';

/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private visibilityService: VisibilityService
  ) { }

  loginScreen() {
    this.navCtrl.push(LoginPage);
  }

  registerScreen() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
