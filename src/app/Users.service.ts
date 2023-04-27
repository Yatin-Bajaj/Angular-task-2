import { Injectable } from '@angular/core';
import { User } from './interface/userInterface';
import { USERS } from './Users';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    Users: User[] = USERS;

    constructor(private router: Router) { }

    getUsers(): User[] {
        return this.Users;
    }

    getUserById(id: string): User | undefined {
        const user = this.Users.find((user) => user.id === id);
        return user;
    }

    toggleIsDeleted(id: string) {
        const user = this.Users.find((user) => user.id === id);
        if (user) {
            user.isDeleted = !user.isDeleted;
        }
    }
    
    navigateToDetails(id: string) {
        this.router.navigate(['manage', id]);
        window.scrollTo(0, 0);
    }
}
