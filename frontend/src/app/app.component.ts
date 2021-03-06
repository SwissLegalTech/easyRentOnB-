import { Component } from '@angular/core';
import { Web3Service } from './services/web3.service';
import { SmartContractService } from './services/SmartContract.service';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private web3: Web3Service,
    private smrt: SmartContractService
  ) {}

}
