import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {
  @Input() term = '';

  photosList = [];
  totalLength: number;
  page = 1;
  hoverIndex: number;

  constructor(private photos: PhotosService) {
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photos.search(this.term).subscribe(photos => {
      this.photosList = photos;
      this.totalLength = photos.length;
    });
  }

  onMouseEnter(i): void {
    this.hoverIndex = i;
  }

  onMouseLeave(i): void {
    this.hoverIndex = null;
  }
}
