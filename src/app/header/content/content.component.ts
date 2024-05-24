import { Component, EventEmitter, Output } from '@angular/core';
import { Links, ShowResume } from '../../links';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent
{

  @Output() cv = new EventEmitter<ShowResume>();

  person = "Melisa Ebanks-Johnson";
  description = "Software Architect, Web and Application Developer.";

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
      url: "https://www.google.com",
      name:"google",
      class: ["fa-brands", "fa-google"]
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
  ]
}