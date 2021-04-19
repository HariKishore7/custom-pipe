import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import {ServerComponent} from './server/server.component';
import { RouterModule } from '@angular/router';
import { WarnalertComponent } from './warnalert/warnalert.component';
import {SucalertComponent} from './sucalert/sucalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarnalertComponent,
    SucalertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
