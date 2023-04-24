import { Component } from '@angular/core';
import { UserService } from '../Users.service';
import { User } from '../interface/userInterface';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
})
export class ManageComponent {
  Users!: User[];
  constructor(private userService: UserService) {
    this.Users = this.userService.Users;
  }
}
