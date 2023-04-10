import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  headerCityData: CityModel = {
    name: "NEW ADVENTURE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
    imgURL: "",
  };

  cities: CityModel[] = [
    {
      name: "London",
      description: "London desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/kpSvBmOsRfUwWpdKslE2brOPL2Fu9_5mbcH6eAlrbk8/rs:fit:1200:600:1/g:ce/aHR0cHM6Ly9jZG4u/Y2l0eXdvbmRlcnMu/Y29tL21lZGlhLzEz/NjYxL3Jzei1sb25k/b24xLmpwZz9hbmNo/b3I9Y2VudGVyJm1v/ZGU9Y3JvcCZxdWFs/aXR5PTY1JndpZHRo/PTEyMDAmaGVpZ2h0/PTYwMA",
    },
    {
      name: "New York",
      description: "New York desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/wGhPp3NlG1MYJaRPsCcnmosKoyRVw6YBpzZp6WegJkY/rs:fit:1200:1200:1/g:ce/aHR0cDovL3RoZXdv/d3N0eWxlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNS8w/My9OZXctWW9yay1D/aXR5LU5ldy1Zb3Jr/LmpwZw",
    },
    {
      name: "Tokyo",
      description: "Tokyo desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/QSJBj5IvfzdWIS1iKZv4-YP8XrTzV9rCWc2qSjuzN34/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9ieWZv/b2QuYi1jZG4ubmV0/L2FwaS9wdWJsaWMv/YXNzZXRzLzkzOTIv/Y29udGVudC5wbmcu/anBn",
    },
    {
      name: "Brasov",
      description: "Brasov desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/7DqDfvShXh3G8U2cLsJXwgjX5cCHCMZdO7LTCGYZda0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/cnpQZWd0QXdReWZU/V1pjTnk4VE5nSGFF/OCZwaWQ9QXBp",
    },
    {
      name: "Sydney",
      description: "Sydney desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/hj_yXFKhnXwtMznB0krRzuIxuXEphl1ScbhwQV8MV2I/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/azlSam4tVWY2SFFM/ZmxHZzdtT3pBSGFF/OCZwaWQ9QXBp",
    },
    {
      name: "Paris",
      description: "Paris desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/MkMD3VSW3uhKl1yLDgfQX6wXnnWcigQukhmwOdwoZ28/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/UlFMY1JHaVAwa241/aVhxdjFGWlZnSGFF/byZwaWQ9QXBp",
    },
    {
      name: "Rome",
      description: "Rome desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/_ckFkBzbCVADUn2uF0n9GFtGbiCd7RlaL5EeK1KxfLM/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/UC16T0sxS1huVHkt/R3cxY1VQYTFBSGFF/NyZwaWQ9QXBp",
    },
    {
      name: "Cairo",
      description: "Cairo desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
                    "Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.Suspendisse rutrum velit et vulputate rutrum. Nulla placerat ut eros vel tempus.",
      imgURL: "https://imgs.search.brave.com/pKDuWStYtmKRowtl0iBMHkIDSeDED0TscxMXvP38Zwc/rs:fit:817:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/aGFBeHNRbkFzVmNO/cnBwQmpDSkZ3SGFF/VCZwaWQ9QXBp",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  visitedCityChanged(visitedCity: CityModel) {
    this.headerCityData = visitedCity;
  }
}
