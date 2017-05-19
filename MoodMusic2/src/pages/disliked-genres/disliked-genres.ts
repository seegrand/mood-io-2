import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  done() {
      this.navCtrl.setRoot(TabsPage, {}, { animate: true, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DislikedGenres');
  }

}
