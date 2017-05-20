import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeMyMoodPage } from '../change-my-mood/change-my-mood';
import { PlayerPage } from '../player/player';

import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private recentMoods;

  constructor(
    public navCtrl: NavController,
    private moodService: MoodService
  ) { }

  ionViewDidLoad() {
    this.getRecentMoods();
    console.log('ionViewDidLoad Home');
  }

  /*
    Change My Mood
  */
  getRecentMoods() {
    this.moodService.getRecentMoods().subscribe(moods => this.recentMoods = moods);
  }

  changeMood() {
    this.navCtrl.push(ChangeMyMoodPage);
  }

  /*
    Player
  */
  startPlaying() {
  	this.navCtrl.push(PlayerPage, {}, { animate: true, direction: 'forward' });
  }

}
