import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  login(username: string, password: string): Observable<any> {
    var data = {
      'username': username,
      'password': password
    };

    return this.http.post(this.BASE_URL + "/auth/login", data)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  register(username: string, password: string): Observable<any> {
    var data = {
      'username': username,
      'password': password
    };

    return this.http.post(this.BASE_URL + "/auth/register", data)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  refreshToken(token: string): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers});

    console.log(options);

    return this.http.post(this.BASE_URL + "/auth/refresh", null, options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getLoggedInUser(token: string): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers});

    console.log(options);

    return this.http.get(this.BASE_URL + "/users", options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(token: string): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers});

    return this.http.post(this.BASE_URL + "/auth/logout", null, options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
