import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DislikedGenresPage } from '../disliked-genres/disliked-genres';

import { GenreProvider } from '../providers/genre';

/**
 * Generated class for the LikedGenres page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-liked-genres',
  templateUrl: 'liked-genres.html',
})
export class LikedGenresPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public genreProvider: GenreProvider
  ) { }

  public likedGenres = [];

  isLiked() {
    console.log(this);
  }

  nextStep() {
    this.navCtrl.push(DislikedGenresPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikedGenres');
  }

}
