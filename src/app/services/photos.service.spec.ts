import {TestBed} from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {PhotosService} from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
