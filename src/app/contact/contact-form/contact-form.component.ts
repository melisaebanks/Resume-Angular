import { ReferenceService } from './../../reference.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { contact } from 'src/app/interfaces';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  user: contact;

  constructor(private referenceService: ReferenceService) {
    this.user = {
     name: "",
     email: "",
     message:"",
     subject:""
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.referenceService.postContact(this.user)
   }

}
