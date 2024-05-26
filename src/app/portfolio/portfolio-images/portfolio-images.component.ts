import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-images',
  templateUrl: './portfolio-images.component.html',
  styleUrls: ['./portfolio-images.component.css']
})
export class PortfolioImagesComponent implements OnInit {

  @Output() portfolioEvent = new EventEmitter<string>();
  activeClass = "front";
  constructor() { }

  ngOnInit(): void {
  }

  selectedPortfolio(selected: string)
  {
    this.activeClass = selected;
    this.portfolioEvent.emit(selected);
  }

}
