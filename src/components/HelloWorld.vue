<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3 class="text-center mb-0">DeAuth</h3>
        <!-- <nav class="nav nav-masthead justify-content-center float-md-end"> -->
        <!-- <a class="nav-link active" aria-current="page" href="#"
            >My Accounts</a
          > -->
        <!-- <button type="button" class="btn btn-primary">My Accounts</button> -->
        <!-- </nav> -->
      </div>
    </header>

    <main class="px-3" style="padding-top: 100px">
      <h1>Link your passwords to your wallet</h1>
      <p class="lead">
        Link the <b> passwords</b> of your social media accounts to your
        <b> wallet. </b> Maximum <b>security </b>, minimum<b> memory.</b>
      </p>
      <p class="lead">
        <button
          v-if="!isConnected"
          type="button"
          class="btn btn-primary"
          style="margin-top: 20px"
          @click="connectWallet"
        >
          Connect Your Wallet
        </button>
      </p>
    </main>

    <footer class="mt-auto text-white-50">
      <p>
        Cover template for
        <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by
        <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.
      </p>
    </footer>
  </div>
</template>

<script>
// import { ethers } from "ethers";
export default {
  name: "HelloWorld",
  data() {
    return {
      isConnected: false,
      jobName: "",
      jobDesc: "",
      currentAccount: "0x1883D25defF8C0F18CDd81fEe1067aC27327616d",
      currentContract: null,
      contractAddress: "0xedaE04603b092a06C927900002b47341F9f4C9c9",
    };
  },
  methods: {
    checkConnectedWalletExist: async function () {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Make sure you have metamask!");

          return false;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          this.currentAccount = account;
          this.isConnected = false;
          return true;
        } else {
          console.log("No authorized account found");

          return false;
        }
      } catch (error) {
        console.log(error);

        return false;
      }
    },
    connectWallet: async function () {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected", accounts[0]);
        this.isConnected = true;
        this.currentAccount = accounts[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.checkConnectedWalletExist();
    console.log(this.checkConnectedWalletExist());
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap"); */
@import "~bootstrap/dist/css/bootstrap.css";
</style>
