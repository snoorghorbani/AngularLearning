import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStateComponent } from './child-state.component';

describe('ChildStateComponent', () => {
  let component: ChildStateComponent;
  let fixture: ComponentFixture<ChildStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
