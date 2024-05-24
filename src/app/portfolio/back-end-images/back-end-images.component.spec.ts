import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndImagesComponent } from './back-end-images.component';

describe('BackEndImagesComponent', () => {
  let component: BackEndImagesComponent;
  let fixture: ComponentFixture<BackEndImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
