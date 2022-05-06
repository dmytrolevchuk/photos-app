import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { FavoritesListComponent } from './favorites-list.component';
import { PhotoStoreService } from '../../shared/services/photo-store.service';

describe('FavoritesListComponent', () => {
  let component: FavoritesListComponent;
  let fixture: ComponentFixture<FavoritesListComponent>;
  let photoStoreService: PhotoStoreService;
  let photoStoreServiceStub: Partial<PhotoStoreService>;
  let dePhotos: DebugElement[];

  beforeEach(async () => {
    photoStoreServiceStub = {
      getDataFromLocalStorage() {
        return [1, 2, 3]
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ FavoritesListComponent ],
      providers: [{ provide: PhotoStoreService, useValue: photoStoreServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListComponent);
    component = fixture.componentInstance;
    photoStoreService = fixture.debugElement.injector.get(PhotoStoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create favorite list of three items', () => {
    dePhotos = fixture.debugElement.queryAll(By.css('mat-grid-list img'));
    expect(dePhotos.length).toBe(3);
  });
});
