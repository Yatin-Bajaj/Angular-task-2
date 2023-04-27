import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageComponent } from './manage.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('ManageComponent', () => {
  @Component({
    selector: 'app-user-list',
    template: '<div></div>',
  })
  class FakeUserListComponent { }

  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageComponent, FakeUserListComponent],
      imports: [RouterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
