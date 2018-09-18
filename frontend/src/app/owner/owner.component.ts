import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { SmartContractService } from '../services/SmartContract.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  contractId;

  constructor(
    private web3Service: Web3Service,
    private smrt: SmartContractService,
    private route: ActivatedRoute) {
  }

  public async submitPayout(payout) {
    await this.web3Service.connect();
    if (this.smrt.canReturnDeposit(this.contractId)) {
      this.smrt.returnDeposit(this.contractId, payout);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.contractId = p['id'];
    });
  }

}
