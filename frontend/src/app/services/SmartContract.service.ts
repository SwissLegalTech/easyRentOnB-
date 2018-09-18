import { Injectable, EventEmitter  } from '@angular/core';
import * as smartContract from '../../../../smartContract/build/contracts/CarRent.json';
import { Web3Service } from './web3.service';


@Injectable()
export class SmartContractService {

  private instance: any;

  private ready: EventEmitter<any> = new EventEmitter();

  constructor(
    private web3Service: Web3Service
  ) {}

  async getAccount() {
    const acc = await this.web3Service.getAccount();
    console.log('accoiunt');
  }


  public async getContract(contractAddress) {
    return await this.web3Service.fetchContractInstance(contractAddress, smartContract);
  }

  public getSubscriptionManager() {
    return this.instance;
  }

  public async acceptCar(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>((resolve, reject) => {
      instance.acceptCar({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async returnCar(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>((resolve, reject) => {
      instance.returnCar({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async disputeDeposit(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>(async (resolve, reject) => {
      instance.disputeDeposit({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async acceptDeposit(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>((resolve, reject) => {
      instance.disputeDeposit({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async judgeDeposit(contractAddress, amount) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>((resolve, reject) => {
      instance.judgeDeposit(amount, {gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async returnDeposit(contractAddress, amount) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise<number>((resolve, reject) => {
      instance.returnDeposit(amount, {gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

}
