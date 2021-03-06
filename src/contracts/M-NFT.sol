// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import './ERC721/ERC721.sol';
import "./utils/Counters.sol";
import './utils/Ownable.sol';
import "./ERC721/extensions/ERC721URIStorage_M.sol"; // changed import
import "./ERC721/extensions/ERC721Burnable.sol";
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
    bool public approveMNF;
    address public Sponsor;  
    mapping(uint256 => address) private _tokenApprovalsMNFT;

    modifier sponsor() {
        //require(msg.sender == Sponsor);
        _;
    }

    constructor() ERC721("v.0.1.10", "M-NFT") {
        // owner = msg.sender;
    }


    function mint() public onlyOwner returns (uint256) {
        address owner = msg.sender;
        super._safeMint(owner, _tokenIds.current());
        // super._safeMint(owner, 5638);
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        // uint256 tokenId = 5638;
        return tokenId;
        //  _tokenIds.current();
    }



    // function setTokenURI(uint256 tokenId, string memory tokenURI)
    //     public
    //     onlyOwner
    // {
    //     super._setTokenURI(tokenId, tokenURI);
    // }

    function create_M_NFT(uint256 tokenId, string memory tokenURI , string memory tokenURI_M, uint64 _timeStart, uint64 _timeStop)
        public
        onlyOwner
    {        
        super._setTokenURI_M(tokenId, tokenURI, tokenURI_M, _timeStart, _timeStop);
    }

    function change_M_NFT(uint256 tokenId, string memory tokenURI_M, uint64 timeStart, uint64 timeStop)
        public
        // onlyOwner
        //sponsor
    {        
        // super._setTokenURI_M(tokenId, tokenURI, tokenURI_M, _timeStart, _timeStop);
        super._changeTokenURI_M( tokenId, tokenURI_M, timeStart, timeStop);
    }

    function _burnTokenId(uint256 tokenId)
        public
        onlyOwner
    {        
        _burn(tokenId);
    } 

    function _approveMNF(address to, uint256 tokenId) public onlyOwner {
        _tokenApprovalsMNFT[tokenId] = to;
    }

    // function() public payable returns (uint256)
    // {
    //     // if (msg.value > 0)
    //     //     Deposit(msg.sender, msg.value);
    // }

    // function bytesBase() public view returns (bytes) {
    //     string base = _baseURI();
    //     return bytes(base).length;
    // }

        

        

//     function createNFT(uint256 _tokenId, string memory tokenURIOrigin, string memory tokenURI) 
//         external { //} onlyOwner {
//         // returns (uint256)
//     // {
//         // super._safeMint(to, _tokenIds.current());
//         _tokenIds.increment();
// // 
//         // uint256 newItemId = _tokenIds.current();
//         // _mint(owner, _tokenId);
//         // _setTokenURI(_tokenId, tokenURIOrigin, tokenURI);

//         // return newItemId;
//     }


    function currentTokenId() public view returns (uint256) {
        return _tokenIds.current() - 1;
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

    // function create_M_NFT(uint256 tokenId, string memory tokenURI , string memory tokenURI_M, uint64 _timeStart)
    //     public
    //     onlyOwner
    // {        
    //     super._setTokenURI_M(tokenId, tokenURI, tokenURI_M, _timeStart);
    // }

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