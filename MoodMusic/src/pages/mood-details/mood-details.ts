import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerPage } from '../player/player';

/**
 * Generated class for the MoodDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mood-details',
  templateUrl: 'mood-details.html',
})
export class MoodDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public mood = {
    'name': 'Happy',
    'img': 'http://lorempixel.com/150/150/nature/',
    'helpfulness': 'Improved',
    'date': new Date()
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodDetails');
    return this.mood;
  }

  playSong() {
    this.navCtrl.push(PlayerPage);
  }

}
