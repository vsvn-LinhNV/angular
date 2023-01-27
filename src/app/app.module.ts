import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { BindEventComponent } from './bind-event/bind-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    BindEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
