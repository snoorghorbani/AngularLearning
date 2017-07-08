import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildStateComponent } from './child-state/child-state.component';
import { ParentStateComponent } from './parent-state/parent-state.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildStateComponent,
    ParentStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
