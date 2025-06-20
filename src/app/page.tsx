// Updated: Fixed section order to match correct sequence

"use client";

import { useState, useEffect } from "react";
import GridOverlay from "./components/GridOverlay";
import ConfigDebugConsole from "./components/ConfigDebugConsole";
import ConfigDebugToggle from "./components/ConfigDebugToggle";
import DebugLabels from "./components/DebugLabels";
import HeaderNavigation from "./components/HeaderNavigation";
import HeroSection from "./components/HeroSection";
import CASection from "./components/CASection";
import MemesSection from "./components/MemesSection";

const STORAGE_KEY = 'debugToggleState';

export default function Home() {
  // State for controlling debug features individually
  const [showGrid, setShowGrid] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showSectionBorders, setShowSectionBorders] = useState(false);
  const [showSvgBorders, setShowSvgBorders] = useState(false);
  const [showSvgDebugBg, setShowSvgDebugBg] = useState(false);
  const [showConfigConsole, setShowConfigConsole] = useState(true);

  // Debug mode state management (moved from DebugToggle component)
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

  // Initialize debug mode on component mount
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

  // Handler for section borders toggle
  const handleSectionBordersToggle = (enabled: boolean) => {
    setShowSectionBorders(enabled);
    if (enabled) {
      document.body.classList.add('show-section-borders');
    } else {
      document.body.classList.remove('show-section-borders');
    }
  };

  // Handler for SVG borders toggle
  const handleSvgBordersToggle = (enabled: boolean) => {
    setShowSvgBorders(enabled);
    if (enabled) {
      document.body.classList.add('show-svg-borders');
    } else {
      document.body.classList.remove('show-svg-borders');
    }
  };

  // Handler for SVG debug background toggle
  const handleSvgDebugBgToggle = (enabled: boolean) => {
    setShowSvgDebugBg(enabled);
    if (enabled) {
      document.body.classList.add('show-svg-debug-bg');
    } else {
      document.body.classList.remove('show-svg-debug-bg');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Config Console Toggle - Controls ConfigDebugConsole visibility */}
      <ConfigDebugToggle onToggle={setShowConfigConsole} />

      {/* Config Console - The proper one from the repo */}
      <ConfigDebugConsole 
        visible={showConfigConsole}
        onGridToggle={setShowGrid}
        onLabelsToggle={setShowLabels}
        onSectionBordersToggle={handleSectionBordersToggle}
        onSvgBordersToggle={handleSvgBordersToggle}
        onSvgDebugBgToggle={handleSvgDebugBgToggle}
      />

      {/* Debug Labels - Controlled by Config Console */}
      <DebugLabels visible={showLabels} />

      {/* Grid Overlay - Controlled by Config Console */}
      <GridOverlay visible={showGrid} />

      {/* Header Navigation - Using SVG Component */}
      {/* <HeaderNavigation /> */}

      {/* Hero Section - Using SVG Component */}
      <HeroSection />

      {/* Contract Address Section - Using Component */}
      {/* <CASection /> */}

      {/* Memes Section */}
      {/* <MemesSection /> */}

    </div>
  );
}
