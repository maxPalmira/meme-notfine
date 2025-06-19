// Updated: Fixed section order to match correct sequence

"use client";

import { useState } from "react";
import GridOverlay from "./components/GridOverlay";
import ConfigDebugConsole from "./components/ConfigDebugConsole";
import ConfigDebugToggle from "./components/ConfigDebugToggle";
import DebugLabels from "./components/DebugLabels";
import DebugToggle from "./components/DebugToggle";
import HeaderNavigation from "./components/HeaderNavigation";
import HeroSection from "./components/HeroSection";
import CASection from "./components/CASection";
import MemesSection from "./components/MemesSection";

export default function Home() {
  // State for controlling debug features individually
  const [showGrid, setShowGrid] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showBorders, setShowBorders] = useState(false);
  const [showSectionBorders, setShowSectionBorders] = useState(false);
  const [showConfigConsole, setShowConfigConsole] = useState(true);

  // Handler for section borders toggle
  const handleSectionBordersToggle = (enabled: boolean) => {
    setShowSectionBorders(enabled);
    if (enabled) {
      document.body.classList.add('show-section-borders');
    } else {
      document.body.classList.remove('show-section-borders');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Debug Toggle - Controls debug-mode class on body */}
      <DebugToggle />

      {/* Config Console Toggle - Controls ConfigDebugConsole visibility */}
      <ConfigDebugToggle onToggle={setShowConfigConsole} />

      {/* Config Console - The proper one from the repo */}
      <ConfigDebugConsole 
        visible={showConfigConsole}
        onGridToggle={setShowGrid}
        onLabelsToggle={setShowLabels}
        onBordersToggle={setShowBorders}
        onSectionBordersToggle={handleSectionBordersToggle}
      />

      {/* SVG Labels - Controlled by Config Console */}
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
