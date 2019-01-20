pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract PokeBall is StandardToken {
  string public name = "PokeBall"; 
  string public symbol = "PKB";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  function PokeBall() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}