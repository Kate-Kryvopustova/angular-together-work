import {ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {PhotosComponent} from './photos.component';

describe('CatsPhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [ HttpClientModule ],
      providers: [HttpClient]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
