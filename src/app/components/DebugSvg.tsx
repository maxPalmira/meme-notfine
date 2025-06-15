"use client";

import React, { ReactElement, cloneElement } from "react";
import Image from "next/image";

interface DebugSvgProps {
  children: ReactElement;
  filename?: string;
  className?: string;
}

// Wrapper component for Image elements with SVG sources
interface DebugImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function DebugImage({
  src,
  alt,
  width,
  height,
  className,
}: DebugImageProps) {
  const filename = src.split("/").pop()?.replace(".svg", "") || "unknown";

  return (
    <div className="relative inline-block">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="font-mono font-normal opacity-95 border"
          style={{
            backgroundColor: "#000000",
            color: "#00FF00",
            fontSize: "4px",
            lineHeight: "5px",
            padding: "1px 2px",
            borderColor: "#333333",
            borderWidth: "0.5px",
            borderRadius: "1px",
          }}
        >
          {filename}
        </div>
      </div>
    </div>
  );
}

// Wrapper component for inline SVG elements
export function DebugSvg({ children, filename, className }: DebugSvgProps) {
  const svgElement = children;

  // Extract SVG dimensions for label positioning
  const viewBox = svgElement.props.viewBox;
  let centerX = 50;
  let centerY = 50;

  if (viewBox) {
    const [, , width, height] = viewBox.split(" ").map(Number);
    centerX = width / 2;
    centerY = height / 2;
  }

  // Clone the SVG element and add the debug label
  const enhancedSvg = cloneElement(svgElement, {
    ...svgElement.props,
    className: `${svgElement.props.className || ""} ${className || ""}`,
    children: [
      ...(Array.isArray(svgElement.props.children)
        ? svgElement.props.children
        : [svgElement.props.children]),
      <g key="debug-label" style={{ pointerEvents: "none" }}>
        <rect
          x={centerX - 15}
          y={centerY - 3}
          width="30"
          height="6"
          fill="#000000"
          stroke="#333333"
          strokeWidth="0.5"
          rx="0.5"
          opacity="0.95"
        />
        <text
          x={centerX}
          y={centerY + 1}
          textAnchor="middle"
          fontSize="4"
          fill="#00FF00"
          fontWeight="normal"
          fontFamily="monospace"
        >
          {filename || "inline-svg"}
        </text>
      </g>,
    ],
  });

  return enhancedSvg;
}

export default DebugSvg;
