import { Injectable } from '@angular/core';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  userTokenKey: string = 'userToken';
  gradientStateKey: string = 'gradientState';

  constructor() { }

  getUserToken() {
    return window.localStorage.getItem(this.userTokenKey);
  }

  saveUserToken(token: any) {
    if (token)
      window.localStorage.setItem(this.userTokenKey, token);
  }

  removeUserToken() {
    window.localStorage.removeItem(this.userTokenKey);
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
}
