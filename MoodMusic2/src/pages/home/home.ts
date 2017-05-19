import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeMyMoodPage } from '../change-my-mood/change-my-mood';

import { MoodService } from '../../services/mood.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private moodService: MoodService
  ) { }

  private recentMoods;

  getRecentMoods() {
    this.moodService.getRecentMoods().then(moods => this.recentMoods = moods);
  }

  changeMood() {
    this.navCtrl.push(ChangeMyMoodPage);
  }

  ionViewDidLoad() {
    this.getRecentMoods();
    console.log('ionViewDidLoad Home');
  }

}
