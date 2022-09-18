<template>
  <div class="cover-container d-flex w-100 h-100 flex-column">
    <header class="mb-auto">
      <div>
        <!-- <h3 class="text-center">DeAuth</h3> -->
        <img
          src="../assets/deauthLogo.png"
          class="text-center"
          style="margin-left: -145px"
        />

        <button
          v-if="!isConnected"
          type="button"
          class="btn btn-primary"
          style="margin-top: 0px"
          @click="connectWallet"
        >
          Connect Your Wallet
        </button>
        <button
          v-if="isConnected"
          @click="logoutWallet"
          type="button"
          class="btn btn-primary"
          style="margin-top: 30px"
        >
          {{ currentAccount.substring(0, 8) }}...{{
            currentAccount.substring(8, 16)
          }}
        </button>
        <!-- </nav> -->
      </div>
    </header>

    <main class="px-3" style="padding-top: 0px">
      <h1>Link your passwords to your wallet</h1>
      <p class="lead">
        Link the <b> passwords</b> of your social media accounts to your
        <b> wallet. </b> Maximum <b>security </b>, minimum<b> memory.</b>
      </p>

      <div
        v-if="isConnected"
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          value="facebook"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btnradio1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            /></svg
        ></label>

        <input
          value="instagram"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            /></svg
        ></label>

        <input
          value="reddit"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-reddit"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"
            />
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"
            /></svg
        ></label>
        <input
          value="twitter"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio4"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio4"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg
        ></label>
        <input
          value="linkedin"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio5"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            /></svg
        ></label>
        <input
          value="github"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio6"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio6"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            /></svg
        ></label>
        <input
          value="google"
          v-model.number="selected"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio7"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnradio7"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
            /></svg
        ></label>
      </div>

      <p class="lead">
        <button
          v-if="isConnected"
          type="button"
          class="btn btn-primary"
          style="margin-top: 20px"
          @click="getSign"
        >
          Link Now
        </button>
      </p>
    </main>

    <footer class="mt-auto text-white-50">
      <p>
        <!-- <a href="" class="text-black">Bootstrap</a>, by
        <a href="" class="text-black">@mdo</a>. -->
      </p>
    </footer>
  </div>
</template>

<script>
import { ethers } from "ethers";
import Swal from "sweetalert2";
const md5 = require("md5");

// const bcrypt = require("bcrypt");
export default {
  name: "Main",
  data() {
    return {
      selected: null,
      isConnected: false,
      signature: null,
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
        this.successMessage();
      } catch (error) {
        console.log(error);
      }
    },
    successMessage() {
      Swal.fire({
        title: "Your wallet is connected.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    },
    refuseError(msg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        color: "#716add",
        text: msg,
      });
    },
    signSuccess(signature) {
      Swal.fire({
        icon: "success",
        title: "Well Done...",
        color: "#716add",
        text: "This password is special and unique password specific to the account you are connecting to.",
        footer: signature,
      });
    },
    async signMessage(message) {
      try {
        console.log({ message });
        if (!window.ethereum)
          throw new Error("No crypto wallet found. Please install it.");

        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("provider");
        console.log(provider);
        const signer = provider.getSigner();
        console.log("signer");
        console.log(signer);
        const signature = await signer.signMessage(message);
        const address = await signer.getAddress();
        this.hashSignature(signature);
        this.signSuccess(this.signature);
        return {
          message,
          signature,
          address,
        };
      } catch (err) {
        this.refuseError(err.message);
      }
    },
    async getSign() {
      if (this.selected == null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You have to choose a social media",
        });
      } else {
        const { message, signature, address } = await this.signMessage(
          this.selected
        );

        this.signature = signature;

        console.log(message);
        console.log(address);
      }
    },
    hashSignature(signature) {
      this.signature = md5(signature);
    },
    logoutWallet() {
      Swal.fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out",
      }).then((result) => {
        if (result.isConfirmed) {
          this.currentAccount = null;
          this.isConnected = false;
          Swal.fire("Succesfully Log Out!", "success");
        }
      });
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
