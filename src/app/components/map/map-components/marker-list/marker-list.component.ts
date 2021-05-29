import { Component, OnInit } from '@angular/core';
import { TMarker } from '../../map-types/map-interfaces';
import { MapService } from '../../map-services/map.service';


@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: [ './marker-list.component.css' ]
})
export class MarkerListComponent implements OnInit {

  markerList: TMarker[];

  constructor(public map: MapService) {
  }

  ngOnInit(): void {
    this.getMarkerList();
  }

  getMarkerList() {
    this.map.getMarkerList().subscribe((list: TMarker[]) => {
      this.markerList = list;
    });
  }

  onActiveMarker(id: number) {
    this.map.setIcon(id);
  }
}
