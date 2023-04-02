import { Component, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/models/ServiceModel';

@Component({
  selector: 'app-service-panel',
  templateUrl: './service-panel.component.html',
  styleUrls: ['./service-panel.component.scss']
})
export class ServicePanelComponent implements OnInit {

  availableServices: ServiceModel[] = [
    {
      name: "Travel",
      articleTitle: "Article title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus. ",
    },
    {
      name: "Travel Arrangements",
      articleTitle: "Article title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus. ",
    },
    {
      name: "Our Professional Guide",
      articleTitle: "Article title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus. ",
    },
    {
      name: "Activities",
      articleTitle: "Article title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus. ",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
