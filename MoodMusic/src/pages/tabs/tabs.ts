import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

import { PlayerPage } from '../player/player';

import { MusicService } from '../../services/utils/music.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  searchPage = SearchPage;
  profilePage = ProfilePage;

  playButtonIcon: HTMLElement;
  pauseButtonIcon: HTMLElement;

  constructor(public navCtrl: NavController, private musicService: MusicService) {

  }

  showPlayer() {
    this.navCtrl.push(PlayerPage);
  }

  playToggle() {
    if (this.musicService.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.musicService.play();
    this.updatePlayButton();
  }

  pause() {
    this.musicService.pause();
    this.updatePlayButton();
  }

  updatePlayButton() {
    // Play button icons
    this.playButtonIcon = <HTMLElement>document.getElementById('play-icon-small');
    this.pauseButtonIcon = <HTMLElement>document.getElementById('pause-icon-small');

    if (this.pauseButtonIcon && this.playButtonIcon) {
      if (this.musicService.isPlaying) {
        this.pauseButtonIcon.style.display = 'block';
        this.playButtonIcon.style.display = 'none';
      } else {
        this.pauseButtonIcon.style.display = 'none';
        this.playButtonIcon.style.display = 'block';
      }
    }
  }
}
