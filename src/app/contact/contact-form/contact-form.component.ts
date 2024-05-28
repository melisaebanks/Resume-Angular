import { ReferenceService } from './../../reference.service';
import { Component, OnInit} from '@angular/core';
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
