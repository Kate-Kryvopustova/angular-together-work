import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import {FormBuilder, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import {PopUpAddComponent} from './pop-up-add/pop-up-add.component';
import {PopUpEditComponent} from './pop-up-edit/pop-up-edit.component';
import {PopUpDeleteComponent} from './pop-up-delete/pop-up-delete.component';
import {IList} from '../../interface/list';
import {UpdateListService} from '../../services/update-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  robotForm = this.fb.group({
    title : ['', Validators.required],
    content: [''],
    src: [''],
    dateModified: [''],
    id: [''],
  });

  p = 1;

  listCollection: AngularFirestoreCollection<IList>;
  allList: Observable<IList[]>;
  listDoc: AngularFirestoreDocument<IList>;
  inputId: string;

  editValue = false;

  constructor(
    public angularFirestore: AngularFirestore,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private updateListServise: UpdateListService,
  ) {
  }

  ngOnInit(): void {
    this.listCollection = this.angularFirestore.collection('List');
    this.allList = this.angularFirestore.collection('List', ref => ref.orderBy('dateModified')).snapshotChanges().pipe(map(changes => {
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
        this.robotForm.reset();
      }
    });
  }

  openEditDialog(item: IList): void {
    const dialogRef = this.dialog.open(PopUpEditComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editItem(item);
      } else {
        this.robotForm.reset();
      }
    });
  }

  openDeleteDialog(item: IList): void {
    const dialogRef = this.dialog.open(PopUpDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItem(item);
      } else {
        this.robotForm.reset();
      }
    });
  }

  addNewItem(): void {
    const data = this.robotForm;
    const robotsList = this.listCollection;
    this.updateListServise.addItem(data, robotsList);

    this.openSnackBar('Added Successfuly!', '');
  }

  deleteItem(item: IList): void {
    this.listDoc = this.angularFirestore.doc(`List/${item}`);
    this.updateListServise.deleteItem(this.listDoc);
    this.openSnackBar('Robot Deleted!', '');
  }

  editItem(item: IList): void {
    const data = this.robotForm;
    this.updateListServise.updateItem(data, item);
    this.editValue = true;
    this.inputId = item.id;
  }

  saveNewItem(): void {
    if (this.robotForm.value.title !== '') {
      const data = this.robotForm;
      this.listDoc = this.angularFirestore.doc(`List/${this.inputId}`);
      this.updateListServise.saveNewItem(data, this.listDoc);
      this.editValue = false;
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
