import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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
    return this.http
      .get(this.BASE_URL + '/genres')
      .toPromise()
      .then(res => {
        return res.json();
      });
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
