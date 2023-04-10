import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { GreetingComponent } from './greeting/greeting.component';
import { ServicePanelComponent } from './service-panel/service-panel.component';
import { MostPopularPanelComponent } from './most-popular-panel/most-popular-panel.component';
import { CityCardComponent } from './city-card/city-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    GreetingComponent,
    ServicePanelComponent,
    MostPopularPanelComponent,
    CityCardComponent,
    HomePageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
