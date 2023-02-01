//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract favNumber {
    mapping(address => uint) addressToNumber ;

    // funtion used to set the favourite number to a address
    function setNumber(uint number) external {
        addressToNumber[msg.sender] = number;
    }
    
    //function used to get the favourite number of a address
    function getNumber(address _address) external view returns(uint){
        return addressToNumber[_address];
    }
}
