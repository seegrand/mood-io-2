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
export class GenreService extends APIService {

  constructor(http: Http) {
    super(http);
  }

  getGenres() {
    return this.http.get(this.BASE_URL + "/genres")
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // getStaticGenres() {
  //   return [{
  //     name: "Dance",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Trance",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Pop",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Rock",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Hip Hop",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "House",
  //     placeholder: "http://placehold.it/85x85"
  //   } , {
  //     name: "Rap",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Classical",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Punk",
  //     placeholder: "http://placehold.it/85x85"
  //   }]
  // }

}
