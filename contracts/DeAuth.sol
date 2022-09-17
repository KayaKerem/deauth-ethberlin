// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract DeAuth {

   event AddNewPassword(
        address indexed from,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );
   event Disconnect(
        address indexed from,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );
    
   event changePassword(
        address fromOld,
        address indexed fromNew,
        uint256 timestamp,
        string socialMedia,
        string walletApp
    );

    //Social medias that have passwords from DeAuth
    mapping(address => mapping(string => string[])) ConnectedSocialMedias;

    constructor(){}

    //This function provides us to connecting a new social media account with our wallet
    function connectNewSocialMedia(string memory socialMedia,string memory walletApp,address walletAddress) public{ 
        require(!checkAValueExistInList(socialMedia, ConnectedSocialMedias[msg.sender][walletApp]),"Social media already connected to DeAuth");
        walletAddress = msg.sender;
        ConnectedSocialMedias[walletAddress][walletApp].push(socialMedia);
        emit AddNewPassword(
            walletAddress,
            block.timestamp,
            socialMedia,
            walletApp
        );
    } 
    //This function provides us to move our social media connection old wallet address to new wallet address
    function changeSocialMediaPassword(string memory socialMedia,string memory walletApp,address newWalletAddress)public{
        require(checkAValueExistInList(socialMedia, ConnectedSocialMedias[msg.sender][walletApp]),"Social media is not connected to DeAuth");
        uint256 index = indexOfValue(socialMedia,ConnectedSocialMedias[msg.sender][walletApp]);
        remove(index,ConnectedSocialMedias[msg.sender][walletApp]);
        ConnectedSocialMedias[newWalletAddress][walletApp].push(socialMedia);
        emit changePassword(
            msg.sender,
            newWalletAddress,
            block.timestamp,
            socialMedia,
            walletApp
        );
    }

        //This function provides us to disconnecting a social media account that already connected to deAuth
    function disconnectSocialMedia(string memory socialMedia,string memory walletApp) public{ 
        require(checkAValueExistInList(socialMedia, ConnectedSocialMedias[msg.sender][walletApp]),"Social media is not connected to DeAuth");
        uint256 index = indexOfValue(socialMedia,ConnectedSocialMedias[msg.sender][walletApp]);
        remove(index,ConnectedSocialMedias[msg.sender][walletApp]);
        emit Disconnect(
            msg.sender,
            block.timestamp,
            socialMedia,
            walletApp
        );
    } 

    //Removing the value in a list that exist the value
    function remove(uint256 index,string[] storage list)private {
        for(uint256 i = index; i < list.length - 1; i++ ){
            list[i] = list[i + 1];
        }
        list.pop();
    }

    //Checking is the list exist the value
    function checkAValueExistInList(string memory value,string[] memory list) public pure returns(bool ret){
        for(uint256 i = 0; i < list.length;i++){
            if(keccak256(bytes(list[i])) == keccak256(bytes(value))){
                ret = true;
                return ret;
            }
        }
        ret = false;
        return ret;
    }

    //Returns index of the value in the list
    function indexOfValue(string memory value,string[] memory list) public pure returns(uint256 index){
        for(index = 0; index < list.length;index++){
            if(keccak256(bytes(list[index])) == keccak256(bytes(value))){
                return index;
            }
        }
    }


    function getConnectedSocialMedias(address owner,string memory walletApp)external view returns(string[] memory){
        return ConnectedSocialMedias[owner][walletApp];
    }


}
