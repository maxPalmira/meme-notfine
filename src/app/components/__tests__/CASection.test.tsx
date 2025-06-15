import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CASection from '../CASection';

// Mock clipboard API
const mockClipboard = {
  writeText: jest.fn().mockResolvedValue(undefined),
};

Object.assign(navigator, {
  clipboard: mockClipboard,
});

describe('CASection', () => {
  const contractAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the CA section with correct structure', () => {
    render(<CASection />);
    
    // Check if the contract address is displayed
    expect(screen.getByText(contractAddress)).toBeInTheDocument();
    
    // Check if copy button is present (use more specific selector)
    expect(screen.getByRole('button', { name: 'Copy contract address to clipboard' })).toBeInTheDocument();
  });

  it('displays the contract address with correct styling', () => {
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    expect(addressElement).toBeInTheDocument();
    expect(addressElement).toHaveClass('text-black');
  });

  it('has correct dimensions and positioning', () => {
    render(<CASection />);
    
    const sectionElement = screen.getByTestId('ca-section');
    expect(sectionElement).toHaveClass('relative');
    expect(sectionElement).toHaveStyle({
      width: '1467px',
      height: '219px',
    });
  });

  it('renders CA button with cream background and black border', () => {
    render(<CASection />);
    
    const caButton = screen.getByTestId('ca-button');
    expect(caButton).toHaveClass('bg-cream');
    expect(caButton).toHaveClass('border-black');
    expect(caButton).toHaveClass('border-7');
    expect(caButton).toHaveClass('rounded-40');
  });

  it('renders copy button with red background and shadow', () => {
    render(<CASection />);
    
    const copyButton = screen.getByRole('button', { name: 'Copy contract address to clipboard' });
    expect(copyButton).toHaveClass('bg-red-primary');
    expect(copyButton).toHaveClass('border-black');
    expect(copyButton).toHaveClass('border-7');
    expect(copyButton).toHaveClass('rounded-40');
    expect(copyButton).toHaveClass('shadow-custom');
  });

  it('copies contract address to clipboard when clicking the address', async () => {
    const user = userEvent.setup();
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    await user.click(addressElement);
    
    expect(mockClipboard.writeText).toHaveBeenCalledWith(contractAddress);
  });

  it('copies contract address to clipboard when clicking copy button', async () => {
    const user = userEvent.setup();
    render(<CASection />);
    
    const copyButton = screen.getByRole('button', { name: 'Copy contract address to clipboard' });
    await user.click(copyButton);
    
    expect(mockClipboard.writeText).toHaveBeenCalledWith(contractAddress);
  });

  it('shows visual feedback when address is copied', async () => {
    const user = userEvent.setup();
    render(<CASection />);
    
    const copyButton = screen.getByRole('button', { name: 'Copy contract address to clipboard' });
    await user.click(copyButton);
    
    // Check for success feedback
    await waitFor(() => {
      expect(screen.getByText(/copied/i)).toBeInTheDocument();
    });
  });

  it('handles clipboard errors gracefully', async () => {
    const user = userEvent.setup();
    mockClipboard.writeText.mockRejectedValue(new Error('Clipboard error'));
    
    render(<CASection />);
    
    const copyButton = screen.getByRole('button', { name: 'Copy contract address to clipboard' });
    await user.click(copyButton);
    
    // Should show error feedback
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    expect(addressElement).toHaveAttribute('role', 'button');
    expect(addressElement).toHaveAttribute('aria-label', 'Click to copy contract address');
    
    const copyButton = screen.getByRole('button', { name: 'Copy contract address to clipboard' });
    expect(copyButton).toHaveAttribute('aria-label', 'Copy contract address to clipboard');
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    
    // Tab to first focusable element and press Enter
    await user.tab();
    await user.keyboard('{Enter}');
    expect(mockClipboard.writeText).toHaveBeenCalledWith(contractAddress);
  });

  it('uses Jua font family', () => {
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    expect(addressElement).toHaveClass('font-jua');
    
    const copyButtonText = screen.getByText('copy');
    expect(copyButtonText).toHaveClass('font-jua');
  });

  it('has correct font sizes', () => {
    render(<CASection />);
    
    const addressElement = screen.getByText(contractAddress);
    expect(addressElement).toHaveClass('text-2xl'); // 24px
    
    const copyButtonText = screen.getByText('copy');
    expect(copyButtonText).toHaveClass('text-6xl'); // 64px
  });

  it('is responsive on smaller screens', () => {
    render(<CASection />);
    
    const sectionElement = screen.getByTestId('ca-section');
    expect(sectionElement).toHaveClass('max-w-full');
    expect(sectionElement).toHaveClass('overflow-hidden');
  });
});

describe('Background Styling Bug Fixes', () => {
  it('should have proper section width and height without clipping', () => {
    render(<CASection />);
    
    const section = screen.getByTestId('ca-section');
    
    // Test that section has proper dimensions and layout
    expect(section).toHaveStyle({ 
      width: '1467px', 
      height: '219px' 
    });
    expect(section).toHaveClass('max-w-full');
    expect(section).toHaveClass('overflow-hidden');
  });

  it('should maintain proper styling inheritance from main layout', () => {
    render(<CASection />);
    
    const section = screen.getByTestId('ca-section');
    
    // Test that section has proper responsive and layout classes
    expect(section).toHaveClass('relative', 'mx-auto', 'flex', 'flex-col');
    expect(section).toHaveClass('items-center', 'justify-center');
  });
}); 