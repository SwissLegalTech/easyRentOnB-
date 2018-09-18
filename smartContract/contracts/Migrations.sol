pragma solidity ^0.4.23;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}


/*
Available Accounts
==================
(0) 0x57e4e9b159bc1fb09eae2c30cdad6c05c650e263
(1) 0xb42057ac3faae4a17f4b7ce3643cc6c338411956
(2) 0xf7a6644d78aca26956a1294ab333660e8062cc6c
(3) 0x1755a3ad2e9fddceb6fa20dd2917fc27d8c611d0
(4) 0x27f7e9234f23b2a3581484fafdb20f97fe52cfa9
(5) 0xed21ca31e3425eaa37e355b75d15bca1efd5e614
(6) 0xcb87da8f91db858e11cf96a3cc4f1ea13e6971d8
(7) 0xa9a39915989545315c841fbe0825301734f66e15
(8) 0xe3a2df878aba5325c7879e903746a09c7c4f7260
(9) 0x7adf636915d25b19dd744db8ec433512b6cb35ba

Private Keys
==================
(0) ea43e6721b5f3a75bd6918d8d6c8c6e61ef6a22b10fa087cce818dedb5ea12d6
(1) 5ee25fa494a7ab1ac86b115a2b9aa85982437bb1a1de89ae1aa7741bfe753979
(2) a820a467e540eaae258b8ab75e2102a53fc59dc6339cdeb51f6d363e251feb60
(3) 32ee091a0a609dda1b339205a0dfaf210d25e09f022c5264dfb33d36d598fbc7
(4) 485cb60c140d05be27f8b817babdda56c4e261c37599bf458055aa6567ca6326
(5) e73c4d58defa2daae36889b0560f79906f4418576dba9c610a43aa03c2655369
(6) 6fe957332f05ae4c12181b679288faa50fd42f08a674db4006afb728ba2d46be
(7) b5a1742108742de98048f9ae7bd0b94f101d896baf6f65568b8ba9623b3041b8
(8) 8376642f06e09b2e38cd3c255e5e5dde3aceb62e427f0f565f62f13b66f215aa
(9) 4b191ab3a11574541a2f97f67587b935e5c12b0d09f6ab2c0c5a4897ea195a84
*/