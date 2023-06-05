import { NgModule } from '@angular/core';
import {Location} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilService } from './core/util.service';
import { InitComponent } from './shared/init/init.component';
import { AppRoutingModule } from './app-routing.module';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';
import { TipoService } from './core/tipo.service';
import { TiposComponent } from './shared/tipos/tipos.component';
import { MonitorComponent } from './shared/monitor/monitor.component';
import { AdComponent } from './shared/ads/ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ContratacionComponent,
    TiposComponent,
    MonitorComponent,
    AdComponent
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
