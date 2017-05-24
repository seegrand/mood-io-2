import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APIService } from './api.service';

/*
  Generated class for the Genre Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class AuthService extends APIService {

  constructor(http: Http) {
    super(http);
  }

  login(body: Object): Observable<any[]> {
    return this.http.post(this.BASE_URL + "/login", body)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  register(body: Object): Observable<any[]> {
    return this.http.post(this.BASE_URL + "/register", body)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  refreshToken(): Observable<any[]> {
    return this.http.get(this.BASE_URL + "/user/refresh")
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(): Observable<any[]> {
    return this.http.get(this.BASE_URL + "/logout")
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
