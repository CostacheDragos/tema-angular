import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-most-popular-panel',
  templateUrl: './most-popular-panel.component.html',
  styleUrls: ['./most-popular-panel.component.scss']
})
export class MostPopularPanelComponent implements OnInit {

  @Output() visitCityEmitter: EventEmitter<CityModel> = new EventEmitter<CityModel>();

  @Input() cities!: CityModel[];

  currentPageCities!: CityModel[];
  firstCityIndexOfCurrentPage: number = 0;
  pageLength: number = 6;

  constructor() { }

  ngOnInit(): void {
    this.currentPageCities = this.cities.slice(this.firstCityIndexOfCurrentPage, this.pageLength);
  }

  onPrevPageClicked() {
    if(this.firstCityIndexOfCurrentPage - this.pageLength < 0)
      return;

    const lastCityIndexOfCurrentPage = this.firstCityIndexOfCurrentPage;
    this.firstCityIndexOfCurrentPage -= this.pageLength;

    this.currentPageCities = this.cities.slice(this.firstCityIndexOfCurrentPage, lastCityIndexOfCurrentPage);
  }

  onNextPageClicked() {
    if(this.firstCityIndexOfCurrentPage + this.pageLength > this.cities.length)
      return;

    this.firstCityIndexOfCurrentPage += this.pageLength;
    let lastCityIndexOfCurrentPage;

    if(this.firstCityIndexOfCurrentPage + this.pageLength < this.cities.length)
      lastCityIndexOfCurrentPage = this.firstCityIndexOfCurrentPage + this.pageLength;
    else
      lastCityIndexOfCurrentPage = this.cities.length;

    this.currentPageCities = this.cities.slice(this.firstCityIndexOfCurrentPage, lastCityIndexOfCurrentPage);
  }

  emitVisitCity(emitedCity: CityModel) {
    this.visitCityEmitter.emit(emitedCity);
  }
}
