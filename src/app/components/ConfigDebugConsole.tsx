"use client";

import { useEffect, useRef, useState } from "react";

interface ConfigDebugConsoleProps {
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onBordersToggle: (enabled: boolean) => void;
}

interface DebugSettings {
  showGrid: boolean;
  showLabels: boolean;
  showBorders: boolean;
}

declare global {
  interface Window {
    ConfigConsole: any;
  }
}

const DEFAULT_SETTINGS: DebugSettings = {
  showGrid: true,
  showLabels: true,
  showBorders: true,
};

const STORAGE_KEY = 'debugSettings';

export default function ConfigDebugConsole({ 
  onGridToggle, 
  onLabelsToggle, 
  onBordersToggle 
}: ConfigDebugConsoleProps) {
  const consoleRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [debugSettings, setDebugSettings] = useState<DebugSettings>(DEFAULT_SETTINGS);

  // Load settings from localStorage
  const loadSettings = (): DebugSettings => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.warn('Failed to load debug settings:', error);
    }
    return DEFAULT_SETTINGS;
  };

  // Save settings to localStorage
  const saveSettings = (settings: DebugSettings) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      setDebugSettings(settings);
    } catch (error) {
      console.warn('Failed to save debug settings:', error);
    }
  };

  // Update a specific setting
  const updateSetting = (key: keyof DebugSettings, value: boolean) => {
    const newSettings = { ...debugSettings, [key]: value };
    saveSettings(newSettings);
    return newSettings;
  };

  useEffect(() => {
    // Load settings on mount
    const loadedSettings = loadSettings();
    setDebugSettings(loadedSettings);

    // Wait for ConfigConsole to be available
    const checkConfigConsole = () => {
      if (typeof window !== 'undefined' && window.ConfigConsole) {
        setIsReady(true);
        initializeConfigConsole(loadedSettings);
      } else {
        setTimeout(checkConfigConsole, 100);
      }
    };

    checkConfigConsole();

    return () => {
      if (consoleRef.current) {
        consoleRef.current.destroy();
      }
    };
  }, []);

  const initializeConfigConsole = (settings: DebugSettings) => {
    if (consoleRef.current) {
      consoleRef.current.destroy();
    }

    // Create the Config Console
    consoleRef.current = new window.ConfigConsole({
      title: '🐛 Debug Console',
      position: { x: 20, y: 20 },
      size: { width: 280, height: 350 },
      visible: true
    }).init();

    const console = consoleRef.current;

    // Add initial log
    console.addLog('Debug console initialized', 'info');

    // Add debug checkboxes with saved state
    console.addCheckbox('Show Grid', settings.showGrid, (checked: boolean) => {
      const newSettings = updateSetting('showGrid', checked);
      onGridToggle(checked);
      console.addLog(`Grid: ${checked ? 'ON' : 'OFF'}`, 'info');
    });

    console.addCheckbox('Show SVG Labels', settings.showLabels, (checked: boolean) => {
      const newSettings = updateSetting('showLabels', checked);
      onLabelsToggle(checked);
      console.addLog(`SVG Labels: ${checked ? 'ON' : 'OFF'}`, 'info');
    });

    console.addCheckbox('Show SVG Borders', settings.showBorders, (checked: boolean) => {
      const newSettings = updateSetting('showBorders', checked);
      onBordersToggle(checked);
      // Toggle debug-mode class on body for CSS styling
      if (checked) {
        document.body.classList.add('debug-mode');
      } else {
        document.body.classList.remove('debug-mode');
      }
      console.addLog(`SVG Borders: ${checked ? 'ON' : 'OFF'}`, 'info');
    });

    // Add utility buttons
    console.addConfigButton('Clear Console', () => {
      console.clearLogs();
    });

    console.addConfigButton('Reset Debug', () => {
      // Reset all debug features to default state
      saveSettings(DEFAULT_SETTINGS);
      onGridToggle(DEFAULT_SETTINGS.showGrid);
      onLabelsToggle(DEFAULT_SETTINGS.showLabels);
      onBordersToggle(DEFAULT_SETTINGS.showBorders);
      if (DEFAULT_SETTINGS.showBorders) {
        document.body.classList.add('debug-mode');
      } else {
        document.body.classList.remove('debug-mode');
      }
      console.addLog('Debug features reset to defaults', 'info');
    });

    // Initialize with loaded settings
    if (settings.showBorders) {
      document.body.classList.add('debug-mode');
    } else {
      document.body.classList.remove('debug-mode');
    }
    
    // Initialize all debug features with loaded settings
    onGridToggle(settings.showGrid);
    onLabelsToggle(settings.showLabels);
    onBordersToggle(settings.showBorders);
  };

  // This component doesn't render anything - the Config Console manages its own DOM
  return null;
} 