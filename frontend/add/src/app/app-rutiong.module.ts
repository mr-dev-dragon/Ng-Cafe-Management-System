import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { P1Component } from './p1/p1.component';
const routes: Routes = [
  { path: 'product/1', component:  },
  { path: 'product/2', component:  },
  { path:'product/3', component:  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRutiongModule { }
