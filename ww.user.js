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

(async function autoPlay() {
  // Alert only once when the script first runs
  if (!botStarted) {
    alert("Bot is running");
    botStarted = true;
  }
  // Find all div elements on the page
const divs = document.querySelectorAll("div");

// Loop through each div to check its text content
divs.forEach(div => {
  if (div.textContent.trim() === "START GAME") {
    div.click();
  } else if (div.textContent.trim() === "Continue") {
    div.click();
  } else if (div.textContent.trim() === "Play again") {
    div.click();
  } else if (div.textContent.trim() === "OK") {
    div.click();
  } else if (div.textContent.trim() === "PLAY") {
    div.click();
  }
});
  
  }

  // Run the function again after 1 second to continuously check the page
  setTimeout(autoPlay, 1000);
})();

