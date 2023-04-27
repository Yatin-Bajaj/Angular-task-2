import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveComponent } from './active.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ActiveComponent', () => {
  @Component({
    selector: 'app-user-list',
    template: '<div></div>',
  })
  class FakeUserList {
    @Input() isDeleted!: boolean;
  }

  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveComponent, FakeUserList],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render child user list component', () => {
    const div = fixture.debugElement.queryAll(By.css('div'));
    expect(div.length).toBe(1);
  });
});
