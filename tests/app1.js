// Load environment variables
require("dotenv").config();
const path = require("path");
const crypto = require('crypto');

const near = require("near-api-js");
const { transactions } = require("near-api-js");
// const { contract, contractMethods } = require("../utils/near-utils");
 const { 
		Contract, KeyPair, Account,
		utils: { format: { parseNearAmount }},
		transactions: { deployContract, functionCall },
	} = near;


var SnappyJS = require('snappyjs')
let str1 = "{\"hash\":\"b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da\",\"ver\":1,\"vin_sz\":1,\"vout_sz\":2,\"lock_time\":\"Unavailable\",\"size\":258,\"relayed_by\":\"64.179.201.80\",\"block_height\":12200,\"tx_index\":\"12563028\",\"inputs\":[{\"prev_out\":{\"hash\":\"a3e2bcc9a5f776112497a32b05f4b9e5b2405ed9\",\"value\":\"100000000\",\"tx_index\":\"12554260\",\"n\":\"2\"},\"script\":\"76a914641ad5051edd97029a003fe9efb29359fcee409d88ac\"}],\"out\":[{\"value\":\"98000000\",\"hash\":\"29d6a3540acfa0a950bef2bfdc75cd51c24390fd\",\"script\":\"76a914641ad5051edd97029a003fe9efb29359fcee409d88ac\"},{\"value\":\"2000000\",\"hash\":\"17b5038a413f5c5ee288caa64cfab35a0c01914e\",\"script\":\"76a914641ad5051edd97029a003fe9efb29359fcee409d88ac\"}]}";

const homedir = require("os").homedir();
const CREDENTIALS_DIR = ".near-credentials";
const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
const UnencryptedFileSystemKeyStore = near.keyStores.UnencryptedFileSystemKeyStore;
const keyStore = new UnencryptedFileSystemKeyStore(credentialsPath)

const secret = "This is a company secret 🤫";
const sha256Hasher = crypto.createHmac("sha256", secret);
let arr = [];

while(arr.length < 200){
  arr.push(str1);
}

function byteCount(s) {
  return encodeURI(s).split(/%..|./).length - 1;
}

// console.log(byteCount(JSON.stringify([{"_id":"611e68fd8fa814181de2775c","index":0,"guid":"c3e696b3-ab5c-41b3-b9de-08f32ff18acd","isActive":true,"balance":"$2,051.24","picture":"http://placehold.it/32x32","age":37,"eyeColor":"brown","name":"Le Soto","gender":"male","company":"ONTALITY","email":"lesoto@ontality.com","phone":"+1 (949) 501-2021"},{"_id":"611e68fddfe8c741fd63e3bc","index":1,"guid":"d2fe6056-880c-4ec6-b505-c2ad9da152eb","isActive":false,"balance":"$3,314.31","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":"Vilma Mcfadden","gender":"female","company":"ENJOLA","email":"vilmamcfadden@enjola.com","phone":"+1 (914) 576-2564"},{"_id":"611e68fd6b699764826d4578","index":2,"guid":"8645bb40-3b6e-4dac-9829-1aedc6817d0a","isActive":false,"balance":"$3,374.17","picture":"http://placehold.it/32x32","age":22,"eyeColor":"brown","name":"Meghan Livingston","gender":"female","company":"MOBILDATA","email":"meghanlivingston@mobildata.com","phone":"+1 (802) 479-3723"},{"_id":"611e68fd1832e9a800e70f93","index":3,"guid":"c3c384e7-8914-4c56-ac15-c1be2d38fdfc","isActive":true,"balance":"$1,604.89","picture":"http://placehold.it/32x32","age":25,"eyeColor":"brown","name":"Ratliff Gray","gender":"male","company":"PULZE","email":"ratliffgray@pulze.com","phone":"+1 (865) 591-3582"},{"_id":"611e68fd6cc5ce63e11caba3","index":4,"guid":"82e780b1-07e7-423b-9a9a-af419339ffa2","isActive":true,"balance":"$3,615.40","picture":"http://placehold.it/32x32","age":20,"eyeColor":"blue","name":"Hartman Bishop","gender":"male","company":"COMTEXT","email":"hartmanbishop@comtext.com","phone":"+1 (812) 403-2547"},{"_id":"611e68fdd1240e12931385b7","index":5,"guid":"2c1c19fb-c03f-46c2-b518-45289062a933","isActive":false,"balance":"$2,284.13","picture":"http://placehold.it/32x32","age":34,"eyeColor":"blue","name":"Kinney Delacruz","gender":"male","company":"LUXURIA","email":"kinneydelacruz@luxuria.com","phone":"+1 (845) 413-3072"},{"_id":"611e68fd1e4978334180fb98","index":6,"guid":"768209f7-6d00-4620-b9d0-2d8154eca099","isActive":false,"balance":"$1,445.87","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":"Amber Head","gender":"female","company":"PHUEL","email":"amberhead@phuel.com","phone":"+1 (889) 506-2570"},{"_id":"611e68fd7363bff8eccf2604","index":7,"guid":"704c02d1-0feb-4638-a3ac-83d410ee600f","isActive":true,"balance":"$2,872.24","picture":"http://placehold.it/32x32","age":38,"eyeColor":"blue","name":"Morton Knowles","gender":"male","company":"TRIPSCH","email":"mortonknowles@tripsch.com","phone":"+1 (835) 533-3564"},{"_id":"611e68fd019e9d74d977434a","index":8,"guid":"8a33c537-4091-4aea-923d-c766f668df54","isActive":true,"balance":"$2,184.80","picture":"http://placehold.it/32x32","age":33,"eyeColor":"blue","name":"Tania Aguilar","gender":"female","company":"ZENSURE","email":"taniaaguilar@zensure.com","phone":"+1 (986) 595-3460"},{"_id":"611e68fd4a740b262ef01421","index":9,"guid":"66f9cf92-ff80-488e-bfa9-191dbc1acd34","isActive":true,"balance":"$2,896.16","picture":"http://placehold.it/32x32","age":21,"eyeColor":"green","name":"Scott Bender","gender":"male","company":"BIOTICA","email":"scottbender@biotica.com","phone":"+1 (951) 422-2075"},{"_id":"611e68fd5041540f91a926e5","index":10,"guid":"a0bce85c-9390-4284-b942-848bd1ab8f29","isActive":true,"balance":"$1,941.37","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":"Ramsey Emerson","gender":"male","company":"TETAK","email":"ramseyemerson@tetak.com","phone":"+1 (838) 506-2184"},{"_id":"611e68fd439db0797f9cb9e8","index":11,"guid":"0c86a039-3702-4976-9f56-93df7dc69afe","isActive":true,"balance":"$3,545.15","picture":"http://placehold.it/32x32","age":27,"eyeColor":"brown","name":"Muriel Williams","gender":"female","company":"QUANTALIA","email":"murielwilliams@quantalia.com","phone":"+1 (846) 407-3663"},{"_id":"611e68fdb602928a76787f53","index":12,"guid":"4dba34af-c397-4531-a060-076a2004ea0a","isActive":true,"balance":"$2,452.44","picture":"http://placehold.it/32x32","age":36,"eyeColor":"blue","name":"Adele Crawford","gender":"female","company":"ZILLATIDE","email":"adelecrawford@zillatide.com","phone":"+1 (879) 452-2261"},{"_id":"611e68fd159965c1d257ad13","index":13,"guid":"5f59f529-40a1-4691-b8e8-1d9ad1a2382c","isActive":false,"balance":"$2,977.17","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":"Dixon Wyatt","gender":"male","company":"CRUSTATIA","email":"dixonwyatt@crustatia.com","phone":"+1 (988) 423-2602"}])))
// console.log(byteCount(snappy.compress((JSON.stringify(arr)))));

function stringToUint(string) {
  var string = btoa(unescape(encodeURIComponent(string))),
      charList = string.split(''),
      uintArray = [];
  for (var i = 0; i < charList.length; i++) {
      uintArray.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
  var encodedString = String.fromCharCode.apply(null, uintArray),
      decodedString = decodeURIComponent(escape(atob(encodedString)));
  return decodedString;
}

// let data = snappy.compress((JSON.stringify(arr)))
var compressed = SnappyJS.compress(stringToUint(JSON.stringify(arr)));
var uncompressed = SnappyJS.uncompress(compressed);

console.log(byteCount(JSON.stringify(uncompressed)));
console.log(byteCount(JSON.stringify(compressed)));

// console.log(JSON.stringify(compressed));
// Setup default client options
const options = {
  networkId:   `testnet`,
  nodeUrl:     `https://rpc.testnet.near.org`,
  walletUrl:   `https://wallet.${process.env.NEAR_NETWORK}.near.org`,
  helperUrl:   `https://helper.${process.env.NEAR_NETWORK}.near.org`,
  explorerUrl: `https://explorer.${process.env.NEAR_NETWORK}.near.org`,
  accountId:   "dev-1629391926849-35015101155242",
  keyStore: keyStore
}

let contractId = "dev-1629391926849-35015101155242";


async function main() {
    
    const client = await near.connect(options);
    const account = await client.account(options.accountId);
    const account_2 = await client.account("dev-1625072038241-90221386101668");
    const contract_account = await client.account(contractId);
    const owner_account = await client.account("rahulsoshte.testnet");
    const account_3 = await client.account("dev-1625071653611-35981054215498");
    const account_4 = await client.account("dev-1625074608971-76452383946912");

    const hash = sha256Hasher.update(JSON.stringify(arr)).digest("hex");
    console.log(arr);
    await account.functionCall(
      contractId,
      "add_txn_data",
      {
      val: hash,
      transactiondata: arr,
      },
      300000000000000,
      // parseNearAmount('10'),
    )

    let result = await account.functionCall(
      contractId,
      "get_txn_data",
      {
      val: hash
      },
      300000000000000,      // parseNearAmount('10'),
    ) 

    const jsjd = Buffer.from(result?.status?.SuccessValue, 'base64').toString('utf-8');
    console.log(jsjd);
  
};

main();

