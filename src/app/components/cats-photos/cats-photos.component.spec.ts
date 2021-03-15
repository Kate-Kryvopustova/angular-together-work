import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CatsPhotosComponent} from './cats-photos.component';

describe('CatsPhotosComponent', () => {
  let component: CatsPhotosComponent;
  let fixture: ComponentFixture<CatsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsPhotosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
