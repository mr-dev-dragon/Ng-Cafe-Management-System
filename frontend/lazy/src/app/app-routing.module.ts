import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module')
      .then(m => m.PayModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module')
      .then(m => m.PaymentsModule)
  }
  ,
  {
    path: 'payments/success',
    loadChildren: () => import('./payments/payments.module')
      .then(m => m.PaymentsModule)
    
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  }
];     

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
