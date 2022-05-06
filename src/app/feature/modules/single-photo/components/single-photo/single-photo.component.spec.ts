import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SinglePhotoComponent } from './single-photo.component';
import { ActivatedRoute } from '@angular/router';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;
  let deIcon: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePhotoComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 345,
              },
            },
          },
        }
      ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be photo with id = 345 from route', () => {
    deIcon = fixture.debugElement.query(By.css('img[src*="id/345/"]'));
    expect(deIcon).toBeTruthy();
  });

});
