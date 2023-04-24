import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Users.service';
import { User } from 'src/app/interface/userInterface';
import { USER_DETAILS } from '../User-const-data'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  user!: User;
  userStatus!: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let user = this.userService.getUserById(params['id']);
      if (user) {
        this.user = user;
        this.userStatus = user.isDeleted ?
          USER_DETAILS.userStatus.deleted : USER_DETAILS.userStatus.active;
      }
    });
  }
}
