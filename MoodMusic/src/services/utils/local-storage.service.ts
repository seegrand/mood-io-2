import { Injectable } from '@angular/core';

import { User } from '../../model/user';
import { Mood } from '../../model/mood';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  userTokenKey: string = 'userToken';
  userKey: string = 'user';

  currentMoodKey: string = 'currentMood';

  gradientStateKey: string = 'gradientState';
  likertScaleKey: string = 'likertScale';

  constructor() { }

  getUserToken() {
    return window.localStorage.getItem(this.userTokenKey);
  }

  saveUserToken(token: string) {
    if (token)
      window.localStorage.setItem(this.userTokenKey, token);
  }

  removeUserToken() {
    window.localStorage.removeItem(this.userTokenKey);
  }

  getUser(): User {
    return JSON.parse(window.localStorage.getItem(this.userKey));
  }

  saveUser(user: User) {
    if (user) {
      window.localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  removeUser() {
    window.localStorage.removeItem(this.userKey);
  }

  getCurrentMood(): Mood {
    return JSON.parse(window.localStorage.getItem(this.currentMoodKey));
  }

  saveCurrentMood(mood: Mood) {
    if (mood) {
      window.localStorage.setItem(this.currentMoodKey, JSON.stringify(mood));
    }
  }

  removeCurrentMood() {
    window.localStorage.removeItem(this.currentMoodKey);
  }

  getGradientState() {
    return window.localStorage.getItem(this.gradientStateKey);
  }

  saveGradientState(gradientState: number) {
    if (gradientState) {
      window.localStorage.setItem(this.gradientStateKey, gradientState.toString());
    }
  }

  removeGradientState() {
    window.localStorage.removeItem(this.gradientStateKey);
  }

  getLikertScale(): Array<String> {
    return JSON.parse(window.localStorage.getItem(this.likertScaleKey));
  }

  saveLikertScale(likertScale: Array<String>) {
    if (likertScale) {
      window.localStorage.setItem(this.likertScaleKey, JSON.stringify(likertScale));
    }
  }

  removeLikertScale() {
    window.localStorage.removeItem(this.likertScaleKey);
  }

  clear() {
    this.removeUserToken();
    this.removeUser();
    this.removeCurrentMood();
    this.removeGradientState();
    this.removeLikertScale();
  }
}
