import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MapService} from "../../map-services/map.service";
import {TMarker} from "../../map-types/map-types";
import redIcon from "../../map-services/icons/redIcon.png";
import blueIcon from "../../map-services/icons/blueIcon.png";

@Component({
  selector: 'app-map-field',
  templateUrl: './map-field.component.html',
  styleUrls: ['./map-field.component.css']
})
export class MapFieldComponent implements OnInit {
  markerList: TMarker[];
  isMarkerForm = false;

  @Output() setMarkerList = new EventEmitter();

  constructor(public map: MapService) {}

  getList() {
    this.map.getMarkerList().subscribe((list: TMarker[]) => {
      this.markerList = list;
    });
  }

  showMapPopUpEvent() {
    this.map.mapField.on('contextmenu', e => {
      if (!this.isMarkerForm) {
        let { lng, lat } = e.lngLat;
        this.map.setLatLng(lat, lng);
        this.isMarkerForm = true;
      }
    });
  }

  selectIconEvent() {
    this.map.mapField.on('click', e => {
      const id = Number(e.originalEvent.target['id']);

      this.markerList.forEach(marker => {
        const element = document.getElementById(`${marker.id}`);
        if (id) {
          if (marker.id === id) {
            this.map.setMarkerActive(id);
            element['src'] = redIcon;
          } else {
            element['src'] = blueIcon;
          }
        } else {
          element['src'] = blueIcon;
          this.map.setMarkerActive(null);
        }
      });
    });
  }

  ngOnInit() {
    this.map.buildMap();
    this.getList();
    this.showMapPopUpEvent();
    this.selectIconEvent();
  }

  setList(event) {
    this.markerList = event;
    this.setMarkerList.emit(this.markerList);
  }

  onCloseForm(event) {
    this.isMarkerForm = event;
  }

  changeStyle(layerId: string) {
    this.map.mapField.setStyle(`mapbox://styles/mapbox/${layerId}`);
  }
}
