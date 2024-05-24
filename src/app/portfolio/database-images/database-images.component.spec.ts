import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseImagesComponent } from './database-images.component';

describe('DatabaseImagesComponent', () => {
  let component: DatabaseImagesComponent;
  let fixture: ComponentFixture<DatabaseImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
