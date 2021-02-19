import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitSearchTerm = (form: NgForm) => {
    console.log(form);
    this.searchEvent.emit(form.form.value.searchTerm)
  }

}
