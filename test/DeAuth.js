const { expect } = require('chai');
const { ethers} = require('hardhat');
const provider = ethers.provider;


describe("Lock Contract",function(){
    let user1, user2;
    let connectedSocialMediasUser1 = [];
    let connectedSocialMediasUser2 = [];


    before(async function(){
        [user1, user2, user1New, user2New] = await ethers.getSigners();        
        DeAuth = await ethers.getContractFactory("DeAuth");
        deAuth = await DeAuth.deploy();
    });


    afterEach(async function(){
        console.log("User1 address: ",user1.address);
        console.log("User2 address: ",user2.address);
        connectedSocialMediasUser1 = deAuth.connect(user1).getConnectedSocialMedias("metamask");
        connectedSocialMediasUser2 = deAuth.connect(user2).getConnectedSocialMedias("metamask");
    });


    it("Add social media to user1 and user2 when the lists are empty",async function(){
        await deAuth.connect(user1).connectNewSocialMedia("instagram","metamask");
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask"))[0]).to.be.equal("instagram")
        await deAuth.connect(user2).connectNewSocialMedia("twitter","metamask");
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask"))[0]).to.be.equal("twitter")
    });

    it("Add social media to user1 and user2 when the lists are not empty",async function(){
        await deAuth.connect(user1).connectNewSocialMedia("facebook","metamask");
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask")).includes("facebook")).to.be.equal(true);
        await deAuth.connect(user2).connectNewSocialMedia("reddit","metamask");
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask")).includes("reddit")).to.be.equal(true);
    });


    it("Move our social media one wallet address to another",async function(){
        const currentSocialMediasUser1 = (await deAuth.connect(user1).getConnectedSocialMedias("metamask"));
        await deAuth.connect(user1).changeSocialMediaPassword("instagram","metamask",user1New.address);
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask")).length).to.be.equal(currentSocialMediasUser1.length-1);
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask")).includes("instagram")).to.be.equal(false);
        expect((await deAuth.connect(user1New).getConnectedSocialMedias("metamask")).includes("instagram")).to.be.equal(true);   

        const currentSocialMediasUser2 = (await deAuth.connect(user2).getConnectedSocialMedias("metamask"));
        await deAuth.connect(user2).changeSocialMediaPassword("reddit","metamask",user2New.address);
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask")).length).to.be.equal(currentSocialMediasUser2.length-1);
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask")).includes("reddit")).to.be.equal(false);
        expect((await deAuth.connect(user2New).getConnectedSocialMedias("metamask")).includes("reddit")).to.be.equal(true);   

    });
    it("Disconnect one of the social media accounts from deAuth",async function(){
        const currentSocialMediasUser1 = (await deAuth.connect(user1).getConnectedSocialMedias("metamask"));
        await deAuth.connect(user1).disconnectSocialMedia("facebook","metamask");
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask")).length).to.be.equal(currentSocialMediasUser1.length-1);
        expect((await deAuth.connect(user1).getConnectedSocialMedias("metamask")).includes("facebook")).to.be.equal(false);

        const currentSocialMediasUser2 = (await deAuth.connect(user2).getConnectedSocialMedias("metamask"));
        await deAuth.connect(user2).disconnectSocialMedia("twitter","metamask");
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask")).length).to.be.equal(currentSocialMediasUser2.length-1);
        expect((await deAuth.connect(user2).getConnectedSocialMedias("metamask")).includes("twitter")).to.be.equal(false);
    });
    


})


