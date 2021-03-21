import {Component, Input, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
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
    this.photos.search(this.term).subscribe(response => {
      this.photosList = response.results;
      this.totalLength = response.results.length;
    });
  }

  onMouseEnter(i) {
    this.hoverIndex = i;
  }

  onMouseLeave(i) {
    this.hoverIndex = null;
  }
}
