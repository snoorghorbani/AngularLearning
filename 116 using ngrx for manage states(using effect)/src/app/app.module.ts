import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as This from '.';
import { counterReducer } from './counter.reducer';
import { statusReducer } from './status.reducer';
import { StatusEffects } from './status.effect';
import { StatusComponent } from './smartComponent/status/status.component';

@NgModule({
  declarations: [
    This.AppComponent,
    This.ChildStateComponent,
    This.ParentStateComponent,
    This.SiblingComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counter : counterReducer , status : statusReducer}),
    EffectsModule.run(StatusEffects)
  ],
  bootstrap: [This.AppComponent]
})
export class AppModule { }
