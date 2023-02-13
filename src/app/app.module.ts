import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component'
import { ROUTING } from './app-routing.module';
import { myRoutings } from '../app/app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule, RouterModule, ROUTING],
  declarations: [AppComponent, myRoutings],
  bootstrap: [AppComponent]
})
export class AppModule { }
