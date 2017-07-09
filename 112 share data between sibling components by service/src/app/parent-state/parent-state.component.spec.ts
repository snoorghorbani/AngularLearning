import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStateComponent } from './parent-state.component';

describe('ParentStateComponent', () => {
  let component: ParentStateComponent;
  let fixture: ComponentFixture<ParentStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
