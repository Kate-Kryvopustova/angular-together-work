import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {FormComponent} from './components/form/form.component';
import {ListComponent} from './components/list/list.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ChartComponent} from './components/chart/chart.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import {PhotosComponent} from "./components/photos/photos.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    GalleryComponent,
    ChartComponent,
    NavComponent,
    HeaderComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
