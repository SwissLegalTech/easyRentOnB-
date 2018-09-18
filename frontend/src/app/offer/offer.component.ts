import { Component } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { SmartContractService } from '../services/SmartContract.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent  {

  constructor(
    private web3Service: Web3Service,
    private smrt: SmartContractService
  ) {
  }

  public async createOffer() {
    await this.web3Service.connect();
   const o = await this.web3Service.compileContractAndDepoy('11', '88');
   console.log(o);
   const p = this.smrt.acceptCar(o);
   // const p = this.smrt.returnCar('0x56cc87ec3828e8c4316b12c24869264f5ff9da06');
  }

}
