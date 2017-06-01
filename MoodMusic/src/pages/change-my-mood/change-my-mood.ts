import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerPage } from '../player/player';

import { MoodService } from '../../services/mood.service';
import { SongService } from '../../services/song.service';

import { VisibilityService } from '../../services/utils/visibility.service';

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
    private moodService: MoodService,
    private songService: SongService,
    private visibilityService: VisibilityService
  ) { }

  private mood;
  private moods;

  getMoods() {
    this.moodService.getMoods().subscribe(moods => this.moods = moods.message);
  }

  currentMood(mood) {
    this.mood = mood;
    console.log(this.mood);
  }

  startPlaying() {
    // TODO: Register mood with the API.

    this.isNavigatingToPlayer = true;
    this.navCtrl.pop();

    var data = this.songService.getSongsLocal();

    this.navCtrl.push(PlayerPage, data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeMyMood');

    this.getMoods();

		// Disable Tab view
    this.visibilityService.hideTabs();
    this.visibilityService.hideMusicBar();
	}

  ionViewWillLeave() {
    console.log('ionViewWillLeave ChangeMyMood');

    if (!this.isNavigatingToPlayer) {
      this.visibilityService.showTabs();
      this.visibilityService.showMusicBar();
    }
  }

}
