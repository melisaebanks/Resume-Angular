import { Component, EventEmitter, Output } from '@angular/core';
import { ShowResume } from '../interfaces';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() cvClicked = new EventEmitter<ShowResume>();

  onCvClickHandler(isClicked: ShowResume)
  {
     this.cvClicked.emit(isClicked);
  }
}
