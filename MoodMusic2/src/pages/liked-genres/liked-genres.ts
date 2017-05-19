import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DislikedGenresPage } from '../disliked-genres/disliked-genres';

import { GenreService } from '../../services/genre.service';

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
    private navCtrl: NavController,
    private navParams: NavParams,
    private genreService: GenreService
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
