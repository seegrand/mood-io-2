import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerPage } from '../player/player';

/**
 * Generated class for the ChangeMyMood page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-change-my-mood',
  templateUrl: 'change-my-mood.html',
})
export class ChangeMyMoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startPlaying() {
    this.navCtrl.push(PlayerPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeMyMood');
  }

}
