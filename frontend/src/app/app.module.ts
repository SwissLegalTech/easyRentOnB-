import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Web3Service } from './services/web3.service';
import { SmartContractService } from './services/SmartContract.service';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Web3Service,
    SmartContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
