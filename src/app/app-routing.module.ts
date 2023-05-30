import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacePicComponent } from './face-pic/face-pic.component';
import { HomeComponent } from './home/home.component';
import { FacepicListComponent } from './facepic-list/facepic-list.component';
import { SingleFacepicComponent } from './single-facepic/single-facepic.component';

const routes: Routes = [
  { path: 'facepic', component: FacepicListComponent },
  { path: '', component: HomeComponent },
  { path:'facepic/:id', component: SingleFacepicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
