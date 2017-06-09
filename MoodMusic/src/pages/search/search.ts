import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { SongService } from '../../services/song.service';

import { Song } from '../../model/song';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

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
