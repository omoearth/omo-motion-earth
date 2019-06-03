<template>
  <div>
    <!-- <h1>OMO - MASTER - ACCOUNT</h1>
    <br>
    Public Key {{ OMOpublicKey }}
    <br>
    Secret Key {{ OMOsecret }}
    <br>OMO Balance:
    <span :v-if="OMObalance">{{ OMObalance }}</span>
    <span :v-if="OMOasset_type === 'native'">LUMEN</span>
    <br>
    <br>
    <div class="button" @click="createStellarAccount()">
      Create NEW Account
    </div>
    <div class="button" @click="getNEWAccountBalance(NEWpublicKey)">
      Get NEW Account Balance
    </div>
    <div class="button" @click="transferMoney(OMOsecret, OMOpublicKey)">
      Transfer Money
    </div>
    <br>
    <br>NEW ACCOUNT:
    <br>publicKey:
    <span :v-if="NEWpublicKey">{{ NEWpublicKey }}</span>
    <br>secret:
    <span :v-if="NEWsecret">{{ NEWsecret }}</span>
    <br>balance:
    <span :v-if="NEWasset_type">{{ NEWasset_type }}</span>
    <span :v-if="NEWbalance">{{ NEWbalance }}</span>
    <br>-->
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Prop } from "nuxt-property-decorator";
// const fetch = require("node-fetch");
// const StellarSdk = require("stellar-sdk");

// @Component
// export default class OVoucher extends Vue {
//   @Prop(String) OMOpublicKey: string;
//   @Prop(String) OMOsecret: string;
//   @Prop(String) OMObalance: string;
//   @Prop(String) OMOasset_type: string;

//   @Prop(String) NEWpublicKey: string;
//   @Prop(String) NEWsecret: string;
//   @Prop(String) NEWbalance: string;
//   @Prop(String) NEWasset_type: string;

//   mounted() {
//     this.OMOpublicKey =
//       "GD27LFKAJKTAMYH2YP6PN4CXDSWKSFHG7RABS4YHJV5LGBOHQACM2XRH";
//     this.OMOsecret = "SCG6N3QAAF7DUVTYKGJXRLTMQCDOHC7QVZEF2TM7XW26LCGPJBZTHQWI";
//     this.OMObalance = "0";
//     this.OMOasset_type = "LUMEN";
//     this.NEWbalance = "0";
//     this.NEWasset_type = "LUMEN";
//     this.getOMOAccountBalance(
//       "GD27LFKAJKTAMYH2YP6PN4CXDSWKSFHG7RABS4YHJV5LGBOHQACM2XRH"
//     );
//     this.createStellarAccount();
//   }
//   createStellarAccount() {
//     const pair = StellarSdk.Keypair.random();
//     this.NEWsecret = pair.secret();
//     this.NEWpublicKey = pair.publicKey();

//     this.getOMOAccountBalance(this.NEWpublicKey);
//   }
//   async getOMOAccountBalance(publicKey) {
//     const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
//     const account = await server.loadAccount(publicKey);
//     this.OMObalance = account.balances[0].balance;
//     this.OMOasset_type = account.balances[0].asset_type;
//   }
//   async getNEWAccountBalance(publicKey) {
//     const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
//     try {
//       const response = await fetch(
//         `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
//       );
//       const responseJSON = await response.json();
//       alert("Account funded");
//       const account2 = await server.loadAccount(publicKey);
//       this.NEWbalance = account2.balances[0].balance;
//       this.NEWasset_type = account2.balances[0].asset_type;
//     } catch (e) {
//       alert(e);
//     }
//   }
//   async transferMoney(OMOsecret, OMOpublicKey) {
//     const sourceSecretKey = OMOsecret;
//     const sourcePublicKey = OMOpublicKey;

//     const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
//     const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

//     const receiverPublicKey = this.NEWpublicKey;
//     StellarSdk.Network.useTestNetwork();

//     (async function main() {
//       // Transactions require a valid sequence number that is specific to this account.
//       // We can fetch the current sequence number for the source account from Horizon.
//       const account = await server.loadAccount(sourcePublicKey);

//       // Right now, there's one function that fetches the base fee.
//       // In the future, we'll have functions that are smarter about suggesting fees,
//       // e.g.: `fetchCheapFee`, `fetchAverageFee`, `fetchPriorityFee`, etc.
//       const fee = await server.fetchBaseFee();

//       const transaction = new StellarSdk.TransactionBuilder(account, { fee })
//         // Add a payment operation to the transaction
//         .addOperation(
//           StellarSdk.Operation.payment({
//             destination: receiverPublicKey,
//             // The term native asset refers to lumens
//             asset: StellarSdk.Asset.native(),
//             // Specify 350.1234567 lumens. Lumens are divisible to seven digits past
//             // the decimal. They are represented in JS Stellar SDK in string format
//             // to avoid errors from the use of the JavaScript Number data structure.
//             amount: "10"
//           })
//         )
//         // Make this transaction valid for the next 30 seconds only
//         .setTimeout(30)
//         // Uncomment to add a memo (https://www.stellar.org/developers/learn/concepts/transactions.html)
//         // .addMemo(StellarSdk.Memo.text('Hello world!'))
//         .build();

//       // Sign this transaction with the secret key
//       // NOTE: signing is transaction is network specific. Test network transactions
//       // won't work in the public network. To switch networks, use the Network object
//       // as explained above (look for StellarSdk.Network).
//       transaction.sign(sourceKeypair);

//       // Let's see the XDR (encoded in base64) of the transaction we just built
//       console.log(transaction.toEnvelope().toXDR("base64"));

//       // Submit the transaction to the Horizon server. The Horizon server will then
//       // submit the transaction into the network for us.
//       try {
//         const transactionResult = await server.submitTransaction(transaction);
//         alert("success");
//         return;
//       } catch (e) {
//         alert(e);
//       }
//     })();
//   }
// }
//
</script>
