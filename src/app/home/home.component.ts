import { Component, OnInit } from '@angular/core';
import { GifHubService } from '../gif-hub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gifData: any;
  favorites: any[]=[];

  constructor(private gifService: GifHubService) { }

  ngOnInit(): void {
    this.getAndSetFavorites()
    this.getTrending()
  }

  getTrending(): void {
    this.gifService.getTrendingGifs().subscribe((response: any)=>{
      this.gifData = response
    })
  }

  onSubmit = (searchTerm: string):void => {
    this.gifService.searchGifs(searchTerm).subscribe((response: any)=>{
      this.gifData = response
    })
  }

  onFavorite = (gif: any):void => {
    this.gifService.addFavorites(gif)
    this.getAndSetFavorites()
  }

  getAndSetFavorites = (): void => {
    this.favorites = this.gifService.getFavorites()
  }

}
