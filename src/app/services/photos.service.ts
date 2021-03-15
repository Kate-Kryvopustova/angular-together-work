import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
  }

  public search(term: string): any {
    return this.http.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: '30',
        orientation: 'landscape'
      },
      headers: {
        Authorization: 'Client-ID nO1myPFj1GoMC5ZE5txbOrbHIoPdDz1lalgArTvpDmI'
      }
    });
  }
}
