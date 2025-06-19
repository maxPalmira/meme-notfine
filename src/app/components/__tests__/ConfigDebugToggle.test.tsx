import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfigDebugToggle from '../ConfigDebugToggle';

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

describe('ConfigDebugToggle', () => {
  const mockOnToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should render with default visible state', () => {
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('CONSOLE: ON');
    expect(button).toHaveClass('bg-blue-500');
  });

  it('should call onToggle with true on mount when no localStorage data', async () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    await waitFor(() => {
      expect(mockOnToggle).toHaveBeenCalledWith(true);
    });
  });

  it('should restore visibility state from localStorage', async () => {
    localStorageMock.getItem.mockReturnValue('false');
    
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    await waitFor(() => {
      expect(mockOnToggle).toHaveBeenCalledWith(false);
    });
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('CONSOLE: OFF');
    expect(button).toHaveClass('bg-gray-800');
  });

  it('should toggle visibility when clicked', async () => {
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    const button = screen.getByRole('button');
    
    // Initial state should be ON
    expect(button).toHaveTextContent('CONSOLE: ON');
    
    // Click to toggle OFF
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(button).toHaveTextContent('CONSOLE: OFF');
      expect(mockOnToggle).toHaveBeenCalledWith(false);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('configDebugConsoleVisible', 'false');
    });
    
    // Click to toggle ON
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(button).toHaveTextContent('CONSOLE: ON');
      expect(mockOnToggle).toHaveBeenCalledWith(true);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('configDebugConsoleVisible', 'true');
    });
  });

  it('should have correct positioning classes', () => {
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('fixed', 'top-4', 'right-4', 'z-[101]');
  });

  it('should apply custom className', () => {
    render(<ConfigDebugToggle onToggle={mockOnToggle} className="custom-class" />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('should handle localStorage errors gracefully', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });
    
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    await waitFor(() => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Failed to load config debug console visibility state:', 
        expect.any(Error)
      );
      // Should default to true
      expect(mockOnToggle).toHaveBeenCalledWith(true);
    });
    
    consoleWarnSpy.mockRestore();
  });

  it('should handle localStorage save errors gracefully', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('localStorage save error');
    });
    
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Failed to save config debug console visibility state:', 
        expect.any(Error)
      );
      // Should still call onToggle despite save error
      expect(mockOnToggle).toHaveBeenCalledWith(false);
    });
    
    consoleWarnSpy.mockRestore();
  });

  it('should work when localStorage is undefined', async () => {
    // Simulate environment where localStorage is not available
    const originalLocalStorage = window.localStorage;
    // @ts-expect-error Testing localStorage unavailable scenario
    delete window.localStorage;
    
    render(<ConfigDebugToggle onToggle={mockOnToggle} />);
    
    await waitFor(() => {
      // Should default to true
      expect(mockOnToggle).toHaveBeenCalledWith(true);
    });
    
    // Restore localStorage
    window.localStorage = originalLocalStorage;
  });
}); 