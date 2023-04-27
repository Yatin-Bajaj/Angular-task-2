import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active.component';
import { ROUTE_PATH } from '../App-const-data';

const routes: Routes = [
  { path: ROUTE_PATH.active, component: ActiveComponent, data: { path: ROUTE_PATH.active } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveRoutingModule { }
