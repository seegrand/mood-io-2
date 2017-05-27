import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

import { MusicService } from '../../services/utils/music.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  searchPage = SearchPage;
  settingsPage = SettingsPage;

  constructor() {

  }
}
