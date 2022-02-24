var a6_0x5a90ad = a6_0x3444;
(function (_0x52ad63, _0x51c431) {
  var _0xeb6b90 = a6_0x3444,
    _0x3f54b6 = _0x52ad63();
  while (!![]) {
    try {
      var _0x2b5818 =
        (-parseInt(_0xeb6b90(0x124)) / 0x1) *
          (-parseInt(_0xeb6b90(0x105)) / 0x2) +
        (parseInt(_0xeb6b90(0x130)) / 0x3) * (parseInt(_0xeb6b90(0xf3)) / 0x4) +
        parseInt(_0xeb6b90(0xd0)) / 0x5 +
        parseInt(_0xeb6b90(0x137)) / 0x6 +
        parseInt(_0xeb6b90(0x13e)) / 0x7 +
        -parseInt(_0xeb6b90(0x135)) / 0x8 +
        (-parseInt(_0xeb6b90(0xf2)) / 0x9) * (parseInt(_0xeb6b90(0xe5)) / 0xa);
      if (_0x2b5818 === _0x51c431) break;
      else _0x3f54b6["push"](_0x3f54b6["shift"]());
    } catch (_0xe4df3) {
      _0x3f54b6["push"](_0x3f54b6["shift"]());
    }
  }
})(a6_0x58a3, 0x2935c);
import {
  readTextFile,
  createToken,
  copyToCliBoard,
  deployLibrary,
  verifyContract,
  encodeParameters,
  getConstructor,
  getNetwork,
  sleep,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
async function init() {
  getNetwork();
}
init(), console["log"](a6_0x5a90ad(0xd8));
var boss = a6_0x5a90ad(0x12c);
if (getNetwork() == 0x0) var router_address = a6_0x5a90ad(0x14b);
if (getNetwork() == 0x1) var router_address = a6_0x5a90ad(0x148);
console[a6_0x5a90ad(0x13c)](a6_0x5a90ad(0x121), boss),
  console[a6_0x5a90ad(0x13c)]("network", getNetwork());
var btnCreate = document[a6_0x5a90ad(0x129)](".btnCreate");
window[a6_0x5a90ad(0xeb)]
  ? updateParameters()
  : console[a6_0x5a90ad(0x13c)](
      "Please\x20install\x20MetaMask\x20wallet\x20:)"
    );
function updateParameters() {}
function getParameter(_0x1d9bb2, _0x584453) {
  var _0x40f407 = a6_0x5a90ad,
    _0x36099c = $("." + _0x1d9bb2)[_0x40f407(0x12a)]("." + _0x584453)[0x0][
      _0x40f407(0x10f)
    ];
  return _0x36099c == ""
    ? $("." + _0x1d9bb2)["find"]("." + _0x584453)[0x0][_0x40f407(0xfe)]
    : _0x36099c;
}
function txCompleted(_0x1b0b76, _0x50b6d3) {
  var _0x5141fc = a6_0x5a90ad;
  _0x1b0b76 == _0x5141fc(0x11e) && logGaEvent(gaEvents[_0x5141fc(0xcb)]),
    _0x1b0b76 == _0x5141fc(0x101) &&
      (hideLoading(),
      console[_0x5141fc(0x13c)](_0x50b6d3),
      showError(_0x50b6d3),
      logGaEvent(gaEvents[_0x5141fc(0x11c)]),
      (btnCreate["disabled"] = ![]));
}
async function verificationCallback(_0x1a7bca, _0x256fac) {
  var _0x5c3789 = a6_0x5a90ad;
  _0x256fac["status"] == 0x1
    ? (await sleep(0x3c),
      hideLoading(),
      showSuccess(_0x1a7bca),
      console["log"](_0x5c3789(0x107), _0x256fac, _0x1a7bca))
    : (hideLoading(), showError(_0x256fac)),
    (btnCreate[_0x5c3789(0x136)] = ![]);
}
function getRewardToken() {
  var _0x2e44a9 = a6_0x5a90ad,
    _0x4f5b51 = $(_0x2e44a9(0x111))[0x0][_0x2e44a9(0x119)];
  switch (_0x4f5b51) {
    case _0x2e44a9(0x12f):
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return _0x2e44a9(0x109);
    case _0x2e44a9(0x127):
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    case _0x2e44a9(0x116):
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return _0x2e44a9(0x11d);
    case "ADA":
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return _0x2e44a9(0x10b);
    case _0x2e44a9(0xcd):
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return _0x2e44a9(0xe4);
    case _0x2e44a9(0x151):
      console[_0x2e44a9(0x13c)](_0x4f5b51);
      return "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
    case "BUSD":
      console["log"](_0x4f5b51);
      return _0x2e44a9(0x125);
    default:
      console[_0x2e44a9(0x13c)]("invalid\x20token\x20!");
  }
}
$(a6_0x5a90ad(0xe9))["on"]("change", function () {
  var _0x268c08 = a6_0x5a90ad;
  console[_0x268c08(0x13c)](getRewardToken());
});
function checkInputs(_0x242d36, _0x554b67) {
  var _0x24d8d0 = a6_0x5a90ad;
  if (_0x242d36 == "") return alert(_0x24d8d0(0x150)), ![];
  if (_0x554b67 == "") return alert("Enter\x20token\x20symbol\x20!"), ![];
  return !![];
}
btnCreate["addEventListener"](a6_0x5a90ad(0x142), () => {
  var _0x3698fe = a6_0x5a90ad;
  if (typeof provider == undefined || web3Modal[_0x3698fe(0x139)] == "") {
    alert("Connect\x20your\x20wallet\x20first\x20!");
    return;
  } else (btnCreate[_0x3698fe(0x136)] = !![]), logGaEvent(_0x3698fe(0xda));
  if (getTokenType() == "basic") {
    var _0xe49a85 = _0x3698fe(0xd6),
      _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
      _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
      _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
      _0x2bff33 = getParameter(_0xe49a85, "decimals");
    if (!checkInputs(_0x1657f4, _0x219f53)) return;
    console[_0x3698fe(0x13c)](router_address),
      showLoading(),
      createToken(
        _0x3698fe(0x131),
        [_0x1657f4, _0x219f53, _0x2c975c, router_address, boss],
        txCompleted,
        null,
        verificationCallback
      );
  } else {
    if (getTokenType() == "burnable") {
      var _0xe49a85 = "burnable",
        _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
        _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
        _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
        _0x2bff33 = getParameter(_0xe49a85, "decimals");
      if (!checkInputs(_0x1657f4, _0x219f53)) return;
      console[_0x3698fe(0x13c)](router_address),
        showLoading(),
        createToken(
          "burnable",
          [_0x1657f4, _0x219f53, _0x2c975c, router_address, boss],
          txCompleted,
          null,
          verificationCallback
        );
    } else {
      if (getTokenType() == _0x3698fe(0x141)) {
        var _0xe49a85 = _0x3698fe(0x141),
          _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
          _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
          _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
          _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed));
        if (!checkInputs(_0x1657f4, _0x219f53)) return;
        console[_0x3698fe(0x13c)](router_address),
          showLoading(),
          createToken(
            _0x3698fe(0x141),
            [_0x1657f4, _0x219f53, _0x2c975c, router_address, boss],
            txCompleted,
            null,
            verificationCallback
          );
      } else {
        if (getTokenType() == "mintandburn") {
          var _0xe49a85 = _0x3698fe(0xcf),
            _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
            _0x219f53 = getParameter(_0xe49a85, "token_symbol"),
            _0x2c975c = getParameter(_0xe49a85, "token_supply"),
            _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed));
          if (!checkInputs(_0x1657f4, _0x219f53)) return;
          console[_0x3698fe(0x13c)](router_address),
            showLoading(),
            createToken(
              _0x3698fe(0xcf),
              [_0x1657f4, _0x219f53, _0x2c975c, router_address, boss],
              txCompleted,
              null,
              verificationCallback
            );
        } else {
          if (getTokenType() == _0x3698fe(0x122)) {
            var _0xe49a85 = _0x3698fe(0x122),
              _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
              _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
              _0x2c975c = getParameter(_0xe49a85, "token_supply"),
              _0x2bff33 = getParameter(_0xe49a85, "decimals");
            if (!checkInputs(_0x1657f4, _0x219f53)) return;
            console[_0x3698fe(0x13c)](router_address),
              showLoading(),
              createToken(
                _0x3698fe(0x122),
                [_0x1657f4, _0x219f53, _0x2c975c, router_address, boss],
                txCompleted,
                null,
                verificationCallback
              );
          } else {
            if (getTokenType() == "safemoon") {
              var _0xe49a85 = "safemoonTwin",
                _0x1657f4 = getParameter(_0xe49a85, "token_name"),
                _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
                _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
                _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed)),
                _0xe67677 = getParameter(_0xe49a85, _0x3698fe(0x14d)),
                _0x122919 = getParameter(_0xe49a85, _0x3698fe(0x123)),
                _0x3d472f = parseInt(_0x2c975c),
                _0x112cd6 = parseInt(_0x2c975c / 0xf4240) ? 0x0 : 0x1;
              if (!checkInputs(_0x1657f4, _0x219f53)) return;
              showLoading(),
                createToken(
                  _0x3698fe(0x13d),
                  [
                    _0x1657f4,
                    _0x219f53,
                    _0x2c975c,
                    _0xe67677,
                    _0x122919,
                    _0x3d472f,
                    _0x112cd6,
                    router_address,
                    boss,
                  ],
                  txCompleted,
                  null,
                  verificationCallback
                );
            } else {
              if (getTokenType() == "safemoonkiller")
                var _0xe49a85 = _0x3698fe(0xfb),
                  _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
                  _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
                  _0x2c975c = getParameter(_0xe49a85, "token_supply"),
                  _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed)),
                  _0x2393fc = $(_0x3698fe(0x13b))[_0x3698fe(0x12a)](
                    ".max_tx_percent"
                  )[0x0]["value"],
                  _0x184a7b = $(_0x3698fe(0x13b))[_0x3698fe(0x12a)](
                    _0x3698fe(0x118)
                  )[0x0][_0x3698fe(0x10f)],
                  _0x347a3b = $(_0x3698fe(0x13b))["find"](
                    _0x3698fe(0x14f)
                  )[0x0][_0x3698fe(0x10f)],
                  _0x122919 = $(_0x3698fe(0x13b))["find"](
                    _0x3698fe(0x12d)
                  )[0x0][_0x3698fe(0x10f)],
                  _0x50cfa4 = $(_0x3698fe(0x13b))[_0x3698fe(0x12a)](
                    ".marketing_fees"
                  )[0x0][_0x3698fe(0x10f)],
                  _0x4b2d32 = $(_0x3698fe(0x13b))["find"](".tax_fees1")[0x0][
                    _0x3698fe(0x10f)
                  ],
                  _0x174b6e = $(".safemoonKiller")[_0x3698fe(0x12a)](
                    _0x3698fe(0x108)
                  )[0x0][_0x3698fe(0x10f)],
                  _0x3f4cbc = $(_0x3698fe(0x13b))[_0x3698fe(0x12a)](
                    _0x3698fe(0xdd)
                  )[0x0][_0x3698fe(0x10f)];
              else {
                if (getTokenType() == _0x3698fe(0xe8)) {
                  var _0xe49a85 = _0x3698fe(0xe8),
                    _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
                    _0x219f53 = getParameter(_0xe49a85, "token_symbol"),
                    _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
                    _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed)),
                    _0xe67677 = 0x0,
                    _0x122919 = getParameter(_0xe49a85, _0x3698fe(0x123)),
                    _0x3d472f = parseInt(_0x2c975c),
                    _0x112cd6 = parseInt(_0x2c975c / 0xf4240) ? 0x0 : 0x1;
                  if (!checkInputs(_0x1657f4, _0x219f53)) return;
                  showLoading(),
                    createToken(
                      _0x3698fe(0x13d),
                      [
                        _0x1657f4,
                        _0x219f53,
                        _0x2c975c,
                        _0xe67677,
                        _0x122919,
                        _0x3d472f,
                        _0x112cd6,
                        router_address,
                        boss,
                      ],
                      txCompleted,
                      null,
                      verificationCallback
                    );
                } else {
                  if (getTokenType() == _0x3698fe(0x10c)) {
                    var _0xe49a85 = _0x3698fe(0x10c),
                      _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
                      _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
                      _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
                      _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed)),
                      _0xe67677 = getParameter(_0xe49a85, "tax_fees"),
                      _0x122919 = 0x0,
                      _0x3d472f = parseInt(_0x2c975c),
                      _0x112cd6 = parseInt(_0x2c975c / 0xf4240) ? 0x0 : 0x1;
                    if (!checkInputs(_0x1657f4, _0x219f53)) return;
                    showLoading(),
                      createToken(
                        _0x3698fe(0x13d),
                        [
                          _0x1657f4,
                          _0x219f53,
                          _0x2c975c,
                          _0xe67677,
                          _0x122919,
                          _0x3d472f,
                          _0x112cd6,
                          router_address,
                          boss,
                        ],
                        txCompleted,
                        null,
                        verificationCallback
                      );
                  } else {
                    if (getTokenType() == "rewardtoken") {
                      var _0xe49a85 = _0x3698fe(0xd2),
                        _0x1657f4 = getParameter(_0xe49a85, _0x3698fe(0xf0)),
                        _0x219f53 = getParameter(_0xe49a85, _0x3698fe(0xd4)),
                        _0x2c975c = getParameter(_0xe49a85, _0x3698fe(0x14a)),
                        _0x2bff33 = getParameter(_0xe49a85, _0x3698fe(0xed)),
                        _0xbd726d = getRewardToken(),
                        _0x4aefb8 = getParameter(_0xe49a85, "reward_fees"),
                        _0x184a7b = getParameter(_0xe49a85, "marketing_wallet");
                      console[_0x3698fe(0x13c)](typeof _0x184a7b, _0x184a7b),
                        console["log"](typeof _0xbd726d, _0xbd726d);
                      var _0x122919 = getParameter(_0xe49a85, "liquidity_fees"),
                        _0x50cfa4 = getParameter(_0xe49a85, "marketing_fees"),
                        _0x4250a3 = getParameter(_0xe49a85, _0x3698fe(0x120));
                      if (!checkInputs(_0x1657f4, _0x219f53)) return;
                      if (_0x184a7b == "") {
                        alert("Enter\x20marketing\x20wallet\x20!");
                        return;
                      }
                      if (
                        web3[_0x3698fe(0xe2)][_0x3698fe(0xde)](_0x184a7b) == ![]
                      ) {
                        alert(_0x3698fe(0xe6));
                        return;
                      }
                      if (
                        _0x184a7b[_0x3698fe(0x145)]() ==
                        ethereum[_0x3698fe(0xf4)]
                      ) {
                        alert(_0x3698fe(0x133));
                        return;
                      }
                      showLoading(),
                        deployLibrary(
                          _0x3698fe(0xe7),
                          "",
                          function (_0x3c5e17, _0x1905b9) {
                            var _0x16e525 = _0x3698fe;
                            if (_0x3c5e17 == _0x16e525(0x11e)) {
                              var _0x216e91 = _0x1905b9;
                              createToken(
                                _0x16e525(0xe7),
                                [
                                  _0x1657f4,
                                  _0x219f53,
                                  _0x2c975c,
                                  _0xbd726d,
                                  _0x4aefb8,
                                  _0x122919,
                                  _0x50cfa4,
                                  _0x4250a3,
                                  _0x184a7b,
                                  router_address,
                                  boss,
                                ],
                                txCompleted,
                                _0x216e91,
                                verificationCallback
                              );
                            }
                            _0x3c5e17 == _0x16e525(0x101) &&
                              (hideLoading(),
                              console[_0x16e525(0x13c)](_0x1905b9),
                              showError(_0x1905b9),
                              (btnCreate[_0x16e525(0x136)] = ![]));
                          },
                          function (_0x1e9128, _0x21395e) {}
                        );
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
function showSuccess(_0x4be0be) {
  var _0x40c7b0 = a6_0x5a90ad;
  if (getNetwork() == 0x0) var _0x12de40 = _0x40c7b0(0xe0);
  else {
    if (getNetwork() == 0x1) var _0x12de40 = _0x40c7b0(0x128);
  }
  (_0x12de40 = _0x12de40["replace"]("token_address", _0x4be0be)),
    $("#view_token")[_0x40c7b0(0x134)](_0x40c7b0(0x102), _0x12de40),
    window[_0x40c7b0(0x14c)][_0x40c7b0(0x113)](_0x40c7b0(0x13f), _0x4be0be),
    window[_0x40c7b0(0x14c)][_0x40c7b0(0x113)]("bsc_scan_link", _0x12de40),
    window[_0x40c7b0(0x147)]("success", "_self");
}
async function getBoss() {
  var _0x144392 = a6_0x5a90ad;
  const _0x25269f = await contract["methods"]
    [_0x144392(0x121)]()
    [_0x144392(0x106)]();
  return _0x25269f;
}
async function getFees() {
  var _0x54e25e = a6_0x5a90ad;
  const _0x2f9369 = await contract[_0x54e25e(0x138)]
    [_0x54e25e(0x10a)]()
    ["call"]();
  return _0x2f9369;
}
async function getReferralFees() {
  var _0x5e311d = a6_0x5a90ad;
  const _0x41293e = await contract[_0x5e311d(0x138)]
    [_0x5e311d(0xea)]()
    [_0x5e311d(0x106)]();
  return _0x41293e;
}
function setPrice(_0x4e9ac9) {
  var _0x3cca45 = a6_0x5a90ad;
  _0x4e9ac9 == 0x0
    ? ($(_0x3cca45(0xdc))[_0x3cca45(0x119)](_0x3cca45(0xec)),
      $(_0x3cca45(0xcc))["css"](_0x3cca45(0xdf), "none"))
    : ($("#price")["text"](_0x4e9ac9[_0x3cca45(0x110)]() + _0x3cca45(0x12b)),
      $(_0x3cca45(0xcc))[_0x3cca45(0x144)](_0x3cca45(0xdf), "none"));
}
$(a6_0x5a90ad(0x117))["on"](a6_0x5a90ad(0x142), () => {
  var _0x323f32 = a6_0x5a90ad;
  $(_0x323f32(0x13a))["css"](_0x323f32(0xdf), _0x323f32(0xca)),
    console[_0x323f32(0x13c)]("token_type:", getTokenType()),
    logGaEvent(gaEvents["click_standard"]),
    setPrice(0x0);
}),
  $(a6_0x5a90ad(0xef))["on"](a6_0x5a90ad(0x142), () => {
    var _0x226543 = a6_0x5a90ad;
    $(_0x226543(0x13a))[_0x226543(0x144)](_0x226543(0xdf), _0x226543(0xca)),
      console[_0x226543(0x13c)](_0x226543(0xf9), getTokenType()),
      logGaEvent(gaEvents[_0x226543(0x10e)]),
      setPrice(0x0);
  }),
  $(a6_0x5a90ad(0xf7))["on"](a6_0x5a90ad(0x142), () => {
    var _0x40451a = a6_0x5a90ad;
    $(".actionGroup")[_0x40451a(0x144)](_0x40451a(0xdf), _0x40451a(0xca)),
      console[_0x40451a(0x13c)](_0x40451a(0xf9), getTokenType()),
      logGaEvent(gaEvents[_0x40451a(0xd5)]),
      setPrice(0x0);
  }),
  $(a6_0x5a90ad(0xf5))["on"](a6_0x5a90ad(0x142), () => {
    var _0x810fa1 = a6_0x5a90ad;
    $(_0x810fa1(0x13a))[_0x810fa1(0x144)](_0x810fa1(0xdf), _0x810fa1(0xca)),
      console[_0x810fa1(0x13c)](_0x810fa1(0xf9), getTokenType()),
      logGaEvent(gaEvents[_0x810fa1(0xf6)]),
      setPrice(0.05);
  }),
  $(a6_0x5a90ad(0xdb))["on"]("click", () => {
    var _0x180be8 = a6_0x5a90ad;
    $(_0x180be8(0x13a))["css"](_0x180be8(0xdf), "block"),
      console[_0x180be8(0x13c)](_0x180be8(0xf9), getTokenType()),
      logGaEvent(gaEvents["select_honeypot"]),
      setPrice(0.1);
  }),
  $(a6_0x5a90ad(0xfa))["on"](a6_0x5a90ad(0x142), () => {
    var _0x120256 = a6_0x5a90ad;
    $(_0x120256(0x13a))["css"](_0x120256(0xdf), _0x120256(0xca)),
      console[_0x120256(0x13c)](_0x120256(0xf9), getTokenType()),
      logGaEvent(gaEvents["click_safemoon"]),
      setPrice(0.1);
  }),
  $(a6_0x5a90ad(0x10d))["on"](a6_0x5a90ad(0x142), () => {
    var _0x264229 = a6_0x5a90ad;
    $(_0x264229(0x13a))[_0x264229(0x144)](_0x264229(0xdf), _0x264229(0xca)),
      console["log"]("token_type:", getTokenType()),
      logGaEvent(gaEvents["select_deflationary"]),
      setPrice(0.2);
  }),
  $("#safemoonkiller-tab")["on"]("click", () => {
    var _0x2adc8f = a6_0x5a90ad;
    $(_0x2adc8f(0x13a))[_0x2adc8f(0x144)](_0x2adc8f(0xdf), _0x2adc8f(0xca)),
      console[_0x2adc8f(0x13c)](_0x2adc8f(0xf9), getTokenType());
  }),
  $(a6_0x5a90ad(0x143))["on"](a6_0x5a90ad(0x142), () => {
    var _0x53b9d0 = a6_0x5a90ad;
    $(_0x53b9d0(0x13a))[_0x53b9d0(0x144)](_0x53b9d0(0xdf), _0x53b9d0(0xca)),
      console[_0x53b9d0(0x13c)](_0x53b9d0(0xf9), getTokenType()),
      logGaEvent(gaEvents["click_liquidity_generator"]),
      setPrice(0.3);
  }),
  $(a6_0x5a90ad(0xf1))["on"]("click", () => {
    var _0x50b9af = a6_0x5a90ad;
    $(_0x50b9af(0x13a))["css"](_0x50b9af(0xdf), "block"),
      console[_0x50b9af(0x13c)](_0x50b9af(0xf9), getTokenType()),
      logGaEvent(gaEvents[_0x50b9af(0xd9)]),
      setPrice(0.5);
  }),
  $("#rewardtoken-tab")["on"](a6_0x5a90ad(0x142), () => {
    var _0x467615 = a6_0x5a90ad;
    $(_0x467615(0x13a))[_0x467615(0x144)](_0x467615(0xdf), _0x467615(0xca)),
      console[_0x467615(0x13c)](_0x467615(0xf9), getTokenType()),
      logGaEvent(gaEvents[_0x467615(0xee)]),
      setPrice(0x1);
  }),
  $("#customized-tab")["on"](a6_0x5a90ad(0x142), () => {
    var _0x3339e2 = a6_0x5a90ad;
    $(_0x3339e2(0x13a))[_0x3339e2(0x144)](_0x3339e2(0xdf), _0x3339e2(0x146)),
      logGaEvent(gaEvents[_0x3339e2(0x149)]);
  });
function getTokenType() {
  var _0xd60c33 = a6_0x5a90ad,
    _0x675727 = $(_0xd60c33(0x140))[_0xd60c33(0x134)]("id");
  return _0x675727;
}
console[a6_0x5a90ad(0x13c)](a6_0x5a90ad(0x104), getTokenType());
function showLoading() {
  var _0x5be0e0 = a6_0x5a90ad;
  $(_0x5be0e0(0x11a))[_0x5be0e0(0x144)](_0x5be0e0(0xdf), _0x5be0e0(0xca)),
    $(".alertLoading")["css"](_0x5be0e0(0xdf), _0x5be0e0(0xca)),
    hideError();
}
function hideLoading() {
  var _0x98655 = a6_0x5a90ad;
  $(_0x98655(0x11a))["css"](_0x98655(0xdf), _0x98655(0x146)),
    $(_0x98655(0x115))[_0x98655(0x144)](_0x98655(0xdf), _0x98655(0x146)),
    $(_0x98655(0xf8))[_0x98655(0x144)]("display", _0x98655(0x146));
}
function showError(_0x3b99f9) {
  var _0x23423e = a6_0x5a90ad;
  JSON[_0x23423e(0xfc)](_0x3b99f9) != "{}"
    ? ($(_0x23423e(0x14e))["text"](JSON[_0x23423e(0xfc)](_0x3b99f9)),
      $(".error")[_0x23423e(0x144)](_0x23423e(0xdf), _0x23423e(0xca)))
    : (_0x3b99f9[_0x23423e(0x110)]()["includes"](
        "insufficient\x20funds\x20for\x20transfer"
      )
        ? $(_0x23423e(0x14e))[_0x23423e(0x119)](_0x23423e(0x100))
        : ($(_0x23423e(0x14e))[_0x23423e(0x119)](_0x3b99f9),
          !JSON[_0x23423e(0xfc)](_0x3b99f9)[_0x23423e(0xd3)](
            "User\x20denied\x20transaction\x20signature"
          ) &&
            $(_0x23423e(0x114))[_0x23423e(0x144)]("display", _0x23423e(0xca))),
      $(_0x23423e(0x14e))[_0x23423e(0x144)](_0x23423e(0xdf), "block"));
}
function a6_0x3444(_0x1bc774, _0x1ff2ed) {
  var _0x58a323 = a6_0x58a3();
  return (
    (a6_0x3444 = function (_0x34441a, _0x1c309c) {
      _0x34441a = _0x34441a - 0xca;
      var _0x201719 = _0x58a323[_0x34441a];
      return _0x201719;
    }),
    a6_0x3444(_0x1bc774, _0x1ff2ed)
  );
}
function hideError() {
  var _0x2d9cff = a6_0x5a90ad;
  $(".error")[_0x2d9cff(0x144)](_0x2d9cff(0xdf), _0x2d9cff(0x146)),
    $(_0x2d9cff(0x114))[_0x2d9cff(0x144)](_0x2d9cff(0xdf), "none");
}
function sendCustomToken(_0x1bbebd, _0x5d111a) {
  var _0x2374df = a6_0x5a90ad,
    _0x46e51d = {
      from: ethereum[_0x2374df(0xf4)],
      to: _0x1bbebd[_0x2374df(0x11b)],
      data: _0x1bbebd[_0x2374df(0x138)]
        [_0x2374df(0x132)](
          _0x1bbebd["_address"],
          web3[_0x2374df(0xe2)][_0x2374df(0xfd)](_0x5d111a[_0x2374df(0x110)]())
        )
        [_0x2374df(0x126)](),
    };
  web3[_0x2374df(0xd7)]
    [_0x2374df(0x103)](_0x46e51d)
    [_0x2374df(0x112)](console[_0x2374df(0x13c)]);
}
async function test_verify() {
  var _0x4fcf77 = a6_0x5a90ad,
    _0xfea0c5 = _0x4fcf77(0xd1),
    _0x4915de = await readTextFile(_0x4fcf77(0x12e)),
    _0x385d76 = _0x4fcf77(0xff),
    _0x5e17f5 = _0x4fcf77(0x11f),
    _0x52ad31 = encodeParameters([_0x4fcf77(0xe3)], ["test\x20abc"]);
  console[_0x4fcf77(0x13c)](_0x4915de),
    alert(_0x4fcf77(0xe1)),
    verifyContract(_0xfea0c5, _0x4915de, _0x5e17f5, _0x385d76, _0x52ad31);
}
function a6_0x58a3() {
  var _0x1ac4fd = [
    "liquiditygenerator",
    ".reward_token",
    "referralFees",
    "ethereum",
    "FREE",
    "decimals",
    "click_reward_token",
    "#mintable-tab",
    "token_name",
    "#frictionlessyield-tab",
    "4196772vvVsiP",
    "4YixNqC",
    "selectedAddress",
    "#mintandburn-tab",
    "select_mintandburn",
    "#burnable-tab",
    ".deployStatus",
    "token_type:",
    "#safemoon-tab",
    "safemoonKiller",
    "stringify",
    "toWei",
    "placeholder",
    "v0.8.7+commit.e28d00a7",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "error",
    "href",
    "sendTransaction",
    "selected_token:",
    "148026phBuWe",
    "call",
    "verificationCallback",
    ".liquidity_fees1",
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "fees",
    "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    "frictionlessyield",
    "#deflationary-tab",
    "select_mintable",
    "value",
    "toString",
    ".reward_token\x20option:selected",
    "then",
    "setItem",
    ".tip",
    ".alertLoading",
    "BNB",
    "#basic-tab",
    ".marketing_wallet",
    "text",
    ".loading",
    "_address",
    "click_cancel",
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "done",
    "Test",
    "tax_fees_extra",
    "boss",
    "honeypot",
    "liquidity_fees",
    "4IwcOOM",
    "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "encodeABI",
    "ETH",
    "https://testnet.bscscan.com/token/token_address#balances",
    "querySelector",
    "find",
    "\x20BNB",
    "0x5B8A969814AEa42CC1faC408e95383eb5c44e059",
    ".liquidity_fees",
    "./static/contracts/test/sol",
    "CAKE",
    "353898fjezDC",
    "standard",
    "transfer",
    "Marketing\x20wallet\x20can\x27t\x20be\x20the\x20same\x20as\x20the\x20owner\x20!",
    "attr",
    "2423168QYRWUx",
    "disabled",
    "533436NUIHiR",
    "methods",
    "cachedProvider",
    ".actionGroup",
    ".safemoonKiller",
    "log",
    "safemoon",
    "757190gzPrcg",
    "new_token_address",
    ".tab-content\x20.active",
    "mintable",
    "click",
    "#liquiditygenerator-tab",
    "css",
    "toLowerCase",
    "none",
    "open",
    "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    "click_customized_token",
    "token_supply",
    "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    "localStorage",
    "tax_fees",
    ".error",
    ".tax_fees",
    "Enter\x20token\x20name\x20!",
    "BTC",
    "block",
    "success",
    "#tx_fee",
    "DOGE",
    "#verify_contract",
    "mintandburn",
    "1634530WxdUoh",
    "0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15",
    "rewardToken",
    "includes",
    "token_symbol",
    "select_burnable",
    "basicToken",
    "eth",
    "hi\x20there\x20parameter\x20here",
    "click_frictionless_yield",
    "click_create",
    "#honeypot-tab",
    "#price",
    ".marketing_fees1",
    "isAddress",
    "display",
    "https://bscscan.com/token/token_address#balances",
    "Verify",
    "utils",
    "string",
    "0xba2ae424d960c26247dd6c32edc70b295c744c43",
    "10cUYyQi",
    "Marketing\x20wallet\x20is\x20not\x20valid\x20!",
    "reward",
  ];
  a6_0x58a3 = function () {
    return _0x1ac4fd;
  };
  return a6_0x58a3();
}
$(a6_0x5a90ad(0xce))["on"](a6_0x5a90ad(0x142), () => {
  test_verify();
});
