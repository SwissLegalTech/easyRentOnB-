import { Injectable, EventEmitter } from '@angular/core';
import * as CarRentSource from 'raw-loader!../../../../smartContract/contracts/CarRent.sol';







@Injectable()
export class Web3Service {
  web3: any;
  hello: string;

  private ready: EventEmitter<any> = new EventEmitter();



  public readyEvent():  EventEmitter<any> {
    return this.ready;
  }

  isUnlocked() {
    return this.web3.eth.accounts.length > 0;
  }

  async connect() {
      console.log('do we have web3js?', window['web3js']);
      this.web3 = window['web3js'];
      const acc = await this.getAccount();
      return acc;
  }

  getWeb3() {
    return this.web3;
  }

  getAccount() {
    return new Promise((resolve, reject) => {
      this.web3.eth.getAccounts(( e, o) => {
        console.log('do we have an error getting accounts?', e);
        return resolve(o[0]);
       });
    });
  }

  async fetchContractInstance(contractAddress: any, ctr: any) {

    const ctrct = this.web3.eth.contract(ctr.abi);
    const sampleContractInstance = ctrct.at(contractAddress);

    return sampleContractInstance;
  }


  public async compileContractAndDepoy(rent, deposit): Promise<string> {
    const acc = await this.getAccount();

    let source =  CarRentSource + '';
    source = source.replace('20', rent);
    source = source.replace('100', deposit);

    console.log('assembeld source');
    const compiled = await this.compile(source);
    console.log('assembeld compiled');
    const o = await this.deploy(compiled);
    console.log('deployed');
    return o;
  }

  private async compile(source) {
    console.log('compile!');
    return new Promise((resolve, reject) => {
      window['BrowserSolc'].loadVersion('soljson-v0.4.24+commit.e67f0147.js', function(compiler) {
        const optimize = 0;
        const result = compiler.compile(source, optimize);
        resolve(result);
      });
    });
  }

  private async deploy(compiled): Promise<string> {
    console.log('deploy!');
    const abi = JSON.parse(compiled.contracts[':CarRent'].interface);
    const acc = await this.getAccount();
    const contract = this.web3.eth.contract(abi);
    return new Promise<string>((resolve, reject) => {
      contract.new({
          data: '0x' + compiled.contracts[':CarRent'].bytecode,
          from: acc,
          gas: 900000 * 2
      }, (err, res) => {
          if (err) {
              console.log(err);
              return;
          }
          console.log(res.address);
          resolve(res.address);
      });
    });
  }

}
