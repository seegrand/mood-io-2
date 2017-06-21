import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {

  protected BASE_URL = 'https://mood-io.herokuapp.com';
  // protected BASE_URL = 'https://moodapi.herokuapp.com';

  constructor(protected http: Http) { }

  createAuthenticationRequestOptions(token: string): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + token);

    return new RequestOptions({ 'headers': headers });
  }

}
