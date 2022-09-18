const hre = require('hardhat');

async function main(){
    //Get account
    const [user1,user1New] = await hre.ethers.getSigners();


    //Get the contract deploy
    const DeAuth = await hre.ethers.getContractFactory("DeAuth");
    const deAuth = await DeAuth.deploy();
    await deAuth.deployed();
    console.log("DeAuth deployed to ",deAuth.address);


    //Connect new social medias from (address = user1)
    await deAuth.connect(user1).connectNewSocialMedia("instagram","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("reddit","metamask");
    await deAuth.connect(user1).connectNewSocialMedia("twitter","metamask");
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social media that connected to DeAuth (address = user1New) =>",(await deAuth.connect(user1New).getConnectedSocialMedias("metamask")));


    //Change wallet address for spesific social media user1 to user1New
    await deAuth.connect(user1).changeSocialMediaPassword("instagram","metamask",user1New.address);
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social media that connected to DeAuth (address = user1New) =>",(await deAuth.connect(user1New).getConnectedSocialMedias("metamask")));


    //Disconnect social media from (address = user1)
    await deAuth.connect(user1).disconnectSocialMedia("twitter","metamask");
    console.log("User 1 social media that connected to DeAuth (address = user1) =>",(await deAuth.connect(user1).getConnectedSocialMedias("metamask")));
    console.log("User 1 social media that connected to DeAuth (address = user1New) =>",(await deAuth.connect(user1New).getConnectedSocialMedias("metamask")));
}

//Handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
