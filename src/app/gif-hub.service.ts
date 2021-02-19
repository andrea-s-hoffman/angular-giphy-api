import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifHubService {

  apiKey: string="j3Lu8GhorG6evLwdMzCci2IZVVT3UyJ4";
  giphyTrendingUrl: string="https://api.giphy.com/v1/gifs/trending";
  giphySearchUrl: string="https://api.giphy.com/v1/gifs/search";
  favorites: any[] = []

  constructor(private http: HttpClient) { }

  getTrendingGifs = ():any => {
    return this.http.get(this.giphyTrendingUrl, {
      params: {
        api_key: this.apiKey
      }
    })
  }

  searchGifs = (searchTerm: string):any => {
    return this.http.get(this.giphySearchUrl, {
      params: {
        api_key: this.apiKey,
        q: searchTerm
      }
    })
  }

  addFavorites = (gif: any):void => {
    this.favorites.push(gif)
    console.log(this.favorites);
    
  }

  getFavorites = ():any[] => {
    return this.favorites
  }
}
