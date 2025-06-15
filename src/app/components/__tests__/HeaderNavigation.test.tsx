import { render, screen } from '@testing-library/react';
import HeaderNavigation from '../HeaderNavigation';

describe('HeaderNavigation', () => {
  it('renders the header with correct structure and styling', () => {
    render(<HeaderNavigation />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
    expect(header).toHaveStyle({ backgroundColor: '#869241' });
  });

  it('renders all 6 navigation buttons as SVG images', () => {
    render(<HeaderNavigation />);
    
    // Check for SVG navigation buttons
    expect(screen.getByRole('img', { name: /tokenomics/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /roadmap/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /our team/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /art community/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /how to buy/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /faq/i })).toBeInTheDocument();
  });

  it('loads correct SVG file paths for navigation buttons', () => {
    render(<HeaderNavigation />);
    
    expect(screen.getByRole('img', { name: /tokenomics/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-tokenomics.svg')
    );
    
    expect(screen.getByRole('img', { name: /roadmap/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-roadmap.svg')
    );
    
    expect(screen.getByRole('img', { name: /our team/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-ourteam.svg')
    );
    
    expect(screen.getByRole('img', { name: /art community/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-artcommunity.svg')
    );
    
    expect(screen.getByRole('img', { name: /how to buy/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-howtobuy.svg')
    );
    
    expect(screen.getByRole('img', { name: /faq/i })).toHaveAttribute(
      'src',
      expect.stringContaining('/figma-exports/ui-elements/nav-faq.svg')
    );
  });

  it('does not render any text-based navigation buttons', () => {
    render(<HeaderNavigation />);
    
    // These text elements should NOT exist
    expect(screen.queryByText('Tokenomics')).not.toBeInTheDocument();
    expect(screen.queryByText('Roadmap')).not.toBeInTheDocument();
    expect(screen.queryByText('Our Team')).not.toBeInTheDocument();
    expect(screen.queryByText('Art community')).not.toBeInTheDocument();
    expect(screen.queryByText('How to buy')).not.toBeInTheDocument();
    expect(screen.queryByText('F.A.Q')).not.toBeInTheDocument();
  });

  it('maintains hover states and accessibility for navigation buttons', () => {
    render(<HeaderNavigation />);
    
    const tokenomicsBtn = screen.getByTestId('nav-tokenomics');
    expect(tokenomicsBtn).toHaveClass('hover:scale-105', 'transition-transform', 'cursor-pointer');
    expect(tokenomicsBtn).toHaveAttribute('role', 'button');
    expect(tokenomicsBtn).toHaveAttribute('tabIndex', '0');
  });

  it('renders social media icons correctly', () => {
    render(<HeaderNavigation />);
    
    expect(screen.getByRole('img', { name: /discord/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /telegram/i })).toBeInTheDocument();
  });

  it('fixes Discord icon implementation (single SVG element)', () => {
    render(<HeaderNavigation />);
    
    const discordIcon = screen.getByRole('img', { name: /discord/i });
    expect(discordIcon).toBeInTheDocument();
    
    // Should not have multiple Discord SVG elements
    const allDiscordImages = screen.getAllByRole('img', { name: /discord/i });
    expect(allDiscordImages).toHaveLength(1);
  });

  it('has proper header dimensions and green background', () => {
    render(<HeaderNavigation />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-[#869241]');
    expect(header).toHaveClass('border-[6px]', 'border-black');
  });

  it('positions social icons in the right section', () => {
    render(<HeaderNavigation />);
    
    const socialContainer = screen.getByTestId('social-icons');
    expect(socialContainer).toHaveClass('flex', 'items-center', 'gap-4');
    
    // Should be in the right section of the header layout
    const headerContainer = screen.getByTestId('header-container');
    expect(headerContainer).toHaveClass('justify-between');
  });

  it('maintains keyboard navigation support', () => {
    render(<HeaderNavigation />);
    
    const tokenomicsBtn = screen.getByTestId('nav-tokenomics');
    const roadmapBtn = screen.getByTestId('nav-roadmap');
    
    expect(tokenomicsBtn).toHaveAttribute('tabIndex', '0');
    expect(roadmapBtn).toHaveAttribute('tabIndex', '0');
  });

  it('preserves visual effects from Figma design', () => {
    render(<HeaderNavigation />);
    
    // Check navigation buttons maintain visual styling
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('flex', 'items-center', 'gap-14');
    
    // Social icons should have hover effects
    const discordIcon = screen.getByTestId('social-discord');
    expect(discordIcon).toHaveClass('hover:scale-110', 'transition-transform');
  });
}); 