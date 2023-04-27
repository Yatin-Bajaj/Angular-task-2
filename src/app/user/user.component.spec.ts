import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { USERS } from '../Users';
import { User } from '../interface/userInterface';
import { UserService } from '../Users.service';

describe('UserComponent', () => {
  class mockUserService {
    Users: User[] = USERS;
    toggleIsDeleted(id: string) {}
    navigateToDetails(id: string) {}
  }

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useClass: mockUserService }],
    }).compileComponents();
    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = USERS[1];
    component.path = 'manage';
    fixture.detectChanges();
  });

  it('should render user according to manage', () => {
    let spy = spyOn(userService, 'navigateToDetails');
    component.clickHandler('1');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.buttonText).toBe('Details');
    expect(component.buttonClass).toBe('btn-primary');
  });

  it('should render user according to active', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = USERS[1];
    component.path = 'active';
    fixture.detectChanges();
    expect(component.buttonText).toBe('Active');
    expect(component.buttonClass).toBe('btn-success');
  });

  it('should render user according to deleted', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = USERS[1];
    component.path = 'deleted';
    fixture.detectChanges();

    let spy = spyOn(userService, 'toggleIsDeleted');
    component.clickHandler('1');
    expect(component.buttonText).toBe('Deactivate');
    expect(component.buttonClass).toBe('btn-danger');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
