document.addEventListener("DOMContentLoaded", (event) => {
  copy_ref_link = document.querySelector(".copy_ref_link");
  copy_ref_link.addEventListener("click", function () {
    var ref_link = document.getElementsByClassName("ref_link")[0];

    copyToCliBoard(ref_link.innerHTML);
  });

  function copyToCliBoard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    $("#copy-button").attr("data-bs-original-title", "Copied!");
    $("#copy-button").attr("title", "Copied!");
    $("#copy-button").tooltip("show");

    setTimeout(() => {
      $("#copy-button").tooltip("hide");
      $("#copy-button").attr("title", "Copy to clipboard");
      $("#copy-button").attr("data-bs-original-title", "");
    }, 500);
  }

  ref_link = document.querySelector(".ref_link");

  if (document.cookie != "") {
    ref_link.innerHTML = window.location.hostname + "?id=" + document.cookie;
  } else {
    ref_link.innerHTML =
      window.location.hostname + "?id=" + "change_to_your_eth_address";
  }
});
