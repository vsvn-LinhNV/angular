import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { BindEventComponent } from './bind-event/bind-event.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TranferDataComponent } from './tranfer-data/tranfer-data.component';
import { TranferDataChild2ParentComponent } from './tranfer-data-child2-parent/tranfer-data-child2-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    BindEventComponent,
    FormComponent,
    TranferDataComponent,
    TranferDataChild2ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
