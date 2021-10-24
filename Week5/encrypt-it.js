/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window Loaded!");
    handleButtonClicks();
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
  function handleButtonClicks() {
    var encryptBtn = document.getElementById("encrypt-it");
    var resetBtn = document.getElementById("reset");

    encryptBtn.addEventListener("click", () => {
      console.log("Button Clicked!");
      shiftCipher(document.getElementById("input-text"));
    });

    resetBtn.addEventListener("click", () => {
      resetResult();
    });
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.value.toLowerCase();

    let res = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        res += text[i];
      } else if (text[i] == 'z') {
        res += 'a';
      } else {
        var letter = text.charCodeAt(i);
        res += String.fromCharCode(letter + 1);
      }
    }
    document.getElementById("result").innerHTML = res;
    return res;
  }

  function resetResult() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").innerHTML = "";
  }

})();
