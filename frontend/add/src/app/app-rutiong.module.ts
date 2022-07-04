import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { P1Component } from './p1/p1.component';
const routes: Routes = [
  {
    path: 'add-blog',
    component: AddBlogComponent,
    redirectTo: '/',
  },
  {
    path: 'products/p1',
    component: P1Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRutiongModule { }
