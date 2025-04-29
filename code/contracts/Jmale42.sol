// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Jmale42 is ERC20 {


    constructor() ERC20("Jmale42", "42J") {
        _mint(msg.sender, 70000000 * (10 ** decimals()));

    }
}