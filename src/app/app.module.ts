import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';
import { ListAwesomeComponent } from './list-awesome/list-awesome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddAwesomeComponent } from './add-awesome/add-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    EditAwesomeComponent,
    ListAwesomeComponent,
    AddAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
