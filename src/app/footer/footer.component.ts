import { Component, OnInit } from '@angular/core';
import { Links } from '../interfaces';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links : Links[] = [];

  constructor( private service:ReferenceService) {}

  ngOnInit(): void {
    this.links = this.service.getSocialLinks();
  }



}
