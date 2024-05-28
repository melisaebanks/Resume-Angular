import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})

export class ReferenceComponent implements OnInit, OnDestroy {

  slides: any[]; // Array to hold data for each slide
  activeSlide = 0;
  intervalId: any;

  constructor(private referenceService: ReferenceService) {
    this.slides = this.referenceService.getReferences();
  }

  ngOnInit(): void {
    this.slides = this.referenceService.getReferences();
   this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.activeSlide = (this.activeSlide + this.slides.length - 1) % this.slides.length;
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopSlideShow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
