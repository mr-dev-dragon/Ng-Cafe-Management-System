import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { LocationStrategy , PathLocationStrategy } from '@angular/common';
import { AppRutiongModule } from './app-rutiong.module';

import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component'; 
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
    RouterModule

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
