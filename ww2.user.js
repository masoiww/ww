// ==UserScript==
// @name         BeYiiu
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


(async function() {
    'use strict';

    // Display an initial alert message.
    window.alert('Script Bot play custom!');

    // Override localStorage.setItem to prevent multi-window issues.
    (function overrideLocalStorageSetItem() {
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            if (key === "open-page") {
                localStorage.removeItem(key);
                console.log('Multi-window detection blocked');
                return;
            }
            originalSetItem.apply(this, arguments);
        };
    })();

    // -------------------- Utility Functions --------------------

    // A helper function to select an element using XPath.
    function selectElement(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    // -------------------- Main Game Action Processor --------------------

    // Processes all game-related actions.
    function processGameActions() {
        checkGameStart();
        simulateVote("1", "2");            // Parameters can be adjusted as needed.
        simulateKillAction("killParam1", "killParam2");
        simulateMediaAction();
        simulateTagAction("tagParam1", "tagParam2");
    }

    // -------------------- Bot Action Functions --------------------

    // Checks for game start conditions and "play again" scenarios.
    function checkGameStart() {
        const startButton = selectElement("//*[contains(text(), 'START GAME')]");
        if (startButton != null) {
            startButton.click();
            console.log("Bot started the game with START GAME!");
        }

        const continueButton = selectElement("//*[contains(text(), 'Continue')]");
        if (continueButton != null) {
            continueButton.click();
            console.log("Bot continued the game!");
        }

        const playAgainButton = selectElement("//*[contains(text(), 'Play again') or contains(text(), 'Play again with friends')]");
        if (playAgainButton != null) {
            playAgainButton.click();
            console.log("Bot backed the game!");
        }
    }

    // Simulates a vote action by clicking a vote button constructed via parameters.
    function simulateVote(param1, param2) {
        // Construct an XPath for the vote button. (Placeholder: adjust as needed.)
        const voteButtonXPath = "/html/body/div[1]/div/div/div[" + param1 + "]/div[" + param2 + "]/button";
        const voteButton = selectElement(voteButtonXPath);
        if (voteButton != null) {
            voteButton.click();
            console.log("Bot voted!");
        }
    }

    // Simulates a kill action by iterating over candidate elements and performing clicks.
    function simulateKillAction(killParam1, killParam2) {
        for (let i = 0; i < 2; i++) {
            // Construct an XPath for the kill candidate element.
            const candidateXPath = "//*[contains(@class, 'kill-candidate')][" + (i + 1) + "]";
            const candidateElement = selectElement(candidateXPath);
            if (candidateElement != null) {
                // Check if the candidate element’s HTML includes specific keywords.
                if (candidateElement.outerHTML.includes("specific-kill-keyword1") ||
                    candidateElement.outerHTML.includes("specific-kill-keyword2")) {
                    candidateElement.click();
                    // Construct a further XPath based on passed kill parameters.
                    const actionXPath = "//*[contains(@data-action, '" + killParam1 + "') and contains(@data-action, '" + killParam2 + "')]";
                    const actionElement = selectElement(actionXPath);
                    if (actionElement != null) {
                        actionElement.click();
                        console.log("Bot killed!");
                    }
                }
            }
        }
    }

    // Simulates media-related actions, for example clicking on a priest’s holy water.
    function simulateMediaAction() {
        // Loop over a range of candidate elements.
        for (let i = 0; i < 10; i++) {
            // Construct an XPath that targets elements with a specific media source.
            const mediaXPath = "//*[contains(@src, 'static/media/priest_holy_water')][" + (i + 1) + "]";
            const mediaElement = selectElement(mediaXPath);
            if (mediaElement != null) {
                mediaElement.click();
                console.log("Bot performed media action!");
                // Optionally, click on additional related elements.
                const additionalXPath = "//*[contains(@class, 'media-action')][" + (i + 1) + "]";
                const additionalElement = selectElement(additionalXPath);
                if (additionalElement != null) {
                    additionalElement.click();
                }
            }
        }
    }

    // Simulates a tag action by clicking candidate tag elements.
    function simulateTagAction(tagParam1, tagParam2) {
        for (let i = 0; i < 3; i++) {
            // Construct an XPath for tag candidate elements.
            const tagXPath = "//*[contains(@class, 'tag-candidate')][" + (i + 1) + "]";
            const tagElement = selectElement(tagXPath);
            if (tagElement != null && tagElement.outerHTML.includes("reversedSelectionMarker")) {
                tagElement.click();
                // Construct a further XPath based on tag parameters.
                const tagActionXPath = "//*[contains(@data-tag, '" + tagParam1 + "') and contains(@data-tag, '" + tagParam2 + "')]";
                const tagActionElement = selectElement(tagActionXPath);
                if (tagActionElement != null) {
                    tagActionElement.click();
                    console.log("Bot tagged!");
                }
            }
        }
    }

    setInterval(function() {
        processGameActions();
    }, 1000);
})();
