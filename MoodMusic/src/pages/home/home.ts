import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeMyMoodPage } from '../change-my-mood/change-my-mood';
import { RecentSongsPage } from '../recent-songs/recent-songs';
import { RecentMoodsPage } from '../recent-moods/recent-moods';
import { MoodDetailsPage } from '../mood-details/mood-details';
import { PlayerPage } from '../player/player';

import { MoodService } from '../../services/mood.service';
import { LocalStorageService } from '../../services/utils/local-storage.service';

import { Track } from '../../model/track';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private recentSongs: Track[];
  private recentMoods;

  constructor(
    public navCtrl: NavController,
    private moodService: MoodService,
    private localStorageService: LocalStorageService
  ) {
      this.recentSongs = [
        {
          id: 1,
          title: 'Why Georgia',
          artist: 'John Mayer',
          src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
          preload: 'metadata', // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        },
        {
          id: 2,
          title: 'Bohemian Rhapsody',
          artist: 'Queen',
          src: 'http://nas1.tyil.net/Queen%20-%20A%20Night%20At%20The%20Opera%20-%20MFSL%20GOLD%20UDCD%20568%20-%201975/11-Queen-Bohemian%20Rhapsody.flac',
          preload: 'metadata'
        },
        {
          id: 3,
          title: 'Satisfy My Soul',
          artist: 'Bob Marley',
          src: 'http://nas1.tyil.net/Bob%20Marley%20-%20Kaya/05%20-%20Bob%20Marley%20-%20Satisfy%20My%20Soul.flac',
          preload: 'metadata'
        },
        {
          id: 4,
          title: 'Hotel California',
          artist: 'Eagles',
          src: 'http://nas1.tyil.net/Eagles%20-%20Hotel%20California%20%28Original%29%20%28FLAC%29/01%20-%20Hotel%20California.flac',
          preload: 'metadata'
        }
      ];
  }

  ionViewDidLoad() {
    this.getRecentMoods();
    console.log('ionViewDidLoad Home');
  }



  /*
    Change My Mood
  */

  changeMood() {
    this.navCtrl.push(ChangeMyMoodPage);
  }

  /*
    Recent Songs
  */

  getRecentSongs() {

  }

  goToRecentSongs() {
    this.navCtrl.push(RecentSongsPage);
  }

  playRecentSong(song: Track) {
    var data = {
      playlist: song
    };

    this.navCtrl.push(PlayerPage, data);
  }

  /*
    Recent Moods
  */

  getRecentMoods() {
    this.moodService.getRecentMoods().subscribe(moods => this.recentMoods = moods);
  }

  goToRecentMoods() {
    this.navCtrl.push(RecentMoodsPage);
  }

  goToSelectedMood() {
    this.navCtrl.push(MoodDetailsPage);
  }


  /*
    Player
  */

  startPlaying() {
  	this.navCtrl.push(PlayerPage, {}, { animate: true, direction: 'forward' });
  }

}
