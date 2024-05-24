import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFancyComponent } from './resume-fancy.component';

describe('ResumeFancyComponent', () => {
  let component: ResumeFancyComponent;
  let fixture: ComponentFixture<ResumeFancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeFancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
