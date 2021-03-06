import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { QueryBuilderModule } from 'angular2-query-builder';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule,QueryBuilderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
