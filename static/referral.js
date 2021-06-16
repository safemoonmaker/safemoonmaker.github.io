document.addEventListener("DOMContentLoaded", (event) => {
  $(".copy_ref_link").click(function () {
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

    alert("Copied!");
  }

  ref_link = document.querySelector(".ref_link");

  if (document.cookie != "") {
    ref_link.innerHTML = window.location.hostname + "?id=" + document.cookie;
  } else {
    ref_link.innerHTML =
      window.location.hostname + "?id=" + "change_to_your_eth_address";
  }
});
