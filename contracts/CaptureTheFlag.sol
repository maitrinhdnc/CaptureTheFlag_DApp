// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CaptureTheFlag {

    address public currentHolder = address(0);

    event FlagedCapture(address previousHolder, address currentHolder);

    function captureTheFlag() external{
        address previousHolder = currentHolder;

        currentHolder = msg.sender;
        
        emit FlagedCapture(previousHolder, currentHolder);
    }


}
