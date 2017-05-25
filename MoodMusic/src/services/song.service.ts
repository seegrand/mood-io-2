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
export class SongService extends APIService {

  constructor(http: Http) {
    super(http);
  }

  getSongs() {
    return this.http.get(this.BASE_URL + "/songs")
                          .map((res:Response) => res.json().message)
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
