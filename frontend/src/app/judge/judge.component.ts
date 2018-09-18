import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { SmartContractService } from '../services/SmartContract.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit {

  contractId;

  constructor(
    private web3Service: Web3Service,
    private smrt: SmartContractService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  public async submitPayout(payout) {
    await this.web3Service.connect();
    this.smrt.judgeDeposit(this.contractId, payout);
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.contractId = p['id'];
    });
  }

}
