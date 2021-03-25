import {Component, OnInit} from '@angular/core';
import {TMarker} from "../../map-types/map-types";
import {MapService} from "../../map-services/map.service";
import blueIcon from '../../map-services/icons/blueIcon.png';
import redIcon from '../../map-services/icons/redIcon.png';


@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css']
})
export class MarkerListComponent implements OnInit {

  markerList: TMarker[]

  constructor(public map: MapService) {}

  ngOnInit(): void {
    this.getMarkerList()
  }

  getMarkerList() {
    this.map.getMarkerList().subscribe( (list: TMarker[]) => {
      this.markerList = list
    })
  }

  onActiveMarker(id: number) {
    this.markerList.forEach( marker => {
      const element = document.getElementById(`${marker.id}`)
      if ( marker.id === id) {
        this.map.setMarkerActive(id)
        element['src'] = redIcon
      } else {
        element['src'] = blueIcon
      }
    })
  }
}
