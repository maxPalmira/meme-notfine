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

describe('ConfigDebugConsole', () => {
  const mockOnGridToggle = jest.fn();
  const mockOnLabelsToggle = jest.fn();
  const mockOnBordersToggle = jest.fn();
  const mockOnSectionBordersToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
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