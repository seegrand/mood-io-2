import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MusicService } from '../../services/utils/music.service';
import { PlayerBackgroundService } from '../../services/utils/player-background.service';
import { VisibilityService } from '../../services/utils/visibility.service';

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
export class PlayerPage implements OnInit {

  loading: any;

  windowHeight: string;

  backgroundSwirlerInterval: any;
  progressUpdaterInterval: any;

  currentTrack: Track;
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

    // this.currentTrack = [{
    //   title: 'Windmills',
    //   artist: 'The Village Lantarne',
    //   src: 'http://nas1.tyil.net/%282006%29%20The%20Village%20Lanterne/%2813%29%20Blackmore%27s%20Night%20-%20Windmills.flac',
    //   preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    // }];

    // if (this.audioProvider.tracks.length < 1) {
    //   this.currentTrack = {
    //     title: 'Why Georgia',
    //     artist: 'John Mayer',
    //     src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
    //     preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    //   };
    //
    //   this.loadTrack(this.currentTrack);
    // }

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading Video...'
    });

    // this.loading.present();
  }

  ngOnInit() {
    var songs: Track[] = [
      {
        title: 'Why Georgia',
        artist: 'John Mayer',
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      },
      {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        src: 'http://nas1.tyil.net/Queen%20-%20A%20Night%20At%20The%20Opera%20-%20MFSL%20GOLD%20UDCD%20568%20-%201975/11-Queen-Bohemian%20Rhapsody.flac',
        preload: 'metadata'
      }
    ];

    this.musicService.init(songs);

    // Start music
    if (!this.musicService.isPlaying) {
      this.play();
    } else {
      this.updatePlayButton();
    }
  }

  // loadTrack(track: Track) {
  //   let nextAudioTrack = this.audioProvider.create(track);
  //   this.audioProvider.add(nextAudioTrack);
  // }

  // onTrackFinished(track: any) {
  //   console.log('Track finished', track);
  // }

  playToggle() {
    if (this.musicService.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.musicService.play();

    this.updatePlayButton();
  }

  playNext() {
    this.pause();

    this.musicService.playNext();

    this.updatePlayButton();
  }

  playPrevious() {
    this.pause();

    this.musicService.playPrevious();

    this.updatePlayButton();
  }

  pause() {
    this.musicService.pause();

    this.updatePlayButton();
  }

  resetTrack() {
    this.play();
    this.musicService.resetTrack();

  }

  updatePlayButton() {
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

  skipForward() {
    // let nextTrack = {
    //   title: 'Bohemian Rhapsody',
    //   artist: 'Queen',
    //   src: 'http://nas1.tyil.net/Queen%20-%20A%20Night%20At%20The%20Opera%20-%20MFSL%20GOLD%20UDCD%20568%20-%201975/11-Queen-Bohemian%20Rhapsody.flac',
    //   preload: 'metadata'
    // };

    // this.pause();

    // for (var i = 0; i < this.audioProvider.tracks.length; i++) {
    //   this.audioProvider.stop(i);
    // }

    // console.log(this.audioProvider.tracks);

    // let nextAudioTrack = this.audioProvider.create(nextTrack);
    // this.audioProvider.add(nextAudioTrack);
    //
    // this.play(this.audioProvider.current + this.trackSteps);

    if (!this.playNext()) {
      this.pause();
    }
  }

  skipBackward() {
    // this.pause();

    if (!this.playPrevious()) {
      this.resetTrack();
    }
  }

  updateTrackProgress() {
    // console.log(this.audioProvider.current);

    this.currentTrackPosition = this.musicService.getTrackProgress();

    if (!this.currentTrackDuration) {
      this.currentTrackDuration = this.musicService.getTrackDuration();
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
    this.updatePlayButton();
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
  }

}
