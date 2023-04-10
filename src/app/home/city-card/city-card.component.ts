import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city! : CityModel;

  @Output() visitCityEmitter: EventEmitter<CityModel> = new EventEmitter<CityModel>();

  constructor() { }

  ngOnInit(): void {
  }

  emitCity() {
    this.visitCityEmitter.emit(this.city);
  }

}
