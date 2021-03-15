import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlowersPhotosComponent} from './flowers-photos.component';

describe('FlowersPhotosComponent', () => {
  let component: FlowersPhotosComponent;
  let fixture: ComponentFixture<FlowersPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowersPhotosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
