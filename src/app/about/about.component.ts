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
  info:any;

  constructor(private referenceService: ReferenceService) {
    this.profile = referenceService.getBio();
  }

  ngOnInit() {
    this.profile = this.referenceService.getBio();
    this.info = {
      age: this.profile.age,
      email:this.profile.email,
      phone:this.profile.phone,
      address:this.profile.address,
      language: this.profile.language,
      description: this.profile.description
    };
  }

}
