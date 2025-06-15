import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the hero section with correct structure', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveClass('relative');
  });

  it('renders the cat character with correct positioning', () => {
    render(<HeroSection />);
    
    const catElement = screen.getByTestId('hero-cat');
    expect(catElement).toBeInTheDocument();
    expect(catElement).toHaveClass('absolute', 'top-0', 'left-0', 'z-20');
    
    // Check that the cat is within the properly positioned container
    const catContainer = screen.getByTestId('cat-container');
    expect(catContainer).toContainElement(catElement);
  });

  it('renders flame elements with correct hierarchy positioning', () => {
    render(<HeroSection />);
    
    // Flame 1 - relative to cat
    const flame1 = screen.getByTestId('hero-flame-1');
    expect(flame1).toBeInTheDocument();
    expect(flame1).toHaveStyle({
      position: 'absolute',
      left: '0px',
      top: '280px',
      width: '324px',
      height: '441px'
    });

    // Flame 2 - relative to cat  
    const flame2 = screen.getByTestId('hero-flame-2');
    expect(flame2).toBeInTheDocument();
    expect(flame2).toHaveStyle({
      position: 'absolute',
      left: '337px',
      top: '407px',
      width: '586px',
      height: '334px'
    });

    // Flame 3 - relative to section
    const flame3 = screen.getByTestId('hero-flame-3');
    expect(flame3).toBeInTheDocument();
    expect(flame3).toHaveStyle({
      position: 'absolute',
      left: '1525px',
      top: '486px',
      width: '444px',
      height: '276px'
    });
  });

  it('renders speech bubble group with correct positioning', () => {
    render(<HeroSection />);
    
    const bubbleGroup = screen.getByTestId('speech-bubble-group');
    expect(bubbleGroup).toBeInTheDocument();
    expect(bubbleGroup).toHaveStyle({
      position: 'absolute',
      left: '555px',
      top: '3px',
      width: '1356px',
      height: '628px'
    });
  });

  it('renders speech bubble SVG with correct positioning within group', () => {
    render(<HeroSection />);
    
    const bubbleSvg = screen.getByTestId('speech-bubble-svg');
    expect(bubbleSvg).toBeInTheDocument();
    expect(bubbleSvg).toHaveStyle({
      position: 'absolute',
      left: '274px',
      top: '0px',
      width: '1082px',
      height: '628px'
    });
  });

  it('renders speech bubble text content with correct positioning', () => {
    render(<HeroSection />);
    
    const textContent = screen.getByTestId('speech-text-content');
    expect(textContent).toBeInTheDocument();
    expect(textContent).toHaveStyle({
      position: 'absolute',
      left: '1013px',
      top: '101px',
      width: '771px',
      height: '481px'
    });
    
    expect(textContent).toHaveTextContent(/hello.*name.*deg.*notfine.*memecoin/i);
  });

  it('renders all star elements with correct positioning relative to speech bubble', () => {
    render(<HeroSection />);
    
    // Stars 1
    const stars1 = screen.getByTestId('hero-stars-1');
    expect(stars1).toBeInTheDocument();
    expect(stars1).toHaveStyle({
      position: 'absolute',
      left: '831px',
      top: '42px',
      width: '152px',
      height: '144px'
    });

    // Stars 2
    const stars2 = screen.getByTestId('hero-stars-2');
    expect(stars2).toBeInTheDocument();
    expect(stars2).toHaveStyle({
      position: 'absolute',
      left: '1814px',
      top: '374px',
      width: '92px',
      height: '87px'
    });

    // Stars 2 duplicate
    const stars2Duplicate = screen.getByTestId('hero-stars-2-duplicate');
    expect(stars2Duplicate).toBeInTheDocument();
    expect(stars2Duplicate).toHaveStyle({
      position: 'absolute',
      left: '1729px',
      top: '0px',
      width: '178px',
      height: '169px'
    });
  });

  it('maintains proper z-index layering', () => {
    render(<HeroSection />);
    
    const catElement = screen.getByTestId('hero-cat');
    const flame1 = screen.getByTestId('hero-flame-1');
    const flame2 = screen.getByTestId('hero-flame-2');
    const bubbleGroup = screen.getByTestId('speech-bubble-group');
    const stars1 = screen.getByTestId('hero-stars-1');

    // Flames should be behind cat
    expect(flame1).toHaveClass('z-10');
    expect(flame2).toHaveClass('z-10');
    expect(catElement).toHaveClass('z-20');
    
    // Speech bubble should be above flames but stars above bubble
    expect(bubbleGroup).toHaveClass('z-30');
    expect(stars1).toHaveClass('z-40');
  });

  it('has proper cat container for flame positioning', () => {
    render(<HeroSection />);
    
    const catContainer = screen.getByTestId('cat-container');
    expect(catContainer).toBeInTheDocument();
    expect(catContainer).toHaveClass('relative');
    
    // Flames 1 & 2 should be inside cat container
    const flame1 = screen.getByTestId('hero-flame-1');
    const flame2 = screen.getByTestId('hero-flame-2');
    
    expect(catContainer).toContainElement(flame1);
    expect(catContainer).toContainElement(flame2);
  });

  it('renders all SVG images with correct src paths', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('img', { name: /cat hero/i })).toHaveAttribute(
      'src', 
      expect.stringContaining('/figma-exports/characters/cat-hero.svg')
    );
    
    expect(screen.getByRole('img', { name: /flame 1/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/decorations/hero-flame-1.svg')
    );
    
    expect(screen.getByRole('img', { name: /speech bubble/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/backgrounds/bg-speech-bubble-1.svg')
    );
    
    expect(screen.getByRole('img', { name: /stars 1/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/decorations/stars-1.svg')
    );
  });

  it('maintains responsive behavior', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass('w-full');
    expect(heroSection).toHaveClass('overflow-hidden');
  });

  it('has proper accessibility attributes for all images', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('img', { name: /cat hero/i })).toHaveAttribute('alt');
    expect(screen.getByRole('img', { name: /flame 1/i })).toHaveAttribute('alt');
    expect(screen.getByRole('img', { name: /speech bubble/i })).toHaveAttribute('alt');
    expect(screen.getByRole('img', { name: /stars 1/i })).toHaveAttribute('alt');
  });
});

describe('Debug System Integration Bug Fixes', () => {
  it('should have debug-image classes on all Image components', () => {
    render(<HeroSection />);
    
    // Test that all images have debug-image class
    const catImage = screen.getByTestId('hero-cat');
    const flame1Image = screen.getByTestId('hero-flame-1');
    const flame2Image = screen.getByTestId('hero-flame-2');
    const flame3Image = screen.getByTestId('hero-flame-3');
    const speechBubbleImage = screen.getByTestId('speech-bubble-svg');
    
    expect(catImage).toHaveClass('debug-image');
    expect(flame1Image).toHaveClass('debug-image');
    expect(flame2Image).toHaveClass('debug-image');
    expect(flame3Image).toHaveClass('debug-image');
    expect(speechBubbleImage).toHaveClass('debug-image'); 
  });

  it('should have data-filename attributes on all Image components', () => {
    render(<HeroSection />);
    
    // Test that all images have data-filename attributes
    const catImage = screen.getByTestId('hero-cat');
    const flame1Image = screen.getByTestId('hero-flame-1');
    const flame2Image = screen.getByTestId('hero-flame-2');
    const flame3Image = screen.getByTestId('hero-flame-3');
    const speechBubbleImage = screen.getByTestId('speech-bubble-svg');
    
    expect(catImage).toHaveAttribute('data-filename', 'cat-hero.svg');
    expect(flame1Image).toHaveAttribute('data-filename', 'hero-flame-1.svg');
    expect(flame2Image).toHaveAttribute('data-filename', 'hero-flame-2.svg');
    expect(flame3Image).toHaveAttribute('data-filename', 'hero-flame-3.svg');
    expect(speechBubbleImage).toHaveAttribute('data-filename', 'bg-speech-bubble-1.svg');
  });

  it('should have debug attributes on star decorations', () => {
    render(<HeroSection />);
    
    const stars1 = screen.getByTestId('hero-stars-1');
    const stars2 = screen.getByTestId('hero-stars-2');
    const stars2Duplicate = screen.getByTestId('hero-stars-2-duplicate');
    
    expect(stars1).toHaveClass('debug-image');
    expect(stars2).toHaveClass('debug-image');
    expect(stars2Duplicate).toHaveClass('debug-image');
    
    expect(stars1).toHaveAttribute('data-filename', 'stars-1.svg');
    expect(stars2).toHaveAttribute('data-filename', 'stars-1.svg');
    expect(stars2Duplicate).toHaveAttribute('data-filename', 'stars-1.svg');
  });
}); 