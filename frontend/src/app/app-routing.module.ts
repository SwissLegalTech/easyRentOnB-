import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OwnerComponent } from './owner/owner.component';
import { JudgeComponent } from './judge/judge.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'owner/:id', component: OwnerComponent},
  {path: 'judge/:id', component: JudgeComponent},
  {path: 'offer', component: OfferComponent},
  {path: '', redirectTo: 'offer', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
