import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  contract: Contract = {
    id: 3,
    deposit: 0,
    rent: 0
  }

  constructor() { 
    
  }

  public createOffer() {
    this.contract.deposit = 1000;
    this.contract.rent = 10;
    console.log('d: ' + this.contract.deposit + 'r: ' + this.contract.rent);
  }

  ngOnInit() {
  }

}
