// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "../lib/forge-std/src/Script.sol";
import {Owner} from "../src/Owner.sol";

contract OwnerScript is Script {
    Owner public owner;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        owner = new Owner();

        vm.stopBroadcast();
    }
}

//forge script script/Storage.s.sol   --broadcast   --rpc-url https://eth-sepolia.g.alchemy.com/v2/$ALCHEMY_API_KEY   --private-key $SEPOLIA_PRIVATE_KEY   --verify   --etherscan-api-key $ETHERSCAN_API_KEY
