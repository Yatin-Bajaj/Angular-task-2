import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFilterPipe
  ]
})
export class UserModule { }
