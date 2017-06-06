import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Pages
import { SongDetailsPage } from '../song-details/song-details';
import { PlayerPage } from '../player/player';

// Services
import { SongService } from '../../services/song.service';

// Models
import { Track } from '../../model/track';


/**
 * Generated class for the RecentSongs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recent-songs',
  templateUrl: 'recent-songs.html',
})
export class RecentSongsPage {

  songs: [Track]

  constructor(public navCtrl: NavController, public navParams: NavParams, private songService: SongService) {
  }

  playSong(event){
    event.stopPropagation();
    this.navCtrl.push(PlayerPage);
  }

  getSongs() {
    return this.songService.getSongs().subscribe(songs => this.songs = songs.message);
  }

  songDetails(event, song) {
    event.stopPropagation();
    this.navCtrl.push(SongDetailsPage, { song: song });
  }

  ionViewDidLoad() {
    this.getSongs();
    console.log('ionViewDidLoad RecentSongs');
  }

}
