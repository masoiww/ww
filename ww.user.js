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

(function autoPlay() {
  // Look for all div elements on the page
  const divs = document.querySelectorAll("div");
  
  divs.forEach(div => {
    const text = div.textContent.trim();
    
    // Click any div with these texts
    if (text === "START GAME" || text === "Continue" || text === "Play again" || text === "OK") {
      div.click();
      console.log("Clicked:", text);
      
      // If it's "Continue", check for Voting and then execute the vote click if conditions are met
      if (text === "Continue") {
        // Look for a div containing "Voting"
        const votingElement = Array.from(document.querySelectorAll('div'))
          .find(d => d.textContent.includes("Voting"));
        // Check if an element with vote_day_selected image is present
        const voteDaySelectedElement = document.querySelector('div[style*="/static/media/vote_day_selected"]');
        
        if (votingElement && !voteDaySelectedElement) {
          console.log("Voting element found and vote_day_selected not present:", votingElement);
          // Find the headhunter target image (src contains "headhunter_target")
          const targetImage = document.querySelector('img[src*="headhunter_target"]');
          
          if (targetImage) {
            // Scroll the image into view to ensure it's visible
            targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
            const rect = targetImage.getBoundingClientRect();
            const offsetBelow = 10; // pixels below the image
            const clickX = rect.left + rect.width / 2;
            const clickY = rect.bottom + offsetBelow;
            // Get the element at the point just below the image
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
      }
    }
  });
  
  // Run this function again after 1 second to continuously check the page
  setTimeout(autoPlay, 1000);
})();

