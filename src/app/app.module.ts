import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import 'jQuery-Mapael/js/jquery.mapael.js';
import 'jQuery-Mapael/js/maps/usa_states';
import 'webpack-raphael';

import {GeoLocationsWidget} from "./geo-locations-widget/geo-locations-widget.directive";

@NgModule({
  declarations: [
    AppComponent,
    GeoLocationsWidget,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
