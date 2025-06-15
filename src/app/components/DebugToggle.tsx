"use client";

import { useEffect, useState } from "react";

export default function DebugToggle() {
  const [debugMode, setDebugMode] = useState(true);

  useEffect(() => {
    // Set debug mode on by default
    document.body.classList.add("debug-mode");
    setDebugMode(true);
  }, []);

  const toggleDebugMode = () => {
    if (debugMode) {
      document.body.classList.remove("debug-mode");
      setDebugMode(false);
    } else {
      document.body.classList.add("debug-mode");
      setDebugMode(true);
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
