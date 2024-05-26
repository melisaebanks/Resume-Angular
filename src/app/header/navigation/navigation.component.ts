import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Links, ShowResume } from '../../links';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit
{

  @Output() cv = new EventEmitter<ShowResume>();

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClicked(){
    let publish : ShowResume =
    {
      showResume:true,
      publisher:"creative"
    }
    console.log("Child navigation clicked");
    this.cv.emit(publish);
  }

  links:Links[] =
  [
    {
        url: "about",
        name:"About"
    },
    {
        url: "skills",
        name:"Skills"
    },
    {
        url: "portfolio",
        name:"Portfolio"
    },
    {
        url: "experience",
        name:"Experience"
    },
    {
        url: "contact",
        name:"Contact"
    }
  ]

  OnScrollTo(anchor:string){
    this.scroller.scrollToAnchor(anchor);
  }

}
