document.addEventListener("DOMContentLoaded", (event) => {
  account_address = document.querySelector(".account_address");
  btnConnectWallet = document.querySelector(".connectWallet");

  if (window.ethereum) {
    web3.eth.getAccounts(function (err, accounts) {
      if (err != null) console.error("An error occurred: " + err);
      else if (accounts.length == 0)
        console.log("User is not logged in to MetaMask");
      else {
        console.log("User is logged in to MetaMask");
        getAccount();
      }
    });
  } else {
    alert("Please install MetaMask wallet :)");
  }

  async function getAccount() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log("address: ", account);
    account_address.innerHTML =
      account.substring(0, 5) + "..." + account.substring(38, 43);
    btnConnectWallet.style.display = "none";

    document.cookie = account;

    ref_link = document.querySelector(".ref_link");

    if (document.cookie != "") {
      ref_link.innerHTML = window.location.hostname + "?id=" + document.cookie;
    } else {
      ref_link.innerHTML =
        window.location.hostname + "?id=" + "change_to_your_eth_address";
    }
  }

  btnConnectWallet.addEventListener("click", () => {
    if (window.ethereum) {
      getAccount();
    } else {
      alert("Please install MetaMask wallet :)");
    }
  });

  function switchNetwork() {
    ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x38",
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "BNB",
            symbol: "bnb",
            decimals: 18,
          },
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ],
    });
  }

  switchNetwork();
});
