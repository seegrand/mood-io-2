import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MusicService } from '../../services/utils/music.service';
import { PlayerBackgroundService } from '../../services/utils/player-background.service';
import { VisibilityService } from '../../services/utils/visibility.service';

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
export class PlayerPage implements OnInit {

  loading: any;

  windowHeight: string;

  backgroundSwirlerInterval: any;
  progressUpdaterInterval: any;

  // currentTrack: Track;
  currentTrackPosition: number;
  currentTrackDuration: number;

  likertPosition = 2;
  likertAnswers = ['Worsened', 'Irritating', 'Neutral', 'Slightly better', 'Improved'];

  playButtonIcon: HTMLElement;
  pauseButtonIcon: HTMLElement;

  fixedContent: HTMLElement;
  footerElement: HTMLElement;
  tabBarElement: HTMLElement;
  scrollContent: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private musicService: MusicService,
    private playerBackgroundService: PlayerBackgroundService,
    private visibilityService: VisibilityService) {

    // this.loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: 'Loading Video...'
    // });

    // this.loading.present();
  }

  ngOnInit() {
    // Start music
    if (this.musicService.init(this.navParams.get('playlist'))) {
      if (this.musicService.getPlaylistLength() > this.musicService.getCurrentTrackIndex()) {
        this.skipForward();
      } else {
        this.play();
      }
    }
  }

  playToggle() {
    if (this.musicService.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.musicService.play();

    this.updateView();
  }

  pause() {
    this.musicService.pause();

    this.updateView();
  }

  resetTrack() {
    this.play();
    this.musicService.resetTrack();

  }

  skipForward() {
    if (this.musicService.playNext()) {
      this.updateView();
    } else {
      this.pause();
    }
  }

  skipBackward() {
    if (this.musicService.playPrevious()) {
      this.updateView();
    } else {
      this.resetTrack();
    }
  }

  updatePlayButton() {
    if (this.pauseButtonIcon && this.playButtonIcon) {
      if (this.musicService.isPlaying) {
        this.showPauseIcon();
      } else {
        this.showPlayIcon();
      }
    }
  }

  showPlayIcon() {
    this.pauseButtonIcon.style.display = 'none';
    this.playButtonIcon.style.display = 'block';
  }

  showPauseIcon() {
    this.playButtonIcon.style.display = 'none';
    this.pauseButtonIcon.style.display = 'block';
  }

  updateTrackProgress() {
    this.currentTrackPosition = this.musicService.getTrackProgress();

    this.currentTrackDuration = this.musicService.getTrackDuration();

    if (this.currentTrackPosition && this.currentTrackDuration) {
      console.log('currentTrackPosition: ' + this.currentTrackPosition);
      console.log('currentTrackDuration: ' + this.currentTrackDuration);

      if (this.currentTrackDuration - this.currentTrackPosition <= 1) {
        console.log('skipForward');
        this.skipForward();
      }
    }
  }

  seekTrack(position: number) {
    console.log(position);

    this.musicService.seekTrack(position);
  }

  updateLikert() {
    document.getElementById('helpfulness').innerHTML = this.likertAnswers[this.likertPosition];
  }

  updateView() {
    this.updateTrackProgress();
    this.updatePlayButton();
  }

  hidePlayer() {
    this.navCtrl.pop();
  }

  updateSmallPlayButton() {
    // Play button icons
    this.playButtonIcon = <HTMLElement>document.getElementById('play-icon-small');
    this.pauseButtonIcon = <HTMLElement>document.getElementById('pause-icon-small');

    if (this.pauseButtonIcon && this.playButtonIcon) {
      if (this.musicService.isPlaying) {
        this.pauseButtonIcon.style.display = 'block';
        this.playButtonIcon.style.display = 'none';
      } else {
        this.pauseButtonIcon.style.display = 'none';
        this.playButtonIcon.style.display = 'block';
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Player');

    /* ================================= VIEW MANIPULATION ================================= */

    // Start background swirleffect
    this.windowHeight = window.innerHeight + 'px';
    this.backgroundSwirlerInterval = this.playerBackgroundService.swirlBackground();

    this.progressUpdaterInterval = setInterval(() => {
      this.updateView();
    }, 1000);

    // Play button icons
    this.playButtonIcon = <HTMLElement>document.getElementById('play-icon');
    this.pauseButtonIcon = <HTMLElement>document.getElementById('pause-icon');

    // Disable Tab view
    this.visibilityService.hideTabs();
    this.visibilityService.hideMusicBar();

    /* =============================== VIEW MANIPULATION END =============================== */

    this.updateView();
  }

  ionViewWillLeave() {
    clearInterval(this.backgroundSwirlerInterval);
    clearInterval(this.progressUpdaterInterval);

    this.visibilityService.showTabs();
    this.visibilityService.showMusicBar();

    this.updateSmallPlayButton();
  }

}
