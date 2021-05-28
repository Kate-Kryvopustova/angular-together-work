import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  condition = true;
  conditionPopup = false;
  desription = '';
  inputValue = '';
  arr = [];
  myChart: any = null;
  colorArr = ['rgba(54, 162, 235, 0.2)'];
  arrInputControl: FormControl;

  ngOnInit(): void {
    this.arrInputControl = new FormControl();
    this.arrInputControl.valueChanges.subscribe((el) => this.arr.push(el));
  }

  constructor() {}

  popupCall(): void {
    this.conditionPopup = true;
  }
  closePopup(): void {
    this.conditionPopup = false;
  }

  addDesription(): void {
    this.desription = `Diagram of [ ${this.arr.join(', ')} ] values.`;
  }

  addValue(): void {
     this.arrInputControl = new FormControl();
     this.arrInputControl.valueChanges.subscribe((el) => this.arr.push(el));
     this.inputValue = null;
     this.colorArr.push(this.makeRandomColor());
     this.addDesription();
     if (this.arr.length > 1) {
        this.condition = true;
        this.getFunc('line');
      }
  }

  private makeRandomColor(): any {
    return `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)})`;
  }

  getFunc(typeOfGraph): void {
    if (this.myChart) {
      this.myChart.destroy();
    }
    this.myChart = new Chart('myChart',  {
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
    this.myChart.update();
  }

  // TODO: combine some properties into logical objects
  clearLocalDatas(): void {
    this.arr = [];
    this.myChart.destroy();
    this.colorArr = ['rgba(54, 162, 235, 0.2)'];
    this.getFunc('line');
    this.conditionPopup = false;
    this.desription = 'Description';
  }
}
