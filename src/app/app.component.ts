import { Component } from '@angular/core';
import { ShowResume } from './links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Resume';

  showResume = false;
  showCreative = true;

  onCvClickedHandler(isClicked:ShowResume)
  {
    console.log("base parent: " + isClicked.showResume);
    this.showResume = isClicked.showResume;
    if(isClicked.publisher === 'creative'){
        this.showCreative = true;
      }
      else{
        this.showCreative = false;
      }
  }

  onClose(isCliked:boolean)
  {
    this.showResume = false;
  }
}
