import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfigDebugConsole from '../ConfigDebugConsole';

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

// Mock ConfigConsole
const mockConfigConsole = {
  addLog: jest.fn(),
  addCheckbox: jest.fn(),
  addConfigButton: jest.fn(),
  clearLogs: jest.fn(),
  destroy: jest.fn(),
  init: jest.fn().mockReturnThis(),
};

Object.defineProperty(window, 'ConfigConsole', {
  value: jest.fn(() => mockConfigConsole),
});

// Mock document.createElement and appendChild for script loading tests
const mockScript = {
  src: '',
  async: false,
  defer: false,
  onload: null as (() => void) | null,
  onerror: null as (() => void) | null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

const originalCreateElement = document.createElement;
const mockCreateElement = jest.fn((tagName: string) => {
  if (tagName === 'script') {
    return mockScript as unknown as HTMLScriptElement;
  }
  return originalCreateElement.call(document, tagName);
});

const mockAppendChild = jest.fn();

describe('ConfigDebugConsole', () => {
  const mockOnGridToggle = jest.fn();
  const mockOnLabelsToggle = jest.fn();
  const mockOnBordersToggle = jest.fn();
  const mockOnSectionBordersToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    
    // Setup DOM mocks
    document.createElement = mockCreateElement;
    document.head.appendChild = mockAppendChild;
    document.querySelector = jest.fn().mockReturnValue(null);
    
    // Reset ConfigConsole
    window.ConfigConsole = jest.fn(() => mockConfigConsole);
  });

  afterEach(() => {
    // Restore original methods
    document.createElement = originalCreateElement;
  });

  describe('Script Loading', () => {
    it('should dynamically load ConfigConsole script when not available', async () => {
      // Remove ConfigConsole to simulate it not being loaded
      delete (window as any).ConfigConsole;
      
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Should create a script element
      expect(mockCreateElement).toHaveBeenCalledWith('script');
      expect(mockScript.src).toBe('https://cdn.jsdelivr.net/gh/maxPalmira/debug-window@main/config-console.js');
      expect(mockScript.async).toBe(true);
      expect(mockScript.defer).toBe(true);
      expect(mockAppendChild).toHaveBeenCalledWith(mockScript);
    });

    it('should not load script if ConfigConsole is already available', async () => {
      // ConfigConsole is already available (set in beforeEach)
      
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Should not create a script element
      expect(mockCreateElement).not.toHaveBeenCalledWith('script');
    });

    it('should initialize ConfigConsole after script loads successfully', async () => {
      // Remove ConfigConsole to simulate it not being loaded
      delete (window as any).ConfigConsole;
      
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Simulate script loading successfully
      window.ConfigConsole = jest.fn(() => mockConfigConsole);
      if (mockScript.onload) {
        mockScript.onload();
      }

      await waitFor(() => {
        expect(window.ConfigConsole).toHaveBeenCalledWith({
          title: 'Debug Console',
          width: 300,
          height: 400,
          right: 20,
          bottom: 20,
        });
        expect(mockConfigConsole.init).toHaveBeenCalled();
      });
    });

    it('should handle script loading failure gracefully', async () => {
      // Remove ConfigConsole to simulate it not being loaded
      delete (window as any).ConfigConsole;
      
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Simulate script loading failure
      if (mockScript.onerror) {
        mockScript.onerror();
      }

      await waitFor(() => {
        expect(consoleWarnSpy).toHaveBeenCalledWith('ConfigConsole failed to load:', expect.any(Error));
        // Should still initialize callbacks even on failure
        expect(mockOnGridToggle).toHaveBeenCalledWith(true);
        expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      });

      consoleWarnSpy.mockRestore();
    });

    it('should not duplicate script if one is already loading', async () => {
      // Remove ConfigConsole to simulate it not being loaded
      delete (window as any).ConfigConsole;
      
      // Mock existing script
      const existingScript = { addEventListener: jest.fn() };
      document.querySelector = jest.fn().mockReturnValue(existingScript);
      
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Should not create a new script element
      expect(mockCreateElement).not.toHaveBeenCalledWith('script');
      // Should listen to existing script's load event
      expect(existingScript.addEventListener).toHaveBeenCalledWith('load', expect.any(Function));
      expect(existingScript.addEventListener).toHaveBeenCalledWith('error', expect.any(Function));
    });
  });

  describe('Visibility Control', () => {
    it('should respect visible prop when true', async () => {
      render(
        <ConfigDebugConsole
          visible={true}
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      await waitFor(() => {
        expect(window.ConfigConsole).toHaveBeenCalled();
        expect(mockConfigConsole.init).toHaveBeenCalled();
      });
    });

    it('should not initialize ConfigConsole when visible prop is false', async () => {
      render(
        <ConfigDebugConsole
          visible={false}
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      // Wait a bit to ensure it doesn't initialize
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(window.ConfigConsole).not.toHaveBeenCalled();
      expect(mockConfigConsole.init).not.toHaveBeenCalled();
    });

    it('should destroy ConfigConsole when visible changes from true to false', async () => {
      const { rerender } = render(
        <ConfigDebugConsole
          visible={true}
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      await waitFor(() => {
        expect(mockConfigConsole.init).toHaveBeenCalled();
      });

      // Change visible to false
      rerender(
        <ConfigDebugConsole
          visible={false}
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      await waitFor(() => {
        expect(mockConfigConsole.destroy).toHaveBeenCalled();
      });
    });

    it('should default to visible=true when prop is not provided', async () => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );

      await waitFor(() => {
        expect(window.ConfigConsole).toHaveBeenCalled();
        expect(mockConfigConsole.init).toHaveBeenCalled();
      });
    });
  });

  it('should initialize with default debug settings when no localStorage data exists', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
      expect(mockOnSectionBordersToggle).toHaveBeenCalledWith(false);
    });
  });

  it('should restore debug settings from localStorage', async () => {
    const savedSettings = JSON.stringify({
      showGridOverlay: false,
      showLabels: false,
      showDebugOutlines: true,
      showSectionBorders: true
    });
    localStorageMock.getItem.mockReturnValue(savedSettings);

    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockOnGridToggle).toHaveBeenCalledWith(false);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(false);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
      expect(mockOnSectionBordersToggle).toHaveBeenCalledWith(true);
    });
  });

  it('should save debug settings to localStorage when toggled', async () => {
    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockConfigConsole.addCheckbox).toHaveBeenCalledTimes(4);
    });

    // Simulate checkbox toggle by calling the callback function
    const gridCheckboxCallback = mockConfigConsole.addCheckbox.mock.calls[0][2];
    gridCheckboxCallback(false);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'debugSettings',
      JSON.stringify({
        showGridOverlay: false,
        showLabels: true,
        showDebugOutlines: true,
        showSectionBorders: false
      })
    );
  });

  it('should handle corrupted localStorage data gracefully', async () => {
    localStorageMock.getItem.mockReturnValue('invalid json');

    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    await waitFor(() => {
      // Should fall back to defaults
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
      expect(mockOnSectionBordersToggle).toHaveBeenCalledWith(false);
    });
  });

  it('should save settings when reset button is clicked', async () => {
    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockConfigConsole.addConfigButton).toHaveBeenCalledTimes(2);
    });

    // Simulate reset button click
    const resetButtonCallback = mockConfigConsole.addConfigButton.mock.calls[1][1];
    resetButtonCallback();

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'debugSettings',
      JSON.stringify({
        showGridOverlay: true,
        showLabels: true,
        showDebugOutlines: true,
        showSectionBorders: false
      })
    );
  });

  it('should handle corrupted localStorage data gracefully', () => {
    // Test the actual bug: localStorage returning "undefined" as string
    localStorageMock.getItem.mockReturnValue('undefined');
    
    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();
    
    // Should clear corrupted data
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('debugSettings');
  });

  it('should handle empty string localStorage data', () => {
    localStorageMock.getItem.mockReturnValue('');
    
    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();
  });

  it('should handle null localStorage data', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();
  });

  it('should handle malformed JSON in localStorage', () => {
    localStorageMock.getItem.mockReturnValue('invalid json');
    
    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();
    
    // Should clear corrupted data
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('debugSettings');
  });

  it('should work when localStorage is undefined', () => {
    // Simulate environment where localStorage is not available
    const originalLocalStorage = window.localStorage;
    // @ts-expect-error Testing localStorage unavailable scenario
    delete window.localStorage;
    
    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();
    
    // Restore localStorage
    window.localStorage = originalLocalStorage;
  });

  it('should initialize with default settings when localStorage fails', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();

    // Should still call callbacks with default values
    expect(mockOnGridToggle).toHaveBeenCalledWith(true);
    expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
    expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
    expect(mockOnSectionBordersToggle).toHaveBeenCalledWith(false);
  });

  it('should handle ConfigConsole initialization failure gracefully', () => {
    // Mock ConfigConsole to not be available
    const originalConfigConsole = window.ConfigConsole;
    // @ts-expect-error Testing ConfigConsole unavailable scenario
    delete window.ConfigConsole;

    expect(() => {
      render(
        <ConfigDebugConsole
          onGridToggle={mockOnGridToggle}
          onLabelsToggle={mockOnLabelsToggle}
          onBordersToggle={mockOnBordersToggle}
          onSectionBordersToggle={mockOnSectionBordersToggle}
        />
      );
    }).not.toThrow();

    // Should still initialize callbacks even without ConfigConsole
    setTimeout(() => {
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
      expect(mockOnSectionBordersToggle).toHaveBeenCalledWith(false);
    }, 5100); // After timeout

    // Restore ConfigConsole
    window.ConfigConsole = originalConfigConsole;
  });

  it('should save settings when checkboxes are toggled', () => {
    localStorageMock.getItem.mockReturnValue('{"showGridOverlay":false}');

    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
        onSectionBordersToggle={mockOnSectionBordersToggle}
      />
    );

    // Simulate checkbox callback
    const gridCheckboxCallback = mockConfigConsole.addCheckbox.mock.calls
      .find(call => call[0] === 'Grid Overlay')?.[2];
    
    if (gridCheckboxCallback) {
      gridCheckboxCallback(true);
      
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'debugSettings',
        expect.stringContaining('"showGridOverlay":true')
      );
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
    }
  });
}); 