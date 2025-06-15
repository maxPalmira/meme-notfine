/**
 * GridOverlay Component
 *
 * Creates a visual grid overlay with lines spaced at equal intervals
 * for positioning orientation and later animation work.
 *
 * Features:
 * - 1px wide lines with slight transparency
 * - Position absolute over everything
 * - Equal-sized grid steps (same actual pixel dimensions)
 * - pointer-events: none for non-interference
 * - Fixed pixel spacing for consistent grid size
 */

import { useEffect, useState } from "react";

interface GridOverlayProps {
  visible?: boolean;
}

export default function GridOverlay({ visible = true }: GridOverlayProps) {
  const [gridData, setGridData] = useState<{
    verticalLines: number[];
    horizontalLines: number[];
    stepSize: number;
  }>({ verticalLines: [], horizontalLines: [], stepSize: 0 });

  const [scrollX, setScrollX] = useState(0);
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    const updateGrid = () => {
      // Use a fixed step size in pixels (you can adjust this value)
      const stepSizePx = 100; // 100px grid steps

      const viewportWidth = window.innerWidth;
      // Use the full document height instead of just viewport height
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );

      // Calculate number of vertical lines
      const verticalSteps = Math.floor(viewportWidth / stepSizePx);
      const verticalLines = [];
      for (let i = 0; i <= verticalSteps; i++) {
        verticalLines.push(i * stepSizePx);
      }

      // Calculate number of horizontal lines using full document height
      const horizontalSteps = Math.floor(documentHeight / stepSizePx);
      const horizontalLines = [];
      for (let i = 0; i <= horizontalSteps; i++) {
        horizontalLines.push(i * stepSizePx);
      }

      setGridData({ verticalLines, horizontalLines, stepSize: stepSizePx });
    };

    const updateScrollX = () => {
      setScrollX(window.scrollX);
    };

    const checkDebugMode = () => {
      setDebugMode(document.body.classList.contains("debug-mode"));
    };

    updateGrid();
    updateScrollX();
    checkDebugMode();

    window.addEventListener("resize", updateGrid);
    window.addEventListener("scroll", updateScrollX);

    // Also update when the document content changes (for dynamic content)
    const observer = new MutationObserver(() => {
      updateGrid();
      checkDebugMode();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", updateGrid);
      window.removeEventListener("scroll", updateScrollX);
      observer.disconnect();
    };
  }, []);

  if (!visible || !debugMode) return null;

  const gridLines = [];
  const gridLabels = [];

  // Vertical lines (x-axis)
  gridData.verticalLines.forEach((xPos, i) => {
    gridLines.push(
      <div
        key={`vertical-${i}`}
        className="absolute top-0 border-l border-red-500/50"
        style={{
          left: `${xPos}px`,
          width: "1px",
          height: "100%",
          pointerEvents: "none",
        }}
      />,
    );

    // Add pixel label for vertical lines (skip 0 to avoid clutter)
    if (xPos > 0) {
      gridLabels.push(
        <div
          key={`v-label-${i}`}
          className="fixed text-xs font-mono bg-red-500/80 text-white px-1 rounded"
          style={{
            left: `${xPos - scrollX}px`,
            top: "2px",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            fontSize: "10px",
            lineHeight: "1.2",
            zIndex: 60,
          }}
        >
          {xPos}px
        </div>,
      );
    }
  });

  // Horizontal lines (y-axis)
  gridData.horizontalLines.forEach((yPos, i) => {
    gridLines.push(
      <div
        key={`horizontal-${i}`}
        className="absolute left-0 border-t border-red-500/50"
        style={{
          top: `${yPos}px`,
          width: "100%",
          height: "1px",
          pointerEvents: "none",
        }}
      />,
    );

    // Add pixel label for horizontal lines (skip 0 to avoid clutter)
    if (yPos > 0) {
      gridLabels.push(
        <div
          key={`h-label-${i}`}
          className="absolute text-xs font-mono bg-red-500/80 text-white px-1 rounded"
          style={{
            left: "2px",
            top: `${yPos}px`,
            transform: "translateY(-50%)",
            pointerEvents: "none",
            fontSize: "10px",
            lineHeight: "1.2",
          }}
        >
          {yPos}px
        </div>,
      );
    }
  });

  return (
    <div
      className="absolute inset-0 z-[60]"
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      {gridLines}
      {gridLabels}
    </div>
  );
}
