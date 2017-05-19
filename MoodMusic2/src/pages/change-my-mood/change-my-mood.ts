import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerPage } from '../player/player';

import { MoodService } from '../../services/mood.service';

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

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private moodService: MoodService
  ) { }

  private mood;
  private moods;

  getMoods() {
    this.moodService.getMoods().then(moods => this.moods = moods);
  }

  currentMood(mood) {
    this.mood = mood;
    console.log(this.mood);
  }

  startPlaying() {
    // TODO: Register mood with the API.
    this.navCtrl.push(PlayerPage);
  }

  ionViewDidLoad() {
    this.getMoods();
    console.log('ionViewDidLoad ChangeMyMood');
  }

}
