pragma solidity ^0.8.7;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract SimCardNft is ERC721 {

    constructor() ERC721("SimCardNft", "SIMNFT") {
    }

    function registerSim(address user, uint256 phoneNumber) public returns (uint256) {
        _mint(user, phoneNumber);
        return phoneNumber;
    }
}