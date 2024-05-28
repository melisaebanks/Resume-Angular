import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';
import { profile } from '../interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  profile : profile;

  constructor(private referenceService: ReferenceService) {
    this.profile = referenceService.getBio();
  }

  ngOnInit() {
    this.profile = this.referenceService.getBio();
  }

}
