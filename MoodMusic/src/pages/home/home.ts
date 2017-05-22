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

  private recentSongs;
  private recentMoods;

  constructor(
    public navCtrl: NavController,
    private moodService: MoodService) {
      this.recentSongs = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ];
  }

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
