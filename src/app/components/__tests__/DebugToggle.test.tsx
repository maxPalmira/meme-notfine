import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DebugToggle from '../DebugToggle';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('DebugToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    document.body.className = '';
  });

  it('should initialize with debug mode on by default when no localStorage data exists', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<DebugToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('DEBUG: ON');
    expect(document.body).toHaveClass('debug-mode');
  });

  it('should restore debug mode state from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('false');

    render(<DebugToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('DEBUG: OFF');
    expect(document.body).not.toHaveClass('debug-mode');
  });

  it('should toggle debug mode and save to localStorage', () => {
    localStorageMock.getItem.mockReturnValue('true');

    render(<DebugToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('DEBUG: ON');

    fireEvent.click(button);

    expect(button).toHaveTextContent('DEBUG: OFF');
    expect(document.body).not.toHaveClass('debug-mode');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('debugToggleState', 'false');
  });

  it('should handle corrupted localStorage data gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    render(<DebugToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('DEBUG: ON');
    expect(document.body).toHaveClass('debug-mode');
  });

  it('should apply correct CSS classes based on debug state', () => {
    render(<DebugToggle />);

    const button = screen.getByRole('button');
    
    // Initially ON (green style)
    expect(button).toHaveClass('bg-green-500', 'text-black', 'border-green-600');
    
    fireEvent.click(button);
    
    // After toggle OFF (gray style)
    expect(button).toHaveClass('bg-gray-800', 'text-green-400', 'border-gray-600');
  });
}); 