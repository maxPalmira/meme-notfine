"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = 'debugToggleState';

export default function DebugToggle() {
  const [debugMode, setDebugMode] = useState(true);

  // Load debug mode state from localStorage
  const loadDebugMode = (): boolean => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        return saved === 'true';
      }
    } catch (error) {
      console.warn('Failed to load debug toggle state:', error);
    }
    return true; // Default to true
  };

  // Save debug mode state to localStorage
  const saveDebugMode = (enabled: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled.toString());
    } catch (error) {
      console.warn('Failed to save debug toggle state:', error);
    }
  };

  useEffect(() => {
    // Load saved state on mount
    const savedDebugMode = loadDebugMode();
    setDebugMode(savedDebugMode);
    
    // Apply the state to the body class
    if (savedDebugMode) {
      document.body.classList.add("debug-mode");
    } else {
      document.body.classList.remove("debug-mode");
    }
  }, []);

  const toggleDebugMode = () => {
    const newDebugMode = !debugMode;
    setDebugMode(newDebugMode);
    saveDebugMode(newDebugMode);
    
    if (newDebugMode) {
      document.body.classList.add("debug-mode");
    } else {
      document.body.classList.remove("debug-mode");
    }
  };

  return (
    <div className="fixed top-4 left-4 z-[100]">
      <button
        onClick={toggleDebugMode}
        className={`px-3 py-2 text-xs font-mono rounded-lg border-2 transition-all duration-200 ${
          debugMode
            ? "bg-green-500 text-black border-green-600 shadow-lg"
            : "bg-gray-800 text-green-400 border-gray-600 hover:bg-gray-700"
        }`}
        style={{
          fontFamily: "Courier New, monospace",
          fontSize: "10px",
        }}
      >
        {debugMode ? "DEBUG: ON" : "DEBUG: OFF"}
      </button>
    </div>
  );
}
