# Task: Add SVG Debug Background Toggle to Config Console
**Type**: feature  
**Priority**: MEDIUM  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  
## Overview
Add a new "SVG Debug BG" checkbox to the ConfigDebugConsole that toggles a red transparent background on elements with class `svg-container`. This will help visualize SVG container areas during debugging.

## ⚠️ PREPARATION PHASE - WAIT FOR CONFIRMATION

### Step 1: Task Preparation
```bash
# Verify environment setup
npm install
npm run build
npm test

# Start development server
npm run dev
```

### Step 2: Take BEFORE Screenshots
```bash
# With development server running
# Enable debug mode and open config console
# Take screenshot of config console (should NOT show "SVG Debug BG" checkbox)
# Save as: screenshots/before-svg-debug-bg-console.png

# Take screenshot of SVG containers (no red background)
# Save as: screenshots/before-svg-containers-no-bg.png
```

### Step 3: Provide Task Summary
**Background Agent should provide a summary like this:**

---
**TASK UNDERSTANDING SUMMARY:**

I understand this task requires:
1. **Add new "SVG Debug BG" checkbox** to ConfigDebugConsole
2. **Add CSS rule** for red transparent background on `.svg-container` elements
3. **Update interfaces**: Add `showSvgDebugBg` to `DebugSettings`, add `onSvgDebugBgToggle` to props
4. **Files to modify**: `ConfigDebugConsole.tsx`, `debug-svg.css`, `page.tsx`
5. **Expected result**: New toggle that shows/hides red transparent background on SVG containers
6. **CSS selector**: `body.debug-mode.show-svg-debug-bg .svg-container`
7. **Background color**: `rgba(255, 0, 0, 0.2)` (20% red transparency)

**BEFORE screenshots captured**:
- `screenshots/before-svg-debug-bg-console.png` - Config console lacks "SVG Debug BG" checkbox
- `screenshots/before-svg-containers-no-bg.png` - SVG containers have no red background

**Ready to proceed with implementation.**

---

### Step 4: ⛔ WAIT FOR USER CONFIRMATION
**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**
- User will review the BEFORE screenshots
- User will confirm task understanding is correct
- User will give explicit permission to proceed

## Problem Description
Currently, there's no way to visualize the actual area occupied by SVG containers in the debug console. Adding a toggle for a red transparent background will help developers understand the space allocation and positioning of SVG elements by clearly showing container boundaries and overlaps.

## Implementation Instructions for Background Agent
**⚠️ ONLY PROCEED AFTER USER CONFIRMATION**

### Step 5: Update ConfigDebugConsole Interface
- Add `showSvgDebugBg` to `DebugSettings` interface
- Add `onSvgDebugBgToggle` to `ConfigDebugConsoleProps`
- Update `DEFAULT_SETTINGS` to include SVG debug background setting

### Step 6: Add CSS Rule
Create CSS rule for SVG container debug background in debug mode:
```css
body.debug-mode.show-svg-debug-bg .svg-container {
  background: rgba(255, 0, 0, 0.2) !important;
}
```

### Step 7: Implement Toggle Logic
- Add SVG debug background checkbox to config console
- Implement body class management for `show-svg-debug-bg`
- Connect toggle to localStorage persistence

### Step 8: Update Parent Component
- Add SVG debug background toggle handler to main page
- Pass `onSvgDebugBgToggle` prop to ConfigDebugConsole
- Implement body class management logic

### Step 9: Take AFTER Screenshots
```bash
# With dev server running
# Enable debug mode and open config console
# Take screenshot showing new "SVG Debug BG" checkbox
# Save as: screenshots/after-svg-debug-bg-console.png

# With "SVG Debug BG" checkbox UNCHECKED
# Take screenshot of SVG containers (no red background)
# Save as: screenshots/after-svg-debug-bg-toggle-off.png

# CHECK the "SVG Debug BG" checkbox
# Take screenshot of SVG containers with red transparent background
# Save as: screenshots/after-svg-debug-bg-toggle-on.png
```

## Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG debug background control
- `src/app/debug-svg.css` - Add CSS rule for SVG debug background
- `src/app/page.tsx` - Add SVG debug background toggle handler

## Acceptance Criteria
- [ ] Task preparation completed (environment, screenshots, summary)
- [ ] **USER CONFIRMATION RECEIVED**
- [ ] "SVG Debug BG" checkbox appears in config console
- [ ] Checkbox toggles red transparent background on `.svg-container` elements
- [ ] Background only appears when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] CSS rule uses proper selector pattern for debug mode control
- [ ] Background is visually distinct but not overpowering (appropriate transparency)
- [ ] All existing debug functionality remains intact
- [ ] All tests pass including new SVG debug background tests
- [ ] **BEFORE screenshots show missing functionality**
- [ ] **AFTER screenshots prove new toggle works with red background**

## Background Agent Notes
- **Safe to auto-run**: Yes, BUT ONLY AFTER USER CONFIRMATION
- **Rollback plan**: Git checkout if issues arise
- **Confirmation Required**: Must wait for user approval before proceeding

---
**Status**: Ready for Background Agent implementation with confirmation checkpoint

## Test-Driven Development Approach

### Test Requirements
1. **Control Addition Test**:
   - Verify "SVG Debug BG" checkbox appears in config console
   - Confirm checkbox can be toggled on/off
   - Test checkbox state persists in localStorage

2. **Background Toggle Functionality Test**:
   - Verify toggling adds/removes red transparent background on `.svg-container` elements
   - Confirm background styling is applied correctly (red, transparent)
   - Test that background only appears when debug mode is active AND toggle is enabled

3. **State Management Test**:
   - Test localStorage persistence for SVG debug background state
   - Verify proper state restoration on page reload
   - Confirm integration with existing debug settings

## Implementation Requirements

### Primary Changes Required
1. **Update ConfigDebugConsole Interface**:
   - Add `showSvgDebugBg` to `DebugSettings` interface
   - Add `onSvgDebugBgToggle` to `ConfigDebugConsoleProps`
   - Update `DEFAULT_SETTINGS` to include SVG debug background setting

2. **Add CSS Rule**:
   - Create CSS rule for SVG container debug background in debug mode
   - Use pattern: `body.debug-mode.show-svg-debug-bg .svg-container`
   - Apply red transparent background (e.g., `rgba(255, 0, 0, 0.2)`)

3. **Implement Toggle Logic**:
   - Add SVG debug background checkbox to config console
   - Implement body class management for `show-svg-debug-bg`
   - Connect toggle to localStorage persistence

4. **Update Parent Component**:
   - Add SVG debug background toggle handler to main page
   - Pass `onSvgDebugBgToggle` prop to ConfigDebugConsole
   - Implement body class management logic

### Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG debug background control
- `src/app/debug-svg.css` - Add CSS rule for SVG debug background
- `src/app/page.tsx` - Add SVG debug background toggle handler

## Acceptance Criteria
- [ ] "SVG Debug BG" checkbox appears in config console
- [ ] Checkbox toggles red transparent background on `.svg-container` elements
- [ ] Background only appears when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] CSS rule uses proper selector pattern for debug mode control
- [ ] Background is visually distinct but not overpowering (appropriate transparency)
- [ ] All existing debug functionality remains intact
- [ ] All tests pass including new SVG debug background tests

## Testing Strategy

### Unit Tests
```javascript
// Test checkbox presence
test('should render SVG Debug BG checkbox in config console', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  expect(screen.getByText('SVG Debug BG')).toBeInTheDocument();
});

// Test interface compliance
test('should accept onSvgDebugBgToggle prop', () => {
  const mockToggle = jest.fn();
  expect(() => 
    render(<ConfigDebugConsole onSvgDebugBgToggle={mockToggle} {...otherProps} />)
  ).not.toThrow();
});

// Test CSS class management
test('should add show-svg-debug-bg class when SVG debug background enabled', () => {
  render(<Page />);
  
  // Enable debug mode first
  document.body.classList.add('debug-mode');
  
  // Find and toggle SVG debug background checkbox
  const checkbox = screen.getByLabelText('SVG Debug BG');
  fireEvent.click(checkbox);
  
  expect(document.body).toHaveClass('show-svg-debug-bg');
});
```

### Integration Tests
```javascript
// Test background visibility
test('should show SVG debug background only when both debug mode and toggle are active', () => {
  render(<Page />);
  
  // Create test SVG container
  const svgContainer = document.createElement('div');
  svgContainer.className = 'svg-container';
  document.body.appendChild(svgContainer);
  
  // Case 1: Neither active - no background
  expect(getComputedStyle(svgContainer).backgroundColor).toBe('');
  
  // Case 2: Only debug mode - no background
  document.body.classList.add('debug-mode');
  expect(getComputedStyle(svgContainer).backgroundColor).toBe('');
  
  // Case 3: Both active - red background visible
  document.body.classList.add('show-svg-debug-bg');
  const bgColor = getComputedStyle(svgContainer).backgroundColor;
  expect(bgColor).toContain('rgba(255, 0, 0');
});

// Test localStorage persistence
test('should persist SVG debug background state in localStorage', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  
  const checkbox = screen.getByLabelText('SVG Debug BG');
  fireEvent.click(checkbox);
  
  const savedSettings = JSON.parse(localStorage.getItem('debugSettings'));
  expect(savedSettings.showSvgDebugBg).toBe(true);
});
```

### Visual Tests
```javascript
// Test background transparency and color
test('should apply appropriate red transparent background', () => {
  const svgContainer = document.createElement('div');
  svgContainer.className = 'svg-container';
  document.body.appendChild(svgContainer);
  
  // Enable both debug mode and SVG debug background
  document.body.classList.add('debug-mode', 'show-svg-debug-bg');
  
  const computedStyle = getComputedStyle(svgContainer);
  const bgColor = computedStyle.backgroundColor;
  
  // Should be red with transparency
  expect(bgColor).toMatch(/rgba?\(255,\s*0,\s*0/);
  // Should have transparency (not solid red)
  expect(bgColor).not.toBe('rgb(255, 0, 0)');
});
```

## Definition of Done
- [ ] SVG Debug BG checkbox added to config console
- [ ] CSS rule added for SVG container debug background
- [ ] Toggle functionality implemented and working
- [ ] Red transparent background applied correctly
- [ ] State persistence in localStorage working
- [ ] All unit and integration tests pass
- [ ] Visual testing confirms background appears correctly
- [ ] Code review completed

## Technical Implementation Details

### CSS Rule to Add
```css
/* SVG container debug background in debug mode */
body.debug-mode.show-svg-debug-bg .svg-container {
  background: rgba(255, 0, 0, 0.2) !important;
}
```

### Interface Updates
```typescript
interface DebugSettings {
  showGridOverlay: boolean;
  showLabels: boolean;
  showSectionBorders: boolean;
  showSvgBorders: boolean;
  showSvgDebugBg: boolean; // Add this
}

interface ConfigDebugConsoleProps {
  visible?: boolean;
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onSectionBordersToggle: (enabled: boolean) => void;
  onSvgBordersToggle: (enabled: boolean) => void;
  onSvgDebugBgToggle: (enabled: boolean) => void; // Add this
}
```

### Default Settings Update
```typescript
const DEFAULT_SETTINGS: DebugSettings = {
  showGridOverlay: true,
  showLabels: true,
  showSectionBorders: false,
  showSvgBorders: false,
  showSvgDebugBg: false, // Add this
};
```

### Background Color Considerations
- Use `rgba(255, 0, 0, 0.2)` for 20% transparency red background
- Consider alternative: `#ff000033` (hex with alpha)
- Ensure sufficient visibility without being overwhelming
- Test against various SVG content to ensure good contrast

## Notes
- Follow the same pattern as existing debug toggles
- Ensure SVG debug background only appears when both debug mode and toggle are enabled
- Use consistent naming convention with existing debug controls
- Test with actual SVG containers in the application
- Consider the visual impact - background should be helpful but not distracting
- May be combined with SVG borders for comprehensive SVG debugging

---
**Status**: Ready for implementation 