import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GifHubService } from '../gif-hub.service';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit {

  @Output() favoriteEvent = new EventEmitter<any>()
  @Input() gifRef: any;
  @Input() favoritesRef!: any []

  constructor() { }

  ngOnInit(): void {
  }

  emitFavoriteEvent = (gif: any):void => {
    this.favoriteEvent.emit(gif)
  }

  checkFavorite = (gif:any):boolean => {
    return this.favoritesRef.some((item)=>{
      return item.id === gif.id;
    })
  }

}
