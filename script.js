//
// Created script.js for the NOTFINE meme coin promo page.
// UPDATED: Added contract address copy functionality and background animation.
//

// Background animation
(function animateBackground() {
  let angle = 135;
  setInterval(() => {
    angle = (angle + 0.2) % 360;
    document.body.style.background = `linear-gradient(${angle}deg, #ffb347 0%, #ff7043 100%)`;
  }, 40);
})();

// Contract copy functionality
function copyContract() {
  const contractAddress = document.querySelector('.contract-address').textContent;
  navigator.clipboard.writeText(contractAddress).then(() => {
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    
    copyBtn.innerHTML = '<span class="copy-icon">✅</span><span class="copy-text">Copied!</span>';
    
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
} 