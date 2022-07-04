import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { LocationStrategy , PathLocationStrategy } from '@angular/common';
import { AppRutiongModule } from './app-rutiong.module';

import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component'; 
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    NotfoundComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRutiongModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
