import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';


import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

          
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
