import { render, screen } from '@testing-library/react';
import HeaderNavigation from '../HeaderNavigation';
import HeroSection from '../HeroSection';
import MemesSection from '../MemesSection';

describe('SVG Inline Conversion', () => {
  describe('HeaderNavigation inline SVGs', () => {
    it('should render inline SVG elements instead of img tags for navigation', () => {
      render(<HeaderNavigation />);
      
      // Check that navigation elements contain inline SVG, not img tags
      const tokenomicsNav = screen.getByTestId('nav-tokenomics');
      const roadmapNav = screen.getByTestId('nav-roadmap');
      const ourteamNav = screen.getByTestId('nav-ourteam');
      const artcommunityNav = screen.getByTestId('nav-artcommunity');
      const howtobuyNav = screen.getByTestId('nav-howtobuy');
      const faqNav = screen.getByTestId('nav-faq');
      
      // Should contain SVG elements, not img elements
      expect(tokenomicsNav.querySelector('svg')).toBeInTheDocument();
      expect(roadmapNav.querySelector('svg')).toBeInTheDocument();
      expect(ourteamNav.querySelector('svg')).toBeInTheDocument();
      expect(artcommunityNav.querySelector('svg')).toBeInTheDocument();
      expect(howtobuyNav.querySelector('svg')).toBeInTheDocument();
      expect(faqNav.querySelector('svg')).toBeInTheDocument();
      
      // Should NOT contain img elements
      expect(tokenomicsNav.querySelector('img')).not.toBeInTheDocument();
      expect(roadmapNav.querySelector('img')).not.toBeInTheDocument();
      expect(ourteamNav.querySelector('img')).not.toBeInTheDocument();
      expect(artcommunityNav.querySelector('img')).not.toBeInTheDocument();
      expect(howtobuyNav.querySelector('img')).not.toBeInTheDocument();
      expect(faqNav.querySelector('img')).not.toBeInTheDocument();
    });

    it('should render inline SVG elements for social icons', () => {
      render(<HeaderNavigation />);
      
      const discordIcon = screen.getByTestId('social-discord');
      const twitterIcon = screen.getByTestId('social-twitter');
      const telegramIcon = screen.getByTestId('social-telegram');
      
      // Should contain SVG elements, not img elements
      expect(discordIcon.querySelector('svg')).toBeInTheDocument();
      expect(twitterIcon.querySelector('svg')).toBeInTheDocument();
      expect(telegramIcon.querySelector('svg')).toBeInTheDocument();
      
      // Should NOT contain img elements
      expect(discordIcon.querySelector('img')).not.toBeInTheDocument();
      expect(twitterIcon.querySelector('img')).not.toBeInTheDocument();
      expect(telegramIcon.querySelector('img')).not.toBeInTheDocument();
    });

    it('should maintain accessibility attributes on inline SVGs', () => {
      render(<HeaderNavigation />);
      
      const tokenomicsNav = screen.getByTestId('nav-tokenomics');
      const discordIcon = screen.getByTestId('social-discord');
      
      const tokenomicsSvg = tokenomicsNav.querySelector('svg');
      const discordSvg = discordIcon.querySelector('svg');
      
      // SVGs should have appropriate accessibility attributes
      expect(tokenomicsSvg).toHaveAttribute('role', 'img');
      expect(tokenomicsSvg).toHaveAttribute('aria-label', expect.stringContaining('Tokenomics'));
      
      expect(discordSvg).toHaveAttribute('role', 'img');
      expect(discordSvg).toHaveAttribute('aria-label', expect.stringContaining('Discord'));
    });
  });

  describe('HeroSection inline SVGs', () => {
    it('should render inline SVG elements instead of img tags', () => {
      render(<HeroSection />);
      
      // Check for specific elements that should contain inline SVGs
      const heroCharacter = screen.getByTestId('hero-character');
      const heroFlames = screen.getAllByTestId(/hero-flame/);
      const heroSpeechBubble = screen.getByTestId('hero-speech-bubble');
      const heroStars = screen.getAllByTestId(/hero-stars/);
      
      // Should contain SVG elements, not img elements
      expect(heroCharacter.querySelector('svg')).toBeInTheDocument();
      expect(heroCharacter.querySelector('img')).not.toBeInTheDocument();
      
      // For flame elements, they ARE the SVG elements themselves
      heroFlames.forEach(flame => {
        expect(flame.tagName.toLowerCase()).toBe('svg');
        expect(flame).toHaveAttribute('role', 'img');
      });
      
      expect(heroSpeechBubble.querySelector('svg')).toBeInTheDocument();
      expect(heroSpeechBubble.querySelector('img')).not.toBeInTheDocument();
      
      // For star elements, they ARE the SVG elements themselves
      heroStars.forEach(stars => {
        expect(stars.tagName.toLowerCase()).toBe('svg');
        expect(stars).toHaveAttribute('role', 'img');
      });
    });
  });

  describe('MemesSection inline SVGs', () => {
    it('should render inline SVG elements instead of img tags', () => {
      render(<MemesSection />);
      
      // Check for memes background elements
      const memesBackgrounds = screen.getAllByTestId(/memes-bg/);
      const memesCatSad = screen.getByTestId('memes-cat-sad');
      
      memesBackgrounds.forEach(bg => {
        expect(bg.querySelector('svg')).toBeInTheDocument();
        expect(bg.querySelector('img')).not.toBeInTheDocument();
      });
      
      expect(memesCatSad.querySelector('svg')).toBeInTheDocument();
      expect(memesCatSad.querySelector('img')).not.toBeInTheDocument();
    });
  });

  describe('SVG inline conversion maintains styling', () => {
    it('should preserve width and height attributes on inline SVGs', () => {
      render(<HeaderNavigation />);
      
      const tokenomicsNav = screen.getByTestId('nav-tokenomics');
      const tokenomicsSvg = tokenomicsNav.querySelector('svg');
      
      // SVG should have proper dimensions
      expect(tokenomicsSvg).toHaveAttribute('width');
      expect(tokenomicsSvg).toHaveAttribute('height');
    });

    it('should preserve CSS classes on SVG containers', () => {
      render(<HeaderNavigation />);
      
      const tokenomicsNav = screen.getByTestId('nav-tokenomics');
      
      // Container should maintain hover and transition classes
      expect(tokenomicsNav).toHaveClass(
        'hover:scale-105',
        'transition-transform',
        'cursor-pointer'
      );
    });
  });
}); 