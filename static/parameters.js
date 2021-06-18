document.addEventListener("DOMContentLoaded", (event) => {
  contract_address = "0x8a84d01F594e8A3259E99E8595d27bB452940532";

  var btnApprove = document.querySelector(".btnApprove");

  var btnCreate = document.querySelector(".btnCreate");

  var showNewTokenAddress = document.querySelector(".newTokenAddress");

  var btnCopyTokenAddress = document.querySelector(".copyTokenAddress");

  var successDialog = document.getElementById("success_creation");

  if (window.ethereum) {
    web3 = new Web3(ethereum);
  } else {
    console.log("Please install MetaMask wallet :)");
  }

  contract = new web3.eth.Contract(abi, contract_address);

  getFees().then(function (result) {
    fees = (result / 10 ** 18).toString();
  });

  getBoss().then(function (result) {
    boss = result;

    const urlParams = new URLSearchParams(window.location.search);

    referralId = urlParams.get("id");
    if (referralId == null) {
      referralId = boss;
    }
  });

  getReferralFees().then(function (result) {
    referralFees = result / 10 ** 18;
    earnRefferalText = document.querySelector(".earnRefferalText");
    earnRefferalText.innerHTML =
      "Earn " +
      referralFees +
      " BNB 🤑 every time a new token's created using your link below.";
  });

  btnApprove.addEventListener("click", () => {
    var token_name = document.querySelector(".token_name").value;
    var token_symbol = document.querySelector(".token_symbol").value;
    var token_supply = document.querySelector(".token_supply").value;

    contract.methods
      .setTokenData(token_name, token_symbol, 18, token_supply, referralId)
      .send({ from: ethereum.selectedAddress })
      .then(function (response) {
        console.log;
        btnApprove.disabled = true;
        btnCreate.disabled = false;
      });
  });

  btnCreate.addEventListener("click", () => {
    web3 = new Web3(ethereum);
    const price = fees; //bnb
    const transactionParameters = {
      to: contract_address, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: web3.utils.toWei(price, "ether"), // Only required to send ether to the recipient from the initiating external account.
    };

    web3.eth.sendTransaction(transactionParameters).then(function (response) {
      rawResponse = response;
      console.log(response);

      newToken = web3.eth.abi.decodeParameters(
        ["string", "address"],
        rawResponse.logs[1].data
      );

      console.log(newToken);

      newTokenAddress = newToken[1];

      showSuccess(newTokenAddress);

      btnApprove.disabled = false;
      btnCreate.disabled = true;
    });
  });

  function copyToCliBoard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    $("#copyTokenAddress").attr("data-bs-original-title", "Copied!");
    $("#copyTokenAddress").attr("title", "Copied!");
    $("#copyTokenAddress").tooltip("show");

    setTimeout(() => {
      $("#copyTokenAddress").tooltip("hide");
      $("#copyTokenAddress").attr("title", "Copy to clipboard");
      $("#copyTokenAddress").attr("data-bs-original-title", "");
    }, 500);
  }

  function showSuccess(newTokenAddress) {
    successDialog.style.display = "block";
    showNewTokenAddress.innerHTML = newTokenAddress;
    var webUrl = document.location.href.split("#")[0];
    document.location.href = webUrl + "#success_creation";
  }

  async function getBoss() {
    const bossValue = await contract.methods.boss().call();
    return bossValue;
  }

  async function getFees() {
    const fees = await contract.methods.fees().call();
    return fees;
  }

  async function getReferralFees() {
    const referralFees = await contract.methods.referralFees().call();
    return referralFees;
  }

  btnCopyTokenAddress.addEventListener("click", () => {
    copyToCliBoard(showNewTokenAddress.innerHTML);
  });
});
