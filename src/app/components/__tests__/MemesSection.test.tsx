import React from 'react';
import { render, screen } from '@testing-library/react';
import MemesSection from '../MemesSection';

describe('MemesSection', () => {
  it('renders the memes section with correct structure', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('relative', 'w-full', 'overflow-hidden');
  });

  it('renders the memes cat character with correct positioning', () => {
    render(<MemesSection />);
    
    const cat = screen.getByTestId('memes-cat-sad');
    expect(cat).toBeInTheDocument();
    expect(cat).toHaveAttribute('alt', expect.stringContaining('Memes Cat'));
  });

  it('renders background elements with proper layering', () => {
    render(<MemesSection />);
    
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    const cloud1 = screen.getByTestId('memes-bg-cloud-1');
    const cloud2 = screen.getByTestId('memes-bg-cloud-2');
    
    expect(bgForCat).toBeInTheDocument();
    expect(cloud1).toBeInTheDocument();
    expect(cloud2).toBeInTheDocument();
  });

  it('has proper accessibility attributes for all images', () => {
    render(<MemesSection />);
    
    // All images should have alt text
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  it('maintains proper section dimensions and styling', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    expect(section).toHaveStyle({ minHeight: '600px' });
  });
});

describe('Debug System Integration', () => {
  it('should have debug-image classes on all Image components', () => {
    render(<MemesSection />);
    
    const cat = screen.getByTestId('memes-cat-sad');
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    const cloud1 = screen.getByTestId('memes-bg-cloud-1');
    const cloud2 = screen.getByTestId('memes-bg-cloud-2');
    
    expect(cat).toHaveClass('debug-image');
    expect(bgForCat).toHaveClass('debug-image');
    expect(cloud1).toHaveClass('debug-image');
    expect(cloud2).toHaveClass('debug-image');
  });

  it('should have data-filename attributes on all Image components', () => {
    render(<MemesSection />);
    
    const cat = screen.getByTestId('memes-cat-sad');
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    const cloud1 = screen.getByTestId('memes-bg-cloud-1');
    const cloud2 = screen.getByTestId('memes-bg-cloud-2');
    
    expect(cat).toHaveAttribute('data-filename', 'memes-cat-sad.svg');
    expect(bgForCat).toHaveAttribute('data-filename', 'memes-bg-for-sad-cat.svg');
    expect(cloud1).toHaveAttribute('data-filename', 'memes-bg-cloud-1.svg');
    expect(cloud2).toHaveAttribute('data-filename', 'memes-bg-cloud-2.svg');
  });
});

describe('Layout and Positioning', () => {
  it('has proper responsive behavior', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    expect(section).toHaveClass('w-full');
  });

  it('maintains z-index layering for proper element stacking', () => {
    render(<MemesSection />);
    
    // Background elements should have lower z-index
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    expect(bgForCat).toHaveClass('z-10');
    
    // Character should have higher z-index
    const cat = screen.getByTestId('memes-cat-sad');
    expect(cat).toHaveClass('z-20');
  });

  it('uses absolute positioning for precise SVG placement', () => {
    render(<MemesSection />);
    
    const cat = screen.getByTestId('memes-cat-sad');
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    
    expect(cat).toHaveClass('absolute');
    expect(bgForCat).toHaveClass('absolute');
  });
}); 