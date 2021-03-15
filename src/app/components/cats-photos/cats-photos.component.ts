import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'app-cats-photos',
  templateUrl: './cats-photos.component.html',
  styleUrls: ['./cats-photos.component.css']
})

export class CatsPhotosComponent implements OnInit {
  term = 'cats';
  catsList = [];
  totalLength: number;
  page = 1;

  constructor(private photos: PhotosService) {
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photos.search(this.term).subscribe(response => {
      console.log(response);
      this.catsList = response.results;
      this.totalLength = response.results.length;
    });
  }
}
