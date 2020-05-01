import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FormParentComponent } from './parent/form-parent/form-parent.component';
import { FormChildComponent } from './parent/form-parent/form-child/form-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FormParentComponent,
    FormChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
