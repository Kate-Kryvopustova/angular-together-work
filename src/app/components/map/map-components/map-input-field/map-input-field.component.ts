import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { TMarker } from '../../map-types/map-interfaces';
import { MapService } from '../../map-services/map.service';
import blueIcon from 'src/assets/images/map-icons/blueIcon.png';

@Component({
  selector: 'app-map-input-field',
  templateUrl: './map-input-field.component.html',
  styleUrls: [ './map-input-field.component.css' ]
})
export class MapInputFieldComponent implements OnInit {
  markerList: TMarker[];
  @Input() isMarkerForm;

  @Output() closeForm = new EventEmitter();
  @Output() setMarkerList = new EventEmitter();

  lat: number;
  lng: number;
  markerName: string;
  markerDes: string;

  constructor(public map: MapService) {
  }

  ngOnInit(): void {
    this.lat = this.map.lat;
    this.lng = this.map.lng;
    this.markerName = this.map.markerName;
    this.markerDes = this.map.markerDes;
  }

  onClickCloseForm(): void {
    this.isMarkerForm = false;
    this.closeForm.emit(this.isMarkerForm);
  }

  onChangeCoords(lat, lng): void {
    lat = lat ? Number(lat) : this.map.lat;
    lng = lng ? Number(lng) : this.map.lng;
    this.map.setLatLng(lat, lng);
  }

  onChangeMarkerName(newName: string): void {
    this.map.setMarkerName(newName);
  }

  onChangeMarkerDes(newDescription: string): void {
    this.map.setMarkerDes(newDescription);
  }

  onAddMarker(event, markerNameEl, markerDescription): void {
    event.preventDefault();
    const id = Date.now();
    const { lng, lat, markerName, markerDes } = this.map;
    if (!markerName) {
      markerNameEl.classList.add('field-error-border');
    }
    if (!markerDes) {
      markerDescription.classList.add('field-error-border');
    }
    if (markerName && markerDes) {
      this.addPoint(lng, lat, id);
      this.isMarkerForm = false;
      this.closeForm.emit(this.isMarkerForm);
      const newMarker: TMarker = {
        id,
        lng,
        lat,
        name: markerName,
        description: markerDes,
        active: false
      };
      this.map.addMarker(newMarker);
      this.map.setCleanMarkerFields();
    }
  }

  addPoint(lng: number, lat: number, id: number): void {
    const icon = new Image(30, 45);
    icon.id = `${id}`;
    icon.src = blueIcon;

    new mapboxgl.Marker(icon, {
      draggable: true
    }).setLngLat([ lng, lat ])
      .addTo(this.map.mapField);
  }
}
