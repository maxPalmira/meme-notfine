# Figma-to-Code SVG Alignment Guide

## 🎯 Best Practices for Cartoonish Website Designs

### 1. **Figma Inspection Checklist**
- [ ] View at 100% zoom in Figma
- [ ] Use Inspector panel to get exact X,Y coordinates
- [ ] Note the layer hierarchy (which elements are grouped)
- [ ] Export SVGs at exact pixel dimensions shown
- [ ] Document z-index/layer order

### 2. **Code Structure Patterns**

#### ✅ Good: Hierarchical Positioning
```jsx
{/* Main container with fixed dimensions */}
<section style={{ position: 'relative', width: '1920px', height: '800px' }}>
  
  {/* Character container - groups related elements */}
  <div style={{ position: 'absolute', left: '182px', top: '86px' }}>
    <Image src="cat.svg" style={{ position: 'relative', left: '0px', top: '0px' }} />
    <Image src="flame1.svg" style={{ position: 'absolute', left: '0px', top: '280px' }} />
    <Image src="flame2.svg" style={{ position: 'absolute', left: '337px', top: '407px' }} />
  </div>
  
  {/* Speech bubble container - groups bubble + text + decorations */}
  <div style={{ position: 'absolute', left: '555px', top: '3px' }}>
    <Image src="bubble.svg" style={{ position: 'absolute', left: '274px', top: '0px' }} />
    <div style={{ position: 'absolute', left: '458px', top: '101px' }}>Text content</div>
    <Image src="stars.svg" style={{ position: 'absolute', left: '831px', top: '42px' }} />
  </div>
</section>
```

#### ❌ Avoid: Flat positioning (hard to maintain)
```jsx
<section>
  <Image style={{ position: 'absolute', left: '182px', top: '86px' }} />
  <Image style={{ position: 'absolute', left: '182px', top: '366px' }} />
  <Image style={{ position: 'absolute', left: '519px', top: '493px' }} />
  <Image style={{ position: 'absolute', left: '829px', top: '3px' }} />
  {/* Hard to understand relationships */}
</section>
```

### 3. **Responsive Design Options**

#### Option A: Fixed positioning (pixel-perfect)
- Matches Figma exactly
- Use for designs with fixed layouts
- Good for desktop-first designs

#### Option B: Responsive positioning (scalable)
```jsx
const scaleFactor = Math.min(window.innerWidth, 1920) / 1920;

const getResponsiveStyle = (x, y, width, height) => ({
  left: `${x * scaleFactor}px`,
  top: `${y * scaleFactor}px`,
  width: `${width * scaleFactor}px`,
  height: `${height * scaleFactor}px`,
});
```

### 4. **Common Alignment Issues & Solutions**

#### Issue: Elements appear misaligned
**Solution**: Check these in order:
1. Verify Figma coordinates are correct (copy from inspector)
2. Check if elements are grouped differently than expected
3. Ensure SVG exports match Figma dimensions
4. Verify z-index layering matches Figma layer order

#### Issue: Text doesn't align with speech bubble
**Solution**: 
- Position text relative to bubble container, not viewport
- Account for bubble's internal padding/margins
- Use consistent font loading (font-display: swap)

#### Issue: Responsive design breaks layout
**Solution**:
- Use percentage-based positioning for flexible layouts
- Or implement breakpoint-specific positioning
- Consider CSS Grid/Flexbox for complex layouts

### 5. **Debug Mode Implementation**
```jsx
// Add debug outlines to visualize positioning
.debug-mode .debug-image {
  outline: 2px solid red;
  background: rgba(255, 0, 0, 0.1);
}

.debug-mode .debug-container {
  outline: 2px solid blue;
  background: rgba(0, 0, 255, 0.1);
}
```

### 6. **Testing Strategy**
- Test on multiple screen sizes
- Verify element relationships (does flame stay near cat?)
- Check text readability at different scales
- Validate SVG loading performance

### 7. **Tools & Workflow**
1. **Figma**: Use Inspector, measure exact distances
2. **Browser DevTools**: Verify computed styles
3. **Debug Console**: Toggle element visibility
4. **Responsive Testing**: Check various viewports 