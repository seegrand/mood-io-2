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
      scrollContent.style.setProperty('margin-bottom', '0px','important');
    }
  }

  showTabs() {
    var tabBarElement: HTMLElement = <HTMLElement> document.querySelector('.tabbar.show-tabbar');
    var scrollContent: HTMLElement = <HTMLElement> document.querySelector('div.scroll-content');

    if (tabBarElement) {
      tabBarElement.style.display = 'flex';
    }

    if (scrollContent) {
      scrollContent.style.setProperty('margin-bottom', '56px','important');
    }
  }

  hideMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');
    var scrollContent: HTMLElement = <HTMLElement> document.querySelector('div.scroll-content');

    if (footerElement) {
      footerElement.style.display = 'none';
    }

    if (scrollContent) {
      scrollContent.style.setProperty('margin-bottom', '56px','important');
    }
  }

  showMusicBar() {
    var footerElement: HTMLElement = <HTMLElement> document.querySelector('.footer#music-bar');
    var scrollContent: HTMLElement = <HTMLElement> document.querySelector('div.scroll-content');

    if (footerElement) {
      footerElement.style.display = 'flex';
    }

    if (scrollContent) {
      scrollContent.style.setProperty('margin-bottom', '112px','important');
    }

    console.log(scrollContent);
  }

  hideScrollContentMargin() {
    var scrollContents: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>> document.querySelectorAll('ion-content > div.scroll-content');

    console.log(scrollContents);

    if (scrollContents) {
      for (var i = 0; i < scrollContents.length; i++) {
        scrollContents.item(i).style.setProperty('margin-bottom', '0px','important');
      }
    }
  }
}
