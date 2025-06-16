import { render, screen, waitFor } from '@testing-library/react';
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
      />
    );

    await waitFor(() => {
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
    });
  });

  it('should restore debug settings from localStorage', async () => {
    const savedSettings = JSON.stringify({
      showGrid: false,
      showLabels: false,
      showBorders: true
    });
    localStorageMock.getItem.mockReturnValue(savedSettings);

    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockOnGridToggle).toHaveBeenCalledWith(false);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(false);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
    });
  });

  it('should save debug settings to localStorage when toggled', async () => {
    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
      />
    );

    await waitFor(() => {
      expect(mockConfigConsole.addCheckbox).toHaveBeenCalledTimes(3);
    });

    // Simulate checkbox toggle by calling the callback function
    const gridCheckboxCallback = mockConfigConsole.addCheckbox.mock.calls[0][2];
    gridCheckboxCallback(false);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'debugSettings',
      JSON.stringify({
        showGrid: false,
        showLabels: true,
        showBorders: true
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
      />
    );

    await waitFor(() => {
      // Should fall back to defaults
      expect(mockOnGridToggle).toHaveBeenCalledWith(true);
      expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
      expect(mockOnBordersToggle).toHaveBeenCalledWith(true);
    });
  });

  it('should save settings when reset button is clicked', async () => {
    render(
      <ConfigDebugConsole
        onGridToggle={mockOnGridToggle}
        onLabelsToggle={mockOnLabelsToggle}
        onBordersToggle={mockOnBordersToggle}
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
        showGrid: true,
        showLabels: true,
        showBorders: true
      })
    );
  });
}); 