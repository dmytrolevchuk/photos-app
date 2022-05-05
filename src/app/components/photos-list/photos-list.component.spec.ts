import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

import { PhotosListComponent } from './photos-list.component';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;
  let dePhotos: DebugElement[];
  let deIcon: DebugElement;

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
    dePhotos = fixture.debugElement.queryAll(By.css('mat-grid-list img'));
    expect(dePhotos.length).toBe(10);
  })

  it('should not be loading icon at the start', () => {
    // const container = fixture.debugElement.query(By.css('mat-grid-list'));
    //
    // container.nativeElement.scrollLeft = 50;
    // expect(container.nativeElement.scrollLeft).toEqual(50);
    dePhotos = fixture.debugElement.queryAll(By.css('img[src="/assets/images/loading.png"]'));
    expect(dePhotos.length).toBe(0);
    // window.dispatchEvent(new Event("scroll"));
    // window.scrollTo(0 , 50);
  })

  it('should be loading icon after scrolling', () => {
    // const container = fixture.debugElement.query(By.css('mat-grid-list'));
    //
    // container.nativeElement.scrollLeft = 50;
    // expect(container.nativeElement.scrollLeft).toEqual(50);
    component.loadPhotos();
    fixture.detectChanges();
    deIcon = fixture.debugElement.query(By.css('img[src="/assets/images/loading.png"]'));
    expect(deIcon).toBeDefined();

  })

  it('should not be loading icon after timeout and be 20 photos', fakeAsync(() => {
    component.loadPhotos();
    fixture.detectChanges();
    tick(4000);
    fixture.detectChanges();
    deIcon = fixture.debugElement.query(By.css('img[src="/assets/images/loading.png"]'));
    expect(deIcon).toBeNull();
    dePhotos = fixture.debugElement.queryAll(By.css('mat-grid-list img'));
    expect(dePhotos.length).toBe(20);

  }))
});
