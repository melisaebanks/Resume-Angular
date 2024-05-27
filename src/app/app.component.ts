import { Component, OnInit } from '@angular/core';
import { ShowResume } from './interfaces';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private scroller: ViewportScroller) {
}

ngOnInit(): void {

}

  title = 'Resume';

  showResume = false;
  showCreative = true;

  onCvClickedHandler(isClicked:ShowResume)
  {
    console.log("base parent: " + isClicked.publisher);
    this.showResume = isClicked.showResume;
    if(isClicked.publisher === 'creative'){
        this.showCreative = true;
      }
      else{
        this.showCreative = false;
      }

      setTimeout(() => {
        this.scrollToResume();
      }, 3);

  }

  onClose(isCliked:boolean)
  {
    this.showResume = false;
  }

  scrollToResume()
  {
    this.scroller.scrollToAnchor("resume");
  }
}
