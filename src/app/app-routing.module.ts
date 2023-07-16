import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';
import { InitComponent } from './shared/init/init.component';
import { TiposComponent } from './shared/tipos/tipos.component';
import { MonitorComponent } from './shared/monitor/monitor.component';
import { TestComponent } from './shared/test/test.component';
import { ConvocatoriachileComponent } from './shared/convocatoriachile/convocatoriachile.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'test', component: TestComponent },
  { path: 'contratacion', component: ContratacionComponent },
  { path: 'tipos', component: TiposComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'convocatoriachile', component: ConvocatoriachileComponent },
  { path: ':data', component: InitComponent },
  { path: ':data/:tipo', component: InitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
