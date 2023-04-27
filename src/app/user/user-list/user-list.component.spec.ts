import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserListComponent } from './user-list.component';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/interface/userInterface';
import { UserService } from 'src/app/Users.service';
import { USERS } from 'src/app/Users';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserFilterPipe } from '../user-filter.pipe';

describe('UserListComponent', () => {
  @Component({
    selector: 'app-user',
    template: '<div></div>',
  })
  class FakeAppUser {
    @Input() user!: User;
    @Input() path!: string;
  }

  class mockUserService {
    Users: User[] = USERS;
    getUsers() {
      return this.Users;
    }
  }

  const testData = { dataKey: 'manage' };

  let mockActivatedRoute = {
    data: of({
      path: 'manage',
    }),
  };

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent, FakeAppUser, UserFilterPipe],
      providers: [
        {
          provide: UserService,
          useClass: mockUserService,
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();

    userService = TestBed.inject(UserService);
    activatedRoute = TestBed.inject(ActivatedRoute);

    console.log(activatedRoute);
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create one user element for each user', () => {
    spyOn(userService, 'getUsers').and.returnValue(USERS);
    const div = fixture.debugElement.queryAll(By.css('div'));
    expect(div.length).toBe(USERS.length);
  });
});
