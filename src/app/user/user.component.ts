import { Component, Input } from '@angular/core';
import { User } from '../interface/userInterface';
import { UserService } from 'src/app/Users.service';
import { ROUTE_PATH } from '../App-const-data';
import { USERS } from './User-const-data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() user!: User;
  @Input() path!: string;

  buttonText: string = USERS.active.buttonText;
  buttonClass: string = USERS.active.buttonClass;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.path === ROUTE_PATH.manage) {
      this.buttonText = USERS.manage.buttonText;
      this.buttonClass = USERS.manage.buttonClass;
    }
    if (this.path === ROUTE_PATH.active) {
      this.buttonText = USERS.active.buttonText;
      this.buttonClass = USERS.active.buttonClass;
    }
    if (this.path === ROUTE_PATH.deleted) {
      this.buttonText = USERS.deleted.buttonText;
      this.buttonClass = USERS.deleted.buttonClass;
    }
  }

  clickHandler(id: string) {
    if (this.path === ROUTE_PATH.active || this.path === ROUTE_PATH.deleted) {
      this.userService.toggleIsDeleted(id);
    }
    if (this.path === ROUTE_PATH.manage) {
      this.userService.navigateToDetails(id);
    }
  }
}
