import { Injectable } from '@angular/core';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  userTokenKey: string = 'userToken';
  userKey: string = 'user';

  gradientStateKey: string = 'gradientState';

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

  getUser() {
    return JSON.parse(window.localStorage.getItem(this.userKey));
  }

  saveUser(user: Object) {
    if (user) {
      window.localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  removeUser() {
    window.localStorage.removeItem(this.userKey);
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

  clear() {
    this.removeUserToken();
    this.removeUser();
    this.removeGradientState();
  }
}
