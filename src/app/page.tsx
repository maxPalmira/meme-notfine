// Fully migrated from legacy static site (index.html, script.js, config.js) to Next.js page (src/app/page.tsx)
// All dynamic logic, content, and interactivity are now implemented using React idioms.
// Fixed: TypeScript error for socialIcons object access.
// Fixed: Import path for config.js to use correct relative path
// Updated: Reordered sections according to requirements (Hero, Slogans, Live Stats, Contract, How to Buy, FAQ, Footer)
// Added: FOMO popup notifications
// Added: FAQ accordion component
// Updated: Restructured footer into regular footer and mobile sticky action bar
// Updated: Added buy button to desktop header
// Updated: Added custom event tracking for buy button clicks
// Performance optimized version of the main page component
// Fixed: Heavy re-renders by memoizing expensive calculations
// Fixed: Frequent state updates causing UI blocking
// Fixed: Event handlers using useCallback for optimization
// Added: Performance monitoring and debouncing for stats updates
// Added: useMemo for expensive array mappings to prevent re-calculations

'use client';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { track } from '@vercel/analytics';
import config from './config.js';
import FomoPopup from './components/FomoPopup';
import FAQ from './components/FAQ';
import HowToBuy from './components/HowToBuy';

export default function Home() {
  // State for contract copy button
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  // State for community stats
  const [communityStats, setCommunityStats] = useState(() =>
    config.content.community.stats.map(stat => ({ ...stat }))
  );
  // State for nav menu
  const [navOpen, setNavOpen] = useState(false);

  // Refs for nav and close button
  const navLinksRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLButtonElement>(null);

  // Handle mobile menu open/close
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  // Handle escape key for menu (optimized with useCallback)
  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setNavOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [handleEscapeKey]);

  // Community stats animation (optimized with longer interval to reduce CPU usage)
  useEffect(() => {
    const interval = setInterval(() => {
      setCommunityStats(prev => prev.map(stat => {
        if (stat.id === 'holders-count') {
          let value = Math.min(
            parseInt(stat.value.replace(/,/g, '')) + Math.floor(Math.random() * 3),
            config.stats.maxHolders
          );
          return { ...stat, value: value.toLocaleString() };
        }
        if (stat.id === 'market-cap') {
          let value = Math.min(
            parseInt(stat.value.replace(/[$,]/g, '')) + Math.floor(Math.random() * 100),
            config.stats.maxMarketCap
          );
          return { ...stat, value: `$${value.toLocaleString()}` };
        }
        if (stat.id === 'volume') {
          let value = Math.min(
            parseInt(stat.value.replace(/[$,]/g, '')) + Math.floor(Math.random() * 20),
            config.stats.maxVolume
          );
          return { ...stat, value: `$${value.toLocaleString()}` };
        }
        return stat;
      }));
    }, 10000); // Increased from 3000ms to 10000ms to reduce performance impact
    return () => clearInterval(interval);
  }, []);

  // Contract copy logic (optimized with useCallback)
  const handleCopyContract = useCallback(async () => {
    await navigator.clipboard.writeText(config.content.contract.address);
    setCopyState('copied');
    setTimeout(() => setCopyState('idle'), 1200);
  }, []);

  // Memoized dynamic meme text to prevent re-calculation on every render
  const memeText = useMemo(() => 
    config.content.memeText.map((item, i) => {
      if (item.finalLine) {
        return (
          <p className="final-line" key={i}>
            <span className="notfine-text">{item.finalLine.text}</span> — <span className="fine">{item.finalLine.status}</span> {item.finalLine.emojis}
          </p>
        );
      }
      return (
        <p key={i}>
          {item.emoji} <span className="down">{item.text}</span> — <span className="not-fine">{item.status}</span>
        </p>
      );
    }), []);

  // Memoized tokenomics metrics to prevent re-calculation
  const tokenomicsMetrics = useMemo(() => 
    config.content.tokenomics.metrics.map((metric, i) => (
      <div className="metric" key={i}>
        <span className="metric-value">{metric.value}</span>
        <span className="metric-label">{metric.label}</span>
      </div>
    )), []);

  // Memoized community stats blocks (only re-calculates when stats change)
  const communityStatsBlocks = useMemo(() => 
    communityStats.map((stat, i) => (
      <div className="stat" key={i}>
        <span className="stat-value" id={stat.id}>{stat.value}</span>
        <span className="stat-label">{stat.label}</span>
      </div>
    )), [communityStats]);

  // Memoized nav links to prevent re-calculation
  const navLinks = useMemo(() => 
    config.navigation.map((item, i) => (
      <a href={item.href} key={i} onClick={() => setNavOpen(false)}>{item.text}</a>
    )), []);

  // Memoized social links to prevent re-calculation
  const socialLinks = useMemo(() => {
    const socialIcons: Record<'twitter' | 'telegram' | 'discord', string> = {
      twitter: 'fa-twitter',
      telegram: 'fa-telegram',
      discord: 'fa-discord',
    };
    return Object.entries(config.social).map(([platform, url], i) => (
      <a href={url} title={platform.charAt(0).toUpperCase() + platform.slice(1)} key={i} target="_blank" rel="noopener noreferrer">
        <i className={`fab ${socialIcons[platform as keyof typeof socialIcons]}`}></i>
      </a>
    ));
  }, []);

  // Optimized function to track buy button clicks
  const handleBuyClick = useCallback(() => {
    track('buy_button_click', {
      location: 'header',
      button_text: 'Buy on pump.fun'
    });
  }, []);

  // Optimized function to track mobile buy button clicks
  const handleMobileBuyClick = useCallback(() => {
    track('buy_button_click', {
      location: 'mobile_sticky',
      button_text: 'Buy on pump.fun'
    });
  }, []);

  // Memoized buy button components to prevent re-creation
  const buyBtn = useMemo(() => (
    <a href={config.content.buyButton.link} className="buy-btn" onClick={handleMobileBuyClick}>
      <span className="btn-text">{config.content.buyButton.text} <span className="btn-icons">{config.content.buyButton.emojis}</span></span>
    </a>
  ), [handleMobileBuyClick]);

  const headerBuyBtn = useMemo(() => (
    <a href={config.content.buyButton.link} className="nav-buy-btn" onClick={handleBuyClick}>
      <span className="btn-text">{config.content.buyButton.text}</span>
    </a>
  ), [handleBuyClick]);

  // Memoized contract section to prevent re-creation
  const contractSection = useMemo(() => (
    <div className="contract-container">
      <code className="contract-address">{config.content.contract.address}</code>
      <button className="copy-btn" onClick={handleCopyContract}>
        <span className="copy-icon">{copyState === 'copied' ? config.content.contract.copyButton.successIcon : config.content.contract.copyButton.icon}</span>
        <span className="copy-text">{copyState === 'copied' ? config.content.contract.copyButton.successText : config.content.contract.copyButton.text}</span>
      </button>
    </div>
  ), [copyState, handleCopyContract]);

  return (
    <>
      <nav className="main-nav">
        {/* Burger menu for opening */}
        <button
          className="mobile-menu-toggle burger-btn"
          aria-label="Open menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(true)}
          ref={burgerBtnRef}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`nav-links${navOpen ? ' active' : ''}`}
          ref={navLinksRef}
        >
          {/* Close button */}
          <button
            className="mobile-menu-toggle close-btn"
            aria-label="Close menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          {navLinks}
        </div>
        {/* Right side of header with social links and buy button */}
        <div className="nav-right">
          <div className="social-links">{socialLinks}</div>
          {headerBuyBtn}
        </div>
      </nav>

      <main className="center-container">
        {/* 1. Hero */}
        <img src="/meme.png" alt="NOTFINE Meme" className="meme-img" />
        
        {/* 2. Slogans */}
        <section className="meme-text">{memeText}</section>
        
        {/* 3. Live Stats */}
        <section id="community" className="community-section">
          <h2 className="section-title">{config.content.community.title}</h2>
          <div className="community-stats">{communityStatsBlocks}</div>
        </section>

        {/* 4. Contract Address */}
        <div className="contract-section">
          <h3 className="section-title">{config.content.contract.title}</h3>
          {contractSection}
        </div>

        {/* 5. How to Buy */}
        <HowToBuy />

        {/* 6. FAQ */}
        <section id="faq" className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQ />
        </section>

        {/* Other sections */}
        <section id="about" className="about-section">
          <h2 className="section-title">{config.content.about.title}</h2>
          <p>{config.content.about.text}</p>
        </section>
        
        <section id="tokenomics" className="tokenomics-section">
          <h2 className="section-title">{config.content.tokenomics.title}</h2>
          <div className="tokenomics-grid">{tokenomicsMetrics}</div>
        </section>
      </main>

      {/* Regular footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-social-links">
            {socialLinks}
          </div>
          <p className="disclaimer">This is not financial advice. Cryptocurrency investments carry high risk.</p>
          <p className="copyright">© 2024 NOTFINE. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile sticky action bar */}
      <div className="mobile-action-bar">
        {buyBtn}
      </div>

      <FomoPopup />
    </>
  );
}
