import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { PlayerPage } from '../player/player';
import { SongDetailsPage } from '../song-details/song-details';

import { SongService } from '../../services/song.service';

import { Track } from '../../model/track';



/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage implements OnInit {

  // loading: any;
  alert: any;
  songs: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private songService: SongService) {

    // this.loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: 'Loading songs...'
    // });
  }

  ngOnInit() {
    this.getSongs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

  playSong(event, song: Track){
    event.stopPropagation();
    var data = {
      playlist: song
    };

    this.navCtrl.push(PlayerPage, data, { animation: 'fade-transition', direction: 'forward' });
  }

  songDetails(event, song) {
    event.stopPropagation();
    this.navCtrl.push(SongDetailsPage, { song: song });
  }
  
  getSongs() {
    // this.loading.present();

    this.songService.getSongs().subscribe((res) => {
      // this.loading.dismiss();

      if (res.ok) {
        this.songs = res.message
      } else {
        this.alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: res.message,
          buttons: ['Dismiss']
        });
        this.alert.present();
      }
    });
  }

}
