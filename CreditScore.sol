pragma solidity ^0.4.11;

contract CreditScore {

    mapping (address => uint) public scores;
    address[] private banks;

    function updateScore(address personAddress, uint newScore) public {
        scores[personAddress] = newScore;
    }

    function getScore(address personAddress) public view returns (uint) {
        return scores[personAddress];
    }

}