import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  selectedView : string;

  constructor() {
    this.selectedView = 'front';
  }

  ngOnInit(): void {
  }

  onSelected(view:string)
  {
    this.selectedView = view;
  }
}
