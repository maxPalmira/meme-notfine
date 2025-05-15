//
// Created script.js for the NOTFINE meme coin promo page.
// UPDATED: Added contract address copy functionality and background animation.
// UPDATED: Added community stats updates and mobile navigation handling.
// UPDATED: Fixed mobile menu toggle buttons functionality.
//

// Mobile menu toggle
function setupMobileMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  function openMenu() {
    navLinks.classList.add('active');
    burgerBtn.setAttribute('aria-expanded', 'true');
    closeBtn.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    closeBtn.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const isMenuOpen = navLinks.classList.contains('active');
    const clickedOutside = !e.target.closest('.nav-links') && 
                          !e.target.closest('.burger-btn');
    
    if (isMenuOpen && clickedOutside) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu when clicking a link
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
}

// Smooth scroll handling
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

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

// Update community stats with random increasing numbers for demo
function updateCommunityStats() {
  const stats = {
    holders: { el: document.getElementById('holders-count'), value: 0, max: 1500 },
    marketCap: { el: document.getElementById('market-cap'), value: 0, max: 250000 },
    volume: { el: document.getElementById('volume'), value: 0, max: 50000 }
  };

  function formatNumber(num) {
    if (num >= 1000000) return `$${(num/1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num/1000).toFixed(1)}K`;
    return `$${num.toFixed(0)}`;
  }

  function updateStat(stat) {
    if (stat.value < stat.max) {
      stat.value = Math.min(stat.value + (stat.max * 0.1), stat.max);
      if (stat.el.id === 'holders-count') {
        stat.el.textContent = Math.floor(stat.value).toLocaleString();
      } else {
        stat.el.textContent = formatNumber(stat.value);
      }
    }
  }

  // Update every 100ms for smooth animation
  const interval = setInterval(() => {
    let allComplete = true;
    for (let key in stats) {
      if (stats[key].value < stats[key].max) {
        updateStat(stats[key]);
        allComplete = false;
      }
    }
    if (allComplete) clearInterval(interval);
  }, 100);

  // Update live data in footer
  const liveData = document.getElementById('live-data');
  setInterval(() => {
    const traded = formatNumber(Math.random() * 50000);
    const holders = Math.floor(stats.holders.value).toLocaleString();
    liveData.textContent = `${traded} traded | ${holders} holders`;
  }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupSmoothScroll();
  updateCommunityStats();
}); 