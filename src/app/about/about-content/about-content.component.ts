import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css']
})
export class AboutContentComponent implements OnInit {

  @Input() about:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
