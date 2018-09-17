
contract CarRent {
  address public owner;
  address public renter;
  address public judge;
  uint256 public rent = 20;
  uint256 public deposit = 100;
  uint256 public funds;
  bool public disputed =false;

  constructor() public {
    owner = msg.sender;

  }

  function acceptCar() public payable {
    require(renter == address(0));
    require(msg.value>=deposit+rent);
    renter = msg.sender;
    funds = msg.value - deposit;
  }

  function returnCar() public {
    require(renter==msg.sender);
    uint256 rest = funds - rent;
    renter.transfer(rest);
  }

  function returnDeposit(uint256 amount) public {
    require(deposit-amount>=0);
    require(owner==msg.sender);
    deposit -=  amount;
    renter.transfer(amount);
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
      owner.transfer(deposit);
      deposit = 0;
  }

  function judgeDeposit(uint256 ownerAmount) {
      require(judge==msg.sender);
      require(!disputed);
      require(deposit>0);
      require(ownerAmount<=deposit);
      disputed = true;
      owner.transfer(ownerAmount);
      renter.transfer(deposit-ownerAmount);
  }

}