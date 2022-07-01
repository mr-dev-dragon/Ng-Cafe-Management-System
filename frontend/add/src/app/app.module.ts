import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { LocationStrategy , PathLocationStrategy } from '@angular/common';
import { AppRutiongModule } from './app-rutiong.module'; 
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    AddBlogComponent,
    EditBlogComponent,
    UpdateBlogComponent,
    
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
