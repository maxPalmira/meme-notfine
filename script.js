//
// Created script.js for the NOTFINE meme coin promo page.
// UPDATED: Added contract address copy functionality and background animation.
// UPDATED: Added community stats updates and mobile navigation handling.
// UPDATED: Fixed mobile menu toggle buttons functionality.
// UPDATED: Refactored to use configuration file for all content.
// UPDATED: Added content population from config and loading state management.
//

import config from './config.js';

// Populate navigation
function populateNavigation() {
  const navLinks = document.querySelector('.nav-links');
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'mobile-menu-toggle close-btn';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.setAttribute('aria-expanded', 'true');
  closeBtn.innerHTML = '<i class="fas fa-times"></i>';
  navLinks.appendChild(closeBtn);
  
  // Add navigation links
  config.navigation.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    navLinks.appendChild(link);
  });
}

// Populate social links
function populateSocialLinks() {
  const socialLinks = document.querySelector('.social-links');
  const icons = {
    twitter: 'fa-twitter',
    telegram: 'fa-telegram',
    discord: 'fa-discord'
  };
  
  Object.entries(config.social).forEach(([platform, url]) => {
    const link = document.createElement('a');
    link.href = url;
    link.title = platform.charAt(0).toUpperCase() + platform.slice(1);
    link.innerHTML = `<i class="fab ${icons[platform]}"></i>`;
    socialLinks.appendChild(link);
  });
}

// Populate meme text section
function populateMemeText() {
  const memeText = document.querySelector('.meme-text');
  
  config.content.memeText.forEach(item => {
    const p = document.createElement('p');
    if (item.finalLine) {
      p.className = 'final-line';
      p.innerHTML = `<span class="notfine-text">${item.finalLine.text}</span> — <span class="fine">${item.finalLine.status}</span> ${item.finalLine.emojis}`;
    } else {
      p.innerHTML = `${item.emoji} <span class="down">${item.text}</span> — <span class="not-fine">${item.status}</span>`;
    }
    memeText.appendChild(p);
  });
}

// Populate about section
function populateAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <h2>${config.content.about.title}</h2>
    <p>${config.content.about.text}</p>
  `;
}

// Populate tokenomics section
function populateTokenomics() {
  const tokenomics = document.getElementById('tokenomics');
  const metricsHTML = config.content.tokenomics.metrics
    .map(metric => `
      <div class="metric">
        <span class="metric-value">${metric.value}</span>
        <span class="metric-label">${metric.label}</span>
      </div>
    `).join('');
    
  tokenomics.innerHTML = `
    <h2>${config.content.tokenomics.title}</h2>
    <div class="tokenomics-grid">
      ${metricsHTML}
    </div>
  `;
}

// Populate how to buy section
function populateHowToBuy() {
  const howToBuy = document.getElementById('how-to-buy');
  const stepsHTML = config.content.howToBuy.steps
    .map(step => `
      <div class="step">
        <div class="step-icon">${step.icon}</div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    `).join('');
    
  howToBuy.innerHTML = `
    <h2>${config.content.howToBuy.title}</h2>
    <div class="steps-container">
      ${stepsHTML}
    </div>
  `;
}

// Populate contract section
function populateContract() {
  const contract = document.querySelector('.contract-section');
  contract.innerHTML = `
    <h3>${config.content.contract.title}</h3>
    <div class="contract-container">
      <code class="contract-address">${config.content.contract.address}</code>
      <button class="copy-btn" onclick="copyContract()">
        <span class="copy-icon">${config.content.contract.copyButton.icon}</span>
        <span class="copy-text">${config.content.contract.copyButton.text}</span>
      </button>
    </div>
  `;
}

// Populate community section
function populateCommunity() {
  const community = document.getElementById('community');
  const statsHTML = config.content.community.stats
    .map(stat => `
      <div class="stat">
        <span class="stat-value" id="${stat.id}">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join('');
    
  community.innerHTML = `
    <h2>${config.content.community.title}</h2>
    <div class="community-stats">
      ${statsHTML}
    </div>
  `;
}

// Populate footer
function populateFooter() {
  const buyBtn = document.querySelector('.buy-btn');
  buyBtn.href = config.content.buyButton.link;
  buyBtn.innerHTML = `
    <span class="btn-text">${config.content.buyButton.text} 
      <span class="btn-icons">${config.content.buyButton.emojis}</span>
    </span>
  `;
}

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
  const contractAddress = config.content.contract.address;
  navigator.clipboard.writeText(contractAddress).then(() => {
    const copyBtn = document.querySelector('.copy-btn');
    const { text, icon } = config.content.contract.copyButton;
    const { successText, successIcon } = config.content.contract.copyButton;
    const originalHTML = `<span class="copy-icon">${icon}</span><span class="copy-text">${text}</span>`;
    
    copyBtn.innerHTML = `<span class="copy-icon">${successIcon}</span><span class="copy-text">${successText}</span>`;
    
    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Update community stats with random increasing numbers for demo
function updateCommunityStats() {
  const { maxHolders, maxMarketCap, maxVolume } = config.stats;
  
  const stats = {
    holders: { el: document.getElementById('holders-count'), value: 0, max: maxHolders },
    marketCap: { el: document.getElementById('market-cap'), value: 0, max: maxMarketCap },
    volume: { el: document.getElementById('volume'), value: 0, max: maxVolume }
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
    const traded = formatNumber(Math.random() * maxVolume);
    const holders = Math.floor(stats.holders.value).toLocaleString();
    liveData.textContent = `${traded} traded | ${holders} holders`;
  }, config.stats.updateInterval);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Populate content
  populateNavigation();
  populateSocialLinks();
  populateMemeText();
  populateAbout();
  populateTokenomics();
  populateHowToBuy();
  populateContract();
  populateCommunity();
  populateFooter();
  
  // Setup functionality
  setupMobileMenu();
  setupSmoothScroll();
  updateCommunityStats();
  
  // Make copyContract function available globally
  window.copyContract = copyContract;
  
  // Remove loading state
  document.body.classList.remove('loading');
}); 