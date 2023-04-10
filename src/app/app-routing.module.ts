import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryPageComponent } from './discovery-page/discovery-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "home",
  },
  {
    path: "discovery",
    component: DiscoveryPageComponent,
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
