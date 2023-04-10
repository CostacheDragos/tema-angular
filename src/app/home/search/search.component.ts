import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() visitCityEmitter: EventEmitter<CityModel> = new EventEmitter<CityModel>();

  @Input() cities! : CityModel[];

  searchedCityName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitSearch() {
    this.visitCityEmitter.emit(this.cities.find(city => city.name === this.searchedCityName));
  }
}
