import { ethers } from "./ethers.js";
let signer = null;
let provider;
let account;
let address;
let status;
let token_symbol;
let token_decimals;
const delay = ms => new Promise(res => setTimeout(res, ms));
const ethereumButton = document.querySelector('.enableEthereumButton');
let start_day = "9/16/2023"; // m/d/y

import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
    WagmiCore,
    WagmiCoreChains,
    WagmiCoreConnectors,
  } from 'https://unpkg.com/@web3modal/ethereum@2.6.2/dist/cdn/bundle.js'
  
import { Web3Modal } from 'https://unpkg.com/@web3modal/html@2.6.2/dist/cdn/bundle.js'

// Equivalent to importing from @wagmi/core
const { configureChains, createConfig, getAccount, connect, disconnect, fetchToken, readContract, writeContract, waitForTransaction } = WagmiCore
// Equivalent to importing from @wagmi/core/chains
const { mainnet } = WagmiCoreChains
// Equivalent to importing from @wagmi/core/providers
const { CoinbaseWalletConnector } = WagmiCoreConnectors

const chains = [mainnet]
const projectId = '6949ddab69e3f3ad129979ed765e3b5d'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3Modal = new Web3Modal({ projectId }, ethereumClient)

var contract_1;
var address_1 = "0xe43239Df09Fe7c380BBdc6366e6B8b903e1302d0";
var abi_1 = [{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"referrals","type":"uint256[7]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOTAL_REF","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSiteInfo","outputs":[{"name":"_totalInvested","type":"uint256"},{"name":"_totalBonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalInvested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"}],"name":"invest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"availableBalance","type":"uint256"},{"name":"depositLength","type":"uint256"},{"name":"totalDeposit","type":"uint256"},{"name":"totalWithdrawn","type":"uint256"},{"name":"totalReferrals","type":"uint256"},{"name":"totalBonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tokenAddr","type":"address"},{"name":"wallet","type":"address"},{"name":"start","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"}];var add = "0xfcEed4BCC8B4401cE5eb5128F4E3d163c51221A4";

var token_1;
var token_address_1 = "0x8999B8c0bB24719ACe3fb25Df985C9329c9E2B99";
var token_abi_1 = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

ethereumButton.addEventListener('click', () => {
    getAccountDetails();
    if(status != 'connected') {
        web3Modal.openModal();
    }
    if(status == 'connected') {
        disconnect();
    }
});

$('.btn-deposit').click(function(){
    var plan = $(this).attr("attr-plan");
    var ref = getCookie('ref_link');

    if (ref == "") {
        ref = address;
    }
    if (plan == 0) {
        var amount = '3300000';
        var textd = "Buy (0.33% $Metro)";
    }
    if (plan == 1) {
        var amount = '5500000';
      var textd = "Buy (0.55% $Metro)";
    }
    if (plan == 2) {
        var amount = '8800000';
      var textd = "Buy (0.88% $Metro)";
    }
    if (plan == 3) {
        var amount = '13200000';
      var textd = "Buy (1.32% $Metro)";
    }

    deposit_user_1(ref,plan,amount).then($(this).html(textd));
});

$('#buttonWithdraw_1').click(function(){
    withdraw_user_1();
});

async function deposit_user_1(ref_address,plan,amount) {
    amount = ethers.parseUnits(amount, token_decimals);
    var hash = await writeContract({
      address: token_address_1,
      abi: token_abi_1,
      functionName: 'approve',
      args: [address_1,amount],
    });
    const wait = await waitForTransaction({
      hash: hash.hash,
    })
    await writeContract({
      address: address_1,
      abi: abi_1,
      functionName: 'invest',
      args: [ref_address,plan],
    })
}

async function withdraw_user_1() {
    await writeContract({
      address: address_1,
      abi: abi_1,
      functionName: 'withdraw',
    })
}

async function getAccountDetails() {
    await web3Modal.setDefaultChain(mainnet);
    account = await getAccount();
    var parsed_account = JSON.parse(cleanStringify(account));
    address = parsed_account.address;
    status = parsed_account.status;
    console.log('Status : '+status);
    
    if(status != 'connected') {
        ethereumButton.innerHTML = "Connect";
        var reflink = document.getElementById('reflink');
        reflink.setAttribute("value", "");
        $('#total_referrals_1').html('X');
        $('#referral_bonus_1').html('X');
        $('#acc_total_deposit_1').html('X');
        $('#acc_total_withdraw_1').html('X');
        $('#acc_available_1').html('X');
        $("#history_1").html("<tr><td colspan='3' style='text-align:center;'><div style='padding:15px; font-size: 16px;'>No Data</div></td></tr>");
    }
    if(status == 'connected') {
        console.log("Account Address : "+address);
        var accFirst = address.substring(0, 3);
        var accLast = address.slice(-3);
        ethereumButton.innerHTML = accFirst+'...'+accLast+" &nbsp;<i class='fa fa-power-off fa-fw'></i>";
        var reflink = document.getElementById('reflink');
        reflink.setAttribute("value", 'https://app.metromax.pro/?ref='+address);
        var allowance = await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getAllowance',
          args: [address],
        })
        console.log("Allowance : "+allowance);
        
        var getUserTotalReferrals = ethers.formatUnits(await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserTotalReferrals',
          args: [address],
        }), 0);
        var getUserReferralTotalBonus = ethers.formatUnits(await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserReferralTotalBonus',
          args: [address],
        }), token_decimals);
        var getUserTotalDeposits = ethers.formatUnits(await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserTotalDeposits',
          args: [address],
        }), token_decimals);
        var getUserTotalWithdrawn = ethers.formatUnits(await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserTotalWithdrawn',
          args: [address],
        }), token_decimals);
        var getUserAvailable = ethers.formatUnits(await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserAvailable',
          args: [address],
        }), token_decimals);
        
        $('#total_referrals_1').html(getUserTotalReferrals);
        $('#referral_bonus_1').html((+getUserReferralTotalBonus).toFixed(2));
        $('#acc_total_deposit_1').html((+getUserTotalDeposits).toFixed(0));
        $('#acc_total_withdraw_1').html((+getUserTotalWithdrawn).toFixed(5));
        $('#acc_available_1').html((+getUserAvailable).toFixed(5));
        
        var amountOfDeposits = await readContract({
          address: address_1,
          abi: abi_1,
          functionName: 'getUserAmountOfDeposits',
          args: [address],
        })
        var column = "";
        for (let i = 0; i < amountOfDeposits; i++) {
            var history_a = await readContract({
              address: address_1,
              abi: abi_1,
              functionName: 'getUserDepositInfo',
              args: [address,i],
            })
            var plan = ethers.formatUnits(history_a[0],0);
            if (plan == 0) {
                var plan_name = "Cottage";
                var generate = "3600";
            }
            if (plan == 1) {
                var plan_name = "House";
                var generate = "8500";
            }
            if (plan == 2) {
                var plan_name = "Villa";
                var generate = "16800";
            }
            if (plan == 3) {
                var plan_name = "Hotel";
                var generate = "30000";
            }
            var amount = ethers.formatUnits(history_a[2],token_decimals);
            var start = new Date(ethers.formatUnits(history_a[3],0)*1000).toLocaleDateString("en-US");
            var finish = new Date(ethers.formatUnits(history_a[4],0)*1000).toLocaleDateString("en-US");
            column = column+"<tr>"+"<td style='width:120px;'><img src='../asset/img/plan/"+plan+".png'></td><td style='width:200px;'><span class='plan'>"+plan_name+" #"+history_a[3]+"</span>Start : "+start+"<br>Finish : "+finish+"</td><td><div style='height:10px;'></div>Generate<br><span class='profit'>"+generate+" <small>USDT Hourly</small></span></td>"+"</tr>";
        }
        $("#history_1").html(column);
    }
}

async function getContractDetails() {
    const token_info = await fetchToken({
      address: token_address_1,
    })
    console.log("---------------------------------");
    console.log("Token Address : "+token_address_1);
    token_symbol = token_info.symbol;
    token_decimals = token_info.decimals;
    console.log("Token Symbol : "+token_symbol);
    console.log("Token Decimal : "+token_decimals);
    console.log("Contract Address : "+address_1);
    var contract_balance = await readContract({
      address: address_1,
      abi: abi_1,
      functionName: 'getContractBalance',
    })
    console.log("Contract Balance : "+contract_balance);
    var contract_info = await readContract({
      address: address_1,
      abi: abi_1,
      functionName: 'getSiteInfo',
    })
    console.log("Contract Total Invested : "+contract_info[0]);
    console.log("Contract Total Bonus : "+contract_info[1]);
    
    var total_balance = ethers.formatUnits(contract_balance, token_decimals);
    var total_deposit = ethers.formatUnits(contract_info[0], token_decimals);
    var total_bonus = ethers.formatUnits(contract_info[1], token_decimals);
    $('#total_balance_1').html((+total_balance).toFixed(0));
    $('#total_deposit_1').html((+total_deposit).toFixed(0));
    $('#total_bonus_1').html((+total_bonus).toFixed(0));
    
    var d = new Date();         //timestamp
    var da = d.getDate();       //day
    var mon = d.getMonth() + 1; //month
    var yr = d.getFullYear();   //year
    var thisDay = mon + "/" + da + "/" + yr;
    var project_age = days_beetween(parseDate(start_day),parseDate(thisDay));
    $('#project_age').html(project_age);
}

let url_string = window.location.href;
let url = new URL(url_string);
let ref_link = url.searchParams.get("ref");
if(ref_link != null){
    setCookie('ref_link', ref_link, 2);
}
if(getCookie('ref_link') == ''){
    setCookie('ref_link', add, 2);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function cleanStringify(object) {
    if (object && typeof object === 'object') {
        object = copyWithoutCircularReferences([object], object);
    }
    return JSON.stringify(object);

    function copyWithoutCircularReferences(references, object) {
        var cleanObject = {};
        Object.keys(object).forEach(function(key) {
            var value = object[key];
            if (value && typeof value === 'object') {
                if (references.indexOf(value) < 0) {
                    references.push(value);
                    cleanObject[key] = copyWithoutCircularReferences(references, value);
                    references.pop();
                } else {
                    cleanObject[key] = '###_Circular_###';
                }
            } else if (typeof value !== 'function') {
                cleanObject[key] = value;
            }
        });
        return cleanObject;
    }
}

function days_beetween(date1, date2) {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);
    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);
}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

$('#copyBut').click(function(){
    var aux = document.getElementById("reflink");
    aux.select();
    document.execCommand("copy");
    console.log("copy");
});

getContractDetails();
setInterval(function(){
    getContractDetails();
},10000);
setInterval(function(){
    getAccountDetails();
},3000);
