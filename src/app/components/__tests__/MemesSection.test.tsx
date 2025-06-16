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
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('py-8');
    expect(section).toHaveClass('px-4');
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

  it('uses responsive positioning for SVG placement', () => {
    render(<MemesSection />);
    
    const cat = screen.getByTestId('memes-cat-sad');
    const bgForCat = screen.getByTestId('memes-bg-for-sad-cat');
    
    expect(cat).toHaveClass('debug-image');
    expect(bgForCat).toHaveClass('absolute'); // Background elements can use absolute
  });
});

describe('Responsive Layout and Figma Compliance', () => {
  it('should be responsive and scale properly on all screen sizes', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    
    // Should be full width and responsive
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('py-8'); // Proper vertical padding
    expect(section).toHaveClass('px-4'); // Proper horizontal padding for mobile
  });

  it('should match Figma design specifications for layout', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    
    // Should use design dimensions as constraints, not fixed values
    expect(section).not.toHaveStyle({ width: '1712.168px' });
    expect(section).not.toHaveStyle({ height: '768.357px' });
  });

  it('should have proper section structure for Figma compliance', () => {
    render(<MemesSection />);
    
    const section = screen.getByTestId('memes-section');
    
    // Figma specs: Should have proper responsive structure
    expect(section).toHaveClass('relative');
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('overflow-hidden');
  });

  it('should include meme buttons matching Figma specifications', () => {
    render(<MemesSection />);
    
    // According to Figma, should have 4 meme buttons with specific styling
    const memeButtons = screen.getAllByRole('button');
    expect(memeButtons).toHaveLength(4);
    
    memeButtons.forEach(button => {
      expect(button).toHaveClass('bg-orange'); // Should match #FF9D33 from Figma
      expect(button).toHaveClass('border-black');
      expect(button).toHaveClass('border-4');
      expect(button).toHaveClass('rounded-66'); // 66px border radius from Figma
    });
  });

  it('should display "whats wrong, deg?" text as per Figma', () => {
    render(<MemesSection />);
    
    // Figma specs include this specific text
    expect(screen.getByText(/whats wrong, deg\?/i)).toBeInTheDocument();
  });

  it('should use responsive positioning instead of fixed pixel positioning', () => {
    render(<MemesSection />);
    
    // SVG elements should use responsive positioning
    const cat = screen.getByTestId('memes-cat-sad');
    expect(cat).not.toHaveStyle({ left: '300px', top: '150px' });
  });
}); 