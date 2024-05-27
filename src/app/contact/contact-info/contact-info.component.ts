import { profile } from 'src/app/interfaces';
import { ReferenceService } from './../../reference.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  profile: profile;

  constructor(private referenceService : ReferenceService) {
     this.profile = this.referenceService.getBio();
  }

  ngOnInit(): void {
    this.profile = this.referenceService.getBio();
  }

}
