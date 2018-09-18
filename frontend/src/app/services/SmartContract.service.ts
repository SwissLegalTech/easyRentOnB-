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

  public async canAcceptCar(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canAcceptCar((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }


  public async acceptCar(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise((resolve, reject) => {
      instance.acceptCar({gas: 500000, from: acc, value: 500000}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async canReturnCar(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canReturnCar((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }

  public async returnCar(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise((resolve, reject) => {
      instance.returnCar({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async canDisputeDeposit(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canDisputeDeposit((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }

  public async disputeDeposit(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise(async (resolve, reject) => {
      instance.disputeDeposit({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async canAcceptDeposit(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canAcceptDeposit((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }
  public async acceptDeposit(contractAddress) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise((resolve, reject) => {
      instance.disputeDeposit({gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async canJudgeDeposit(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canJudgeDeposit((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }

  public async judgeDeposit(contractAddress, amount) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise((resolve, reject) => {
      instance.judgeDeposit(amount, {gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

  public async canReturnDeposit(contractAddress: string): Promise<boolean> {
    const instance = await this.getContract(contractAddress);
    return await new Promise<boolean>((resolve, reject) => {
      instance.canReturnDeposit((e, res) => {
        if (e) { reject(e); }
        resolve(res);
      });
    });
  }

  public async returnDeposit(contractAddress, amount) {
    const acc = await this.web3Service.getAccount();
    const instance = await this.getContract(contractAddress);
    return await new Promise((resolve, reject) => {
      instance.returnDeposit(amount, {gas: 500000, from: acc}, (e, res) => {
        if (e) { reject(e); }
        resolve();
      } );
    });
  }

}
