import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    GalleryComponent,
    ListComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
