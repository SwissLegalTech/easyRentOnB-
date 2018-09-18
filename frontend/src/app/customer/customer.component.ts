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

    console.log(this.contractId);
    this.booked = true;
    await this.smrt.acceptCar(this.contractId);
  }

  public async returnCar() {
    await this.web3Service.connect();
    this.payed = true;
    await  this.smrt.returnCar(this.contractId);
  }

  public async acceptPayout() {
    await this.web3Service.connect();
    this.booked = false;
    this.payed = false;
    this.smrt.acceptDeposit(this.contractId);
  }

  public async openDispute() {
    await this.web3Service.connect();
    this.booked = false;
    this.payed = false;
    this.smrt.disputeDeposit(this.contractId);
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.contractId = p['id'];
    });
  }

}
