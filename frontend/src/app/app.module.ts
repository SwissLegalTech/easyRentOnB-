import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OwnerComponent } from './owner/owner.component';
import { JudgeComponent } from './judge/judge.component';
import { OfferComponent } from './offer/offer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OwnerComponent,
    JudgeComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
