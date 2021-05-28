import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {FormComponent} from './components/form/form.component';
import {ListComponent} from './components/list/list.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ChartComponent} from './components/chart/chart.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './components/nav/nav.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PopUpDeleteComponent} from './components/list/pop-up-delete/pop-up-delete.component';
import {PopUpEditComponent} from './components/list/pop-up-edit/pop-up-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    GalleryComponent,
    ChartComponent,
    NavComponent,
    PopUpDeleteComponent,
    PopUpEditComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule,
    NgxPaginationModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
