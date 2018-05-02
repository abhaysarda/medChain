pragma solidity ^0.4.18;
contract TutoCoin{
    string public name = "Our Tutorial Coin";
    string public symbol = "OTC";
    uint8 public decimals = 2;
    uint256 public totalSupply;

    mapping(address => uint256) balances;

    function TutoCoin() public{
        totalSupply = 100;
        balances[msg.sender] = 100;
    }

// the constant keyword signifies that this function is not a transaction and
//hence won't use up any gas/ether.
    function totalSupply() public constant returns (uint256 _totalsupply){
        return totalSupply;
    }

    function balanceOf(address tokenOwner) public constant returns(uint256 balance){
        return balances[tokenOwner];
    }

    function transfer(address addressTo, uint256 amount) public returns(bool success){
        require(addressTo != address(0));
        require(balances[msg.sender] >= amount);

        balances[msg.sender] = balances[msg.sender] - amount;
        balances[addressTo] = balances[addressTo] + amount;

        Transfer(msg.sender, addressTo, amount);
        return true;
    }



}
