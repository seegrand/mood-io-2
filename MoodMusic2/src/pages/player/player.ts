import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { PlayerBackgroundService } from '../../services/utils/player-background.service';

/**
 * Generated class for the Player page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  tabBarElement: any;
  scrollContent: any;

  loading: any;

  windowHeight: string;
	playing = false;

	currentPosition = 0;

	likertPosition = 2;
	likertAnswers = ['Worsened', 'Irritating', 'Neutral', 'Slightly better', 'Improved'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private playerBackgroundService: PlayerBackgroundService) {
    this.loading = this.loadingCtrl.create({
			spinner: 'crescent',
			content: 'Loading Video...'
		});

		// this.loading.present();
  }

  playToggle() {

  }

  skipBackward() {

  }

  skipForward() {

  }

  seekMusicFile() {

  }

  updateLikert() {
			document.getElementById('helpfulness').innerHTML = this.likertAnswers[this.likertPosition];
  }

  hidePlayer() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Player');

    this.windowHeight = window.innerHeight + 'px';

    console.log(this.windowHeight);

    // Start background swirleffect
    // this.playerBackgroundService.swirlBackground();

		// Disable Tab view
    this.tabBarElement = <HTMLElement>document.querySelector('.tabbar.show-tabbar');
    this.scrollContent = <HTMLElement>document.querySelector('.scroll-content');

    this.tabBarElement.style.display = 'none';
    this.scrollContent.style.margin = '0, 50px, 0, 0';
	}

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
