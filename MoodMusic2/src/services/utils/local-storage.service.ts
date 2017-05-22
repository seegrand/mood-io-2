import { Injectable } from '@angular/core';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class LocalStorageService {

  userKey: string = 'user';

  constructor() { }

  getUser() {
    return JSON.parse(window.localStorage.getItem(this.userKey));
  }

  saveUser(user: Object) {
    if (user)
      window.localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  removeUser() {
    window.localStorage.removeItem(this.userKey);
  }
}
