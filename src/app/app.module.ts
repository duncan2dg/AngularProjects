import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import {BeerOptionComponent} from './beer-option-ddl/beer-option.component';
import {BeerGridComponent} from './beer-grid/beer-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerOptionComponent,
    BeerGridComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
