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
  // var link = document.getElementById('ref-0');
  //link.style.display = 'block';
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    this.setSlideNav();

  }

  setSlideNav(){
    if((this.activeSlide+1)==1){

    }else{
      if((this.activeSlide+1)==2){

      }else{

      }

    }
  }

  previousSlide() {
    this.activeSlide = (this.activeSlide + this.slides.length - 1) % this.slides.length;
    this.setSlideNav();
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
