// ==UserScript==
// @name         BeYiiu
// @namespace    http://tampermonkey.net/
// @version      5.5
// @description  WW
// @author       BeYiiu
// @match        https://www.wolvesville.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-start
// ==/UserScript==



(function() {
    'use strict';


    // --- Utility Functions ---

    // Select a DOM element using an XPath expression.
    function selectElement(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    // --- In-Game Bot Action Routines ---

    // Check for game elements to start or restart the game.
    function checkGameElements() {
        // Look for an element indicating "START GAME"
        let startGameElement = selectElement("//*[contains(text(), '>START GAME<')]");
        if (startGameElement) {
            let startButton = selectElement("/html/body/div[1]//button[contains(text(), 'START GAME')]");
            if (startButton) {
                startButton.click();
                console.log("Bot started the game!");
            }
        }

        // Check for a "Play again" or similar element.
        let playAgainElement = selectElement("//*[contains(text(), 'Play again') or contains(text(), 'Play again with friends')]");
        if (playAgainElement) {
            playAgainElement.click();
            console.log("Bot restarted the game!");
        }
    }

    // Perform all periodic bot actions.
    function performBotActions() {
        console.log("Performing bot actions...");
        voteForPlayer(1, 2);
        tagPlayer("tagParam1", "tagParam2");
        performKillAction("killParam1", "killParam2");
        processKillElements();
    }

    // Voting Action
    function voteForPlayer(param1, param2) {
        let xpath = "/html/body/div[1]//div[contains(@class, 'vote-area')]/div[" + param1 + "]/button[" + param2 + "]";
        let voteButton = selectElement(xpath);
        if (voteButton) {
            voteButton.click();
            console.log("Bot voted!");
        }
    }

    // Tagging Action
    function tagPlayer(tagParam1, tagParam2) {
        for (let i = 0; i < 3; i++) {
            let candidateXpath = "/html/body/div[1]//div[contains(@class, 'tag-target')][" + i + "]";
            let candidate = selectElement(candidateXpath);
            if (candidate &&
                (candidate.outerHTML.includes("wolf_selection_marker") ||
                 candidate.outerHTML.includes("splitwolf_bind_bar"))) {
                candidate.click();
                let tagXpath = "/html/body/div[1]//div[contains(@class, 'tag-action') and @data-tag1='" + tagParam1 + "' and @data-tag2='" + tagParam2 + "']";
                let tagButton = selectElement(tagXpath);
                if (tagButton) {
                    tagButton.click();
                    console.log("Bot tagged!");
                }
            }
        }
    }

    // Killing Action
    function performKillAction(actionParam1, actionParam2) {
        for (let i = 0; i < 2; i++) {
            let candidateXpath = "/html/body/div[1]//div[contains(@class, 'action-target')][" + i + "]";
            let candidateElement = selectElement(candidateXpath);
            if (candidateElement &&
                (candidateElement.outerHTML.includes("bullet_gunner") ||
                 candidateElement.outerHTML.includes("priest_holy_water"))) {
                candidateElement.click();
                let killXpath = "/html/body/div[1]//div[contains(@class, 'kill-confirm') and @data-param1='" + actionParam1 + "' and @data-param2='" + actionParam2 + "']";
                let killButton = selectElement(killXpath);
                if (killButton) {
                    killButton.click();
                    console.log("Bot killed!");
                }
            }
        }
    }

    // Additional Killing Routine: Process UI elements to trigger kill confirmations.
    function processKillElements() {
        for (let i = 0; i < 8; i++) {
            let elementXpath = "/html/body/div[1]//div[contains(@class, 'player-icon')][" + i + "]";
            let element = selectElement(elementXpath);
            if (element && element.outerHTML.includes("/static/media/priest_holy_water")) {
                element.click();
                let confirmXpath = "/html/body/div[1]//div[contains(@class, 'kill-confirmation')][" + i + "]";
                let confirmButton = selectElement(confirmXpath);
                if (confirmButton) {
                    confirmButton.click();
                    console.log("Bot kill confirmed!");
                }
            }
        }
    }

    // --- Start the Bot ---

    // Since all restrictions have been removed, simply alert and start the periodic bot actions.
    alert("Bot loaded! No usage restrictions apply.");
    setInterval(function() {
        performBotActions();
        checkGameElements();
    }, 1000);
})();
