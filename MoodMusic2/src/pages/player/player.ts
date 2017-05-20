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

  currentTrack: Track[];
  currentTrackPosition: number;
  currentTrackDuration: number;

  loading: any;

  windowHeight: string;
  playing = false;

  currentPosition = 0;

  likertPosition = 2;
  likertAnswers = ['Worsened', 'Irritating', 'Neutral', 'Slightly better', 'Improved'];

  fixedContent: HTMLElement;
  tabBarElement: HTMLElement;
  scrollContent: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private _playerBackgroundService: PlayerBackgroundService,
    private _audioProvider: AudioProvider) {

    // this.currentTrack = [{
    //   title: 'Windmills',
    //   artist: 'The Village Lantarne',
    //   src: 'http://nas1.tyil.net/%282006%29%20The%20Village%20Lanterne/%2813%29%20Blackmore%27s%20Night%20-%20Windmills.flac',
    //   preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    // }];

    this.currentTrack = [{
      title: 'Why Georgia',
      artist: 'John Mayer',
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }];

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading Video...'
    });

    // this.loading.present();
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }

  skipBackward() {

  }

  skipForward() {
    let nextTrack = {
      title: 'I Guess It Doesn\'t Matter AnyMore',
      artist: 'The Village Lantarne',
      src: 'http://nas1.tyil.net/%282006%29%20The%20Village%20Lanterne/%2803%29%20Blackmore%27s%20Night%20-%20I%20Guess%20It%20Doesn%27t%20Matter%20Anymore.flac',
      preload: 'metadata'
    };

    this._audioProvider.pause();

    let nextAudioTrack = this._audioProvider.create(nextTrack);
    this._audioProvider.add(nextAudioTrack);
    this._audioProvider.play(this._audioProvider.current + 1);
  }

  updateTrackProgress() {
    if (this._audioProvider.tracks[this._audioProvider.current]) {
      let track = this._audioProvider.tracks[this._audioProvider.current];

      if (!this.currentTrackDuration && this._audioProvider.tracks[this._audioProvider.current].duration) {
        this.currentTrackDuration = this._audioProvider.tracks[this._audioProvider.current].duration;

        console.log(this.currentTrackDuration);
      }

      if (track.isPlaying && this._audioProvider.tracks[this._audioProvider.current].progress) {
        this.currentTrackPosition = this._audioProvider.tracks[this._audioProvider.current].progress;

        console.log(this.currentTrackPosition);
      }
    }
  }

  seekTrack() {
    console.log('seekTrack');
    let track = this._audioProvider.tracks[this._audioProvider.current];

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

    this.windowHeight = window.innerHeight + 'px';

    console.log(this.windowHeight);

    // Start background swirleffect
    this._playerBackgroundService.swirlBackground();

    setInterval(() => this.updateTrackProgress(), 1000);

    this.fixedContent = <HTMLElement>document.querySelector('div.fixed-content');
    this.fixedContent.style.marginBottom = '0px';

    // Disable Tab view
    this.tabBarElement = <HTMLElement>document.querySelector('.tabbar.show-tabbar');
    this.scrollContent = <HTMLElement>document.querySelector('div.scroll-content');

    this.tabBarElement.style.display = 'none';
    this.scrollContent.style.margin = '0, 50px, 0, 0';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
