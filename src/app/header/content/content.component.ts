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
  links : Links[] = [];

  constructor(private scroller : ViewportScroller, private service : ReferenceService) { }

  ngOnInit(): void {
    let profile = this.service.getBio();
      this.person = profile.name;
      this.description = profile.title;
      this.links = this.service.getSocialLinks();
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

  scrollToContact() {
    this.scroller.scrollToAnchor("contact");
  }

}
