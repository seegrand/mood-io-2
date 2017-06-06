import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DislikedGenresPage } from '../disliked-genres/disliked-genres';

import { GenreService } from '../../services/genre.service';

import { VisibilityService } from '../../services/utils/visibility.service';

import { Genre } from '../../model/genre';

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
  providers: [GenreService]
})
export class LikedGenresPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private genreService: GenreService,
    private visibilityService: VisibilityService
  ) { }

  private likes = [];
  private genres: Genre[];

  private paginatedGenres: any[];
  private pageSize = 9;

  getGenres() {
    this.genreService.getGenres().subscribe((genres) => {
      this.genres = genres;

      this.paginatedGenres = this.genreService.getPaginatedGenres(this.genres, this.pageSize);
    });
  }

  isLiked(genre) {

    if(this.likes.indexOf(genre) == -1){
      this.likes.push(genre);
      console.log(this.likes);
    }

    else {
      var i = this.likes.indexOf(genre);
      this.likes.splice(i, 1);
      console.log(this.likes);
    }
  }

  nextStep() {
    // TODO: Send liked genres to API.
    this.navCtrl.push(DislikedGenresPage, { currentlyLiked: this.likes });
  }

  ionViewDidLoad() {
    this.getGenres();
    console.log('ionViewDidLoad LikedGenres');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
