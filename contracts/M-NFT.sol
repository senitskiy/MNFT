// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import './ERC721/ERC721.sol';
import "./utils/Counters.sol";
import './utils/Ownable.sol';
import "./ERC721/extensions/ERC721URIStorage_M.sol"; // changed import
// import "@openzeppelin/contracts/utils/Counters.sol";

contract M_NFT is ERC721, ERC721URIStorage, Ownable { 
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // string public constant NOT_CURRENT_OWNER = "018001";

    // address public owner;

    // modifier onlyOwner() {
    //     require(msg.sender == owner, NOT_CURRENT_OWNER);
    //     _;
    // }


    constructor() ERC721("Dima Senitskiy", "DS") {
        // owner = msg.sender;
    }


    function mint(address to) public onlyOwner {
        super._safeMint(to, _tokenIds.current());
        _tokenIds.increment();
    }

    function setTokenURI(uint256 tokenId, string memory tokenURI)
        public
        onlyOwner
    {
        super._setTokenURI(tokenId, tokenURI);
    }

    function setTokenURI_M(uint256 tokenId, string memory tokenURI , string memory tokenURI_M, uint64 _timeStart)
        public
        onlyOwner
    {
        super._setTokenURI_M(tokenId, tokenURI, tokenURI_M, _timeStart);
    }

    function createNFT(uint256 _tokenId, string memory tokenURIOrigin, string memory tokenURI) 
        external { //} onlyOwner {
        // returns (uint256)
    // {
        // super._safeMint(to, _tokenIds.current());
        _tokenIds.increment();
// 
        // uint256 newItemId = _tokenIds.current();
        // _mint(owner, _tokenId);
        // _setTokenURI(_tokenId, tokenURIOrigin, tokenURI);

        // return newItemId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

//   function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
//     super._mint(_to, _tokenId);
//     super._setTokenUri(_tokenId, _uri);
//   }


// For ERC721 tokens, we need to ensure that the specific token id or index is eliminated. 
// Much like the addTokenTo() and _mint() function, our _burn() function uses super to call 
// a function in our basic ERC721 implementation. First, we clearApproval(), then remove the 
// token from ownership via removeTokenFrom() and use the Transfer event to alert this change 
// on the front end. Next, we eliminate the metadata associated with that token by deleting 
// what is mapped to that particular token index. Lastly, much like removing a token from 
// ownership, we rearrange our allTokens array so that we replace the _tokenId index with the 
// last token in the array.

}