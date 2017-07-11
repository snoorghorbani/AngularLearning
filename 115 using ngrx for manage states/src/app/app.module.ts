import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as This from '.';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    This.AppComponent,
    This.ChildStateComponent,
    This.ParentStateComponent,
    This.SiblingComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter : counterReducer})
  ],
  bootstrap: [This.AppComponent]
})
export class AppModule { }
