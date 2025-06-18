"use client";

import { useEffect, useRef, useState } from "react";

// Types
interface DebugSettings {
  showGridOverlay: boolean;
  showLabels: boolean;
  showDebugOutlines: boolean;
  showSectionBorders: boolean;
}

interface ConfigConsoleInstance {
  addCheckbox: (label: string, defaultValue: boolean, callback: (value: boolean) => void) => void;
  addConfigButton: (label: string, callback: () => void) => void;
  clearLogs: () => void;
  destroy: () => void;
  init: () => ConfigConsoleInstance;
}

declare global {
  interface Window {
    ConfigConsole: new (config: Record<string, unknown>) => ConfigConsoleInstance;
  }
}

interface ConfigDebugConsoleProps {
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onBordersToggle: (enabled: boolean) => void;
  onSectionBordersToggle: (enabled: boolean) => void;
}

const DEFAULT_SETTINGS: DebugSettings = {
  showGridOverlay: true,
  showLabels: true,  
  showDebugOutlines: true,
  showSectionBorders: false,
};

const ConfigDebugConsole: React.FC<ConfigDebugConsoleProps> = ({
  onGridToggle,
  onLabelsToggle,
  onBordersToggle,
  onSectionBordersToggle,
}) => {
  const consoleRef = useRef<ConfigConsoleInstance | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load settings from localStorage with robust error handling
  const loadSettings = (): DebugSettings => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return DEFAULT_SETTINGS;
    }
    
    try {
      const saved = localStorage.getItem('debugSettings');
      // Explicitly check for null, undefined, and empty string
      if (saved === null || saved === undefined || saved === '' || saved === 'undefined') {
        return DEFAULT_SETTINGS;
      }
      
      const parsed = JSON.parse(saved);
      // Ensure parsed data is an object and has expected properties
      if (typeof parsed === 'object' && parsed !== null) {
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
      return DEFAULT_SETTINGS;
    } catch (error) {
      console.warn('Failed to load debug settings:', error);
      // Clear corrupted data
      try {
        localStorage.removeItem('debugSettings');
      } catch (clearError) {
        console.warn('Failed to clear corrupted settings:', clearError);
      }
      return DEFAULT_SETTINGS;
    }
  };

  // Save settings to localStorage with error handling
  const saveSettings = (settings: DebugSettings) => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }
    
    try {
      localStorage.setItem('debugSettings', JSON.stringify(settings));
    } catch (error) {
      console.warn('Failed to save debug settings:', error);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Initialize callbacks with current settings
    const initializeCallbacks = (settings: DebugSettings) => {
      onGridToggle(settings.showGridOverlay);
      onLabelsToggle(settings.showLabels);
      onBordersToggle(settings.showDebugOutlines);
      onSectionBordersToggle(settings.showSectionBorders);
    };

    // Initialize ConfigConsole instance
    const initializeConfigConsole = (settings: DebugSettings) => {
      try {
        if (consoleRef.current) {
          consoleRef.current.destroy();
        }

        consoleRef.current = new window.ConfigConsole({
          title: 'Debug Console',
          width: 300,
          height: 400,
          right: 20,
          bottom: 20,
        }).init();

        // Add debug controls
        consoleRef.current.addCheckbox('Grid Overlay', settings.showGridOverlay, (value: boolean) => {
          const updatedSettings = { ...settings, showGridOverlay: value };
          saveSettings(updatedSettings);
          onGridToggle(value);
        });

        consoleRef.current.addCheckbox('Debug Labels', settings.showLabels, (value: boolean) => {
          const updatedSettings = { ...settings, showLabels: value };
          saveSettings(updatedSettings);
          onLabelsToggle(value);
        });

        consoleRef.current.addCheckbox('Debug Outlines', settings.showDebugOutlines, (value: boolean) => {
          const updatedSettings = { ...settings, showDebugOutlines: value };
          saveSettings(updatedSettings);
          onBordersToggle(value);
        });

        consoleRef.current.addCheckbox('Section Borders', settings.showSectionBorders, (value: boolean) => {
          const updatedSettings = { ...settings, showSectionBorders: value };
          saveSettings(updatedSettings);
          onSectionBordersToggle(value);
        });

        // Add utility buttons
        consoleRef.current.addConfigButton('Clear Logs', () => {
          consoleRef.current?.clearLogs();
        });

        consoleRef.current.addConfigButton('Reset Settings', () => {
          saveSettings(DEFAULT_SETTINGS);
          // Trigger callbacks with default values
          onGridToggle(DEFAULT_SETTINGS.showGridOverlay);
          onLabelsToggle(DEFAULT_SETTINGS.showLabels);
          onBordersToggle(DEFAULT_SETTINGS.showDebugOutlines);
          onSectionBordersToggle(DEFAULT_SETTINGS.showSectionBorders);
        });

      } catch (error) {
        console.warn('Failed to initialize ConfigConsole:', error);
      }
    };
    
    const loadedSettings = loadSettings();

    // Wait for ConfigConsole to be available with retry mechanism
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max wait time
    
    const checkConfigConsole = () => {
      if (window.ConfigConsole) {
        initializeConfigConsole(loadedSettings);
        // Initialize callbacks after ConfigConsole is ready
        initializeCallbacks(loadedSettings);
        setIsInitialized(true);
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(checkConfigConsole, 100);
      } else {
        console.warn('ConfigConsole failed to load after 5 seconds');
        // Still initialize callbacks even if ConfigConsole fails to load
        initializeCallbacks(loadedSettings);
        setIsInitialized(true);
      }
    };

    checkConfigConsole();

    return () => {
      if (consoleRef.current) {
        consoleRef.current.destroy();
      }
    };
  }, [onGridToggle, onLabelsToggle, onBordersToggle, onSectionBordersToggle]);

  // Prevent rendering during SSR to avoid hydration issues
  if (!isInitialized) {
    return null;
  }

  return null;
};

export default ConfigDebugConsole; 