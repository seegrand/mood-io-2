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
export class LikertService extends APIService {

  likertId = '';

  constructor(http: Http) {
    super(http);
  }

  addScale(name: string, description: string, maxValue: number, scaleItems: any[]): Observable<any[]> {
    var data = {
      'name': name,
      'description': description,
      'max_value': maxValue,
      'scaleItems': scaleItems
    };

    return this.http.post(this.BASE_URL + '/likerts/', data)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getScale(id: number): Observable<any[]> {
    return this.http.get(this.BASE_URL + '/likerts/' + id + '/scale')
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getResponsesFromUser(id: number, userId: number): Observable<any[]> {
    return this.http.get(this.BASE_URL + '/likerts/' + id + '/' + userId)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  sendResponse(id: number, userId: number, songId: number, moodId: number): Observable<any[]> {
    var data = {
      'id': id,
      'userId': userId,
      'songId': songId,
      'moodId': moodId
    };

    return this.http.post(this.BASE_URL + '/likerts/' + id, data)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
