import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { GenreService } from '../../services/genre.service';
import { VisibilityService } from '../../services/utils/visibility.service';

/**
 * Generated class for the DislikedGenres page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-disliked-genres',
  templateUrl: 'disliked-genres.html',
})
export class DislikedGenresPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private genreService: GenreService,
    private visibilityService: VisibilityService
  ) { }

  private dislikes = [];
  private currentlyLiked;
  private genres;

  private paginatedGenres: any[];
  private pageSize = 9;

  getGenres() {
    this.genreService.getGenres().subscribe((genres) => {
      this.genres = genres;

      this.paginatedGenres = this.genreService.getPaginatedGenres(this.genres, this.pageSize);
    });
  }

  isDisliked(genre) {

    if(this.dislikes.indexOf(genre) == -1){
      this.dislikes.push(genre);
      console.log(this.dislikes);
    }

    else {
      var i = this.dislikes.indexOf(genre);
      this.dislikes.splice(i, 1);
      console.log(this.dislikes);
    }
  }

  done() {
    this.genreService.saveLikedGenres(this.currentlyLiked);
    this.genreService.saveDislikedGenres(this.dislikes);
    this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    this.getGenres();
    this.currentlyLiked = this.navParams.get('currentlyLiked');
    console.log('ionViewDidLoad DislikedGenres');
  }

  ionViewDidEnter() {
    this.visibilityService.hideScrollContentMargin();
  }

}
