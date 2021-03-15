import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SeaPhotosComponent} from './sea-photos.component';

describe('SeaPhotosComponent', () => {
  let component: SeaPhotosComponent;
  let fixture: ComponentFixture<SeaPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeaPhotosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
