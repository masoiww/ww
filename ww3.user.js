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
  window.alert("Script Bot play custom!");
  _0x286fa6();
  var _0x73a467 = "";
  let _0x2165f6 = localStorage.getItem("authtokens").toString();
  // let _0x239480 = _0x2165f6.split('"')[3];
  // let _0x1a3901 = {versionNumber: 1, platform: "web", locale: "en"};
  // let _0x1c9a89 = {method: "PUT", headers: {"content-Type": "application/json", Authorization: "Bearer " + _0x239480}, body: JSON.stringify(_0x1a3901)};
  // const _0x1a3c91 = await fetch("https://core.api-wolvesville.com/players/meAndCheckAppVersion", _0x1c9a89);
  // const _0x1ffd58 = await _0x1a3c91.json();
  // _0x73a467 = await _0x1ffd58.player.username;
  
  // console.log(_0x73a467);
  console.log(_0x2165f6);


  function _0x286fa6() {
    var _0x41f1a1 = localStorage.setItem;
    localStorage.setItem = function (_0x3ac1d2, _0xe48682) {
      if (_0x3ac1d2 == "open-page") {
        localStorage.removeItem(_0x3ac1d2);
        console.log("Tried to detect multi window, blocked");
        return;
      }
      _0x41f1a1.apply(this, arguments);
    };
  }
  function _0x3cdb96() {
    var _0x1f08ae = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[4]/div[2]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x1f08ae != null) {
      if (_0x1f08ae.outerHTML.includes(">START GAME<")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[4]/div[2]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        console.log("Bot started the game!");
      }
    }

    // Auto-click the checkbox element if it exists
    var checkbox = document.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.click();
      console.log("Checkbox clicked!");
      }
    }
    var _0x2b8187 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[20]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x2b8187 != null) {
      if (_0x2b8187.outerHTML.includes(">Continue</div>")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[20]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        var _0x4292d3 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x4292d3 != null) {
          if (_0x4292d3.outerHTML.includes("Play again") || _0x4292d3.outerHTML.includes("Play again with friends")) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            var _0x31f027 = document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x31f027 != null) {
              document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }
            console.log("Bot backed the game!");
          }
        }
      }
    }
    var _0x3c3383 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[21]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x3c3383 != null) {
      if (_0x3c3383.outerHTML.includes(">Continue</div>")) {
        document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[21]/div/div/div[4]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        var _0x4f8f8d = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x4f8f8d != null) {
          if (_0x4f8f8d.outerHTML.includes("Play again") || _0x4f8f8d.outerHTML.includes("Play again with friends")) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[2]/div[3]/div[5]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            var _0x1b9cff = document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x1b9cff != null) {
              document.evaluate("/html/body/div[1]/div/div/div/div/div[3]/div/div[2]/div[3]/div[2]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }
            console.log("Bot backed the game!");
          }
        }
      }
    }
  }
 function _0x4139df(index1, index2) {
  var xpath = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" 
              + index1 + "]/div[" + index2 + "]/div/div[1]/div/div[6]/div";
  var targetElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (targetElement != null) {
    targetElement.click();
    console.log("Bot voted!");
  } else {
    console.log("Target element not found.");
  }
}
  // function _0x4139df(_0x5e5f02, _0x373bb2) {
  //   var _0x7e18c1 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5e5f02 + "]/div[" + _0x373bb2 + "]/div/div[1]/div/div[6]/div";
  //   var _0x21baf8 = document.evaluate(_0x7e18c1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  //   if (_0x21baf8 != null) {
  //     document.evaluate(_0x7e18c1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
  //     console.log("Bot voted!");
  //   }
  // }
  function _0x58e362(_0x5dc39e, _0x5be14c) {
    for (let _0x1610dd = 0; _0x1610dd < 6; _0x1610dd++) {
      var _0x232e10 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x1610dd + "]/div";
      var _0x29ec41 = document.evaluate(_0x232e10, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x29ec41 != null) {
        if (_0x29ec41.outerHTML.includes("/static/media/gunner_bullet") || _0x29ec41.outerHTML.includes("/static/media/priest_holy_water")) {
          document.evaluate(_0x232e10, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x1aec64 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5dc39e + "]/div[" + _0x5be14c + "]/div/div[5]/div[1]/div/div";
          var _0x3258df = document.evaluate(_0x1aec64, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x3258df != null) {
            document.evaluate(_0x1aec64, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
          var _0x56b0b4 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5dc39e + "]/div[" + _0x5be14c + "]/div/div[4]/div[1]/div/div";
          var _0x12a450 = document.evaluate(_0x56b0b4, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x12a450 != null) {
            document.evaluate(_0x56b0b4, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
          var _0x2079c1 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5dc39e + "]/div[" + _0x5be14c + "]/div/div[6]/div[1]/div/div";
          var _0x252c29 = document.evaluate(_0x2079c1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x252c29 != null) {
            document.evaluate(_0x2079c1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot killed!");
          }
        }
      }
    }
  }
  function _0x4e1b15() {
    for (let _0x4788f8 = 0; _0x4788f8 < 6; _0x4788f8++) {
      var _0x5d3072 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x4788f8 + "]/div";
      var _0x3c28a9 = document.evaluate(_0x5d3072, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x3c28a9 != null) {
        if (_0x3c28a9.outerHTML.includes("/static/media/priest_holy_water")) {
          document.evaluate(_0x5d3072, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x157e8e = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x157e8e != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x352e0e = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x352e0e != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x18b4b4 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x18b4b4 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x1a15d3 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x1a15d3 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x4b4408 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x4b4408 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x3c7ab0 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x3c7ab0 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x2c3d72 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x2c3d72 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
          var _0x292186 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x292186 != null) {
            document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div[4]/div/div[4]/div[1]/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          }
        }
      }
    }
  }
  function _0x3b64f7(_0x30af29, _0x3a59e1) {
    for (let _0x322b8f = 0; _0x322b8f < 6; _0x322b8f++) {
      var _0x331fe7 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div/div/div[" + _0x322b8f + "]/div";
      var _0x3f3df2 = document.evaluate(_0x331fe7, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (_0x3f3df2 != null) {
        if (_0x3f3df2.outerHTML.includes("/static/media/junior_werewolf_selection_marker") || _0x3f3df2.outerHTML.includes("/static/media/splitwolf_bind_bar")) {
          document.evaluate(_0x331fe7, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
          var _0x42699a = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x30af29 + "]/div[" + _0x3a59e1 + "]/div/div[5]/div[1]/div/div";
          var _0x209030 = document.evaluate(_0x42699a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x209030 != null) {
            document.evaluate(_0x42699a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot tagged!");
          }
          var _0x133a3a = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x30af29 + "]/div[" + _0x3a59e1 + "]/div/div[4]/div[1]/div/div";
          var _0x3059db = document.evaluate(_0x133a3a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x3059db != null) {
            document.evaluate(_0x133a3a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            console.log("Bot tagged!");
          }
        }
      }
    }
  }
  function _0x18061a() {
    var _0x3a1370 = null;
    for (let _0x5ab1a6 = 1; _0x5ab1a6 < 5; _0x5ab1a6++) {
      for (let _0x5e362d = 1; _0x5e362d < 5; _0x5e362d++) {
        var _0x145554 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5ab1a6 + "]/div[" + _0x5e362d + "]";
        var _0x53ecb2 = document.evaluate(_0x145554, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x53ecb2 != null) {
          if (_0x53ecb2.outerHTML.includes(_0x73a467 + "</div>")) {
            var _0x507ec4 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x5ab1a6 + "]/div[" + _0x5e362d + "]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x507ec4 != null) {
              if (_0x507ec4.outerHTML.includes("vigilante")) {
                _0x3a1370 = "vigilante";
              } else if (_0x507ec4.outerHTML.includes("priest")) {
                _0x3a1370 = "priest";
              } else if (_0x507ec4.outerHTML.includes("junior_werewolf") || _0x507ec4.outerHTML.includes("juniorwerewolf") || _0x507ec4.outerHTML.includes("junior_wolf") || _0x507ec4.outerHTML.includes("juniorwolf") || _0x507ec4.outerHTML.includes("werewolf_junior") || _0x507ec4.outerHTML.includes("werewolfjunior") || _0x507ec4.outerHTML.includes("wolf_junior") || _0x507ec4.outerHTML.includes("wolfjunior")) {
                _0x3a1370 = "junior_werewolf";
              } else if (_0x507ec4.outerHTML.includes("nightmare_werewolf") || _0x507ec4.outerHTML.includes("nightmarewerewolf") || _0x507ec4.outerHTML.includes("nightmare_wolf") || _0x507ec4.outerHTML.includes("nightmarewolf") || _0x507ec4.outerHTML.includes("werewolf_nightmare") || _0x507ec4.outerHTML.includes("werewolfnightmare") || _0x507ec4.outerHTML.includes("wolf_nightmare") || _0x507ec4.outerHTML.includes("wolfnightmare")) {
                _0x3a1370 = "nightmare_werewolf";
              } else if (_0x507ec4.outerHTML.includes("wolf_shaman") || _0x507ec4.outerHTML.includes("wolfshaman") || _0x507ec4.outerHTML.includes("werewolf_shaman") || _0x507ec4.outerHTML.includes("werewolfshaman") || _0x507ec4.outerHTML.includes("shaman_werewolf") || _0x507ec4.outerHTML.includes("shamanwerewolf") || _0x507ec4.outerHTML.includes("shaman_wolf") || _0x507ec4.outerHTML.includes("shamanwolf")) {
                _0x3a1370 = "wolf_shaman";
              } else if (_0x507ec4.outerHTML.includes("shadow_wolf") || _0x507ec4.outerHTML.includes("shadowwolf") || _0x507ec4.outerHTML.includes("shadow_werewolf") || _0x507ec4.outerHTML.includes("shadowwerewolf") || _0x507ec4.outerHTML.includes("werewolf_shadow") || _0x507ec4.outerHTML.includes("werewolfshadow") || _0x507ec4.outerHTML.includes("wolf_shadow") || _0x507ec4.outerHTML.includes("wolfshadow")) {
                _0x3a1370 = "shadow_wolf";
              } else if (_0x507ec4.outerHTML.includes("guardian_wolf") || _0x507ec4.outerHTML.includes("guardianwolf") || _0x507ec4.outerHTML.includes("guardian_werewolf") || _0x507ec4.outerHTML.includes("guardianwerewolf") || _0x507ec4.outerHTML.includes("werewolf_guardian") || _0x507ec4.outerHTML.includes("werewolfguardian") || _0x507ec4.outerHTML.includes("wolf_guardian") || _0x507ec4.outerHTML.includes("wolfguardian")) {
                _0x3a1370 = "guardian_wolf";
              } else if (_0x507ec4.outerHTML.includes("alpha_werewolf") || _0x507ec4.outerHTML.includes("alphawerewolf") || _0x507ec4.outerHTML.includes("alpha_wolf") || _0x507ec4.outerHTML.includes("alphawolf") || _0x507ec4.outerHTML.includes("wolf_alpha") || _0x507ec4.outerHTML.includes("wolfalpha") || _0x507ec4.outerHTML.includes("werewolf_alpha") || _0x507ec4.outerHTML.includes("werewolfalpha")) {
                _0x3a1370 = "alpha_werewolf";
              } else if (_0x507ec4.outerHTML.includes("gunner")) {
                _0x3a1370 = "gunner";
              } else if (_0x507ec4.outerHTML.includes("doctor") || _0x507ec4.outerHTML.includes("nurse")) {
                _0x3a1370 = "doctor";
              } else if (_0x507ec4.outerHTML.includes("bodyguard")) {
                _0x3a1370 = "bodyguard";
              } else if (_0x507ec4.outerHTML.includes("harlot") || _0x507ec4.outerHTML.includes("redlady")) {
                _0x3a1370 = "redlady";
              } else if (_0x507ec4.outerHTML.includes("seer")) {
                if (_0x507ec4.outerHTML.includes("aura_seer") || _0x507ec4.outerHTML.includes("auraseer")) {
                  _0x3a1370 = "aura_seer";
                } else if (_0x507ec4.outerHTML.includes("seer_apprentice") || _0x507ec4.outerHTML.includes("seerapprentice")) {
                  _0x3a1370 = "seer_apprentice";
                } else if (_0x507ec4.outerHTML.includes("wolf_seer") || _0x507ec4.outerHTML.includes("wolfseer") || _0x507ec4.outerHTML.includes("werewolf_seer")) {
                  _0x3a1370 = "wolf_seer";
                } else if (_0x507ec4.outerHTML.includes("spirit_seer") || _0x507ec4.outerHTML.includes("spiritseer")) {
                  _0x3a1370 = "spirit_seer";
                } else {
                  _0x3a1370 = "seer";
                }
              } else if (_0x507ec4.outerHTML.includes("headhunter")) {
                _0x3a1370 = "headhunter";
              } else if (_0x507ec4.outerHTML.includes("cursed")) {
                _0x3a1370 = "cursed";
              } else if (_0x507ec4.outerHTML.includes("flower_child") || _0x507ec4.outerHTML.includes("flowerchild")) {
                _0x3a1370 = "flower_child";
              } else if (_0x507ec4.outerHTML.includes("loudmouth")) {
                _0x3a1370 = "loudmouth";
              } else if (_0x507ec4.outerHTML.includes("beast_hunter") || _0x507ec4.outerHTML.includes("beasthunter")) {
                _0x3a1370 = "beast_hunter";
              } else if (_0x507ec4.outerHTML.includes("witch")) {
                _0x3a1370 = "witch";
              } else if (_0x507ec4.outerHTML.includes("mayor")) {
                _0x3a1370 = "mayor";
              } else if (_0x507ec4.outerHTML.includes("sheriff")) {
                _0x3a1370 = "sheriff";
              } else if (_0x507ec4.outerHTML.includes("detective")) {
                _0x3a1370 = "detective";
              } else if (_0x507ec4.outerHTML.includes("jailer")) {
                _0x3a1370 = "jailer";
              } else if (_0x507ec4.outerHTML.includes("night_watchman") || _0x507ec4.outerHTML.includes("nightwatchman")) {
                _0x3a1370 = "night_watchman";
              } else if (_0x507ec4.outerHTML.includes("butcher")) {
                _0x3a1370 = "butcher";
              } else if (_0x507ec4.outerHTML.includes("tough_guy") || _0x507ec4.outerHTML.includes("toughguy")) {
                _0x3a1370 = "tough_guy";
              } else if (_0x507ec4.outerHTML.includes("bully")) {
                _0x3a1370 = "bully";
              } else if (_0x507ec4.outerHTML.includes("warden")) {
                _0x3a1370 = "warden";
              } else if (_0x507ec4.outerHTML.includes("marksman")) {
                _0x3a1370 = "marksman";
              } else if (_0x507ec4.outerHTML.includes("analyst")) {
                _0x3a1370 = "analyst";
              } else if (_0x507ec4.outerHTML.includes("gambler")) {
                _0x3a1370 = "gambler";
              } else if (_0x507ec4.outerHTML.includes("mortician")) {
                _0x3a1370 = "mortician";
              } else if (_0x507ec4.outerHTML.includes("violinist")) {
                _0x3a1370 = "violinist";
              } else if (_0x507ec4.outerHTML.includes("ritualist")) {
                _0x3a1370 = "ritualist";
              } else if (_0x507ec4.outerHTML.includes("conjuror")) {
                _0x3a1370 = "conjuror";
              } else if (_0x507ec4.outerHTML.includes("baker")) {
                _0x3a1370 = "baker";
              } else if (_0x507ec4.outerHTML.includes("grumpy_grandma") || _0x507ec4.outerHTML.includes("grumpygrandma")) {
                _0x3a1370 = "grumpy_grandma";
              } else if (_0x507ec4.outerHTML.includes("preacher")) {
                _0x3a1370 = "preacher";
              } else if (_0x507ec4.outerHTML.includes("forger")) {
                _0x3a1370 = "forger";
              } else if (_0x507ec4.outerHTML.includes("astronomer")) {
                _0x3a1370 = "astronomer";
              } else if (_0x507ec4.outerHTML.includes("trapper")) {
                _0x3a1370 = "trapper";
              } else if (_0x507ec4.outerHTML.includes("flagger")) {
                _0x3a1370 = "flagger";
              } else if (_0x507ec4.outerHTML.includes("avenger")) {
                _0x3a1370 = "avenger";
              } else if (_0x507ec4.outerHTML.includes("bellringer")) {
                _0x3a1370 = "bellringer";
              } else if (_0x507ec4.outerHTML.includes("fortune_teller") || _0x507ec4.outerHTML.includes("fortuneteller")) {
                _0x3a1370 = "fortune_teller";
              } else if (_0x507ec4.outerHTML.includes("pacifist")) {
                if (_0x507ec4.outerHTML.includes("wolfpacifist") || _0x507ec4.outerHTML.includes("wolf_pacifist") || _0x507ec4.outerHTML.includes("werewolf_pacifist") || _0x507ec4.outerHTML.includes("werewolfpacifist") || _0x507ec4.outerHTML.includes("pacifist_wolf") || _0x507ec4.outerHTML.includes("pacifistwolf") || _0x507ec4.outerHTML.includes("pacifist_werewolf") || _0x507ec4.outerHTML.includes("pacifistwerewolf") || _0x507ec4.outerHTML.includes("wolf-pacifist")) {
                  _0x3a1370 = "wolfpacifist";
                } else {
                  _0x3a1370 = "pacifist";
                }
              } else if (_0x507ec4.outerHTML.includes("instigator")) {
                _0x3a1370 = "instigator";
              } else if (_0x507ec4.outerHTML.includes("lurker")) {
                _0x3a1370 = "lurker";
              } else if (_0x507ec4.outerHTML.includes("werewolf_fan") || _0x507ec4.outerHTML.includes("werewolffan")) {
                _0x3a1370 = "werewolf_fan";
              } else if (_0x507ec4.outerHTML.includes("grave_robber")) {
                _0x3a1370 = "grave_robber";
              } else if (_0x507ec4.outerHTML.includes("fool")) {
                _0x3a1370 = "fool";
              } else if (_0x507ec4.outerHTML.includes("split_wolf") || _0x507ec4.outerHTML.includes("splitwolf") || _0x507ec4.outerHTML.includes("split_werewolf") || _0x507ec4.outerHTML.includes("splitwerewolf") || _0x507ec4.outerHTML.includes("werewolf_split") || _0x507ec4.outerHTML.includes("werewolfsplit") || _0x507ec4.outerHTML.includes("wolf_split") || _0x507ec4.outerHTML.includes("wolfsplit")) {
                _0x3a1370 = "split_wolf";
              } else if (_0x507ec4.outerHTML.includes("kitten_wolf") || _0x507ec4.outerHTML.includes("kittenwolf") || _0x507ec4.outerHTML.includes("kitten_werewolf") || _0x507ec4.outerHTML.includes("kittenwerewolf") || _0x507ec4.outerHTML.includes("wolf_kitten") || _0x507ec4.outerHTML.includes("wolfkitten") || _0x507ec4.outerHTML.includes("werewolf_kitten") || _0x507ec4.outerHTML.includes("werewolfkitten")) {
                _0x3a1370 = "kitten_wolf";
              } else if (_0x507ec4.outerHTML.includes("wolffluencer")) {
                _0x3a1370 = "wolffluencer";
              } else if (_0x507ec4.outerHTML.includes("voodoo_werewolf") || _0x507ec4.outerHTML.includes("voodoowerewolf") || _0x507ec4.outerHTML.includes("voodoo_wolf") || _0x507ec4.outerHTML.includes("voodoowolf") || _0x507ec4.outerHTML.includes("werewolf_voodoo") || _0x507ec4.outerHTML.includes("werewolfvoodoo") || _0x507ec4.outerHTML.includes("wolf_voodoo") || _0x507ec4.outerHTML.includes("wolfvoodoo") || _0x507ec4.outerHTML.includes("voodoo")) {
                _0x3a1370 = "voodoo_werewolf";
              } else if (_0x507ec4.outerHTML.includes("storm_wolf") || _0x507ec4.outerHTML.includes("stormwolf") || _0x507ec4.outerHTML.includes("storm_werewolf") || _0x507ec4.outerHTML.includes("stormwerewolf") || _0x507ec4.outerHTML.includes("wolf_storm") || _0x507ec4.outerHTML.includes("wolfstorm") || _0x507ec4.outerHTML.includes("werewolf_storm") || _0x507ec4.outerHTML.includes("werewolfstorm")) {
                _0x3a1370 = "storm_wolf";
              } else if (_0x507ec4.outerHTML.includes("swamp_wolf") || _0x507ec4.outerHTML.includes("swampwolf") || _0x507ec4.outerHTML.includes("swamp_werewolf") || _0x507ec4.outerHTML.includes("swampwerewolf") || _0x507ec4.outerHTML.includes("wolf_swamp") || _0x507ec4.outerHTML.includes("wolfswamp") || _0x507ec4.outerHTML.includes("werewolf_swamp") || _0x507ec4.outerHTML.includes("werewolfswamp")) {
                _0x3a1370 = "swamp_wolf";
              } else if (_0x507ec4.outerHTML.includes("wolf_trickster") || _0x507ec4.outerHTML.includes("wolftrickster") || _0x507ec4.outerHTML.includes("werewolf_trickster") || _0x507ec4.outerHTML.includes("werewolftrickster") || _0x507ec4.outerHTML.includes("trickster_wolf") || _0x507ec4.outerHTML.includes("tricksterwolf") || _0x507ec4.outerHTML.includes("trickster_werewolf") || _0x507ec4.outerHTML.includes("tricksterwerewolf")) {
                _0x3a1370 = "wolf_trickster";
              } else if (_0x507ec4.outerHTML.includes("confusion_wolf") || _0x507ec4.outerHTML.includes("confusionwolf") || _0x507ec4.outerHTML.includes("confusion_werewolf") || _0x507ec4.outerHTML.includes("confusionwerewolf") || _0x507ec4.outerHTML.includes("wolf_confusion") || _0x507ec4.outerHTML.includes("wolfconfusion") || _0x507ec4.outerHTML.includes("werewolf_confusion") || _0x507ec4.outerHTML.includes("werewolfconfusion")) {
                _0x3a1370 = "confusion_wolf";
              } else if (_0x507ec4.outerHTML.includes("wolf_scribe") || _0x507ec4.outerHTML.includes("wolfscribe") || _0x507ec4.outerHTML.includes("werewolf_scribe") || _0x507ec4.outerHTML.includes("scribe_wolf") || _0x507ec4.outerHTML.includes("scribewolf") || _0x507ec4.outerHTML.includes("werewolfscribe") || _0x507ec4.outerHTML.includes("scribe_werewolf") || _0x507ec4.outerHTML.includes("scribewerewolf")) {
                _0x3a1370 = "wolf_scribe";
              } else if (_0x507ec4.outerHTML.includes("werewolf_berserk") || _0x507ec4.outerHTML.includes("werewolfberserk") || _0x507ec4.outerHTML.includes("wolf_berserk") || _0x507ec4.outerHTML.includes("wolfberserk") || _0x507ec4.outerHTML.includes("berserk_werewolf") || _0x507ec4.outerHTML.includes("berserkwerewolf") || _0x507ec4.outerHTML.includes("berserk_wolf") || _0x507ec4.outerHTML.includes("berserkwolf")) {
                _0x3a1370 = "werewolf_berserk";
              } else if (_0x507ec4.outerHTML.includes("toxic_wolf") || _0x507ec4.outerHTML.includes("toxicwolf") || _0x507ec4.outerHTML.includes("toxic_werewolf") || _0x507ec4.outerHTML.includes("toxicwerewolf") || _0x507ec4.outerHTML.includes("werewolf_toxic") || _0x507ec4.outerHTML.includes("werewolftoxic") || _0x507ec4.outerHTML.includes("wolf_toxic") || _0x507ec4.outerHTML.includes("wolftoxic")) {
                _0x3a1370 = "toxic_wolf";
              } else if (_0x507ec4.outerHTML.includes("jelly_wolf") || _0x507ec4.outerHTML.includes("jellywolf") || _0x507ec4.outerHTML.includes("jelly_werewolf") || _0x507ec4.outerHTML.includes("jellywerewolf") || _0x507ec4.outerHTML.includes("werewolf_jelly") || _0x507ec4.outerHTML.includes("werewolf_jelly") || _0x507ec4.outerHTML.includes("wolf_jelly") || _0x507ec4.outerHTML.includes("wolfjelly")) {
                _0x3a1370 = "jelly_wolf";
              } else if (_0x507ec4.outerHTML.includes("stubborn_werewolf") || _0x507ec4.outerHTML.includes("stubbornwerewolf") || _0x507ec4.outerHTML.includes("stubborn_wolf") || _0x507ec4.outerHTML.includes("stubbornwolf") || _0x507ec4.outerHTML.includes("wolf_stubborn") || _0x507ec4.outerHTML.includes("wolfstubborn") || _0x507ec4.outerHTML.includes("werewolf_stubborn") || _0x507ec4.outerHTML.includes("werewolfstubborn")) {
                _0x3a1370 = "stubborn_werewolf";
              } else if (_0x507ec4.outerHTML.includes("wolf_summoner") || _0x507ec4.outerHTML.includes("wolfsummoner") || _0x507ec4.outerHTML.includes("werewolf_summoner") || _0x507ec4.outerHTML.includes("werewolfsummoner") || _0x507ec4.outerHTML.includes("summoner_werewolf") || _0x507ec4.outerHTML.includes("summonerwerewolf") || _0x507ec4.outerHTML.includes("summoner_wolf") || _0x507ec4.outerHTML.includes("summonerwolf")) {
                _0x3a1370 = "wolf_summoner";
              } else if (_0x507ec4.outerHTML.includes("blind_werewolf") || _0x507ec4.outerHTML.includes("blindwerewolf") || _0x507ec4.outerHTML.includes("blind_wolf") || _0x507ec4.outerHTML.includes("blindwolf") || _0x507ec4.outerHTML.includes("wolf_blind") || _0x507ec4.outerHTML.includes("wolfblind") || _0x507ec4.outerHTML.includes("werewolf_blind") || _0x507ec4.outerHTML.includes("werewolfblind")) {
                _0x3a1370 = "blind_werewolf";
              } else if (_0x507ec4.outerHTML.includes("villager")) {
                _0x3a1370 = "villager";
              } else if (_0x507ec4.outerHTML.includes("judge")) {
                _0x3a1370 = "judge";
              } else if (_0x507ec4.outerHTML.includes("ghost_lady") || _0x507ec4.outerHTML.includes("ghostlady")) {
                _0x3a1370 = "ghost_lady";
              } else if (_0x507ec4.outerHTML.includes("medium")) {
                _0x3a1370 = "medium";
              } else if (_0x507ec4.outerHTML.includes("anarchist")) {
                _0x3a1370 = "anarchist";
              } else if (_0x507ec4.outerHTML.includes("werewolf")) {
                _0x3a1370 = "werewolf";
              }
            }
          }
        }
      }
    }
    if (_0x3a1370 != null) {
      console.log("Bot checked my role is: " + _0x3a1370 + "!");
    }
    return _0x3a1370;
  }
  function _0x3596a6() {
    const _0x3ab079 = [];
    for (let _0x26dfee = 1; _0x26dfee < 5; _0x26dfee++) {
      for (let _0x506f1a = 1; _0x506f1a < 5; _0x506f1a++) {
        var _0xe8b27a = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x26dfee + "]/div[" + _0x506f1a + "]";
        var _0x120d58 = document.evaluate(_0xe8b27a, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x120d58 != null) {
          var _0x4ced55 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x26dfee + "]/div[" + _0x506f1a + "]/div/div[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (!_0x120d58.outerHTML.includes(_0x73a467 + "</div>") && _0x120d58.outerHTML.includes("cupid_select_lovers_sticker_small")) {
            if (_0x4ced55.outerHTML.includes("vigilante")) {
              _0x3ab079.push("vigilante");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("priest")) {
              _0x3ab079.push("priest");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("junior_werewolf") || _0x4ced55.outerHTML.includes("juniorwerewolf") || _0x4ced55.outerHTML.includes("junior_wolf") || _0x4ced55.outerHTML.includes("juniowolf") || _0x4ced55.outerHTML.includes("wolf_junior") || _0x4ced55.outerHTML.includes("wolfjunior") || _0x4ced55.outerHTML.includes("werewolf_junior") || _0x4ced55.outerHTML.includes("werewolfjunior")) {
              _0x3ab079.push("junior_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("nightmare_werewolf") || _0x4ced55.outerHTML.includes("nightmarewerewolf") || _0x4ced55.outerHTML.includes("nightmare_wolf") || _0x4ced55.outerHTML.includes("nightmarewolf") || _0x4ced55.outerHTML.includes("wolf_nightmare") || _0x4ced55.outerHTML.includes("wolfnightmare") || _0x4ced55.outerHTML.includes("werewolf_nightmare") || _0x4ced55.outerHTML.includes("werewolfnightmare")) {
              _0x3ab079.push("nightmare_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("wolf_shaman") || _0x4ced55.outerHTML.includes("wolfshaman") || _0x4ced55.outerHTML.includes("werewolf_shaman") || _0x4ced55.outerHTML.includes("werewolfshaman") || _0x4ced55.outerHTML.includes("shaman_wolf") || _0x4ced55.outerHTML.includes("shamanwolf") || _0x4ced55.outerHTML.includes("shaman_werewolf") || _0x4ced55.outerHTML.includes("shamanwerewolf")) {
              _0x3ab079.push("wolf_shaman");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("shadow_wolf") || _0x4ced55.outerHTML.includes("shadowwolf") || _0x4ced55.outerHTML.includes("shadow_werewolf") || _0x4ced55.outerHTML.includes("shadowwerewolf") || _0x4ced55.outerHTML.includes("wolf_shadow") || _0x4ced55.outerHTML.includes("wolfshadow") || _0x4ced55.outerHTML.includes("werewolf_shadow") || _0x4ced55.outerHTML.includes("werewolfshadow")) {
              _0x3ab079.push("shadow_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("guardian_wolf") || _0x4ced55.outerHTML.includes("guardianwolf") || _0x4ced55.outerHTML.includes("guardian_werewolf") || _0x4ced55.outerHTML.includes("guardianwerewolf") || _0x4ced55.outerHTML.includes("wolf_guardian") || _0x4ced55.outerHTML.includes("wolfguardian") || _0x4ced55.outerHTML.includes("werewolf_guardian") || _0x4ced55.outerHTML.includes("werewolfguardian")) {
              _0x3ab079.push("guardian_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("alpha_werewolf") || _0x4ced55.outerHTML.includes("alphawerewolf") || _0x4ced55.outerHTML.includes("alpha_wolf") || _0x4ced55.outerHTML.includes("alphawolf") || _0x4ced55.outerHTML.includes("wolf_alpha") || _0x4ced55.outerHTML.includes("wolfalpha") || _0x4ced55.outerHTML.includes("werewolf_alpha") || _0x4ced55.outerHTML.includes("werewolfalpha")) {
              _0x3ab079.push("alpha_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("gunner")) {
              _0x3ab079.push("gunner");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("doctor") || _0x4ced55.outerHTML.includes("nurse")) {
              _0x3ab079.push("doctor");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("bodyguard")) {
              _0x3ab079.push("bodyguard");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("harlot") || _0x4ced55.outerHTML.includes("redlady")) {
              _0x3ab079.push("redlady");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("seer")) {
              if (_0x4ced55.outerHTML.includes("aura_seer") || _0x4ced55.outerHTML.includes("auraseer")) {
                _0x3ab079.push("aura_seer");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              } else if (_0x4ced55.outerHTML.includes("seer_apprentice") || _0x4ced55.outerHTML.includes("seerapprentice")) {
                _0x3ab079.push("seer_apprentice");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              } else if (_0x4ced55.outerHTML.includes("wolf_seer") || _0x4ced55.outerHTML.includes("wolfseer") || _0x4ced55.outerHTML.includes("werewolf_seer") || _0x4ced55.outerHTML.includes("werewolfseer") || _0x4ced55.outerHTML.includes("seer_werewolf") || _0x4ced55.outerHTML.includes("seerwerewolf") || _0x4ced55.outerHTML.includes("seer_wolf") || _0x4ced55.outerHTML.includes("seerwolf")) {
                _0x3ab079.push("wolf_seer");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              } else if (_0x4ced55.outerHTML.includes("spirit_seer") || _0x4ced55.outerHTML.includes("spiritseer")) {
                _0x3ab079.push("spirit_seer");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              } else {
                _0x3ab079.push("seer");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              }
            } else if (_0x4ced55.outerHTML.includes("headhunter")) {
              _0x3ab079.push("headhunter");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("cursed")) {
              _0x3ab079.push("cursed");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("flower_child") || _0x4ced55.outerHTML.includes("flowerchild")) {
              _0x3ab079.push("flower_child");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("loudmouth")) {
              _0x3ab079.push("loudmouth");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("beast_hunter") || _0x4ced55.outerHTML.includes("beasthunter")) {
              _0x3ab079.push("beast_hunter");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("witch")) {
              _0x3ab079.push("witch");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("mayor")) {
              _0x3ab079.push("mayor");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("sheriff")) {
              _0x3ab079.push("sheriff");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("detective")) {
              _0x3ab079.push("detective");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("jailer")) {
              _0x3ab079.push("jailer");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("night_watchman") || _0x4ced55.outerHTML.includes("nightwatchman")) {
              _0x3ab079.push("night_watchman");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("butcher")) {
              _0x3ab079.push("butcher");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("tough_guy") || _0x4ced55.outerHTML.includes("toughguy")) {
              _0x3ab079.push("tough_guy");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("bully")) {
              _0x3ab079.push("bully");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("warden")) {
              _0x3ab079.push("warden");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("marksman")) {
              _0x3ab079.push("marksman");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("analyst")) {
              _0x3ab079.push("analyst");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("gambler")) {
              _0x3ab079.push("gambler");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("mortician")) {
              _0x3ab079.push("mortician");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("violinist")) {
              _0x3ab079.push("violinist");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("ritualist")) {
              _0x3ab079.push("ritualist");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("conjuror")) {
              _0x3ab079.push("conjuror");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("baker")) {
              _0x3ab079.push("baker");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("grumpy_grandma") || _0x4ced55.outerHTML.includes("grumpygrandma")) {
              _0x3ab079.push("grumpy_grandma");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("preacher")) {
              _0x3ab079.push("preacher");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("forger")) {
              _0x3ab079.push("forger");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("astronomer")) {
              _0x3ab079.push("astronomer");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("trapper")) {
              _0x3ab079.push("trapper");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("flagger")) {
              _0x3ab079.push("flagger");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("avenger")) {
              _0x3ab079.push("avenger");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("bellringer")) {
              _0x3ab079.push("bellringer");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("fortune_teller") || _0x4ced55.outerHTML.includes("fortuneteller")) {
              _0x3ab079.push("fortune_teller");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("pacifist")) {
              if (_0x4ced55.outerHTML.includes("wolfpacifist") || _0x4ced55.outerHTML.includes("wolf_pacifist") || _0x4ced55.outerHTML.includes("werewolf_pacifist") || _0x4ced55.outerHTML.includes("werewolfpacifist") || _0x4ced55.outerHTML.includes("pacifist_wolf") || _0x4ced55.outerHTML.includes("pacifistwolf") || _0x4ced55.outerHTML.includes("pacifist_werewolf") || _0x4ced55.outerHTML.includes("pacifistwerewolf") || _0x4ced55.outerHTML.includes("wolf-pacifist")) {
                _0x3ab079.push("wolfpacifist");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              } else {
                _0x3ab079.push("pacifist");
                _0x3ab079.push(_0x26dfee);
                _0x3ab079.push(_0x506f1a);
              }
            } else if (_0x4ced55.outerHTML.includes("instigator")) {
              _0x3ab079.push("instigator");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("lurker")) {
              _0x3ab079.push("lurker");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("werewolf_fan") || _0x4ced55.outerHTML.includes("werewolffan")) {
              _0x3ab079.push("werewolf_fan");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("grave_robber") || _0x4ced55.outerHTML.includes("grave_robber")) {
              _0x3ab079.push("grave_robber");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("fool")) {
              _0x3ab079.push("fool");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("split_wolf") || _0x4ced55.outerHTML.includes("split_werewolf") || _0x4ced55.outerHTML.includes("splitwolf") || _0x4ced55.outerHTML.includes("splitwerewolf") || _0x4ced55.outerHTML.includes("wolf_split") || _0x4ced55.outerHTML.includes("wolfsplit") || _0x4ced55.outerHTML.includes("werewolf_split") || _0x4ced55.outerHTML.includes("werewolfsplit")) {
              _0x3ab079.push("split_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("kitten_wolf") || _0x4ced55.outerHTML.includes("kitten_werewolf") || _0x4ced55.outerHTML.includes("kittenwolf") || _0x4ced55.outerHTML.includes("kittenwerewolf") || _0x4ced55.outerHTML.includes("wolf_kitten") || _0x4ced55.outerHTML.includes("wolfkitten") || _0x4ced55.outerHTML.includes("werewolf_kitten") || _0x4ced55.outerHTML.includes("werewolfkitten")) {
              _0x3ab079.push("kitten_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("wolffluencer")) {
              _0x3ab079.push("wolffluencer");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("voodoo_werewolf") || _0x4ced55.outerHTML.includes("voodoowerewolf") || _0x4ced55.outerHTML.includes("voodoo_wolf") || _0x4ced55.outerHTML.includes("voodoowolf") || _0x4ced55.outerHTML.includes("wolf_voodoo") || _0x4ced55.outerHTML.includes("wolfvoodoo") || _0x4ced55.outerHTML.includes("werewolf_voodoo") || _0x4ced55.outerHTML.includes("werewolfvoodoo") || _0x4ced55.outerHTML.includes("voodoo")) {
              _0x3ab079.push("voodoo_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("storm_wolf") || _0x4ced55.outerHTML.includes("stormwolf") || _0x4ced55.outerHTML.includes("storm_werewolf") || _0x4ced55.outerHTML.includes("stormwerewolf") || _0x4ced55.outerHTML.includes("werewolf_storm") || _0x4ced55.outerHTML.includes("werewolfstorm") || _0x4ced55.outerHTML.includes("wolf_storm") || _0x4ced55.outerHTML.includes("wolfstorm")) {
              _0x3ab079.push("storm_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("swamp_wolf") || _0x4ced55.outerHTML.includes("swampwolf") || _0x4ced55.outerHTML.includes("swamp_werewolf") || _0x4ced55.outerHTML.includes("swampwerewolf") || _0x4ced55.outerHTML.includes("wolf_swamp") || _0x4ced55.outerHTML.includes("wolfswamp") || _0x4ced55.outerHTML.includes("werewolf_swamp") || _0x4ced55.outerHTML.includes("werewolfswamp")) {
              _0x3ab079.push("swamp_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("wolf_trickster") || _0x4ced55.outerHTML.includes("wolftrickster") || _0x4ced55.outerHTML.includes("werewolf_trickster") || _0x4ced55.outerHTML.includes("werewolftrickster") || _0x4ced55.outerHTML.includes("trickster_werewolf") || _0x4ced55.outerHTML.includes("tricksterwerewolf") || _0x4ced55.outerHTML.includes("trickster_wolf") || _0x4ced55.outerHTML.includes("tricksterwolf")) {
              _0x3ab079.push("wolf_trickster");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("confusion_wolf") || _0x4ced55.outerHTML.includes("confusionwolf") || _0x4ced55.outerHTML.includes("confusion_werewolf") || _0x4ced55.outerHTML.includes("confusionwerewolf") || _0x4ced55.outerHTML.includes("werewolf_confusion") || _0x4ced55.outerHTML.includes("werewolfconfusion") || _0x4ced55.outerHTML.includes("wolf_confusion") || _0x4ced55.outerHTML.includes("wolfconfusion")) {
              _0x3ab079.push("confusion_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("wolf_scribe") || _0x4ced55.outerHTML.includes("wolfscribe") || _0x4ced55.outerHTML.includes("werewolf_scribe") || _0x4ced55.outerHTML.includes("werewolfscribe") || _0x4ced55.outerHTML.includes("scribe_werewolf") || _0x4ced55.outerHTML.includes("scribewerewolf") || _0x4ced55.outerHTML.includes("scribe_wolf") || _0x4ced55.outerHTML.includes("scribewolf")) {
              _0x3ab079.push("wolf_scribe");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("werewolf_berserk") || _0x4ced55.outerHTML.includes("werewolfberserk") || _0x4ced55.outerHTML.includes("wolf_berserk") || _0x4ced55.outerHTML.includes("wolf_berserk") || _0x4ced55.outerHTML.includes("berserk_wolf") || _0x4ced55.outerHTML.includes("berserkwolf") || _0x4ced55.outerHTML.includes("berserk_werewolf") || _0x4ced55.outerHTML.includes("berserkwerewolf")) {
              _0x3ab079.push("werewolf_berserk");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("toxic_wolf") || _0x4ced55.outerHTML.includes("toxicwolf") || _0x4ced55.outerHTML.includes("toxic_werewolf") || _0x4ced55.outerHTML.includes("toxicwerewolf") || _0x4ced55.outerHTML.includes("werewolf_toxic") || _0x4ced55.outerHTML.includes("werewolftoxic") || _0x4ced55.outerHTML.includes("wolf_toxic") || _0x4ced55.outerHTML.includes("wolftoxic")) {
              _0x3ab079.push("toxic_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("jelly_wolf") || _0x4ced55.outerHTML.includes("jellywolf") || _0x4ced55.outerHTML.includes("jelly_werewolf") || _0x4ced55.outerHTML.includes("jellywerewolf") || _0x4ced55.outerHTML.includes("werewolf_jelly") || _0x4ced55.outerHTML.includes("werewolfjelly") || _0x4ced55.outerHTML.includes("wolf_jelly") || _0x4ced55.outerHTML.includes("wolfjelly")) {
              _0x3ab079.push("jelly_wolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("stubborn_werewolf" || _0x4ced55.outerHTML.includes("stubbornwerewolf") || _0x4ced55.outerHTML.includes("stubborn_wolf") || _0x4ced55.outerHTML.includes("stubborn_wolf") || _0x4ced55.outerHTML.includes("stubbornwolf") || _0x4ced55.outerHTML.includes("wolf_stubborn") || _0x4ced55.outerHTML.includes("wolfstubborn") || _0x4ced55.outerHTML.includes("werewolf_stubborn") || _0x4ced55.outerHTML.includes("werewolfstubborn"))) {
              _0x3ab079.push("stubborn_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("wolf_summoner") || _0x4ced55.outerHTML.includes("wolfsummoner") || _0x4ced55.outerHTML.includes("werewolf_summoner") || _0x4ced55.outerHTML.includes("werewolfsummoner") || _0x4ced55.outerHTML.includes("summoner_werewolf") || _0x4ced55.outerHTML.includes("summonerwerewolf") || _0x4ced55.outerHTML.includes("summoner_wolf") || _0x4ced55.outerHTML.includes("summonerwolf")) {
              _0x3ab079.push("wolf_summoner");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("blind_werewolf") || _0x4ced55.outerHTML.includes("blindwerewolf") || _0x4ced55.outerHTML.includes("blind_wolf") || _0x4ced55.outerHTML.includes("blindwolf") || _0x4ced55.outerHTML.includes("wolf_blind") || _0x4ced55.outerHTML.includes("wolfblind") || _0x4ced55.outerHTML.includes("werewolf_blind") || _0x4ced55.outerHTML.includes("werewolfblind")) {
              _0x3ab079.push("blind_werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("villager")) {
              _0x3ab079.push("villager");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("judge")) {
              _0x3ab079.push("judge");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("ghost_lady") || _0x4ced55.outerHTML.includes("ghostlady")) {
              _0x3ab079.push("ghost_lady");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("medium")) {
              _0x3ab079.push("medium");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("anarchist")) {
              _0x3ab079.push("anarchist");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            } else if (_0x4ced55.outerHTML.includes("werewolf")) {
              _0x3ab079.push("werewolf");
              _0x3ab079.push(_0x26dfee);
              _0x3ab079.push(_0x506f1a);
            }
          }
        }
      }
    }
    if (_0x3ab079.length > 0) {
      console.log("Bot checked my couple role is " + _0x3ab079[0] + " and " + _0x3ab079[3] + "!");
    }
    return _0x3ab079;
  }
  function _0x336cbf(_0x5b7057) {
    var _0x512895 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[2]/div/textarea", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (_0x512895 != null) {
      window.InputEvent = window.Event || window.InputEvent;
      var _0x1172c8 = new InputEvent("input", {bubbles: true});
      _0x512895.innerHTML = _0x5b7057;
      _0x512895.dispatchEvent(_0x1172c8);
      document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[2]/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
      console.log("Bot chatted : " + _0x5b7057);
    }
  }
  function _0x3d4f64(_0x3d0ef0, _0x586e80) {
    var _0x2d61bc = -1;
    if (_0x3d0ef0 == 1) {
      if (_0x586e80 == 1) {
        _0x2d61bc = 1;
      } else if (_0x586e80 == 2) {
        _0x2d61bc = 2;
      } else if (_0x586e80 == 3) {
        _0x2d61bc = 3;
      } else if (_0x586e80 == 4) {
        _0x2d61bc = 4;
      }
    } else if (_0x3d0ef0 == 2) {
      if (_0x586e80 == 1) {
        _0x2d61bc = 5;
      } else if (_0x586e80 == 2) {
        _0x2d61bc = 6;
      } else if (_0x586e80 == 3) {
        _0x2d61bc = 7;
      } else if (_0x586e80 == 4) {
        _0x2d61bc = 8;
      }
    } else if (_0x3d0ef0 == 3) {
      if (_0x586e80 == 1) {
        _0x2d61bc = 9;
      } else if (_0x586e80 == 2) {
        _0x2d61bc = 10;
      } else if (_0x586e80 == 3) {
        _0x2d61bc = 11;
      } else if (_0x586e80 == 4) {
        _0x2d61bc = 12;
      }
    } else if (_0x3d0ef0 == 4) {
      if (_0x586e80 == 1) {
        _0x2d61bc = 13;
      } else if (_0x586e80 == 2) {
        _0x2d61bc = 14;
      } else if (_0x586e80 == 3) {
        _0x2d61bc = 15;
      } else if (_0x586e80 == 4) {
        _0x2d61bc = 16;
      }
    }
    return _0x2d61bc;
  }
  function _0x236b7f(_0x5e8f55, _0x323737) {
    let _0x3c1cf9 = _0x323737 - _0x5e8f55 + 1;
    let _0x58fb2f = Math.random() * _0x3c1cf9;
    let _0xd3f001 = Math.floor(_0x58fb2f) + _0x5e8f55;
    return _0xd3f001;
  }
  function _0x34b36f() {
    var _0x1e528e = "no";
    for (let _0x2c4938 = 1; _0x2c4938 < 5; _0x2c4938++) {
      for (let _0x28803d = 1; _0x28803d < 5; _0x28803d++) {
        var _0x1f6bc2 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2c4938 + "]/div[" + _0x28803d + "]";
        var _0x231f02 = document.evaluate(_0x1f6bc2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x231f02 != null) {
          if (_0x231f02.outerHTML.includes(_0x73a467 + "</div>")) {
            var _0x2286ed = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2c4938 + "]/div[" + _0x28803d + "]/div/div[4]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var _0x590115 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x2c4938 + "]/div[" + _0x28803d + "]/div/div[5]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x2286ed != null) {
              if (_0x2286ed.outerHTML.includes("/static/media/vote_day_voter_skin_") || _0x2286ed.outerHTML.includes("/static/media/vote_werewolves_voter")) {
                _0x1e528e = "yes";
              }
            }
            if (_0x590115 != null) {
              _0x1e528e = "yes";
            }
          }
          console.log(_0x1e528e);
        }
      }
    }
    return _0x1e528e;
  }
  function _0x458d8b() {
    var _0x5984b0 = _0x18061a();
    var _0xbc4a3f = _0x3596a6();
    if (_0x5984b0 != null && _0xbc4a3f.length > 0) {
      if (_0xbc4a3f.length == 3) {
        if (_0xbc4a3f[0].includes("wolf")) {
          var _0x449409 = _0x34b36f();
          if (_0x449409 != "yes") {
            _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
          }
        }
      }
      if (_0xbc4a3f.length == 6) {
        if (_0xbc4a3f[0].includes("wolf")) {
          var _0x54e000 = _0x34b36f();
          if (_0x54e000 != "yes") {
            _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
          }
        } else if (_0xbc4a3f[3].includes("wolf")) {
          var _0x5ebff2 = _0x34b36f();
          if (_0x5ebff2 != "yes") {
            _0x4139df(_0xbc4a3f[4], _0xbc4a3f[5]);
          }
        }
      }
      if (_0x5984b0 == "gunner" || _0x5984b0 == "vigilante") {
        for (let _0x4ea8ad = 1; _0x4ea8ad < 5; _0x4ea8ad++) {
          for (let _0x1a9ce2 = 1; _0x1a9ce2 < 5; _0x1a9ce2++) {
            var _0x118240 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x4ea8ad + "]/div[" + _0x1a9ce2 + "]/div/div[4]";
            var _0x2060d1 = document.evaluate(_0x118240, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x2060d1 != null) {
              if (_0x2060d1.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                _0x58e362(_0x4ea8ad, _0x1a9ce2);
              }
            }
          }
        }
      } else if (_0x5984b0 == "priest") {
        if (_0xbc4a3f.length == 3) {
          if (_0xbc4a3f[0].includes("wolf")) {
            _0x4e1b15();
          } else {
            for (let _0x1d20a7 = 1; _0x1d20a7 < 5; _0x1d20a7++) {
              for (let _0x502931 = 1; _0x502931 < 5; _0x502931++) {
                var _0x5e3f63 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x1d20a7 + "]/div[" + _0x502931 + "]/div/div[4]";
                var _0x199ed5 = document.evaluate(_0x5e3f63, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (_0x199ed5 != null) {
                  if (_0x199ed5.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                    _0x58e362(_0x1d20a7, _0x502931);
                  }
                }
              }
            }
          }
        }
        if (_0xbc4a3f.length == 6) {
          if (_0xbc4a3f[0].includes("wolf") || _0xbc4a3f[3].includes("wolf")) {
            _0x4e1b15();
          } else {
            for (let _0x54ecc5 = 1; _0x54ecc5 < 5; _0x54ecc5++) {
              for (let _0x5cd666 = 1; _0x5cd666 < 5; _0x5cd666++) {
                var _0x179490 = "/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[2]/div/div[1]/div/div[" + _0x54ecc5 + "]/div[" + _0x5cd666 + "]/div/div[4]";
                var _0x368a29 = document.evaluate(_0x179490, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (_0x368a29 != null) {
                  if (_0x368a29.outerHTML.includes("/static/media/vote_day.379f46ae191d9a6e3161.png")) {
                    _0x58e362(_0x54ecc5, _0x5cd666);
                  }
                }
              }
            }
          }
        }
      } else if (_0x5984b0 == "junior_werewolf" || _0x5984b0 == "split_wolf") {
        var _0x38ef67 = _0x3d4f64(_0xbc4a3f[1], _0xbc4a3f[2]);
        var _0x5bbc2d = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (_0x5bbc2d != null) {
          if (_0x5bbc2d.outerHTML.includes(">25s</div></div>")) {
            _0x336cbf("Who? My couple is " + _0x38ef67);
          }
          var _0x2a16e6, _0x3d0436;
          for (let _0xf27cbc = 3; _0xf27cbc < 10; _0xf27cbc++) {
            var _0x1c3e32 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[3]/div/div[2]/div/div[1]/div/div/div/div[" + _0xf27cbc + "]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (_0x1c3e32 != null) {
              var _0x3c3156;
              for (let _0x50f17b = 1; _0x50f17b < 17; _0x50f17b++) {
                var _0x46b74b = ": </span>" + _0x50f17b + "</div></div>";
                var _0x424440 = "My couple is " + _0x50f17b;
                var _0x5f590a = "tag " + _0x50f17b;
                var _0x3674de = "cp " + _0x50f17b;
                var _0x488047 = _0x50f17b + " pls";
                var _0xe9f9f2 = _0x50f17b + " - ";
                var _0x58de4e = "Who?. My couple is " + _0x50f17b;
                var _0x4d4b06 = "Who? My couple is " + _0x50f17b;
                var _0x50f198 = "Mine " + _0x50f17b;
                var _0x2f8030 = _0x50f17b + " and";
                if (!_0x1c3e32.outerHTML.includes(_0x73a467 + ": ")) {
                  if (_0x1c3e32.outerHTML.includes(_0x46b74b) || _0x1c3e32.outerHTML.includes(_0x424440) || _0x1c3e32.outerHTML.includes(_0x5f590a) || _0x1c3e32.outerHTML.includes(_0x3674de) || _0x1c3e32.outerHTML.includes(_0x488047) || _0x1c3e32.outerHTML.includes(_0xe9f9f2) || _0x1c3e32.outerHTML.includes(_0x4d4b06) || _0x1c3e32.outerHTML.includes(_0x58de4e) || _0x1c3e32.outerHTML.includes(_0x50f198) || _0x1c3e32.outerHTML.includes(_0x2f8030)) {
                    _0x3c3156 = _0x50f17b;
                  }
                }
              }
              if (_0x3c3156 == 1) {
                _0x2a16e6 = 1;
                _0x3d0436 = 1;
              }
              if (_0x3c3156 == 2) {
                _0x2a16e6 = 1;
                _0x3d0436 = 2;
              }
              if (_0x3c3156 == 3) {
                _0x2a16e6 = 1;
                _0x3d0436 = 3;
              }
              if (_0x3c3156 == 4) {
                _0x2a16e6 = 1;
                _0x3d0436 = 4;
              }
              if (_0x3c3156 == 5) {
                _0x2a16e6 = 2;
                _0x3d0436 = 1;
              }
              if (_0x3c3156 == 6) {
                _0x2a16e6 = 2;
                _0x3d0436 = 2;
              }
              if (_0x3c3156 == 7) {
                _0x2a16e6 = 2;
                _0x3d0436 = 3;
              }
              if (_0x3c3156 == 8) {
                _0x2a16e6 = 2;
                _0x3d0436 = 4;
              }
              if (_0x3c3156 == 9) {
                _0x2a16e6 = 3;
                _0x3d0436 = 1;
              }
              if (_0x3c3156 == 10) {
                _0x2a16e6 = 3;
                _0x3d0436 = 2;
              }
              if (_0x3c3156 == 11) {
                _0x2a16e6 = 3;
                _0x3d0436 = 3;
              }
              if (_0x3c3156 == 12) {
                _0x2a16e6 = 3;
                _0x3d0436 = 4;
              }
              if (_0x3c3156 == 13) {
                _0x2a16e6 = 4;
                _0x3d0436 = 1;
              }
              if (_0x3c3156 == 14) {
                _0x2a16e6 = 4;
                _0x3d0436 = 2;
              }
              if (_0x3c3156 == 15) {
                _0x2a16e6 = 4;
                _0x3d0436 = 3;
              }
              if (_0x3c3156 == 16) {
                _0x2a16e6 = 4;
                _0x3d0436 = 4;
              }
            }
          }
          if (_0x5bbc2d.outerHTML.includes(">20s</div></div>")) {
            if (_0xbc4a3f.length == 3) {
              if (_0xbc4a3f[0] != "junior_werewolf" || _0xbc4a3f[0] != "split_wolf" || _0xbc4a3f[0] != "nightmare_werewolf" || _0xbc4a3f[0] != "wolf_shaman" || _0xbc4a3f[0] != "shadow_wolf" || _0xbc4a3f[0] != "guardian_wolf" || _0xbc4a3f[0] != "alpha_werewolf" || _0xbc4a3f[0] != "wolf_seer" || _0xbc4a3f[0] != "kitten_wolf" || _0xbc4a3f[0] != "wolffluencer" || _0xbc4a3f[0] != "voodoo_werewolf" || _0xbc4a3f[0] != "storm_wolf" || _0xbc4a3f[0] != "swamp_wolf" || _0xbc4a3f[0] != "wolf_trickster" || _0xbc4a3f[0] != "confusion_wolf" || _0xbc4a3f[0] != "wolf_scribe" || _0xbc4a3f[0] != "werewolf_berserk" || _0xbc4a3f[0] != "toxic_wolf" || _0xbc4a3f[0] != "wolfpacifist" || _0xbc4a3f[0] != "jelly_wolf" || _0xbc4a3f[0] != "stubborn_werewolf" || _0xbc4a3f[0] != "wolf_summoner" || _0xbc4a3f[0] != "blind_werewolf") {
                _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
              }
            }
            if (_0xbc4a3f.length == 6) {
              if (_0xbc4a3f[0] != "junior_werewolf" || _0xbc4a3f[0] != "split_wolf" || _0xbc4a3f[0] != "nightmare_werewolf" || _0xbc4a3f[0] != "wolf_shaman" || _0xbc4a3f[0] != "shadow_wolf" || _0xbc4a3f[0] != "guardian_wolf" || _0xbc4a3f[0] != "alpha_werewolf" || _0xbc4a3f[0] != "wolf_seer" || _0xbc4a3f[0] != "kitten_wolf" || _0xbc4a3f[0] != "wolffluencer" || _0xbc4a3f[0] != "voodoo_werewolf" || _0xbc4a3f[0] != "storm_wolf" || _0xbc4a3f[0] != "swamp_wolf" || _0xbc4a3f[0] != "wolf_trickster" || _0xbc4a3f[0] != "confusion_wolf" || _0xbc4a3f[0] != "wolf_scribe" || _0xbc4a3f[0] != "werewolf_berserk" || _0xbc4a3f[0] != "toxic_wolf" || _0xbc4a3f[0] != "wolfpacifist" || _0xbc4a3f[0] != "jelly_wolf" || _0xbc4a3f[0] != "stubborn_werewolf" || _0xbc4a3f[0] != "wolf_summoner" || _0xbc4a3f[0] != "blind_werewolf") {
                _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
              } else {
                _0x4139df(_0xbc4a3f[4], _0xbc4a3f[5]);
              }
            }
          }
          if (_0x5bbc2d.outerHTML.includes(">5s</div></div>")) {
            _0x3b64f7(_0x2a16e6, _0x3d0436);
          }
        }
      } else if (_0x5984b0 == "nightmare_werewolf" || _0x5984b0 == "wolf_shaman" || _0x5984b0 == "shadow_wolf" || _0x5984b0 == "guardian_wolf" || _0x5984b0 == "alpha_werewolf" || _0x5984b0 == "wolf_seer" || _0x5984b0 == "kitten_wolf" || _0x5984b0 == "wolffluencer" || _0x5984b0 == "voodoo_werewolf" || _0x5984b0 == "storm_wolf" || _0x5984b0 == "swamp_wolf" || _0x5984b0 == "wolf_trickster" || _0x5984b0 == "confusion_wolf" || _0x5984b0 == "wolf_scribe" || _0x5984b0 == "werewolf_berserk" || _0x5984b0 == "toxic_wolf" || _0x5984b0 == "wolfpacifist" || _0x5984b0 == "jelly_wolf" || _0x5984b0 == "stubborn_werewolf" || _0x5984b0 == "wolf_summoner" || _0x5984b0 == "blind_werewolf" || _0x5984b0 == "werewolf") {
        if (_0xbc4a3f.length == 3) {
          var _0x12fb5a;
          if (_0xbc4a3f[1] == 1) {
            if (_0xbc4a3f[2] == 1) {
              _0x12fb5a = "1";
            } else if (_0xbc4a3f[2] == 2) {
              _0x12fb5a = "2";
            } else if (_0xbc4a3f[2] == 3) {
              _0x12fb5a = "3";
            } else if (_0xbc4a3f[2] == 4) {
              _0x12fb5a = "4";
            }
          } else if (_0xbc4a3f[1] == 2) {
            if (_0xbc4a3f[2] == 1) {
              _0x12fb5a = "5";
            } else if (_0xbc4a3f[2] == 2) {
              _0x12fb5a = "6";
            } else if (_0xbc4a3f[2] == 3) {
              _0x12fb5a = "7";
            } else if (_0xbc4a3f[2] == 4) {
              _0x12fb5a = "8";
            }
          } else if (_0xbc4a3f[1] == 3) {
            if (_0xbc4a3f[2] == 1) {
              _0x12fb5a = "9";
            } else if (_0xbc4a3f[2] == 2) {
              _0x12fb5a = "10";
            } else if (_0xbc4a3f[2] == 3) {
              _0x12fb5a = "11";
            } else if (_0xbc4a3f[2] == 4) {
              _0x12fb5a = "12";
            }
          } else if (_0xbc4a3f[1] == 4) {
            if (_0xbc4a3f[2] == 1) {
              _0x12fb5a = "13";
            } else if (_0xbc4a3f[2] == 2) {
              _0x12fb5a = "14";
            } else if (_0xbc4a3f[2] == 3) {
              _0x12fb5a = "15";
            } else if (_0xbc4a3f[2] == 4) {
              _0x12fb5a = "16";
            }
          }
          var _0x122564 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x122564 != null) {
            if (_0x122564.outerHTML.includes(">25s</div></div>")) {
              if (_0xbc4a3f[0] != "priest") {
                _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
                var _0x1cbf09 = "My couple is " + _0x12fb5a;
                var _0x50d949 = "Mine " + _0x12fb5a;
                var _0x52f008 = _0x12fb5a;
                var _0x1c831b = [];
                _0x1c831b.push(_0x1cbf09);
                _0x1c831b.push(_0x50d949);
                _0x1c831b.push(_0x52f008);
                _0x336cbf(_0x1c831b[_0x236b7f(0, _0x1c831b.length - 1)]);
              } else {
                _0x336cbf(_0x12fb5a + " - priest");
              }
            }
          }
        }
        if (_0xbc4a3f.length == 6) {
          var _0x3176bc;
          var _0x501cfa;
          if (_0xbc4a3f[1] == 1) {
            if (_0xbc4a3f[2] == 1) {
              _0x3176bc = "1";
            } else if (_0xbc4a3f[2] == 2) {
              _0x3176bc = "2";
            } else if (_0xbc4a3f[2] == 3) {
              _0x3176bc = "3";
            } else if (_0xbc4a3f[2] == 4) {
              _0x3176bc = "4";
            }
          } else if (_0xbc4a3f[1] == 2) {
            if (_0xbc4a3f[2] == 1) {
              _0x3176bc = "5";
            } else if (_0xbc4a3f[2] == 2) {
              _0x3176bc = "6";
            } else if (_0xbc4a3f[2] == 3) {
              _0x3176bc = "7";
            } else if (_0xbc4a3f[2] == 4) {
              _0x3176bc = "8";
            }
          } else if (_0xbc4a3f[1] == 3) {
            if (_0xbc4a3f[2] == 1) {
              _0x3176bc = "9";
            } else if (_0xbc4a3f[2] == 2) {
              _0x3176bc = "10";
            } else if (_0xbc4a3f[2] == 3) {
              _0x3176bc = "11";
            } else if (_0xbc4a3f[2] == 4) {
              _0x3176bc = "12";
            }
          } else if (_0xbc4a3f[1] == 4) {
            if (_0xbc4a3f[2] == 1) {
              _0x3176bc = "13";
            } else if (_0xbc4a3f[2] == 2) {
              _0x3176bc = "14";
            } else if (_0xbc4a3f[2] == 3) {
              _0x3176bc = "15";
            } else if (_0xbc4a3f[2] == 4) {
              _0x3176bc = "16";
            }
          }
          if (_0xbc4a3f[4] == 1) {
            if (_0xbc4a3f[5] == 1) {
              _0x501cfa = "1";
            } else if (_0xbc4a3f[5] == 2) {
              _0x501cfa = "2";
            } else if (_0xbc4a3f[5] == 3) {
              _0x501cfa = "3";
            } else if (_0xbc4a3f[5] == 4) {
              _0x501cfa = "4";
            }
          } else if (_0xbc4a3f[4] == 2) {
            if (_0xbc4a3f[5] == 1) {
              _0x501cfa = "5";
            } else if (_0xbc4a3f[5] == 2) {
              _0x501cfa = "6";
            } else if (_0xbc4a3f[5] == 3) {
              _0x501cfa = "7";
            } else if (_0xbc4a3f[5] == 4) {
              _0x501cfa = "8";
            }
          } else if (_0xbc4a3f[4] == 3) {
            if (_0xbc4a3f[5] == 1) {
              _0x501cfa = "9";
            } else if (_0xbc4a3f[5] == 2) {
              _0x501cfa = "10";
            } else if (_0xbc4a3f[5] == 3) {
              _0x501cfa = "11";
            } else if (_0xbc4a3f[5] == 4) {
              _0x501cfa = "12";
            }
          } else if (_0xbc4a3f[4] == 4) {
            if (_0xbc4a3f[5] == 1) {
              _0x501cfa = "13";
            } else if (_0xbc4a3f[5] == 2) {
              _0x501cfa = "14";
            } else if (_0xbc4a3f[5] == 3) {
              _0x501cfa = "15";
            } else if (_0xbc4a3f[5] == 4) {
              _0x501cfa = "16";
            }
          }
          if (_0xbc4a3f[0] == "priest") {
            _0x3176bc = _0x3176bc + " - priest";
          }
          if (_0xbc4a3f[3] == "priest") {
            _0x501cfa = _0x501cfa + " - priest";
          }
          var _0x3073f8 = document.evaluate("/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (_0x3073f8 != null) {
            if (_0x3073f8.outerHTML.includes(">25s</div></div>")) {
              var _0x566786 = "My couple is " + _0x3176bc + " and " + _0x501cfa;
              var _0x1a712f = "Mine " + _0x3176bc + " and " + _0x501cfa;
              var _0x5b2536 = _0x3176bc + " and " + _0x501cfa;
              var _0x2aa11c = [];
              _0x2aa11c.push(_0x566786);
              _0x2aa11c.push(_0x1a712f);
              _0x2aa11c.push(_0x5b2536);
              _0x336cbf(_0x2aa11c[_0x236b7f(0, _0x2aa11c.length - 1)]);
            }
            if (_0x3073f8.outerHTML.includes(">27s</div></div>")) {
              if (_0xbc4a3f[0] != "priest" && _0xbc4a3f[3] != "priest") {
                _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
              }
              if (_0xbc4a3f[0].includes("wolf")) {
                _0x4139df(_0xbc4a3f[4], _0xbc4a3f[5]);
              }
              if (_0xbc4a3f[3].includes("wolf")) {
                _0x4139df(_0xbc4a3f[1], _0xbc4a3f[2]);
              }
            }
          }
        }
      }
    }
  }
      setInterval(function() {
        _0x458d8b();
        _0x3cdb96();
    }, 1000);
}());
