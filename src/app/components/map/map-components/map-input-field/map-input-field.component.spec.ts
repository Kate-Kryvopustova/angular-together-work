import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInputFieldComponent } from './map-input-field.component';

describe('MapInputFieldComponent', () => {
  let component: MapInputFieldComponent;
  let fixture: ComponentFixture<MapInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
