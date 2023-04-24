import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTE_PATH } from './App-const-data';

const routes: Routes = [
  { path: ROUTE_PATH.home, component: HomeComponent },
  {
    path: ROUTE_PATH.manage,
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
  },
  { path: ROUTE_PATH.default, redirectTo: ROUTE_PATH.home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
