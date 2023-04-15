// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";


contract CaptureTheFlag is BaseRelayRecipient  {
    
    constructor(address forwarder) {
        _setTrustedForwarder(forwarder);
    }

    event FlagedCapture(address previousHolder, address currentHolder);

    address public currentHolder = address(0);

    function captureTheFlag() external {
        address previousHolder = currentHolder;

        currentHolder = _msgSender();

        emit FlagedCapture(previousHolder, currentHolder);
    }
    
    function versionRecipient() external pure override returns (string memory) {
        return "2.2.5";
    }
}

