import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  condition: boolean = false;
  conditionPopup: boolean = false;

  popupCall() {
    this.conditionPopup = true;
  }
  closePopup(){
    this.conditionPopup = false;
  }

  toggle() {
    this.condition = !this.condition;
  }

  constructor() {}

  @ViewChild('graphDescription', { read: ElementRef })
  graphDescription: ElementRef;

  colorArr = ['rgba(54, 162, 235, 0.2)'];

  ngOnInit(): void {
    this.getFunc('line');
  }

  // currentFunc = this.lineTypeClick();

  arr = [];

  addValue(num) {
    this.arr.push(num);
    this.colorArr.push(this.makeRandomColor());
    this.addDesription();
    if (this.arr.length > 1) {
      this.ngOnInit();
      this.condition = true;
      // this.currentFunc;
    }
  }

  lineTypeClick() {
    this.getFunc('line');
    // this.currentFunc = this.lineTypeClick();
  }
  radarTypeClick() {
    this.getFunc('radar');
    // this.currentFunc = this.radarTypeClick();
  }
  barTypeClick() {
    this.getFunc('bar');
    // this.currentFunc = this.barTypeClick();
  }
  pieTypeClick() {
    this.getFunc('pie');
    // this.currentFunc = this.pieTypeClick();
  }

  makeRandomColor() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }

  getFunc(typeOfGraph) {
    var myChart = new Chart('myChart', {
      type: typeOfGraph,
      data: {
        labels: this.arr,
        datasets: [
          {
            label: 'diagramma',
            data: this.arr,
            backgroundColor: this.colorArr,
          },
        ],
      },
    });
  }

  addDesription() {
    this.graphDescription.nativeElement.textContent =
      'Diagram of [' + this.arr + '] values.';
  }

  clearLocalDatas() {
    this.arr = [];
    this.colorArr = ['rgba(54, 162, 235, 0.2)'];
    this.getFunc('line');
    this.conditionPopup = false;
    this.condition = false;
    this.graphDescription.nativeElement.textContent = 'Description';
  }

}
