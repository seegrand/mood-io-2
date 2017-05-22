import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AudioProvider } from 'ionic-audio';

import { PlayerBackgroundService } from '../../services/utils/player-background.service';

import { Track } from '../../model/track';

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

  loading: any;

  windowHeight: string;
  isPlaying = false;

  backgroundSwirlerInterval: any;
  progressUpdaterInterval: any;

  currentTrack: Track;
  currentTrackPosition: number;
  currentTrackDuration: number;
  trackSteps: number = 2;

  likertPosition = 2;
  likertAnswers = ['Worsened', 'Irritating', 'Neutral', 'Slightly better', 'Improved'];

  playButtonIcon: HTMLElement;
  pauseButtonIcon: HTMLElement;

  fixedContent: HTMLElement;
  tabBarElement: HTMLElement;
  scrollContent: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private playerBackgroundService: PlayerBackgroundService,
    private audioProvider: AudioProvider) {

    // this.currentTrack = [{
    //   title: 'Windmills',
    //   artist: 'The Village Lantarne',
    //   src: 'http://nas1.tyil.net/%282006%29%20The%20Village%20Lanterne/%2813%29%20Blackmore%27s%20Night%20-%20Windmills.flac',
    //   preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    // }];

    if (this.audioProvider.tracks.length < 1) {
      this.currentTrack = {
        title: 'Why Georgia',
        artist: 'John Mayer',
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      };

      this.loadTrack(this.currentTrack);
    }

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading Video...'
    });

    // this.loading.present();
  }

  loadTrack(track: Track) {
    let nextAudioTrack = this.audioProvider.create(track);
    this.audioProvider.add(nextAudioTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }

  playToggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(this.audioProvider.current);
    }
  }

  play(index: number) {
    this.audioProvider.play(index);
    this.isPlaying = true;

    this.updatePlayButton();
  }

  pause() {
    this.audioProvider.pause();
    this.isPlaying = false;

    this.updatePlayButton();
  }

  updatePlayButton() {
    if (this.isPlaying) {
      this.pauseButtonIcon.style.display = 'block';
      this.playButtonIcon.style.display = 'none';
    } else {
      this.pauseButtonIcon.style.display = 'none';
      this.playButtonIcon.style.display = 'block';
    }
  }

  skipBackward() {
    this.pause();

    if (this.audioProvider.current > 0) {
      this.play(this.audioProvider.current - this.trackSteps);
    } else {
      this.play(this.audioProvider.current);
      this.audioProvider.tracks[this.audioProvider.current].seekTo(0);
    }
  }

  skipForward() {
    let nextTrack = {
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      src: 'http://nas1.tyil.net/Queen%20-%20A%20Night%20At%20The%20Opera%20-%20MFSL%20GOLD%20UDCD%20568%20-%201975/11-Queen-Bohemian%20Rhapsody.flac',
      preload: 'metadata'
    };

    this.pause();

    // for (var i = 0; i < this.audioProvider.tracks.length; i++) {
    //   this.audioProvider.stop(i);
    // }

    console.log(this.audioProvider.tracks);

    let nextAudioTrack = this.audioProvider.create(nextTrack);
    this.audioProvider.add(nextAudioTrack);

    this.play(this.audioProvider.current + this.trackSteps);
  }

  updateTrackProgress() {
    console.log(this.audioProvider.current);

    if (this.audioProvider.tracks[this.audioProvider.current]) {
      let track = this.audioProvider.tracks[this.audioProvider.current];

      if (!this.currentTrackDuration && this.audioProvider.tracks[this.audioProvider.current].duration) {
        this.currentTrackDuration = this.audioProvider.tracks[this.audioProvider.current].duration;
      }

      if (track.isPlaying && this.audioProvider.tracks[this.audioProvider.current].progress) {
        this.currentTrackPosition = this.audioProvider.tracks[this.audioProvider.current].progress;
      }
    }
  }

  seekTrack() {
    console.log('seekTrack');
    let track = this.audioProvider.tracks[this.audioProvider.current];

    if (track) {
      track.seekTo(this.currentTrackPosition);
    }
  }

  updateLikert() {
    document.getElementById('helpfulness').innerHTML = this.likertAnswers[this.likertPosition];
  }

  hidePlayer() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Player');

    /* ================================= VIEW MANIPULATION ================================= */

    // Start background swirleffect
    this.windowHeight = window.innerHeight + 'px';
    this.backgroundSwirlerInterval = this.playerBackgroundService.swirlBackground();

    this.updateTrackProgress();
    this.progressUpdaterInterval = setInterval(() => this.updateTrackProgress(), 1000);

    // Play button icons
    this.playButtonIcon = <HTMLElement> document.getElementById('play-icon');
    this.pauseButtonIcon = <HTMLElement> document.getElementById('pause-icon');

    this.fixedContent = <HTMLElement> document.querySelector('div.fixed-content');
    this.fixedContent.style.marginBottom = '0px';

    // Disable Tab view
    this.tabBarElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');
    this.scrollContent = <HTMLElement> document.querySelector('div.scroll-content');

    this.tabBarElement.style.display = 'none';
    this.scrollContent.style.margin = '0, 50px, 0, 0';

    /* =============================== VIEW MANIPULATION END =============================== */

    if (this.audioProvider.tracks && this.audioProvider.tracks[this.audioProvider.current]) {
      this.isPlaying = this.audioProvider.tracks[this.audioProvider.current].isPlaying;
    }

    // Start music
    if (!this.isPlaying) {
      this.play(0);
    } else {
      this.updatePlayButton();
    }
  }

  ionViewWillLeave() {
    clearInterval(this.backgroundSwirlerInterval);
    clearInterval(this.progressUpdaterInterval);

    this.tabBarElement.style.display = 'flex';
  }

}
