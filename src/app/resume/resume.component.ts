
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent{

  @Input() showCreative : boolean;
  @Output() closeResumeSection = new EventEmitter<boolean>();


  constructor() {
    this.showCreative = true;
  }

  close()
  {
    this.closeResumeSection.emit(true);
  }
}
