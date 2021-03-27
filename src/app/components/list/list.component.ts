import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import {PopUpAddComponent} from './pop-up-add/pop-up-add.component';
import {PopUpEditComponent} from './pop-up-edit/pop-up-edit.component';
import {PopUpDeleteComponent} from './pop-up-delete/pop-up-delete.component';
import {IList} from '../../interface/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  p: number = 1;
  listCollection: AngularFirestoreCollection<IList>;
  allList: Observable<IList[]>;
  listDoc: AngularFirestoreDocument<IList>;
  inputId: string;

  inputValue: IList = {
    title: '',
    content: '',
    src: ''
  };

  editValue: boolean = false;

  constructor(
    public angularFirestore: AngularFirestore,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.listCollection = this.angularFirestore.collection('List');
    this.allList = this.angularFirestore.collection('List', ref => ref.orderBy('datemodified')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IList;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PopUpAddComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addNewItem();
      } else {
        this.inputValue.content = '';
        this.inputValue.title = '';
      }
    });
  }

  openEditDialog(item): void {
    const dialogRef = this.dialog.open(PopUpEditComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editItem(item);
      } else {
        this.inputValue.content = '';
        this.inputValue.title = '';
      }
    });
  }

  openDeleteDialog(item): void {
    const dialogRef = this.dialog.open(PopUpDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItem(item);
      } else {
        this.inputValue.content = '';
        this.inputValue.title = '';
      }
    });
  }

  addNewItem(): void {
    if (this.inputValue.title != '') {
      this.inputValue.datemodified = new Date();
      this.inputValue.src = 'https://robohash.org/' + this.inputValue.title;
      this.listCollection.add(this.inputValue);
      this.inputValue.content = '';
      this.inputValue.title = '';
      this.openSnackBar('Added Successfuly!', '');
    } else {
      this.openSnackBar('Need input name robot!', '');
    }
  }

  deleteItem(item): void {
    this.listDoc = this.angularFirestore.doc(`List/${item}`);
    this.listDoc.delete();
    this.openSnackBar('Robot Deleted!', '');
  }

  editItem(item): void {
    this.inputValue.title = item.title;
    this.inputValue.content = item.content;
    this.editValue = true;
    this.inputId = item.id;
  }

  saveNewItem(): void {
    if (this.inputValue.title != '') {
      this.inputValue.datemodified = new Date();
      this.listDoc = this.angularFirestore.doc(`List/${this.inputId}`);
      this.listDoc.update(this.inputValue);
      this.editValue = false;
      this.inputValue.title = '';
      this.inputValue.content = '';
      this.openSnackBar('Updated Successfuly!', '');
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
