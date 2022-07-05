import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
