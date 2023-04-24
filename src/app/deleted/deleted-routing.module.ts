import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedComponent } from './deleted.component';
import { ROUTE_PATH } from '../App-const-data';

const routes: Routes = [
  { path: ROUTE_PATH.deleted, component: DeletedComponent, data: { path: ROUTE_PATH.deleted } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletedRoutingModule { }
