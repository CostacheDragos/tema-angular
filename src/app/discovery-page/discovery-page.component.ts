import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { CityModel } from '../models/CityModel';

@Component({
  selector: 'app-discovery-page',
  templateUrl: './discovery-page.component.html',
  styleUrls: ['./discovery-page.component.scss']
})
export class DiscoveryPageComponent implements OnInit {

  city! : CityModel;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.city = this.cityService.selectedCity;
  }

}
