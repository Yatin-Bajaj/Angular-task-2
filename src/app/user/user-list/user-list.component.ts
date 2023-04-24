import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/Users.service';
import { User } from '../../interface/userInterface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { USER_LIST } from '../User-const-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  @Input() isDeleted!: boolean;
  users: User[] = [];
  dataSubscription!: Subscription;
  path!: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.path = data[USER_LIST.dataKey];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
