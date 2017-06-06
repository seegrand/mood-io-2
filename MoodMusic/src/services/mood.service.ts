import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APIService } from './api.service';

import { Mood } from '../model/mood';

/*
  Generated class for the Mood Service.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on services and Angular 2 DI.
*/
@Injectable()
export class MoodService extends APIService {

  constructor(http: Http) {
    super(http);
  }

  getMoods() {
    return this.http.get(this.BASE_URL + "/moods")
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPaginatedMoods(moods: Mood[], pageSize: number) {
    var paginatedMoods = [];

    var page = [];
    var index = 0;

    for (var mood of moods) {
      if (index < pageSize) {
        page.push(mood);
        index++;
      } else {
        paginatedMoods.push(page);
        page = [];
        index = 0;
      }
    }

    paginatedMoods.push(page);

    return paginatedMoods;
  }

  getRecentMoods() {
    return this.http.get(this.BASE_URL + "/moods")
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // getStaticMoods() {
  //   return [{
  //     name: "Happy",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Sad",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Anxious",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Nervous",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Excited",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Energetic",
  //     placeholder: "http://placehold.it/85x85"
  //   } , {
  //     name: "Romance",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Depressed",
  //     placeholder: "http://placehold.it/85x85"
  //   }, {
  //     name: "Tired",
  //     placeholder: "http://placehold.it/85x85"
  //   }]
  // }

}
