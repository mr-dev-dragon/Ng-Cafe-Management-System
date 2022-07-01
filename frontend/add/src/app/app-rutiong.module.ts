import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
const routes: Routes = [ 
  {
    path: 'add-blog', 
    component: AddBlogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRutiongModule { }
