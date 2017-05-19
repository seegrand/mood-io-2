import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChangeMyMoodPage } from '../change-my-mood/change-my-mood';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  changeMood() {
    this.navCtrl.push(ChangeMyMoodPage);
  }

}
