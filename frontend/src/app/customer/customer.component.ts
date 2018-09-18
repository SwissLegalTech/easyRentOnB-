import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { SmartContractService } from '../services/SmartContract.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  contractId;
  booked;
  payed;


  constructor(
    private web3Service: Web3Service,
    private smrt: SmartContractService,
    private router: Router,  
    private route: ActivatedRoute) {    
  }

  public async bookCar() {
    await this.web3Service.connect();
    if (this.smrt.canAcceptCar(this.contractId)) {
      this.smrt.acceptCar(this.contractId);
      this.booked = true;
    }
  }

  public async returnCar() {
    await this.web3Service.connect();
    if (this.smrt.canReturnCar(this.contractId)) {
      this.smrt.returnCar(this.contractId);
      this.payed = true;
    }
  }

  public async acceptPayout() {
    await this.web3Service.connect();
    if (this.smrt.canAcceptDeposit(this.contractId)) {
      this.smrt.acceptDeposit(this.contractId)
      this.booked = false;
      this.payed = false;
    }
  }

  public async openDispute() {
    await this.web3Service.connect();
    if (this.smrt.canDisputeDeposit(this.contractId)) {
      this.smrt.disputeDeposit(this.contractId);
      this.booked = false;
      this.payed = false;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.contractId = p['id'];
    });
  }

}
