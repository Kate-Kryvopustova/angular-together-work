import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UpdateListService {

  constructor() { }

  addItem(data, robotsList): void {
    data.value.dateModified = new Date();
    data.value.src = 'https://robohash.org/' + data.value.title;
    robotsList.add(data.value);
    data.reset();
  }

  updateItem(data, item): void {
    data.setValue(item);
    data.value.dateModified = new Date();
  }

  deleteItem(listDoc): void {
    listDoc.delete();
  }

  saveNewItem(data, listDoc): void {
    data.value.dateModified = new Date();
    listDoc.update(data.value);
    data.reset();
  }
}
