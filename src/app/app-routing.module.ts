import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratacionComponent } from './shared/contratacion/contratacion.component';
import { InitComponent } from './shared/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'contratacion', component: ContratacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
