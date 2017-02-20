//  Module Dependancies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ProductModule } from './product-list/product.module';
import { AppRoutingModule } from './app-routing.module';

//  Components, Pipes and Directives
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

//  Decorator
@NgModule({
  imports: [
     BrowserModule,
     HttpModule,
     ProductModule,
     AppRoutingModule
   ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
//  Module Class
export class AppModule { }
