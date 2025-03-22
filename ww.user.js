// ==UserScript==
// @name         SanBeYiiu
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  HH mod
// @author       BeYiiu
// @contributor  sharpedge
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @match        *://*.wolvesville.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

let botStarted = false;
function printHello(){
  console.log("Hello");
}


// Run the function again after 1 second to continuously check the page
setTimeout(printHello, 1000);


