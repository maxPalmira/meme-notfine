"use client";

import { useEffect } from "react";

export default function DebugLabels() {
  useEffect(() => {
    const updateLabels = () => {
      // Remove existing labels
      document
        .querySelectorAll(".debug-label-overlay")
        .forEach((el) => el.remove());

      if (!document.body.classList.contains("debug-mode")) {
        return;
      }

      // Add labels to all debug-svg and debug-image elements
      const debugElements = document.querySelectorAll(
        ".debug-svg, .debug-image",
      );

      debugElements.forEach((element) => {
        const filename = element.getAttribute("data-filename");
        if (!filename) return;

        const rect = element.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        // Create label element
        const label = document.createElement("div");
        label.className = "debug-label-overlay";
        label.textContent = filename;
        label.style.cssText = `
          position: absolute;
          left: ${rect.left + scrollX + rect.width / 2}px;
          top: ${rect.top + scrollY + rect.height / 2}px;
          transform: translate(-50%, -50%);
          background-color: #000000;
          color: #00FF00;
          font-family: 'Courier New', monospace;
          font-size: 10px;
          font-weight: normal;
          line-height: 12px;
          padding: 2px 4px;
          border: 1px solid #333333;
          border-radius: 2px;
          opacity: 0.95;
          pointer-events: none;
          z-index: 9999;
          white-space: nowrap;
        `;

        document.body.appendChild(label);
      });
    };

    // Update labels on various events
    updateLabels();

    const handleUpdate = () => {
      // Debounce updates
      clearTimeout(window.debugLabelTimeout);
      window.debugLabelTimeout = setTimeout(updateLabels, 50);
    };

    window.addEventListener("scroll", handleUpdate);
    window.addEventListener("resize", handleUpdate);

    // Watch for debug mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          handleUpdate();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
      observer.disconnect();
      document
        .querySelectorAll(".debug-label-overlay")
        .forEach((el) => el.remove());
      clearTimeout(window.debugLabelTimeout);
    };
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    debugLabelTimeout: number;
  }
}
