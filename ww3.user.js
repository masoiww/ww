// ==UserScript==
// @name         TestingWW
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  WW_1
// @author       BeYiiu
// @contributor  sharpedge
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @match        https://www.wolvesville.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async function () {
  "use strict";
  window.alert("Script Bot play custom !! Coppyright by xQtFT. ");
  _0x312044();
  var _0x1ace8b = "";
  let _0xa1e900 = localStorage.getItem("authtokens").toString();
  let _0xe2ccee = _0xa1e900.split('"')[3];
  let _0x1ec498 = {versionNumber: 1, platform: "web", locale: "en"};
  let _0x1fad1f = {method: "PUT", headers: {"content-Type": "application/json", Authorization: "Bearer " + _0xe2ccee}, body: JSON.stringify(_0x1ec498)};
  const _0x1df841 = await fetch("https://core.api-wolvesville.com/players/meAndCheckAppVersion", _0x1fad1f);
  const _0x4958a2 = await _0x1df841.json();
  _0x1ace8b = await _0x4958a2.player.username;
  console.log(_0x1ace8b);
  setInterval(async function () {
              _0x5c834a();
              _0x690f91();
            }, 1000);
  
  function _0x312044() {
    var _0x4bea37 = localStorage.setItem;
    localStorage.setItem = function (_0x5b4152, _0x5e1fd9) {
      if (_0x5b4152 == "open-page") {
        localStorage.removeItem(_0x5b4152);
        console.log("Tried to detect multi window, blocked");
        return;
      }
      _0x4bea37.apply(this, arguments);
    };
  }
  function _0x690f91() {
    var _0x4681dd = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[4]/div[2]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x4681dd != null) {
      if (_0x4681dd.outerHTML.includes(">START GAME<")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[4]/div[2]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        console.log("Bot started the game!");
      }
    }
    var _0x5c8541 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[20]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x5c8541 != null) {
      if (_0x5c8541.outerHTML.includes(">Continue</div>")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[20]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        var _0x1deafc = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x1deafc != null) {
          if (_0x1deafc.outerHTML.includes("Play again") || _0x1deafc.outerHTML.includes("Play again with friends")) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            var _0xe1c22b = document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0xe1c22b != null) {
              document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }
            console.log("Bot backed the game!");
          }
        }
      }
    }
    var _0x277168 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[21]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x277168 != null) {
      if (_0x277168.outerHTML.includes(">Continue</div>")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[21]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        var _0x3b24c8 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x3b24c8 != null) {
          if (_0x3b24c8.outerHTML.includes("Play again") || _0x3b24c8.outerHTML.includes("Play again with friends")) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            var _0x4fda06 = document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x4fda06 != null) {
              document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }
            console.log("Bot backed the game!");
          }
        }
      }
    }
  }
  function _0x4e8f29(_0x108d5a, _0x1d4916) {
    var _0x2824d1 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x108d5a + "]/div[" + _0x1d4916 + "]/div/div[1]/div/div[6]/div";
    var _0x128943 = document.evaluate(_0x2824d1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x128943 != null) {
      document.evaluate(_0x2824d1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
      console.log("Bot voted!");
    }
  }
  function _0x2d4b49(_0x278b6d, _0x4d89cb) {
    for (let _0x4663ea = 0; _0x4663ea < 6; _0x4663ea++) {
      var _0xd46456 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x4663ea + "]/div";
      var _0x5b592c = document.evaluate(_0xd46456, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x5b592c != null) {
        if (_0x5b592c.outerHTML.includes("/static/media/gunner_bullet") || _0x5b592c.outerHTML.includes("/static/media/priest_holy_water")) {
          document.evaluate(_0xd46456, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x575f49 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x278b6d + "]/div[" + _0x4d89cb + "]/div/div[5]/div[1]/div/div";
          var _0x92416 = document.evaluate(_0x575f49, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x92416 != null) {
            document.evaluate(_0x575f49, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
          var _0x127db7 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x278b6d + "]/div[" + _0x4d89cb + "]/div/div[4]/div[1]/div/div";
          var _0x986de1 = document.evaluate(_0x127db7, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x986de1 != null) {
            document.evaluate(_0x127db7, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
          var _0x4e98ba = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x278b6d + "]/div[" + _0x4d89cb + "]/div/div[6]/div[1]/div/div";
          var _0x1cd844 = document.evaluate(_0x4e98ba, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x1cd844 != null) {
            document.evaluate(_0x4e98ba, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
        }
      }
    }
  }
  function _0x1e2859() {
    for (let _0x57a6e5 = 0; _0x57a6e5 < 6; _0x57a6e5++) {
      var _0x302356 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x57a6e5 + "]/div";
      var _0x22da1c = document.evaluate(_0x302356, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x22da1c != null) {
        if (_0x22da1c.outerHTML.includes("/static/media/priest_holy_water")) {
          document.evaluate(_0x302356, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x27cf93 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x27cf93 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x1d9a34 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x1d9a34 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0xe6f463 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0xe6f463 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x1bdb74 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x1bdb74 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x53f439 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x53f439 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x439c6d = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x439c6d != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x26a23c = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x26a23c != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x46a639 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x46a639 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
        }
      }
    }
  }
  function _0x57b213(_0x5f1282, _0x2257bc) {
    for (let _0x5ca41a = 0; _0x5ca41a < 6; _0x5ca41a++) {
      var _0x485842 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x5ca41a + "]/div";
      var _0x594c1a = document.evaluate(_0x485842, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x594c1a != null) {
        if (_0x594c1a.outerHTML.includes("/static/media/junior_werewolf_selection_marker") || _0x594c1a.outerHTML.includes("/static/media/splitwolf_bind_bar")) {
          document.evaluate(_0x485842, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x14bff5 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5f1282 + "]/div[" + _0x2257bc + "]/div/div[5]/div[1]/div/div";
          var _0x23e5f1 = document.evaluate(_0x14bff5, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x23e5f1 != null) {
            document.evaluate(_0x14bff5, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot tagged!");
          }
          var _0x5609a5 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5f1282 + "]/div[" + _0x2257bc + "]/div/div[4]/div[1]/div/div";
          var _0x3fffec = document.evaluate(_0x5609a5, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x3fffec != null) {
            document.evaluate(_0x5609a5, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot tagged!");
          }
        }
      }
    }
  }
  function _0x3920c2() {
    var _0x316912 = null;
    for (let _0x1b7a53 = 1; _0x1b7a53 < 5; _0x1b7a53++) {
      for (let _0x562bb7 = 1; _0x562bb7 < 5; _0x562bb7++) {
        var _0x4c69af = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x1b7a53 + "]/div[" + _0x562bb7 + "]";
        var _0x592c66 = document.evaluate(_0x4c69af, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x592c66 != null) {
          if (_0x592c66.outerHTML.includes(_0x1ace8b + "</div>")) {
            var _0x273961 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x1b7a53 + "]/div[" + _0x562bb7 + "]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x273961 != null) {
              if (_0x273961.outerHTML.includes("vigilante")) {
                _0x316912 = "vigilante";
              } else if (_0x273961.outerHTML.includes("priest")) {
                _0x316912 = "priest";
              } else if (_0x273961.outerHTML.includes("junior_werewolf") || _0x273961.outerHTML.includes("juniorwerewolf") || _0x273961.outerHTML.includes("junior_wolf") || _0x273961.outerHTML.includes("juniorwolf") || _0x273961.outerHTML.includes("werewolf_junior") || _0x273961.outerHTML.includes("werewolfjunior") || _0x273961.outerHTML.includes("wolf_junior") || _0x273961.outerHTML.includes("wolfjunior")) {
                _0x316912 = "junior_werewolf";
              } else if (_0x273961.outerHTML.includes("nightmare_werewolf") || _0x273961.outerHTML.includes("nightmarewerewolf") || _0x273961.outerHTML.includes("nightmare_wolf") || _0x273961.outerHTML.includes("nightmarewolf") || _0x273961.outerHTML.includes("werewolf_nightmare") || _0x273961.outerHTML.includes("werewolfnightmare") || _0x273961.outerHTML.includes("wolf_nightmare") || _0x273961.outerHTML.includes("wolfnightmare")) {
                _0x316912 = "nightmare_werewolf";
              } else if (_0x273961.outerHTML.includes("wolf_shaman") || _0x273961.outerHTML.includes("wolfshaman") || _0x273961.outerHTML.includes("werewolf_shaman") || _0x273961.outerHTML.includes("werewolfshaman") || _0x273961.outerHTML.includes("shaman_werewolf") || _0x273961.outerHTML.includes("shamanwerewolf") || _0x273961.outerHTML.includes("shaman_wolf") || _0x273961.outerHTML.includes("shamanwolf")) {
                _0x316912 = "wolf_shaman";
              } else if (_0x273961.outerHTML.includes("shadow_wolf") || _0x273961.outerHTML.includes("shadowwolf") || _0x273961.outerHTML.includes("shadow_werewolf") || _0x273961.outerHTML.includes("shadowwerewolf") || _0x273961.outerHTML.includes("werewolf_shadow") || _0x273961.outerHTML.includes("werewolfshadow") || _0x273961.outerHTML.includes("wolf_shadow") || _0x273961.outerHTML.includes("wolfshadow")) {
                _0x316912 = "shadow_wolf";
              } else if (_0x273961.outerHTML.includes("guardian_wolf") || _0x273961.outerHTML.includes("guardianwolf") || _0x273961.outerHTML.includes("guardian_werewolf") || _0x273961.outerHTML.includes("guardianwerewolf") || _0x273961.outerHTML.includes("werewolf_guardian") || _0x273961.outerHTML.includes("werewolfguardian") || _0x273961.outerHTML.includes("wolf_guardian") || _0x273961.outerHTML.includes("wolfguardian")) {
                _0x316912 = "guardian_wolf";
              } else if (_0x273961.outerHTML.includes("alpha_werewolf") || _0x273961.outerHTML.includes("alphawerewolf") || _0x273961.outerHTML.includes("alpha_wolf") || _0x273961.outerHTML.includes("alphawolf") || _0x273961.outerHTML.includes("wolf_alpha") || _0x273961.outerHTML.includes("wolfalpha") || _0x273961.outerHTML.includes("werewolf_alpha") || _0x273961.outerHTML.includes("werewolfalpha")) {
                _0x316912 = "alpha_werewolf";
              } else if (_0x273961.outerHTML.includes("gunner")) {
                _0x316912 = "gunner";
              } else if (_0x273961.outerHTML.includes("doctor") || _0x273961.outerHTML.includes("nurse")) {
                _0x316912 = "doctor";
              } else if (_0x273961.outerHTML.includes("bodyguard")) {
                _0x316912 = "bodyguard";
              } else if (_0x273961.outerHTML.includes("harlot") || _0x273961.outerHTML.includes("redlady")) {
                _0x316912 = "redlady";
              } else if (_0x273961.outerHTML.includes("seer")) {
                if (_0x273961.outerHTML.includes("aura_seer") || _0x273961.outerHTML.includes("auraseer")) {
                  _0x316912 = "aura_seer";
                } else if (_0x273961.outerHTML.includes("seer_apprentice") || _0x273961.outerHTML.includes("seerapprentice")) {
                  _0x316912 = "seer_apprentice";
                } else if (_0x273961.outerHTML.includes("wolf_seer") || _0x273961.outerHTML.includes("wolfseer") || _0x273961.outerHTML.includes("werewolf_seer")) {
                  _0x316912 = "wolf_seer";
                } else if (_0x273961.outerHTML.includes("spirit_seer") || _0x273961.outerHTML.includes("spiritseer")) {
                  _0x316912 = "spirit_seer";
                } else {
                  _0x316912 = "seer";
                }
              } else if (_0x273961.outerHTML.includes("headhunter")) {
                _0x316912 = "headhunter";
              } else if (_0x273961.outerHTML.includes("cursed")) {
                _0x316912 = "cursed";
              } else if (_0x273961.outerHTML.includes("flower_child") || _0x273961.outerHTML.includes("flowerchild")) {
                _0x316912 = "flower_child";
              } else if (_0x273961.outerHTML.includes("loudmouth")) {
                _0x316912 = "loudmouth";
              } else if (_0x273961.outerHTML.includes("beast_hunter") || _0x273961.outerHTML.includes("beasthunter")) {
                _0x316912 = "beast_hunter";
              } else if (_0x273961.outerHTML.includes("witch")) {
                _0x316912 = "witch";
              } else if (_0x273961.outerHTML.includes("mayor")) {
                _0x316912 = "mayor";
              } else if (_0x273961.outerHTML.includes("sheriff")) {
                _0x316912 = "sheriff";
              } else if (_0x273961.outerHTML.includes("detective")) {
                _0x316912 = "detective";
              } else if (_0x273961.outerHTML.includes("jailer")) {
                _0x316912 = "jailer";
              } else if (_0x273961.outerHTML.includes("night_watchman") || _0x273961.outerHTML.includes("nightwatchman")) {
                _0x316912 = "night_watchman";
              } else if (_0x273961.outerHTML.includes("butcher")) {
                _0x316912 = "butcher";
              } else if (_0x273961.outerHTML.includes("tough_guy") || _0x273961.outerHTML.includes("toughguy")) {
                _0x316912 = "tough_guy";
              } else if (_0x273961.outerHTML.includes("bully")) {
                _0x316912 = "bully";
              } else if (_0x273961.outerHTML.includes("warden")) {
                _0x316912 = "warden";
              } else if (_0x273961.outerHTML.includes("marksman")) {
                _0x316912 = "marksman";
              } else if (_0x273961.outerHTML.includes("analyst")) {
                _0x316912 = "analyst";
              } else if (_0x273961.outerHTML.includes("gambler")) {
                _0x316912 = "gambler";
              } else if (_0x273961.outerHTML.includes("mortician")) {
                _0x316912 = "mortician";
              } else if (_0x273961.outerHTML.includes("violinist")) {
                _0x316912 = "violinist";
              } else if (_0x273961.outerHTML.includes("ritualist")) {
                _0x316912 = "ritualist";
              } else if (_0x273961.outerHTML.includes("conjuror")) {
                _0x316912 = "conjuror";
              } else if (_0x273961.outerHTML.includes("baker")) {
                _0x316912 = "baker";
              } else if (_0x273961.outerHTML.includes("grumpy_grandma") || _0x273961.outerHTML.includes("grumpygrandma")) {
                _0x316912 = "grumpy_grandma";
              } else if (_0x273961.outerHTML.includes("preacher")) {
                _0x316912 = "preacher";
              } else if (_0x273961.outerHTML.includes("forger")) {
                _0x316912 = "forger";
              } else if (_0x273961.outerHTML.includes("astronomer")) {
                _0x316912 = "astronomer";
              } else if (_0x273961.outerHTML.includes("trapper")) {
                _0x316912 = "trapper";
              } else if (_0x273961.outerHTML.includes("flagger")) {
                _0x316912 = "flagger";
              } else if (_0x273961.outerHTML.includes("avenger")) {
                _0x316912 = "avenger";
              } else if (_0x273961.outerHTML.includes("bellringer")) {
                _0x316912 = "bellringer";
              } else if (_0x273961.outerHTML.includes("fortune_teller") || _0x273961.outerHTML.includes("fortuneteller")) {
                _0x316912 = "fortune_teller";
              } else if (_0x273961.outerHTML.includes("pacifist")) {
                if (_0x273961.outerHTML.includes("wolfpacifist") || _0x273961.outerHTML.includes("wolf_pacifist") || _0x273961.outerHTML.includes("werewolf_pacifist") || _0x273961.outerHTML.includes("werewolfpacifist") || _0x273961.outerHTML.includes("pacifist_wolf") || _0x273961.outerHTML.includes("pacifistwolf") || _0x273961.outerHTML.includes("pacifist_werewolf") || _0x273961.outerHTML.includes("pacifistwerewolf") || _0x273961.outerHTML.includes("wolf-pacifist")) {
                  _0x316912 = "wolfpacifist";
                } else {
                  _0x316912 = "pacifist";
                }
              } else if (_0x273961.outerHTML.includes("instigator")) {
                _0x316912 = "instigator";
              } else if (_0x273961.outerHTML.includes("lurker")) {
                _0x316912 = "lurker";
              } else if (_0x273961.outerHTML.includes("werewolf_fan") || _0x273961.outerHTML.includes("werewolffan")) {
                _0x316912 = "werewolf_fan";
              } else if (_0x273961.outerHTML.includes("grave_robber")) {
                _0x316912 = "grave_robber";
              } else if (_0x273961.outerHTML.includes("fool")) {
                _0x316912 = "fool";
              } else if (_0x273961.outerHTML.includes("split_wolf") || _0x273961.outerHTML.includes("splitwolf") || _0x273961.outerHTML.includes("split_werewolf") || _0x273961.outerHTML.includes("splitwerewolf") || _0x273961.outerHTML.includes("werewolf_split") || _0x273961.outerHTML.includes("werewolfsplit") || _0x273961.outerHTML.includes("wolf_split") || _0x273961.outerHTML.includes("wolfsplit")) {
                _0x316912 = "split_wolf";
              } else if (_0x273961.outerHTML.includes("kitten_wolf") || _0x273961.outerHTML.includes("kittenwolf") || _0x273961.outerHTML.includes("kitten_werewolf") || _0x273961.outerHTML.includes("kittenwerewolf") || _0x273961.outerHTML.includes("wolf_kitten") || _0x273961.outerHTML.includes("wolfkitten") || _0x273961.outerHTML.includes("werewolf_kitten") || _0x273961.outerHTML.includes("werewolfkitten")) {
                _0x316912 = "kitten_wolf";
              } else if (_0x273961.outerHTML.includes("wolffluencer")) {
                _0x316912 = "wolffluencer";
              } else if (_0x273961.outerHTML.includes("voodoo_werewolf") || _0x273961.outerHTML.includes("voodoowerewolf") || _0x273961.outerHTML.includes("voodoo_wolf") || _0x273961.outerHTML.includes("voodoowolf") || _0x273961.outerHTML.includes("werewolf_voodoo") || _0x273961.outerHTML.includes("werewolfvoodoo") || _0x273961.outerHTML.includes("wolf_voodoo") || _0x273961.outerHTML.includes("wolfvoodoo") || _0x273961.outerHTML.includes("voodoo")) {
                _0x316912 = "voodoo_werewolf";
              } else if (_0x273961.outerHTML.includes("storm_wolf") || _0x273961.outerHTML.includes("stormwolf") || _0x273961.outerHTML.includes("storm_werewolf") || _0x273961.outerHTML.includes("stormwerewolf") || _0x273961.outerHTML.includes("wolf_storm") || _0x273961.outerHTML.includes("wolfstorm") || _0x273961.outerHTML.includes("werewolf_storm") || _0x273961.outerHTML.includes("werewolfstorm")) {
                _0x316912 = "storm_wolf";
              } else if (_0x273961.outerHTML.includes("swamp_wolf") || _0x273961.outerHTML.includes("swampwolf") || _0x273961.outerHTML.includes("swamp_werewolf") || _0x273961.outerHTML.includes("swampwerewolf") || _0x273961.outerHTML.includes("wolf_swamp") || _0x273961.outerHTML.includes("wolfswamp") || _0x273961.outerHTML.includes("werewolf_swamp") || _0x273961.outerHTML.includes("werewolfswamp")) {
                _0x316912 = "swamp_wolf";
              } else if (_0x273961.outerHTML.includes("wolf_trickster") || _0x273961.outerHTML.includes("wolftrickster") || _0x273961.outerHTML.includes("werewolf_trickster") || _0x273961.outerHTML.includes("werewolftrickster") || _0x273961.outerHTML.includes("trickster_wolf") || _0x273961.outerHTML.includes("tricksterwolf") || _0x273961.outerHTML.includes("trickster_werewolf") || _0x273961.outerHTML.includes("tricksterwerewolf")) {
                _0x316912 = "wolf_trickster";
              } else if (_0x273961.outerHTML.includes("confusion_wolf") || _0x273961.outerHTML.includes("confusionwolf") || _0x273961.outerHTML.includes("confusion_werewolf") || _0x273961.outerHTML.includes("confusionwerewolf") || _0x273961.outerHTML.includes("wolf_confusion") || _0x273961.outerHTML.includes("wolfconfusion") || _0x273961.outerHTML.includes("werewolf_confusion") || _0x273961.outerHTML.includes("werewolfconfusion")) {
                _0x316912 = "confusion_wolf";
              } else if (_0x273961.outerHTML.includes("wolf_scribe") || _0x273961.outerHTML.includes("wolfscribe") || _0x273961.outerHTML.includes("werewolf_scribe") || _0x273961.outerHTML.includes("scribe_wolf") || _0x273961.outerHTML.includes("scribewolf") || _0x273961.outerHTML.includes("werewolfscribe") || _0x273961.outerHTML.includes("scribe_werewolf") || _0x273961.outerHTML.includes("scribewerewolf")) {
                _0x316912 = "wolf_scribe";
              } else if (_0x273961.outerHTML.includes("werewolf_berserk") || _0x273961.outerHTML.includes("werewolfberserk") || _0x273961.outerHTML.includes("wolf_berserk") || _0x273961.outerHTML.includes("wolfberserk") || _0x273961.outerHTML.includes("berserk_werewolf") || _0x273961.outerHTML.includes("berserkwerewolf") || _0x273961.outerHTML.includes("berserk_wolf") || _0x273961.outerHTML.includes("berserkwolf")) {
                _0x316912 = "werewolf_berserk";
              } else if (_0x273961.outerHTML.includes("toxic_wolf") || _0x273961.outerHTML.includes("toxicwolf") || _0x273961.outerHTML.includes("toxic_werewolf") || _0x273961.outerHTML.includes("toxicwerewolf") || _0x273961.outerHTML.includes("werewolf_toxic") || _0x273961.outerHTML.includes("werewolftoxic") || _0x273961.outerHTML.includes("wolf_toxic") || _0x273961.outerHTML.includes("wolftoxic")) {
                _0x316912 = "toxic_wolf";
              } else if (_0x273961.outerHTML.includes("jelly_wolf") || _0x273961.outerHTML.includes("jellywolf") || _0x273961.outerHTML.includes("jelly_werewolf") || _0x273961.outerHTML.includes("jellywerewolf") || _0x273961.outerHTML.includes("werewolf_jelly") || _0x273961.outerHTML.includes("werewolf_jelly") || _0x273961.outerHTML.includes("wolf_jelly") || _0x273961.outerHTML.includes("wolfjelly")) {
                _0x316912 = "jelly_wolf";
              } else if (_0x273961.outerHTML.includes("stubborn_werewolf") || _0x273961.outerHTML.includes("stubbornwerewolf") || _0x273961.outerHTML.includes("stubborn_wolf") || _0x273961.outerHTML.includes("stubbornwolf") || _0x273961.outerHTML.includes("wolf_stubborn") || _0x273961.outerHTML.includes("wolfstubborn") || _0x273961.outerHTML.includes("werewolf_stubborn") || _0x273961.outerHTML.includes("werewolfstubborn")) {
                _0x316912 = "stubborn_werewolf";
              } else if (_0x273961.outerHTML.includes("wolf_summoner") || _0x273961.outerHTML.includes("wolfsummoner") || _0x273961.outerHTML.includes("werewolf_summoner") || _0x273961.outerHTML.includes("werewolfsummoner") || _0x273961.outerHTML.includes("summoner_werewolf") || _0x273961.outerHTML.includes("summonerwerewolf") || _0x273961.outerHTML.includes("summoner_wolf") || _0x273961.outerHTML.includes("summonerwolf")) {
                _0x316912 = "wolf_summoner";
              } else if (_0x273961.outerHTML.includes("blind_werewolf") || _0x273961.outerHTML.includes("blindwerewolf") || _0x273961.outerHTML.includes("blind_wolf") || _0x273961.outerHTML.includes("blindwolf") || _0x273961.outerHTML.includes("wolf_blind") || _0x273961.outerHTML.includes("wolfblind") || _0x273961.outerHTML.includes("werewolf_blind") || _0x273961.outerHTML.includes("werewolfblind")) {
                _0x316912 = "blind_werewolf";
              } else if (_0x273961.outerHTML.includes("villager")) {
                _0x316912 = "villager";
              } else if (_0x273961.outerHTML.includes("judge")) {
                _0x316912 = "judge";
              } else if (_0x273961.outerHTML.includes("ghost_lady") || _0x273961.outerHTML.includes("ghostlady")) {
                _0x316912 = "ghost_lady";
              } else if (_0x273961.outerHTML.includes("medium")) {
                _0x316912 = "medium";
              } else if (_0x273961.outerHTML.includes("anarchist")) {
                _0x316912 = "anarchist";
              } else if (_0x273961.outerHTML.includes("werewolf")) {
                _0x316912 = "werewolf";
              }
            }
          }
        }
      }
    }
    if (_0x316912 != null) {
      console.log("Bot checked my role is: " + _0x316912 + "!");
    }
    return _0x316912;
  }
  function _0x10c3d5() {
    const _0x55607d = [];
    for (let _0x3578eb = 1; _0x3578eb < 5; _0x3578eb++) {
      for (let _0x51c453 = 1; _0x51c453 < 5; _0x51c453++) {
        var _0x8c6369 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x3578eb + "]/div[" + _0x51c453 + "]";
        var _0x3abdc7 = document.evaluate(_0x8c6369, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x3abdc7 != null) {
          var _0x3e519a = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x3578eb + "]/div[" + _0x51c453 + "]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (!_0x3abdc7.outerHTML.includes(_0x1ace8b + "</div>") && _0x3abdc7.outerHTML.includes("cupid_select_lovers_sticker_small")) {
            if (_0x3e519a.outerHTML.includes("vigilante")) {
              _0x55607d.push("vigilante");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("priest")) {
              _0x55607d.push("priest");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("junior_werewolf") || _0x3e519a.outerHTML.includes("juniorwerewolf") || _0x3e519a.outerHTML.includes("junior_wolf") || _0x3e519a.outerHTML.includes("juniowolf") || _0x3e519a.outerHTML.includes("wolf_junior") || _0x3e519a.outerHTML.includes("wolfjunior") || _0x3e519a.outerHTML.includes("werewolf_junior") || _0x3e519a.outerHTML.includes("werewolfjunior")) {
              _0x55607d.push("junior_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("nightmare_werewolf") || _0x3e519a.outerHTML.includes("nightmarewerewolf") || _0x3e519a.outerHTML.includes("nightmare_wolf") || _0x3e519a.outerHTML.includes("nightmarewolf") || _0x3e519a.outerHTML.includes("wolf_nightmare") || _0x3e519a.outerHTML.includes("wolfnightmare") || _0x3e519a.outerHTML.includes("werewolf_nightmare") || _0x3e519a.outerHTML.includes("werewolfnightmare")) {
              _0x55607d.push("nightmare_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("wolf_shaman") || _0x3e519a.outerHTML.includes("wolfshaman") || _0x3e519a.outerHTML.includes("werewolf_shaman") || _0x3e519a.outerHTML.includes("werewolfshaman") || _0x3e519a.outerHTML.includes("shaman_wolf") || _0x3e519a.outerHTML.includes("shamanwolf") || _0x3e519a.outerHTML.includes("shaman_werewolf") || _0x3e519a.outerHTML.includes("shamanwerewolf")) {
              _0x55607d.push("wolf_shaman");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("shadow_wolf") || _0x3e519a.outerHTML.includes("shadowwolf") || _0x3e519a.outerHTML.includes("shadow_werewolf") || _0x3e519a.outerHTML.includes("shadowwerewolf") || _0x3e519a.outerHTML.includes("wolf_shadow") || _0x3e519a.outerHTML.includes("wolfshadow") || _0x3e519a.outerHTML.includes("werewolf_shadow") || _0x3e519a.outerHTML.includes("werewolfshadow")) {
              _0x55607d.push("shadow_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("guardian_wolf") || _0x3e519a.outerHTML.includes("guardianwolf") || _0x3e519a.outerHTML.includes("guardian_werewolf") || _0x3e519a.outerHTML.includes("guardianwerewolf") || _0x3e519a.outerHTML.includes("wolf_guardian") || _0x3e519a.outerHTML.includes("wolfguardian") || _0x3e519a.outerHTML.includes("werewolf_guardian") || _0x3e519a.outerHTML.includes("werewolfguardian")) {
              _0x55607d.push("guardian_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("alpha_werewolf") || _0x3e519a.outerHTML.includes("alphawerewolf") || _0x3e519a.outerHTML.includes("alpha_wolf") || _0x3e519a.outerHTML.includes("alphawolf") || _0x3e519a.outerHTML.includes("wolf_alpha") || _0x3e519a.outerHTML.includes("wolfalpha") || _0x3e519a.outerHTML.includes("werewolf_alpha") || _0x3e519a.outerHTML.includes("werewolfalpha")) {
              _0x55607d.push("alpha_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("gunner")) {
              _0x55607d.push("gunner");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("doctor") || _0x3e519a.outerHTML.includes("nurse")) {
              _0x55607d.push("doctor");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("bodyguard")) {
              _0x55607d.push("bodyguard");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("harlot") || _0x3e519a.outerHTML.includes("redlady")) {
              _0x55607d.push("redlady");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("seer")) {
              if (_0x3e519a.outerHTML.includes("aura_seer") || _0x3e519a.outerHTML.includes("auraseer")) {
                _0x55607d.push("aura_seer");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              } else if (_0x3e519a.outerHTML.includes("seer_apprentice") || _0x3e519a.outerHTML.includes("seerapprentice")) {
                _0x55607d.push("seer_apprentice");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              } else if (_0x3e519a.outerHTML.includes("wolf_seer") || _0x3e519a.outerHTML.includes("wolfseer") || _0x3e519a.outerHTML.includes("werewolf_seer") || _0x3e519a.outerHTML.includes("werewolfseer") || _0x3e519a.outerHTML.includes("seer_werewolf") || _0x3e519a.outerHTML.includes("seerwerewolf") || _0x3e519a.outerHTML.includes("seer_wolf") || _0x3e519a.outerHTML.includes("seerwolf")) {
                _0x55607d.push("wolf_seer");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              } else if (_0x3e519a.outerHTML.includes("spirit_seer") || _0x3e519a.outerHTML.includes("spiritseer")) {
                _0x55607d.push("spirit_seer");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              } else {
                _0x55607d.push("seer");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              }
            } else if (_0x3e519a.outerHTML.includes("headhunter")) {
              _0x55607d.push("headhunter");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("cursed")) {
              _0x55607d.push("cursed");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("flower_child") || _0x3e519a.outerHTML.includes("flowerchild")) {
              _0x55607d.push("flower_child");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("loudmouth")) {
              _0x55607d.push("loudmouth");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("beast_hunter") || _0x3e519a.outerHTML.includes("beasthunter")) {
              _0x55607d.push("beast_hunter");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("witch")) {
              _0x55607d.push("witch");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("mayor")) {
              _0x55607d.push("mayor");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("sheriff")) {
              _0x55607d.push("sheriff");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("detective")) {
              _0x55607d.push("detective");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("jailer")) {
              _0x55607d.push("jailer");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("night_watchman") || _0x3e519a.outerHTML.includes("nightwatchman")) {
              _0x55607d.push("night_watchman");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("butcher")) {
              _0x55607d.push("butcher");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("tough_guy") || _0x3e519a.outerHTML.includes("toughguy")) {
              _0x55607d.push("tough_guy");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("bully")) {
              _0x55607d.push("bully");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("warden")) {
              _0x55607d.push("warden");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("marksman")) {
              _0x55607d.push("marksman");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("analyst")) {
              _0x55607d.push("analyst");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("gambler")) {
              _0x55607d.push("gambler");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("mortician")) {
              _0x55607d.push("mortician");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("violinist")) {
              _0x55607d.push("violinist");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("ritualist")) {
              _0x55607d.push("ritualist");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("conjuror")) {
              _0x55607d.push("conjuror");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("baker")) {
              _0x55607d.push("baker");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("grumpy_grandma") || _0x3e519a.outerHTML.includes("grumpygrandma")) {
              _0x55607d.push("grumpy_grandma");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("preacher")) {
              _0x55607d.push("preacher");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("forger")) {
              _0x55607d.push("forger");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("astronomer")) {
              _0x55607d.push("astronomer");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("trapper")) {
              _0x55607d.push("trapper");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("flagger")) {
              _0x55607d.push("flagger");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("avenger")) {
              _0x55607d.push("avenger");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("bellringer")) {
              _0x55607d.push("bellringer");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("fortune_teller") || _0x3e519a.outerHTML.includes("fortuneteller")) {
              _0x55607d.push("fortune_teller");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("pacifist")) {
              if (_0x3e519a.outerHTML.includes("wolfpacifist") || _0x3e519a.outerHTML.includes("wolf_pacifist") || _0x3e519a.outerHTML.includes("werewolf_pacifist") || _0x3e519a.outerHTML.includes("werewolfpacifist") || _0x3e519a.outerHTML.includes("pacifist_wolf") || _0x3e519a.outerHTML.includes("pacifistwolf") || _0x3e519a.outerHTML.includes("pacifist_werewolf") || _0x3e519a.outerHTML.includes("pacifistwerewolf") || _0x3e519a.outerHTML.includes("wolf-pacifist")) {
                _0x55607d.push("wolfpacifist");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              } else {
                _0x55607d.push("pacifist");
                _0x55607d.push(_0x3578eb);
                _0x55607d.push(_0x51c453);
              }
            } else if (_0x3e519a.outerHTML.includes("instigator")) {
              _0x55607d.push("instigator");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("lurker")) {
              _0x55607d.push("lurker");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("werewolf_fan") || _0x3e519a.outerHTML.includes("werewolffan")) {
              _0x55607d.push("werewolf_fan");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("grave_robber") || _0x3e519a.outerHTML.includes("grave_robber")) {
              _0x55607d.push("grave_robber");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("fool")) {
              _0x55607d.push("fool");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("split_wolf") || _0x3e519a.outerHTML.includes("split_werewolf") || _0x3e519a.outerHTML.includes("splitwolf") || _0x3e519a.outerHTML.includes("splitwerewolf") || _0x3e519a.outerHTML.includes("wolf_split") || _0x3e519a.outerHTML.includes("wolfsplit") || _0x3e519a.outerHTML.includes("werewolf_split") || _0x3e519a.outerHTML.includes("werewolfsplit")) {
              _0x55607d.push("split_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("kitten_wolf") || _0x3e519a.outerHTML.includes("kitten_werewolf") || _0x3e519a.outerHTML.includes("kittenwolf") || _0x3e519a.outerHTML.includes("kittenwerewolf") || _0x3e519a.outerHTML.includes("wolf_kitten") || _0x3e519a.outerHTML.includes("wolfkitten") || _0x3e519a.outerHTML.includes("werewolf_kitten") || _0x3e519a.outerHTML.includes("werewolfkitten")) {
              _0x55607d.push("kitten_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("wolffluencer")) {
              _0x55607d.push("wolffluencer");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("voodoo_werewolf") || _0x3e519a.outerHTML.includes("voodoowerewolf") || _0x3e519a.outerHTML.includes("voodoo_wolf") || _0x3e519a.outerHTML.includes("voodoowolf") || _0x3e519a.outerHTML.includes("wolf_voodoo") || _0x3e519a.outerHTML.includes("wolfvoodoo") || _0x3e519a.outerHTML.includes("werewolf_voodoo") || _0x3e519a.outerHTML.includes("werewolfvoodoo") || _0x3e519a.outerHTML.includes("voodoo")) {
              _0x55607d.push("voodoo_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("storm_wolf") || _0x3e519a.outerHTML.includes("stormwolf") || _0x3e519a.outerHTML.includes("storm_werewolf") || _0x3e519a.outerHTML.includes("stormwerewolf") || _0x3e519a.outerHTML.includes("werewolf_storm") || _0x3e519a.outerHTML.includes("werewolfstorm") || _0x3e519a.outerHTML.includes("wolf_storm") || _0x3e519a.outerHTML.includes("wolfstorm")) {
              _0x55607d.push("storm_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("swamp_wolf") || _0x3e519a.outerHTML.includes("swampwolf") || _0x3e519a.outerHTML.includes("swamp_werewolf") || _0x3e519a.outerHTML.includes("swampwerewolf") || _0x3e519a.outerHTML.includes("wolf_swamp") || _0x3e519a.outerHTML.includes("wolfswamp") || _0x3e519a.outerHTML.includes("werewolf_swamp") || _0x3e519a.outerHTML.includes("werewolfswamp")) {
              _0x55607d.push("swamp_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("wolf_trickster") || _0x3e519a.outerHTML.includes("wolftrickster") || _0x3e519a.outerHTML.includes("werewolf_trickster") || _0x3e519a.outerHTML.includes("werewolftrickster") || _0x3e519a.outerHTML.includes("trickster_werewolf") || _0x3e519a.outerHTML.includes("tricksterwerewolf") || _0x3e519a.outerHTML.includes("trickster_wolf") || _0x3e519a.outerHTML.includes("tricksterwolf")) {
              _0x55607d.push("wolf_trickster");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("confusion_wolf") || _0x3e519a.outerHTML.includes("confusionwolf") || _0x3e519a.outerHTML.includes("confusion_werewolf") || _0x3e519a.outerHTML.includes("confusionwerewolf") || _0x3e519a.outerHTML.includes("werewolf_confusion") || _0x3e519a.outerHTML.includes("werewolfconfusion") || _0x3e519a.outerHTML.includes("wolf_confusion") || _0x3e519a.outerHTML.includes("wolfconfusion")) {
              _0x55607d.push("confusion_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("wolf_scribe") || _0x3e519a.outerHTML.includes("wolfscribe") || _0x3e519a.outerHTML.includes("werewolf_scribe") || _0x3e519a.outerHTML.includes("werewolfscribe") || _0x3e519a.outerHTML.includes("scribe_werewolf") || _0x3e519a.outerHTML.includes("scribewerewolf") || _0x3e519a.outerHTML.includes("scribe_wolf") || _0x3e519a.outerHTML.includes("scribewolf")) {
              _0x55607d.push("wolf_scribe");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("werewolf_berserk") || _0x3e519a.outerHTML.includes("werewolfberserk") || _0x3e519a.outerHTML.includes("wolf_berserk") || _0x3e519a.outerHTML.includes("wolf_berserk") || _0x3e519a.outerHTML.includes("berserk_wolf") || _0x3e519a.outerHTML.includes("berserkwolf") || _0x3e519a.outerHTML.includes("berserk_werewolf") || _0x3e519a.outerHTML.includes("berserkwerewolf")) {
              _0x55607d.push("werewolf_berserk");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("toxic_wolf") || _0x3e519a.outerHTML.includes("toxicwolf") || _0x3e519a.outerHTML.includes("toxic_werewolf") || _0x3e519a.outerHTML.includes("toxicwerewolf") || _0x3e519a.outerHTML.includes("werewolf_toxic") || _0x3e519a.outerHTML.includes("werewolftoxic") || _0x3e519a.outerHTML.includes("wolf_toxic") || _0x3e519a.outerHTML.includes("wolftoxic")) {
              _0x55607d.push("toxic_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("jelly_wolf") || _0x3e519a.outerHTML.includes("jellywolf") || _0x3e519a.outerHTML.includes("jelly_werewolf") || _0x3e519a.outerHTML.includes("jellywerewolf") || _0x3e519a.outerHTML.includes("werewolf_jelly") || _0x3e519a.outerHTML.includes("werewolfjelly") || _0x3e519a.outerHTML.includes("wolf_jelly") || _0x3e519a.outerHTML.includes("wolfjelly")) {
              _0x55607d.push("jelly_wolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("stubborn_werewolf" || _0x3e519a.outerHTML.includes("stubbornwerewolf") || _0x3e519a.outerHTML.includes("stubborn_wolf") || _0x3e519a.outerHTML.includes("stubborn_wolf") || _0x3e519a.outerHTML.includes("stubbornwolf") || _0x3e519a.outerHTML.includes("wolf_stubborn") || _0x3e519a.outerHTML.includes("wolfstubborn") || _0x3e519a.outerHTML.includes("werewolf_stubborn") || _0x3e519a.outerHTML.includes("werewolfstubborn"))) {
              _0x55607d.push("stubborn_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("wolf_summoner") || _0x3e519a.outerHTML.includes("wolfsummoner") || _0x3e519a.outerHTML.includes("werewolf_summoner") || _0x3e519a.outerHTML.includes("werewolfsummoner") || _0x3e519a.outerHTML.includes("summoner_werewolf") || _0x3e519a.outerHTML.includes("summonerwerewolf") || _0x3e519a.outerHTML.includes("summoner_wolf") || _0x3e519a.outerHTML.includes("summonerwolf")) {
              _0x55607d.push("wolf_summoner");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("blind_werewolf") || _0x3e519a.outerHTML.includes("blindwerewolf") || _0x3e519a.outerHTML.includes("blind_wolf") || _0x3e519a.outerHTML.includes("blindwolf") || _0x3e519a.outerHTML.includes("wolf_blind") || _0x3e519a.outerHTML.includes("wolfblind") || _0x3e519a.outerHTML.includes("werewolf_blind") || _0x3e519a.outerHTML.includes("werewolfblind")) {
              _0x55607d.push("blind_werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("villager")) {
              _0x55607d.push("villager");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("judge")) {
              _0x55607d.push("judge");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("ghost_lady") || _0x3e519a.outerHTML.includes("ghostlady")) {
              _0x55607d.push("ghost_lady");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("medium")) {
              _0x55607d.push("medium");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("anarchist")) {
              _0x55607d.push("anarchist");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            } else if (_0x3e519a.outerHTML.includes("werewolf")) {
              _0x55607d.push("werewolf");
              _0x55607d.push(_0x3578eb);
              _0x55607d.push(_0x51c453);
            }
          }
        }
      }
    }
    if (_0x55607d.length > 0) {
      console.log("Bot checked my couple role is " + _0x55607d[0] + " and " + _0x55607d[3] + "!");
    }
    return _0x55607d;
  }
  function _0x370716(_0x100cc9) {
    var _0x22bd8e = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[2]/div/textarea", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x22bd8e != null) {
      window.InputEvent = window.Event || window.InputEvent;
      var _0x3fb008 = new InputEvent("input", {bubbles: true});
      _0x22bd8e.innerHTML = _0x100cc9;
      _0x22bd8e.dispatchEvent(_0x3fb008);
      document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[2]/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
      console.log("Bot chatted : " + _0x100cc9);
    }
  }
  function _0x5652da(_0x2cdcf3, _0x34d8ba) {
    var _0x4ed877 = -1;
    if (_0x2cdcf3 == 1) {
      if (_0x34d8ba == 1) {
        _0x4ed877 = 1;
      } else if (_0x34d8ba == 2) {
        _0x4ed877 = 2;
      } else if (_0x34d8ba == 3) {
        _0x4ed877 = 3;
      } else if (_0x34d8ba == 4) {
        _0x4ed877 = 4;
      }
    } else if (_0x2cdcf3 == 2) {
      if (_0x34d8ba == 1) {
        _0x4ed877 = 5;
      } else if (_0x34d8ba == 2) {
        _0x4ed877 = 6;
      } else if (_0x34d8ba == 3) {
        _0x4ed877 = 7;
      } else if (_0x34d8ba == 4) {
        _0x4ed877 = 8;
      }
    } else if (_0x2cdcf3 == 3) {
      if (_0x34d8ba == 1) {
        _0x4ed877 = 9;
      } else if (_0x34d8ba == 2) {
        _0x4ed877 = 10;
      } else if (_0x34d8ba == 3) {
        _0x4ed877 = 11;
      } else if (_0x34d8ba == 4) {
        _0x4ed877 = 12;
      }
    } else if (_0x2cdcf3 == 4) {
      if (_0x34d8ba == 1) {
        _0x4ed877 = 13;
      } else if (_0x34d8ba == 2) {
        _0x4ed877 = 14;
      } else if (_0x34d8ba == 3) {
        _0x4ed877 = 15;
      } else if (_0x34d8ba == 4) {
        _0x4ed877 = 16;
      }
    }
    return _0x4ed877;
  }
  function _0x407dcf(_0x18eae9, _0x2324df) {
    let _0x2f9082 = _0x2324df - _0x18eae9 + 1;
    let _0x5bb6bb = Math.random() * _0x2f9082;
    let _0x3509e0 = Math.floor(_0x5bb6bb) + _0x18eae9;
    return _0x3509e0;
  }
  function _0xad7a61() {
    var _0x356efd = "no";
    for (let _0x2bf61d = 1; _0x2bf61d < 5; _0x2bf61d++) {
      for (let _0x591a59 = 1; _0x591a59 < 5; _0x591a59++) {
        var _0x2bc2cc = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2bf61d + "]/div[" + _0x591a59 + "]";
        var _0x39ba42 = document.evaluate(_0x2bc2cc, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x39ba42 != null) {
          if (_0x39ba42.outerHTML.includes(_0x1ace8b + "</div>")) {
            var _0x2313e9 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2bf61d + "]/div[" + _0x591a59 + "]/div/div[4]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var _0x455d50 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2bf61d + "]/div[" + _0x591a59 + "]/div/div[5]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x2313e9 != null) {
              if (_0x2313e9.outerHTML.includes("/static/media/vote_day_voter_skin_") || _0x2313e9.outerHTML.includes("/static/media/vote_werewolves_voter")) {
                _0x356efd = "yes";
              }
            }
            if (_0x455d50 != null) {
              _0x356efd = "yes";
            }
          }
          console.log(_0x356efd);
        }
      }
    }
    return _0x356efd;
  }
  function _0x5c834a() {
    var _0x21fadc = _0x3920c2();
    var _0x226bfe = _0x10c3d5();
    if (_0x21fadc != null && _0x226bfe.length > 0) {
      if (_0x226bfe.length == 3) {
        if (_0x226bfe[0].includes("wolf")) {
          var _0x554f8f = _0xad7a61();
          if (_0x554f8f != "yes") {
            _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
          }
        }
      }
      if (_0x226bfe.length == 6) {
        if (_0x226bfe[0].includes("wolf")) {
          var _0x366e77 = _0xad7a61();
          if (_0x366e77 != "yes") {
            _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
          }
        } else if (_0x226bfe[3].includes("wolf")) {
          var _0x587375 = _0xad7a61();
          if (_0x587375 != "yes") {
            _0x4e8f29(_0x226bfe[4], _0x226bfe[5]);
          }
        }
      }
      if (_0x21fadc == "gunner" || _0x21fadc == "vigilante") {
        for (let _0x466666 = 1; _0x466666 < 5; _0x466666++) {
          for (let _0x4eae05 = 1; _0x4eae05 < 5; _0x4eae05++) {
            var _0x147917 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x466666 + "]/div[" + _0x4eae05 + "]/div/div[4]";
            var _0x4a92b5 = document.evaluate(_0x147917, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x4a92b5 != null) {
              if (_0x4a92b5.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                _0x2d4b49(_0x466666, _0x4eae05);
              }
            }
          }
        }
      } else if (_0x21fadc == "priest") {
        if (_0x226bfe.length == 3) {
          if (_0x226bfe[0].includes("wolf")) {
            _0x1e2859();
          } else {
            for (let _0x44c03e = 1; _0x44c03e < 5; _0x44c03e++) {
              for (let _0x5a0044 = 1; _0x5a0044 < 5; _0x5a0044++) {
                var _0x15737c = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x44c03e + "]/div[" + _0x5a0044 + "]/div/div[4]";
                var _0x5d95b1 = document.evaluate(_0x15737c, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (_0x5d95b1 != null) {
                  if (_0x5d95b1.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                    _0x2d4b49(_0x44c03e, _0x5a0044);
                  }
                }
              }
            }
          }
        }
        if (_0x226bfe.length == 6) {
          if (_0x226bfe[0].includes("wolf") || _0x226bfe[3].includes("wolf")) {
            _0x1e2859();
          } else {
            for (let _0x56d5ec = 1; _0x56d5ec < 5; _0x56d5ec++) {
              for (let _0x3ee9ed = 1; _0x3ee9ed < 5; _0x3ee9ed++) {
                var _0x20a9bc = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x56d5ec + "]/div[" + _0x3ee9ed + "]/div/div[4]";
                var _0x53eeed = document.evaluate(_0x20a9bc, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (_0x53eeed != null) {
                  if (_0x53eeed.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                    _0x2d4b49(_0x56d5ec, _0x3ee9ed);
                  }
                }
              }
            }
          }
        }
      } else if (_0x21fadc == "junior_werewolf" || _0x21fadc == "split_wolf") {
        var _0x1b5e69 = _0x5652da(_0x226bfe[1], _0x226bfe[2]);
        var _0x11ad71 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x11ad71 != null) {
          if (_0x11ad71.outerHTML.includes(">25s</div></div>")) {
            _0x370716("Who? My couple is " + _0x1b5e69);
          }
          var _0x4a1814, _0x380991;
          for (let _0x146217 = 3; _0x146217 < 10; _0x146217++) {
            var _0xe16573 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[1]/div/div/div/div[" + _0x146217 + "]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0xe16573 != null) {
              var _0x2d5f6c;
              for (let _0x3aff85 = 1; _0x3aff85 < 17; _0x3aff85++) {
                var _0x142880 = ": </span>" + _0x3aff85 + "</div></div>";
                var _0x47e1e8 = "My couple is " + _0x3aff85;
                var _0x54b189 = "tag " + _0x3aff85;
                var _0xe9a0cb = "cp " + _0x3aff85;
                var _0x1de258 = _0x3aff85 + " pls";
                var _0x50c513 = _0x3aff85 + " - ";
                var _0x20a2c2 = "Who?. My couple is " + _0x3aff85;
                var _0x59ffa5 = "Who? My couple is " + _0x3aff85;
                var _0x8d45f8 = "Mine " + _0x3aff85;
                var _0x172e26 = _0x3aff85 + " and";
                if (!_0xe16573.outerHTML.includes(_0x1ace8b + ": ")) {
                  if (_0xe16573.outerHTML.includes(_0x142880) || _0xe16573.outerHTML.includes(_0x47e1e8) || _0xe16573.outerHTML.includes(_0x54b189) || _0xe16573.outerHTML.includes(_0xe9a0cb) || _0xe16573.outerHTML.includes(_0x1de258) || _0xe16573.outerHTML.includes(_0x50c513) || _0xe16573.outerHTML.includes(_0x59ffa5) || _0xe16573.outerHTML.includes(_0x20a2c2) || _0xe16573.outerHTML.includes(_0x8d45f8) || _0xe16573.outerHTML.includes(_0x172e26)) {
                    _0x2d5f6c = _0x3aff85;
                  }
                }
              }
              if (_0x2d5f6c == 1) {
                _0x4a1814 = 1;
                _0x380991 = 1;
              }
              if (_0x2d5f6c == 2) {
                _0x4a1814 = 1;
                _0x380991 = 2;
              }
              if (_0x2d5f6c == 3) {
                _0x4a1814 = 1;
                _0x380991 = 3;
              }
              if (_0x2d5f6c == 4) {
                _0x4a1814 = 1;
                _0x380991 = 4;
              }
              if (_0x2d5f6c == 5) {
                _0x4a1814 = 2;
                _0x380991 = 1;
              }
              if (_0x2d5f6c == 6) {
                _0x4a1814 = 2;
                _0x380991 = 2;
              }
              if (_0x2d5f6c == 7) {
                _0x4a1814 = 2;
                _0x380991 = 3;
              }
              if (_0x2d5f6c == 8) {
                _0x4a1814 = 2;
                _0x380991 = 4;
              }
              if (_0x2d5f6c == 9) {
                _0x4a1814 = 3;
                _0x380991 = 1;
              }
              if (_0x2d5f6c == 10) {
                _0x4a1814 = 3;
                _0x380991 = 2;
              }
              if (_0x2d5f6c == 11) {
                _0x4a1814 = 3;
                _0x380991 = 3;
              }
              if (_0x2d5f6c == 12) {
                _0x4a1814 = 3;
                _0x380991 = 4;
              }
              if (_0x2d5f6c == 13) {
                _0x4a1814 = 4;
                _0x380991 = 1;
              }
              if (_0x2d5f6c == 14) {
                _0x4a1814 = 4;
                _0x380991 = 2;
              }
              if (_0x2d5f6c == 15) {
                _0x4a1814 = 4;
                _0x380991 = 3;
              }
              if (_0x2d5f6c == 16) {
                _0x4a1814 = 4;
                _0x380991 = 4;
              }
            }
          }
          if (_0x11ad71.outerHTML.includes(">20s</div></div>")) {
            if (_0x226bfe.length == 3) {
              if (_0x226bfe[0] != "junior_werewolf" || _0x226bfe[0] != "split_wolf" || _0x226bfe[0] != "nightmare_werewolf" || _0x226bfe[0] != "wolf_shaman" || _0x226bfe[0] != "shadow_wolf" || _0x226bfe[0] != "guardian_wolf" || _0x226bfe[0] != "alpha_werewolf" || _0x226bfe[0] != "wolf_seer" || _0x226bfe[0] != "kitten_wolf" || _0x226bfe[0] != "wolffluencer" || _0x226bfe[0] != "voodoo_werewolf" || _0x226bfe[0] != "storm_wolf" || _0x226bfe[0] != "swamp_wolf" || _0x226bfe[0] != "wolf_trickster" || _0x226bfe[0] != "confusion_wolf" || _0x226bfe[0] != "wolf_scribe" || _0x226bfe[0] != "werewolf_berserk" || _0x226bfe[0] != "toxic_wolf" || _0x226bfe[0] != "wolfpacifist" || _0x226bfe[0] != "jelly_wolf" || _0x226bfe[0] != "stubborn_werewolf" || _0x226bfe[0] != "wolf_summoner" || _0x226bfe[0] != "blind_werewolf") {
                _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
              }
            }
            if (_0x226bfe.length == 6) {
              if (_0x226bfe[0] != "junior_werewolf" || _0x226bfe[0] != "split_wolf" || _0x226bfe[0] != "nightmare_werewolf" || _0x226bfe[0] != "wolf_shaman" || _0x226bfe[0] != "shadow_wolf" || _0x226bfe[0] != "guardian_wolf" || _0x226bfe[0] != "alpha_werewolf" || _0x226bfe[0] != "wolf_seer" || _0x226bfe[0] != "kitten_wolf" || _0x226bfe[0] != "wolffluencer" || _0x226bfe[0] != "voodoo_werewolf" || _0x226bfe[0] != "storm_wolf" || _0x226bfe[0] != "swamp_wolf" || _0x226bfe[0] != "wolf_trickster" || _0x226bfe[0] != "confusion_wolf" || _0x226bfe[0] != "wolf_scribe" || _0x226bfe[0] != "werewolf_berserk" || _0x226bfe[0] != "toxic_wolf" || _0x226bfe[0] != "wolfpacifist" || _0x226bfe[0] != "jelly_wolf" || _0x226bfe[0] != "stubborn_werewolf" || _0x226bfe[0] != "wolf_summoner" || _0x226bfe[0] != "blind_werewolf") {
                _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
              } else {
                _0x4e8f29(_0x226bfe[4], _0x226bfe[5]);
              }
            }
          }
          if (_0x11ad71.outerHTML.includes(">5s</div></div>")) {
            _0x57b213(_0x4a1814, _0x380991);
          }
        }
      } else if (_0x21fadc == "nightmare_werewolf" || _0x21fadc == "wolf_shaman" || _0x21fadc == "shadow_wolf" || _0x21fadc == "guardian_wolf" || _0x21fadc == "alpha_werewolf" || _0x21fadc == "wolf_seer" || _0x21fadc == "kitten_wolf" || _0x21fadc == "wolffluencer" || _0x21fadc == "voodoo_werewolf" || _0x21fadc == "storm_wolf" || _0x21fadc == "swamp_wolf" || _0x21fadc == "wolf_trickster" || _0x21fadc == "confusion_wolf" || _0x21fadc == "wolf_scribe" || _0x21fadc == "werewolf_berserk" || _0x21fadc == "toxic_wolf" || _0x21fadc == "wolfpacifist" || _0x21fadc == "jelly_wolf" || _0x21fadc == "stubborn_werewolf" || _0x21fadc == "wolf_summoner" || _0x21fadc == "blind_werewolf" || _0x21fadc == "werewolf") {
        if (_0x226bfe.length == 3) {
          var _0x2507a0;
          if (_0x226bfe[1] == 1) {
            if (_0x226bfe[2] == 1) {
              _0x2507a0 = "1";
            } else if (_0x226bfe[2] == 2) {
              _0x2507a0 = "2";
            } else if (_0x226bfe[2] == 3) {
              _0x2507a0 = "3";
            } else if (_0x226bfe[2] == 4) {
              _0x2507a0 = "4";
            }
          } else if (_0x226bfe[1] == 2) {
            if (_0x226bfe[2] == 1) {
              _0x2507a0 = "5";
            } else if (_0x226bfe[2] == 2) {
              _0x2507a0 = "6";
            } else if (_0x226bfe[2] == 3) {
              _0x2507a0 = "7";
            } else if (_0x226bfe[2] == 4) {
              _0x2507a0 = "8";
            }
          } else if (_0x226bfe[1] == 3) {
            if (_0x226bfe[2] == 1) {
              _0x2507a0 = "9";
            } else if (_0x226bfe[2] == 2) {
              _0x2507a0 = "10";
            } else if (_0x226bfe[2] == 3) {
              _0x2507a0 = "11";
            } else if (_0x226bfe[2] == 4) {
              _0x2507a0 = "12";
            }
          } else if (_0x226bfe[1] == 4) {
            if (_0x226bfe[2] == 1) {
              _0x2507a0 = "13";
            } else if (_0x226bfe[2] == 2) {
              _0x2507a0 = "14";
            } else if (_0x226bfe[2] == 3) {
              _0x2507a0 = "15";
            } else if (_0x226bfe[2] == 4) {
              _0x2507a0 = "16";
            }
          }
          var _0x2c60e8 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x2c60e8 != null) {
            if (_0x2c60e8.outerHTML.includes(">25s</div></div>")) {
              if (_0x226bfe[0] != "priest") {
                _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
                var _0xdaa336 = "My couple is " + _0x2507a0;
                var _0x124c31 = "Mine " + _0x2507a0;
                var _0x469f41 = _0x2507a0;
                var _0x36eb21 = [];
                _0x36eb21.push(_0xdaa336);
                _0x36eb21.push(_0x124c31);
                _0x36eb21.push(_0x469f41);
                _0x370716(_0x36eb21[_0x407dcf(0, _0x36eb21.length - 1)]);
              } else {
                _0x370716(_0x2507a0 + " - priest");
              }
            }
          }
        }
        if (_0x226bfe.length == 6) {
          var _0x3646fa;
          var _0x2d6d76;
          if (_0x226bfe[1] == 1) {
            if (_0x226bfe[2] == 1) {
              _0x3646fa = "1";
            } else if (_0x226bfe[2] == 2) {
              _0x3646fa = "2";
            } else if (_0x226bfe[2] == 3) {
              _0x3646fa = "3";
            } else if (_0x226bfe[2] == 4) {
              _0x3646fa = "4";
            }
          } else if (_0x226bfe[1] == 2) {
            if (_0x226bfe[2] == 1) {
              _0x3646fa = "5";
            } else if (_0x226bfe[2] == 2) {
              _0x3646fa = "6";
            } else if (_0x226bfe[2] == 3) {
              _0x3646fa = "7";
            } else if (_0x226bfe[2] == 4) {
              _0x3646fa = "8";
            }
          } else if (_0x226bfe[1] == 3) {
            if (_0x226bfe[2] == 1) {
              _0x3646fa = "9";
            } else if (_0x226bfe[2] == 2) {
              _0x3646fa = "10";
            } else if (_0x226bfe[2] == 3) {
              _0x3646fa = "11";
            } else if (_0x226bfe[2] == 4) {
              _0x3646fa = "12";
            }
          } else if (_0x226bfe[1] == 4) {
            if (_0x226bfe[2] == 1) {
              _0x3646fa = "13";
            } else if (_0x226bfe[2] == 2) {
              _0x3646fa = "14";
            } else if (_0x226bfe[2] == 3) {
              _0x3646fa = "15";
            } else if (_0x226bfe[2] == 4) {
              _0x3646fa = "16";
            }
          }
          if (_0x226bfe[4] == 1) {
            if (_0x226bfe[5] == 1) {
              _0x2d6d76 = "1";
            } else if (_0x226bfe[5] == 2) {
              _0x2d6d76 = "2";
            } else if (_0x226bfe[5] == 3) {
              _0x2d6d76 = "3";
            } else if (_0x226bfe[5] == 4) {
              _0x2d6d76 = "4";
            }
          } else if (_0x226bfe[4] == 2) {
            if (_0x226bfe[5] == 1) {
              _0x2d6d76 = "5";
            } else if (_0x226bfe[5] == 2) {
              _0x2d6d76 = "6";
            } else if (_0x226bfe[5] == 3) {
              _0x2d6d76 = "7";
            } else if (_0x226bfe[5] == 4) {
              _0x2d6d76 = "8";
            }
          } else if (_0x226bfe[4] == 3) {
            if (_0x226bfe[5] == 1) {
              _0x2d6d76 = "9";
            } else if (_0x226bfe[5] == 2) {
              _0x2d6d76 = "10";
            } else if (_0x226bfe[5] == 3) {
              _0x2d6d76 = "11";
            } else if (_0x226bfe[5] == 4) {
              _0x2d6d76 = "12";
            }
          } else if (_0x226bfe[4] == 4) {
            if (_0x226bfe[5] == 1) {
              _0x2d6d76 = "13";
            } else if (_0x226bfe[5] == 2) {
              _0x2d6d76 = "14";
            } else if (_0x226bfe[5] == 3) {
              _0x2d6d76 = "15";
            } else if (_0x226bfe[5] == 4) {
              _0x2d6d76 = "16";
            }
          }
          if (_0x226bfe[0] == "priest") {
            _0x3646fa = _0x3646fa + " - priest";
          }
          if (_0x226bfe[3] == "priest") {
            _0x2d6d76 = _0x2d6d76 + " - priest";
          }
          var _0x45432e = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x45432e != null) {
            if (_0x45432e.outerHTML.includes(">25s</div></div>")) {
              var _0x3bf0e8 = "My couple is " + _0x3646fa + " and " + _0x2d6d76;
              var _0x161101 = "Mine " + _0x3646fa + " and " + _0x2d6d76;
              var _0x1fcd0c = _0x3646fa + " and " + _0x2d6d76;
              var _0x39fc10 = [];
              _0x39fc10.push(_0x3bf0e8);
              _0x39fc10.push(_0x161101);
              _0x39fc10.push(_0x1fcd0c);
              _0x370716(_0x39fc10[_0x407dcf(0, _0x39fc10.length - 1)]);
            }
            if (_0x45432e.outerHTML.includes(">27s</div></div>")) {
              if (_0x226bfe[0] != "priest" && _0x226bfe[3] != "priest") {
                _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
              }
              if (_0x226bfe[0].includes("wolf")) {
                _0x4e8f29(_0x226bfe[4], _0x226bfe[5]);
              }
              if (_0x226bfe[3].includes("wolf")) {
                _0x4e8f29(_0x226bfe[1], _0x226bfe[2]);
              }
            }
          }
        }
      }
    }
  }
}());
