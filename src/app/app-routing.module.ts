import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
   {path:'',redirectTo:'user-list',pathMatch:'full' },
   {path:'user-list',loadChildren:()=>import('./features/list/list.module').then(m=>m.ListModule)},
   {path:'user-gallery',loadChildren:()=>import('./features/gallery/gallery.module').then(m=>m.GalleryModule)},
   {path:'error',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
