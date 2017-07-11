import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { ChildStateComponent } from './dumbComponent/child-state/child-state.component';
// import { ParentStateComponent } from './smartComponent/parent-state/parent-state.component';
// import { SiblingComponent } from './smartComponent/sibling/sibling.component';
// import { siblingService } from './sibling.service';
// import { AppComponent, ChildStateComponent, ParentStateComponent, SiblingComponent, siblingService } from '.';
import * as This from '.';

@NgModule({
  declarations: [
    This.AppComponent,
    This.ChildStateComponent,
    This.ParentStateComponent,
    This.SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [This.siblingService],
  bootstrap: [This.AppComponent]
})
export class AppModule { }
