import { Component, EventEmitter, Output } from '@angular/core';
import { ShowResume } from '../links';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() cvClicked = new EventEmitter<ShowResume>();

  onCvClickHandler(isClicked: ShowResume)
  {
    console.log("Parent header clicked");
     this.cvClicked.emit(isClicked);
  }
}
