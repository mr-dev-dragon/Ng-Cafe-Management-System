import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'product/:productId/:photoId/:photoName',
    component: ProductComponent,
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
