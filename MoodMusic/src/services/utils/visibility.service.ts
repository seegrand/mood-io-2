import { Injectable } from '@angular/core';

@Injectable()
export class VisibilityService {

  constructor() {}

  hideTabs() {
    var tabBarElement: HTMLElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');
    var fixedContent: HTMLElement = <HTMLElement> document.querySelector('div.fixed-content');
    var scrollContent: HTMLElement = <HTMLElement> document.querySelector('div.scroll-content');

    tabBarElement.style.display = 'none';
    tabBarElement.style.display = 'none';
    fixedContent.style.marginBottom = '0px';
    scrollContent.style.margin = '0, 50px, 0, 0';
  }

  showTabs() {
    var tabBarElement: HTMLElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');

    tabBarElement.style.display = 'flex';
  }

  hideMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');

    footerElement.style.display = 'none';
  }

  showMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');

    footerElement.style.display = 'flex';
  }
}
