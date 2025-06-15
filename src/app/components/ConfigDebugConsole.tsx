"use client";

import { useEffect, useRef, useState } from "react";

interface ConfigDebugConsoleProps {
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onBordersToggle: (enabled: boolean) => void;
}

declare global {
  interface Window {
    ConfigConsole: any;
  }
}

export default function ConfigDebugConsole({ 
  onGridToggle, 
  onLabelsToggle, 
  onBordersToggle 
}: ConfigDebugConsoleProps) {
  const consoleRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for ConfigConsole to be available
    const checkConfigConsole = () => {
      if (typeof window !== 'undefined' && window.ConfigConsole) {
        setIsReady(true);
        initializeConfigConsole();
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

  const initializeConfigConsole = () => {
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

    // Add debug checkboxes with initial state
    console.addCheckbox('Show Grid', true, (checked: boolean) => {
      onGridToggle(checked);
      console.addLog(`Grid: ${checked ? 'ON' : 'OFF'}`, 'info');
    });

    console.addCheckbox('Show SVG Labels', true, (checked: boolean) => {
      onLabelsToggle(checked);
      console.addLog(`SVG Labels: ${checked ? 'ON' : 'OFF'}`, 'info');
    });

    console.addCheckbox('Show SVG Borders', true, (checked: boolean) => {
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
      onGridToggle(true);
      onLabelsToggle(true);
      onBordersToggle(true);
      document.body.classList.add('debug-mode');
      console.addLog('Debug features reset to defaults', 'info');
    });

    // Initialize with debug mode on
    document.body.classList.add('debug-mode');
    
    // Initialize all debug features as enabled
    onGridToggle(true);
    onLabelsToggle(true);
    onBordersToggle(true);
  };

  // This component doesn't render anything - the Config Console manages its own DOM
  return null;
} 