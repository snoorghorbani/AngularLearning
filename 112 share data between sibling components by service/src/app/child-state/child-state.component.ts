import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-state',
  templateUrl: './child-state.component.html',
  styleUrls: ['./child-state.component.css']
})
export class ChildStateComponent {
  @Input()
  childstate: number;
}
