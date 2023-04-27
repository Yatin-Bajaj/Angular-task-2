import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { of } from 'rxjs';
import { User } from 'src/app/interface/userInterface';
import { USERS } from 'src/app/Users';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Users.service';
import { By } from '@angular/platform-browser';

describe('UserDetailsComponent', () => {
  let mockActivatedRoute = {
    params: of({
      params: '1',
    }),
  };

  class mockedUserService {
    getUserById(): User | undefined {
      return USERS[1];
    }
  }

  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
        {
          provide: UserService,
          useClass: mockedUserService,
        },
      ],
    }).compileComponents();

    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    spyOn(userService, 'getUserById').and.returnValue(USERS[1]);
    const debugHeading = fixture.debugElement.query(By.css('h3'));
    const heading: HTMLElement = debugHeading.nativeElement;
    expect(heading.textContent).toEqual(USERS[1].firstName);
  });

  it('should render heading and active user', () => {
    spyOn(userService, 'getUserById').and.returnValue(USERS[1]);
    const divDe = fixture.debugElement.query(By.css('#user-detail'));
    const div: HTMLElement = divDe.nativeElement;
    expect(div.nodeName).toEqual('DIV');
  });

  it('should render heading and active user', () => {
    spyOn(userService, 'getUserById').and.returnValue(USERS[0]);
    const divDe = fixture.debugElement.query(By.css('#user-detail'));
    const div: HTMLElement = divDe.nativeElement;
    expect(div.nodeName).toEqual('DIV');
  });
});
