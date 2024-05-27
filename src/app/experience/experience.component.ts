import { experience } from '../interfaces';
import { ReferenceService } from './../reference.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  work:experience[];

  constructor(private referenceService:ReferenceService) {
    this.work = this.referenceService.getExperience();
   }

  ngOnInit(): void {
    this.work = this.referenceService.getExperience();
  }

}
