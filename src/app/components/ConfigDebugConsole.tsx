"use client";

import { useEffect, useRef, useState } from "react";

// Types
interface DebugSettings {
  showGridOverlay: boolean;
  showLabels: boolean;
  showSectionBorders: boolean;
  showSvgBorders: boolean;
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
  visible?: boolean;
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onSectionBordersToggle: (enabled: boolean) => void;
  onSvgBordersToggle: (enabled: boolean) => void;
}

const DEFAULT_SETTINGS: DebugSettings = {
  showGridOverlay: true,
  showLabels: true,  
  showSectionBorders: false,
  showSvgBorders: false,
};

const ConfigDebugConsole: React.FC<ConfigDebugConsoleProps> = ({
  visible = true,
  onGridToggle,
  onLabelsToggle,
  onSectionBordersToggle,
  onSvgBordersToggle,
}) => {
  const consoleRef = useRef<ConfigConsoleInstance | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load settings from localStorage with robust error handling
  const loadSettings = (): DebugSettings => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return DEFAULT_SETTINGS;
    }
    
    try {
      const saved = localStorage.getItem('debugSettings');
      if (saved === null || saved === undefined || saved === '' || saved === 'undefined') {
        return DEFAULT_SETTINGS;
      }
      
      const parsed = JSON.parse(saved);
      if (typeof parsed === 'object' && parsed !== null) {
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
      return DEFAULT_SETTINGS;
    } catch (error) {
      try {
        localStorage.removeItem('debugSettings');
      } catch (clearError) {
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
    }
  };

  // Load the ConfigConsole script dynamically
  const loadConfigConsoleScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.ConfigConsole) {
        resolve();
        return;
      }

      const existingScript = document.querySelector('script[src*="config-console.js"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', reject);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/maxPalmira/debug-window@main/config-console.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setScriptLoaded(true);
        resolve();
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load ConfigConsole script'));
      };

      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const loadedSettings = loadSettings();

    // Always create the console once on mount
    if (!consoleRef.current) {
      const initializeComponent = async () => {
        try {
          await loadConfigConsoleScript();
          
          consoleRef.current = new window.ConfigConsole({
            title: 'Debug Console',
            width: 300,
            height: 400,
            right: 20,
            bottom: 20,
          }).init();

          // Add debug controls
          consoleRef.current.addCheckbox('Grid Overlay', loadedSettings.showGridOverlay, (value: boolean) => {
            const currentSettings = loadSettings();
            const updatedSettings = { ...currentSettings, showGridOverlay: value };
            saveSettings(updatedSettings);
            onGridToggle(value);
          });

          consoleRef.current.addCheckbox('Debug Labels', loadedSettings.showLabels, (value: boolean) => {
            const currentSettings = loadSettings();
            const updatedSettings = { ...currentSettings, showLabels: value };
            saveSettings(updatedSettings);
            onLabelsToggle(value);
          });

          consoleRef.current.addCheckbox('Section Borders', loadedSettings.showSectionBorders, (value: boolean) => {
            const currentSettings = loadSettings();
            const updatedSettings = { ...currentSettings, showSectionBorders: value };
            saveSettings(updatedSettings);
            onSectionBordersToggle(value);
          });

          consoleRef.current.addCheckbox('SVG Borders', loadedSettings.showSvgBorders, (value: boolean) => {
            const currentSettings = loadSettings();
            const updatedSettings = { ...currentSettings, showSvgBorders: value };
            saveSettings(updatedSettings);
            onSvgBordersToggle(value);
          });

          // Add utility buttons
          consoleRef.current.addConfigButton('Clear Logs', () => {
            consoleRef.current?.clearLogs();
          });

          consoleRef.current.addConfigButton('Reset Settings', () => {
            saveSettings(DEFAULT_SETTINGS);
            onGridToggle(DEFAULT_SETTINGS.showGridOverlay);
            onLabelsToggle(DEFAULT_SETTINGS.showLabels);
            onSectionBordersToggle(DEFAULT_SETTINGS.showSectionBorders);
            onSvgBordersToggle(DEFAULT_SETTINGS.showSvgBorders);
          });

          setIsInitialized(true);

          // Initialize callbacks with loaded settings
          onGridToggle(loadedSettings.showGridOverlay);
          onLabelsToggle(loadedSettings.showLabels);
          onSectionBordersToggle(loadedSettings.showSectionBorders);
          onSvgBordersToggle(loadedSettings.showSvgBorders);

        } catch (error) {
          setIsInitialized(true);
        }
      };

      initializeComponent();
    }

    return () => {
      if (consoleRef.current) {
        consoleRef.current.destroy();
        consoleRef.current = null;
      }
    };
  }, []); // Only run once on mount

  // Separate effect to handle visibility toggle with CSS class
  useEffect(() => {
    if (isInitialized && consoleRef.current) {
      setTimeout(() => {
        const consoleElement = document.querySelector('[data-title="Debug Console"]') || 
                              document.querySelector('.config-console') ||
                              document.querySelector('[class*="console"]');
        
        if (consoleElement) {
          if (visible) {
            consoleElement.classList.remove('hidden');
          } else {
            consoleElement.classList.add('hidden');
          }
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [visible, isInitialized]);

  // Prevent rendering during SSR to avoid hydration issues
  if (!isInitialized) {
    return null;
  }

  return null;
};

export default ConfigDebugConsole; 