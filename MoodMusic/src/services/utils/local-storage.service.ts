import { Injectable } from '@angular/core';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  userTokenKey: string = 'userToken';

  constructor() { }

  getUserToken() {
    return window.localStorage.getItem(this.userTokenKey);
  }

  saveUserToken(userToken: string) {
    if (userToken)
      window.localStorage.setItem(this.userTokenKey, userToken);
  }

  removeUserToken() {
    window.localStorage.removeItem(this.userTokenKey);
  }
}
