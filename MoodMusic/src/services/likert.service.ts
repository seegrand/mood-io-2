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

  likertId = 1;

  constructor(http: Http) {
    super(http);
  }

  addScale(name: string, description: string, maxValue: number, scaleItems: any[]): Observable<any> {
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

  getLikert(token: string, id?: number): Observable<any> {
    var options = super.createAuthenticationRequestOptions(token);

    return this.http.get(this.BASE_URL + '/likerts/' + this.getLikertId(id), options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getScale(token: string, id?: number): Observable<any> {
    var options = super.createAuthenticationRequestOptions(token);

    return this.http.get(this.BASE_URL + '/likerts/' + this.getLikertId(id) + '/scale', options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  sendResponse(token: string, songId: number, moodId: number, score: string, id?: number): Observable<any> {
    var options = super.createAuthenticationRequestOptions(token);

    var data = {
      'songId': songId,
      'moodId': moodId,
      'scaleScore': score
    };

    return this.http.post(this.BASE_URL + '/likerts/' + this.getLikertId(id), data, options)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getLikertId(id: number): number {
    if (id) {
      return id;
    } else {
      return this.likertId;
    }
  }
}
