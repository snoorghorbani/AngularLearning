import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-child-state',
  templateUrl: './child-state.component.html',
  styleUrls: ['./child-state.component.css']
})
export class ChildStateComponent {
  @Input()
  childstate: number;

  @Output() increment : EventEmitter<number> = new EventEmitter<number>();

  inc() {
    return this.increment.emit();
  }
}
