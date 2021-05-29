import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapService } from '../../map-services/map.service';
import { TMapEvent, TMarker } from '../../map-types/map-interfaces';

@Component({
  selector: 'app-map-field',
  templateUrl: './map-field.component.html',
  styleUrls: [ './map-field.component.css' ]
})
export class MapFieldComponent implements OnInit {
  markerList: TMarker[];
  isMarkerForm = false;

  @Output() setMarkerList = new EventEmitter();

  constructor(public map: MapService) {}

  getList(): void {
    this.map.getMarkerList().subscribe((list: TMarker[]) => {
      this.markerList = list;
    });
  }

  showMapPopUpEvent(): void {
    this.map.mapField.on('contextmenu', e => {
      if (!this.isMarkerForm) {
        const { lng, lat } = e.lngLat;
        this.map.setLatLng(lat, lng);
        this.isMarkerForm = true;
      }
    });
  }

  selectIconEvent(): void {
    this.map.mapField.on('click', (e: TMapEvent) => {
      const id = Number(e.originalEvent.target.id);
      if (!this.markerList) {
        return;
      }
      this.map.setIcon(id);
    });
  }

  ngOnInit(): void {
    this.map.buildMap();
    this.getList();
    this.showMapPopUpEvent();
    this.selectIconEvent();
  }

  setList(event): void {
    this.markerList = event;
    this.setMarkerList.emit(this.markerList);
  }

  onCloseForm(event): void {
    this.isMarkerForm = event;
  }

  changeStyle(layerId: string): void {
    this.map.mapField.setStyle(`mapbox://styles/mapbox/${layerId}`);
  }
}
