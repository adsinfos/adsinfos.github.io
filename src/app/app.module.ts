import { NgModule } from '@angular/core';
import {Location} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilService } from './core/util.service';
import { InitComponent } from './shared/init/init.component';
import { AppRoutingModule } from './app-routing.module';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';
import { TipoService } from './core/tipo.service';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ContratacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UtilService, 
    Location, 
    TipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
