import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChartComponent } from './components/chart/chart.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MarkerComponent } from './components/map/map-components/marker-list/marker/marker.component';
import { MarkerListComponent } from './components/map/map-components/marker-list/marker-list.component';
import { MapFieldComponent } from './components/map/map-components/map-field/map-field.component';
import { MapInputFieldComponent } from './components/map/map-components/map-input-field/map-input-field.component';
import { MapService } from './components/map/map-services/map.service';


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
    MapComponent,
    PageNotFoundComponent,
    MarkerComponent,
    MarkerListComponent,
    MapFieldComponent,
    MapInputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MapService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
