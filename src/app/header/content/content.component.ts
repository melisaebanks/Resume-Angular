import { ReferenceService } from './../../reference.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Links, ShowResume } from '../../interfaces';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit
{

  @Output() cv = new EventEmitter<ShowResume>();

  person = "";
  description = "";

  constructor(private scroller : ViewportScroller, private service : ReferenceService) { }

  ngOnInit(): void {
    let profile = this.service.getBio();
      this.person = profile.name;
      this.description = profile.title;
  }

  onClicked(){

    let publish : ShowResume =
    {
      showResume:true,
      publisher:"print"
    }
    console.log("Child content clicked");
    this.cv.emit(publish);
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

  scrollToContact() {
    this.scroller.scrollToAnchor("contact");
  }

}
