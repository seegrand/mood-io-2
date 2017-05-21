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

  isNavigatingToPlayer = false;

  tabBarElement: HTMLElement;
  scrollContent: HTMLElement;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private moodService: MoodService
  ) { }

  private mood;
  private moods;

  getMoods() {
    this.moodService.getMoods().subscribe(moods => this.moods = moods);
  }

  currentMood(mood) {
    this.mood = mood;
    console.log(this.mood);
  }

  startPlaying() {
    // TODO: Register mood with the API.

    this.isNavigatingToPlayer = true;
    this.navCtrl.pop();
    this.navCtrl.push(PlayerPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeMyMood');

    this.getMoods();

		// Disable Tab view
    this.tabBarElement = <HTMLElement>document.querySelector('.tabbar.show-tabbar');
    this.scrollContent = <HTMLElement>document.querySelector('.scroll-content');

    this.tabBarElement.style.display = 'none';
    this.scrollContent.style.margin = '0, 50px, 0, 0';
	}

  ionViewWillLeave() {
    console.log('ionViewWillLeave ChangeMyMood');

    if (!this.isNavigatingToPlayer) {
      this.tabBarElement.style.display = 'flex';
    }
  }

}
