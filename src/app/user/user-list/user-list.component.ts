import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/Users.service';
import { User } from '../../interface/userInterface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  @Input() isDeleted!: boolean;
  users: User[] = [];
  dataSubscription!: Subscription;
  path!: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.path = data['path'];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
