import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  register() {
    this.navCtrl.setRoot(LikedGenresPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
