import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {FormComponent} from './components/form/form.component';
import {ListComponent} from './components/list/list.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ChartComponent} from './components/chart/chart.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import {FlowersPhotosComponent} from './components/flowers-photos/flowers-photos.component';
import {CatsPhotosComponent} from './components/cats-photos/cats-photos.component';
import {SeaPhotosComponent} from './components/sea-photos/sea-photos.component';


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
    FlowersPhotosComponent,
    CatsPhotosComponent,
    SeaPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
