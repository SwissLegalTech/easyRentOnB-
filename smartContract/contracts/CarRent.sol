pragma solidity ^0.4.24;

import "./Vat.sol";

contract CarRent is Vat {
  address public owner;
  address public renter;
  address public judge = 0xc61762175a7637B7623d999e7BBB1f74cF43dC0C;
  uint256 public rent = 20;
  uint256 public deposit = 100;
  uint256 public funds;
  bool public disputed =false;

  constructor() public {
    owner = msg.sender;

  }

  function acceptCar() public whitelisted payable {
    require(renter == address(0));
    require(msg.value>=deposit+rent);
    renter = msg.sender;
    funds = msg.value - deposit;
  }

  function returnCar() public {
    require(renter==msg.sender);
    uint256 rest = funds - rent;
    vatTransfer(owner, rest);
  }

  function returnDeposit(uint256 amount) public {
    require(deposit-amount>=0);
    require(owner==msg.sender);
    deposit -=  amount;
    transfer(renter, amount);
  }

  function disputeDeposit() {
    require(renter==msg.sender);
    require(!disputed);
    require(deposit>0);
    disputed = true;
  }

  function acceptDeposit() {
    require(renter==msg.sender);
    require(deposit>0);
    disputed = false;
    transfer(owner, deposit);
    deposit = 0;
  }

  function judgeDeposit(uint256 ownerAmount) {
    require(judge==msg.sender);
    require(!disputed);
    require(deposit>0);
    require(ownerAmount<=deposit);
    disputed = true;
    transfer(owner, ownerAmount);
    transfer(renter, deposit-ownerAmount);
    deposit=0;
  }

}