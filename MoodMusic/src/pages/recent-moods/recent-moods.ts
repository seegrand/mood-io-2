import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoodDetailsPage } from '../mood-details/mood-details';

/**
 * Generated class for the RecentMoods page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recent-moods',
  templateUrl: 'recent-moods.html',
})
export class RecentMoodsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  moodDetails() {

    // TODO:
    // [GET] Mood Details - https://mood-io.herokuapp.com/moods/:id
    // Pass mood id as parameter.
    // This route is not yet implemented.

    this.navCtrl.push(MoodDetailsPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentMoods');
  }

}
