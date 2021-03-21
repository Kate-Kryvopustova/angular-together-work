import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from "rxjs/operators";

import {Photos} from "../interfaces/photos.interface";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  public search(term: string) {
    return this.http.get<Photos>('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: '30',
        orientation: 'landscape'
      },
      headers: {
        Authorization: 'Client-ID nO1myPFj1GoMC5ZE5txbOrbHIoPdDz1lalgArTvpDmI'
      }
    }).pipe(pluck('results'))
  }
}
