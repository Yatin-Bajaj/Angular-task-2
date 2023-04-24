import { TestBed } from '@angular/core/testing';
import { UserService } from './Users.service';
import { USERS } from './Users';

describe('User Service', () => {
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService],
        });
        userService = TestBed.inject(UserService);
    });

    it('getUsers should return list of users', () => {
        expect(userService.getUsers())
            .withContext('service returned Users value')
            .toBe(USERS);
    });

    it('get user by id should return user with specific id', () => {
        expect(userService.getUserById('1'))
            .withContext('Should return a user')
            .toBe(USERS[0]);
    });

    it('toggle Id should toggle the isDeleted field', () => {
        expect(userService.toggleIsDeleted('1'));
    });
});
