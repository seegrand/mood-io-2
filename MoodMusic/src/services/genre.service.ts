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

  saveLikedGenres(liked: any) {
    // TODO: Send to the API (when it eventually works... )
    console.log(liked);
    // return this.http.post(this.BASE_URL + "/genres/like", liked)
    //                       .map((res: Response) => res.json())
    //                       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveDislikedGenres(disliked: any){
    // TODO: Send to the API (when it eventually works... )
    console.log(disliked);
    // return this.http.post(this.BASE_URL + "/genres/dislike", disliked)
    //                       .map((res: Response) => res.json())
    //                       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
