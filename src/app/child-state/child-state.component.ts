import { Component, Input } from '@angular/core';
import { ParentStateComponent } from '../parent-state/parent-state.component' 

@Component({
  selector: 'app-child-state',
  templateUrl: './child-state.component.html',
  styleUrls: ['./child-state.component.css']
})
export class ChildStateComponent {

@Input() 
childstate : number;
 


}
