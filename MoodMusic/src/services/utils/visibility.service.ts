import { Injectable } from '@angular/core';

@Injectable()
export class VisibilityService {

  constructor() {}

  hideTabs() {
    var tabBarElement: HTMLElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');
    var fixedContent: HTMLElement = <HTMLElement> document.querySelector('div.fixed-content');
    var scrollContent: HTMLElement = <HTMLElement> document.querySelector('div.scroll-content');

    if (tabBarElement) {
      tabBarElement.style.display = 'none';
    }

    if (fixedContent) {
      fixedContent.style.marginBottom = '0px';
    }

    if (scrollContent) {
      scrollContent.style.margin = '0, 50px, 0, 0';
    }
  }

  showTabs() {
    var tabBarElement: HTMLElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');

    if (tabBarElement) {
      tabBarElement.style.display = 'flex';
    }
  }

  hideMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');

    if (footerElement) {
      footerElement.style.display = 'none';
    }
  }

  showMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');

    if (footerElement) {
      footerElement.style.display = 'flex';
    }
  }
}
