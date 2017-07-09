import { Component, Input, OnInit } from '@angular/core';
import { siblingService } from '../sibling.service';

export interface IParentStateComponent {
}

@Component({
  selector: 'app-parent-state',
  templateUrl: './parent-state.component.html',
  styleUrls: ['./parent-state.component.css']
})
export class ParentStateComponent implements IParentStateComponent {
  constructor(private SiblingService: siblingService) { }
}
