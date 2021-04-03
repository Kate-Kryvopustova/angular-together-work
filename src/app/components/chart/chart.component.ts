import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  condition: boolean = true;
  conditionPopup: boolean = false;
  desription: string = '';
  inputValue: string = '';
  arr = [];
  myChart: any = null;
  colorArr = ['rgba(54, 162, 235, 0.2)'];
  arrInputControl: FormControl;
  
  ngOnInit(): void {
    this.arrInputControl = new FormControl();
    this.arrInputControl.valueChanges.subscribe((el) => this.arr.push(el));   
  }

  constructor() {}
  
  popupCall() {
    this.conditionPopup = true;
  }
  closePopup() {
    this.conditionPopup = false;
  }

  addDesription() {
    this.desription = `Diagram of [ ${this.arr.join(', ')} ] values.`;
  }

  addValue(){
     this.arrInputControl = new FormControl();
     this.arrInputControl.valueChanges.subscribe((el) => this.arr.push(el)); 
     console.log(this.arr);
     this.inputValue = null;
      this.colorArr.push(this.makeRandomColor());
      this.addDesription();
      if (this.arr.length > 1) {
        this.condition = true;
        this.getFunc('line');
      }
  } 

  private makeRandomColor() {
    return `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)})`;
  }

  getFunc(typeOfGraph) {
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
  clearLocalDatas() {
    this.arr = [];
    this.myChart.destroy();
    this.colorArr = ['rgba(54, 162, 235, 0.2)'];
    this.getFunc('line');
    this.conditionPopup = false;
    this.desription = 'Description';
  }
}
