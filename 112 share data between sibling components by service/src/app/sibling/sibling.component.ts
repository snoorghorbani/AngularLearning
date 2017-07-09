import { Component, OnInit } from '@angular/core';
import { siblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']

})
export class SiblingComponent {
  constructor(private SiblingService: siblingService) {
    this.SiblingService.increment();
  }
}
