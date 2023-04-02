import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GreetingComponent } from './greeting/greeting.component';
import { ServicePanelComponent } from './service-panel/service-panel.component';


@NgModule({
  declarations: [
    GreetingComponent,
    ServicePanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
