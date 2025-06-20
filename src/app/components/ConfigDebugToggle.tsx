"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = 'configDebugConsoleVisible';

interface ConfigDebugToggleProps {
  onToggle: (visible: boolean) => void;
  className?: string;
}

export default function ConfigDebugToggle({ onToggle, className = "" }: ConfigDebugToggleProps) {
  const [isVisible, setIsVisible] = useState(true); // Default to true

  // Load visibility state from localStorage
  const loadVisibility = (): boolean => {
    try {
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return true; // Default to visible
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        return saved === 'true';
      }
    } catch (error) {
      console.warn('Failed to load config debug console visibility state:', error);
    }
    return true; // Default to visible
  };

  // Save visibility state to localStorage
  const saveVisibility = (visible: boolean) => {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, visible.toString());
      }
    } catch (error) {
      console.warn('Failed to save config debug console visibility state:', error);
    }
  };

  useEffect(() => {
    // Load saved state on mount
    const savedVisibility = loadVisibility();
    console.log('ConfigDebugToggle: Loading saved visibility:', savedVisibility);
    setIsVisible(savedVisibility);
    onToggle(savedVisibility);
  }, [onToggle]);

  const toggleVisibility = () => {
    const newVisibility = !isVisible;
    console.log('ConfigDebugToggle: Toggling visibility from', isVisible, 'to', newVisibility);
    setIsVisible(newVisibility);
    saveVisibility(newVisibility);
    onToggle(newVisibility);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ConfigDebugToggle: Button clicked');
    toggleVisibility();
  };

  return (
    <div className={`fixed top-4 right-4 z-[101] ${className}`}>
      <button
        onClick={handleClick}
        className={`px-3 py-2 text-xs font-mono rounded-lg border-2 transition-all duration-200 ${
          isVisible
            ? "bg-blue-500 text-white border-blue-600 shadow-lg hover:bg-blue-600"
            : "bg-gray-800 text-blue-400 border-gray-600 hover:bg-gray-700"
        }`}
        style={{
          fontFamily: "Courier New, monospace",
          fontSize: "10px",
        }}
        title="Toggle Debug Console"
        type="button"
      >
        {isVisible ? "CONSOLE: ON" : "CONSOLE: OFF"}
      </button>
    </div>
  );
} 