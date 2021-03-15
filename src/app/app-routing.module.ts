import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {ChartComponent} from "./components/chart/chart.component";
import {FormComponent} from "./components/form/form.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {ListComponent} from "./components/list/list.component";
import {CatsPhotosComponent} from "./components/cats-photos/cats-photos.component";
import {SeaPhotosComponent} from "./components/sea-photos/sea-photos.component";
import {FlowersPhotosComponent} from "./components/flowers-photos/flowers-photos.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'form', component: FormComponent},
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {path: '', component: CatsPhotosComponent},
      {path: 'sea', component: SeaPhotosComponent},
      {path: 'flowers', component: FlowersPhotosComponent}
    ]
  },
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
