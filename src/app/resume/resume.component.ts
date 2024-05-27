
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent{

  @Input() showCreative : boolean;
  @Output() closeResumeSection = new EventEmitter<boolean>();


  constructor(private service : ReferenceService) {
    this.showCreative = true;
  }

  close()
  {
    this.closeResumeSection.emit(true);
  }

  print()
  {
    this.service.postPrint();
  }
}
