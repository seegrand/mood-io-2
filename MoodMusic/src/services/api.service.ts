import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {

  // private BASE_URL = 'https://mood-io.herokuapp.com';
  protected BASE_URL = 'https://moodapi.herokuapp.com';

  constructor(protected http: Http) { }

}
