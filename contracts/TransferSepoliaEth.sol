// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransferSepoliaETH {
    
    event Transfer(address indexed from, address indexed to, uint256 amount);

    function transferEth(address payable _to, uint256 _amount) public payable {
        require(msg.value >= _amount, "Insufficient ETH sent");
        _to.transfer(_amount);
        emit Transfer(msg.sender, _to, _amount);
    }
}
