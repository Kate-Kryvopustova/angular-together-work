import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TMarker} from "../../../map-types/map-types";
import {MapService} from "../../../map-services/map.service";

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {

  @Input() marker: TMarker

  @Output() onActiveMarker = new EventEmitter
  constructor(public map: MapService) { }

  onDeleteMarker(id) {
    this.map.removeMarker(id)
    const marker = document.getElementById(id)
    marker.parentNode.removeChild(marker)
  }

  selectMarker(id) {
    this.onActiveMarker.emit(id)
  }

  ngOnInit(): void {
  }

}
