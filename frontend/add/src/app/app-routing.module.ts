import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponent } from './blog/blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';



const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/add',
    component: AddBlogComponent,
    outlet: 'add-blog'
    
  },

    {
    path: 'blog/edit',
    component:EditBlogComponent,
    outlet: 'edit-blog'
    
  },
    
      {
    path: 'blog/update',
    component: UpdateBlogComponent,
    outlet: 'update-blog'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
