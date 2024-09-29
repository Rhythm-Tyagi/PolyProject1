// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract myNfts is ERC721A {
    address public owner;
    uint256 public maxLimit = 5;

    string baseUrl =
        "https://turquoise-urgent-stork-678.mypinata.cloud/ipfs/QmZ4JqYJ1rYepYmEYf2akaUDhRdaVJemQmZHVTwFkjeRhH/?pinataGatewayToken=nF_zjNjbNNF6Ox5t2NKj83imPMSod9x7tG-0xKVI_H4RHYQJ2H-3EPOc2gsCtprQ";

    string public prompt = "A Scary Robotic Person Illustrative style  Potrait , Fire and Ice in the Background ,Lokking in Fire and Ice";

    constructor() ERC721A("myNfts", "MNS") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Can be performed by the owner only.");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxLimit,
            "You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }

    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
