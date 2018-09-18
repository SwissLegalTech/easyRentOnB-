import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Web3Service } from './services/web3.service';
import { SmartContractService } from './services/SmartContract.service';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Web3Service,
    SmartContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
