import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilService } from './core/util.service';
import { InitComponent } from './shared/init/init.component';
import { AppRoutingModule } from './app-routing.module';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';

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
    UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
