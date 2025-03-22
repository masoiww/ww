// ==UserScript==
// @name         SanBeYiiu
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  HH mod
// @author       BeYiiu
// @contributor  sharpedge
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wolvesville.com
// @match        https://www.wolvesville.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

let botStarted = false;

(async function autoPlay() {
  // Alert only once when the script first runs
  if (!botStarted) {
    alert("Bot is running");
    botStarted = true;
  }

  // Look for all div elements on the page
  const divs = document.querySelectorAll("div");
  // Loop over each div and click if its text matches "START GAME" or "Continue"
  for (const div of divs) {
    const text = div.textContent.trim();
    if (text === "START GAME" || text === "Continue") {
      div.click();
      console.log("Clicked:", text);
      // Pause 0.5 seconds after clicking
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }
  //    // Check for "START GAME"
  // const StartGameDiv = Array.from(document.querySelectorAll("div"))
  //   .find(div => div.textContent.trim() === "START GAME");

  // if (StartGameDiv) {
  //   StartGameDiv.click();
  //   console.log("Clicked: START GAME");
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  
  //    // Check for "Continue"
  // const ContinueDiv = Array.from(document.querySelectorAll("div"))
  //   .find(div => div.textContent.trim() === "Continue");
    
  //   if (ContinueDiv) {
  //   ContinueDiv.click();
  //   console.log("Clicked: Continue");
  //   await new Promise(resolve => setTimeout(resolve, 1000));

   // Check for "Play again"
  const playAgainDiv = Array.from(document.querySelectorAll("div"))
    .find(div => div.textContent.trim() === "Play again");

  if (playAgainDiv) {
    playAgainDiv.click();
    console.log("Clicked: Play again");
    // Wait 1.5 seconds after clicking "Play again"
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // After waiting, check for an "OK" button and click it
    const okDiv = Array.from(document.querySelectorAll("div"))
      .find(div => div.textContent.trim() === "OK");
      
    if (okDiv) {
      okDiv.click();
      console.log("Clicked: OK");
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Voting logic: run only if a "Voting" element is found and no vote_day_selected element exists
  const votingElement = Array.from(document.querySelectorAll("div"))
    .find(div => div.textContent.includes("Voting"));
  const voteDaySelectedElement = document.querySelector('div[style*="/static/media/vote_day_selected"]');

  if (votingElement && !voteDaySelectedElement) {
    console.log("Voting element found and vote_day_selected not present:", votingElement);

    // Find the headhunter target image (assuming its src contains "headhunter_target")
    const targetImage = document.querySelector('img[src*="headhunter_target"]');

    if (targetImage) {
      // Scroll the image into view to ensure it's visible
      targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
      const rect = targetImage.getBoundingClientRect();
      const offsetBelow = 10; // pixels below the image
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.bottom + offsetBelow;

      // Find the element at the point just below the image
      const elementBelow = document.elementFromPoint(clickX, clickY);

      if (elementBelow) {
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          clientX: clickX,
          clientY: clickY
        });
        elementBelow.dispatchEvent(clickEvent);
        console.log("Clicked below the headhunter image.");
        // Pause 0.5 seconds after the vote click
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        console.warn("No element found below the image at calculated coordinates.");
      }
    } else {
      console.warn("Headhunter target image not found on the page.");
    }
  } else {
    if (!votingElement) {
      console.log("Voting element not found.");
    } else {
      console.log("vote_day_selected element is present, so no vote action is taken.");
    }
  }

  // Run the function again after 1 second to continuously check the page
  setTimeout(autoPlay, 1000);
})();

