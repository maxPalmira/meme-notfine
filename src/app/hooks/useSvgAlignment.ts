import { useEffect, useState, useCallback } from 'react';

interface ViewportSize {
  width: number;
  height: number;
}

interface FigmaCoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ResponsiveStyle {
  position: 'absolute';
  left: string;
  top: string;
  width: string;
  height: string;
}

export const useSvgAlignment = (designWidth: number = 1920, designHeight: number = 800) => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({ 
    width: designWidth, 
    height: designHeight 
  });

  // Calculate scaling factor based on viewport vs design size
  const getScaleFactor = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    
    const currentWidth = Math.min(window.innerWidth, designWidth);
    return currentWidth / designWidth;
  }, [designWidth]);

  // Handle viewport resize events
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    // Initial measurement
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert Figma coordinates to responsive CSS styles
  const getResponsiveStyle = useCallback((coordinates: FigmaCoordinates): ResponsiveStyle => {
    const scaleFactor = getScaleFactor();
    
    return {
      position: 'absolute',
      left: `${coordinates.x * scaleFactor}px`,
      top: `${coordinates.y * scaleFactor}px`,
      width: `${coordinates.width * scaleFactor}px`,
      height: `${coordinates.height * scaleFactor}px`,
    };
  }, [getScaleFactor]);

  // Get centered position within a parent container
  const getCenteredPosition = useCallback((
    childSize: { width: number; height: number },
    parentSize: { width: number; height: number }
  ) => {
    const scaleFactor = getScaleFactor();
    
    return {
      x: ((parentSize.width - childSize.width) / 2) * scaleFactor,
      y: ((parentSize.height - childSize.height) / 2) * scaleFactor,
    };
  }, [getScaleFactor]);

  // Get relative position within a container (percentage-based)
  const getRelativePosition = useCallback((
    xPercent: number,
    yPercent: number,
    containerWidth: number,
    containerHeight: number
  ) => {
    const scaleFactor = getScaleFactor();
    
    return {
      position: 'absolute' as const,
      left: `${(containerWidth * xPercent / 100) * scaleFactor}px`,
      top: `${(containerHeight * yPercent / 100) * scaleFactor}px`,
    };
  }, [getScaleFactor]);

  // Calculate responsive font size
  const getResponsiveFontSize = useCallback((baseFontSize: number) => {
    const scaleFactor = getScaleFactor();
    return `${baseFontSize * scaleFactor}rem`;
  }, [getScaleFactor]);

  // Calculate responsive spacing (padding, margin, etc.)
  const getResponsiveSpacing = useCallback((baseSpacing: number) => {
    const scaleFactor = getScaleFactor();
    return `${baseSpacing * scaleFactor}px`;
  }, [getScaleFactor]);

  return {
    viewportSize,
    scaleFactor: getScaleFactor(),
    getResponsiveStyle,
    getCenteredPosition,
    getRelativePosition,
    getResponsiveFontSize,
    getResponsiveSpacing,
  };
}; 