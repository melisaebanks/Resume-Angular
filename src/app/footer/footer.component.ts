import { Component, OnInit } from '@angular/core';
import { Links } from '../interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links : Links[] =
  [
    {
      url: "https://www.facebook.com",
      name:"facebook",
      class: ["fa-brands", "fa-facebook-f"]
    },
    {
      url: "https://www.twitter.com",
      name:"twitter",
      class: ["fa-brands", "fa-twitter"]
    },
    {
      url: "https://www.instagram.com",
      name:"instagram",
      class: ["fa-brands", "fa-instagram"]
    },
    {
      url: "https://www.linkedin.com",
      name:"linkedin",
      class: ["fa-brands", "fa-linkedin-in"]
    }
  ];

}
