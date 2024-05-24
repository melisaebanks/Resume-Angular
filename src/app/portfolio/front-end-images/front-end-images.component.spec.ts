import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndImagesComponent } from './front-end-images.component';

describe('FrontEndImagesComponent', () => {
  let component: FrontEndImagesComponent;
  let fixture: ComponentFixture<FrontEndImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
