import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityModel } from 'src/app/models/CityModel';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  @Input() selectedCity!: CityModel;

  constructor(private router: Router, private cityService: CityService) { }

  ngOnInit(): void {
  }

  navigateToDiscoveryPage() {
    this.cityService.setSelectedCity(this.selectedCity);
    this.router.navigateByUrl("/discovery");
  }

}
