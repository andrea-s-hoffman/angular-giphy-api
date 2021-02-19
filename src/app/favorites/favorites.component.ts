import { Component, OnInit, Output } from '@angular/core';
import { GifHubService } from '../gif-hub.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  // @Output new

  favorites: any[] = [];

  constructor(private yoyoyo: GifHubService) { }

  ngOnInit(): void {
    this.getAndSetFavorites();
  }

  getAndSetFavorites = ():void => {
    this.favorites = this.yoyoyo.getFavorites()
  }

}
