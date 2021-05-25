import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { TMarker } from '../map-types/map-interfaces';
import { Subject } from 'rxjs';
import redIcon from 'src/assets/images/map-icons/redIcon.png';
import blueIcon from 'src/assets/images/map-icons/blueIcon.png';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapboxgl = mapboxgl;
  mapField!: mapboxgl.Map;

  // default values
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 49.442;
  lng = 32.06;
  markerName = '';
  markerDes = '';
  zoom = 15;
  markerList: TMarker[] = [];
  markerList$ = new Subject();

  constructor() {
    this.mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  addMarker(marker: TMarker) {
    this.markerList = [ ...this.markerList, marker ];
    this.markerList$.next(this.markerList);
  }

  removeMarker(id: number) {
    this.markerList = this.markerList.filter((marker: TMarker) => {
      if (id !== marker.id) {
        return marker;
      }
    });
    this.markerList$.next(this.markerList);
  }

  getMarkerList() {
    return this.markerList$.asObservable();
  }

  setIcon(id?) {
    this.markerList.forEach(marker => {
      const element: any = document.getElementById(`${marker.id}`);
      if (id) {
        if (marker.id === id) {
          this.setMarkerActive(id);
          element.src = redIcon;
        } else {
          element.src = blueIcon;
        }
      } else {
        element.src = blueIcon;
        this.setMarkerActive(null);
      }
    });
  }

  setLatLng(lat: number, lng: number) {
    this.lat = Math.floor(lat * 10000) / 10000;
    this.lng = Math.floor(lng * 10000) / 10000;
  }

  setMarkerName(newName: string) {
    this.markerName = newName;
  }

  setMarkerDes(newDescription: string) {
    this.markerDes = newDescription;
  }

  setCleanMarkerFields() {
    this.markerName = '';
    this.markerDes = '';
  }

  setMarkerActive(id?) {
    this.markerList = this.markerList.map(marker => {
      if (id) {
        marker.active = id === marker.id;
      } else {
        marker.active = false;
      }
      return marker;
    });
    this.markerList$.next(this.markerList);
  }

  buildMap() {
    this.mapField = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [ this.lng, this.lat ]
    });
    this.mapField.addControl(new mapboxgl.NavigationControl());
  }
}
