pragma solidity ^0.4.11;

contract CreditScore {

    mapping (address => uint) public scores;
    mapping (address => bool) public banks;
    address owner;

    constructor() public {
        owner = msg.sender;
        banks[msg.sender] = true;
    }

    function addBank(address bankAddress) public {
        if (msg.sender == owner) {
            banks[bankAddress] = true;
        }
    }

    function updateScore(address personAddress, uint newScore) public {
        if (banks[msg.sender] == true) {
            scores[personAddress] = newScore;
        }
    }

    function getScore(address personAddress) public view returns (uint) {
        return scores[personAddress];
    }

}