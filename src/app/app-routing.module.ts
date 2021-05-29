import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form', component: FormComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'list', component: ListComponent },
  { path: 'map', component: MapComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
