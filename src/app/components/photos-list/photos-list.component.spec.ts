import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

import { PhotosListComponent } from './photos-list.component';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;
  let de: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 10 images at the starting point', () => {
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('img'));
    expect(de.length).toBe(10);
  })
});
