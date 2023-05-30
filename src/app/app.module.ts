import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacePicComponent } from './face-pic/face-pic.component';
import { HeaderComponent } from './header/header.component';
import { FacepicListComponent } from './facepic-list/facepic-list.component';
import { FacepicService } from './service/facepic.service';
import { HomeComponent } from './home/home.component';
import { SingleFacepicComponent } from './single-facepic/single-facepic.component';


@NgModule({
  declarations: [
    AppComponent,
    FacePicComponent,
    HeaderComponent,
    FacepicListComponent,
    HomeComponent,
    SingleFacepicComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FacepicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
