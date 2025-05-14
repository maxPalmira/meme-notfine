//
// Created script.js for the NOTFINE meme coin promo page.
// Adds a smooth animated gradient shift to the background for visual interest.
//

(function animateBackground() {
  let angle = 135;
  setInterval(() => {
    angle = (angle + 0.2) % 360;
    document.body.style.background = `linear-gradient(${angle}deg, #ffb347 0%, #ff7043 100%)`;
  }, 40);
})(); 