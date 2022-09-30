import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FetchPhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    console.log('photo fetched');
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random/',
      {
        headers: {
          Authorization:
            'Client-ID EWJVYmvIm4THeaF8sjIhAaWPJEjfZAtjipZ-mLvsvZk',
        },
      }
    );
  }
}
