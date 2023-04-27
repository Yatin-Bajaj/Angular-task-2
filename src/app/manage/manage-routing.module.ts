import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { UserDetailsComponent } from '../user/user-details/user-details.component';
import { ROUTE_PATH } from '../App-const-data';

const routes: Routes = [
  {
    path: ROUTE_PATH.default,
    component: ManageComponent,
    data: { path: ROUTE_PATH.manage },
    children: [{ path: ':id', component: UserDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule { }
