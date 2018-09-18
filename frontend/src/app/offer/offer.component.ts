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
  ) {}

  public async createOffer(rent, deposit) {
    await this.web3Service.connect();
    const o = await this.web3Service.compileContractAndDepoy(rent, deposit);
    console.log(o);
    window.location.href = 'http://localhost:4200/owner/' + o;

  }

}
