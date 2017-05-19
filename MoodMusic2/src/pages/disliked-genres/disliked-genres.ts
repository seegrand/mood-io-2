import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { GenreService } from '../../services/genre.service';

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
    private genreService: GenreService
  ) { }

  private dislikes = [];
  private genres;

  getGenres() {
    this.genreService.getGenres().then(genres => this.genres = genres);
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
    // TODO: Send disliked genres to API.
    this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    this.getGenres();
    console.log('ionViewDidLoad DislikedGenres');
  }

}
