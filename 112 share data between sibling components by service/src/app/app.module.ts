import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildStateComponent } from './child-state/child-state.component';
import { ParentStateComponent } from './parent-state/parent-state.component';
import { SiblingComponent } from './sibling/sibling.component';
import { siblingService } from './sibling.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildStateComponent,
    ParentStateComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [siblingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
