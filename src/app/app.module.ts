import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilService } from './core/util.service';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
