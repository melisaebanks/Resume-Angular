import { education } from './../interfaces';
import { ReferenceService } from './../reference.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : education[];

  constructor(private referenceService:ReferenceService) {
    this.education = this.referenceService.getEducation();
   }

  ngOnInit(): void {
    this.education = this.referenceService.getEducation();
  }

}
