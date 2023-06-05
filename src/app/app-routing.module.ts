import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';
import { InitComponent } from './shared/init/init.component';
import { TiposComponent } from './shared/tipos/tipos.component';
import { MonitorComponent } from './shared/monitor/monitor.component';
import { AdsenseModule } from 'ng2-adsense';
import { PruebaadsComponent } from './shared/pruebaads/pruebaads.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'contratacion', component: ContratacionComponent },
  { path: 'tipos', component: TiposComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: ':data', component: InitComponent },
  { path: ':data/:tipo', component: InitComponent },
  { path: 'tests', component: PruebaadsComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
