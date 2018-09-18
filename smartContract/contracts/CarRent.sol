pragma solidity ^0.4.24;

contract Vat  {
  uint256 public vatInPermill=77;
  address public taxAgency = 0xA5383D0A5a0906528D71081ED871e1B1Ea371f4e;

  mapping (address => uint8) whitelist;

  modifier whitelisted() {
    if (whitelist[msg.sender]>0) _;
  }

  function whitelistAddress(address add, uint8 t) public {
      whitelist[add] = t; 
  }

  function blacklistAddress(address add) public {
      whitelist[add] = 0; 
  }

  function vatTransfer(address destination, uint256 amount) internal {
    // uint8 t = whitelist[msg.sender];
    // if(t>=1)
    // {
    uint256 vat = amount*vatInPermill/1000;
    taxAgency.transfer(vat);
    destination.transfer(amount-vat);
    // }
    // else{
    //     transfer(destination,amount);
    // }
  }

  function transfer(address destination,uint256 amount) internal {
      destination.transfer(amount);
  }

}


contract CarRent is Vat {
  address public owner;
  address public renter;
  address public judge = 0xE5e32bd821F1C7Be5C2B2bE466d4e762C803747B;
  uint256 public rent = 20;
  uint256 public deposit = 110;
  uint256 public funds;
  bool public disputed =false;
  uint8 public state = 0;

  constructor() public {
    owner = msg.sender;

  }

  
  function canAcceptCar() public view returns(bool) {
    return state==0;
  }

  
  function acceptCar() public payable {
    require(renter == address(0));
    require(msg.value>=deposit+rent);
    renter = msg.sender;
    funds = msg.value - deposit;
    state = 1;
  }

  function canReturnCar() public view returns(bool) {
    return state==1;
  }

  function returnCar() public {
    require(renter==msg.sender);
    uint256 rest = funds - rent;
    vatTransfer(owner, rest);
    state = 2;
  }

  function canReturnDeposit() public view returns(bool) {
    return state==2;
  }

  function returnDeposit(uint256 amount) public {
    require(deposit-amount>=0);
    require(owner==msg.sender);
    deposit -=  amount;
    transfer(renter, amount);
    state =3;
    if(deposit ==0 ) state ==10;
  }

  function canDisputeDeposit() public view returns(bool) {
    return state==3;
  }

  function disputeDeposit() public {
    require(renter==msg.sender);
    require(!disputed);
    require(deposit>0);
    disputed = true;
    state =4;
  }

  function canAcceptDeposit() public view returns(bool) {
    return state==3 && state == 4;
  }

  function acceptDeposit() public {
    require(renter==msg.sender);
    require(deposit>0);
    disputed = false;
    transfer(owner, deposit);
    deposit = 0;
    state ==10;
  }

  function canJudgeDeposit() public view returns(bool) {
    return  state == 4;
  }

  function judgeDeposit(uint256 ownerAmount) public {
    require(judge==msg.sender);
    require(disputed);
    require(deposit>0);
    require(ownerAmount<=deposit);
    disputed = true;
    transfer(owner, ownerAmount);
    transfer(renter, deposit-ownerAmount);
    deposit=0;
    state ==10;
  }

}