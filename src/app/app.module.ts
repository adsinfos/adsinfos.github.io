import { NgModule, Renderer2 } from '@angular/core';
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
import { AdsenseModule } from 'ng2-adsense';
import { AdsenseComponent } from './shared/ads/adsense/adsense.component';
import { ScriptService } from './core/script.service';
import { PruebaadsComponent } from './shared/pruebaads/pruebaads.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ContratacionComponent,
    TiposComponent,
    MonitorComponent,
    AdComponent,
    AdsenseComponent,
    PruebaadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-9676834375313066',
      adSlot: 6900272380,
    })
  ],
  providers: [
    UtilService, 
    Location, 
    TipoService,
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
