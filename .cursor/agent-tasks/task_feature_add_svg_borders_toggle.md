# Task: Add SVG Borders Toggle to Config Console
**Type**: feature  
**Priority**: MEDIUM  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  
## Overview
Add a new "SVG Borders" checkbox to the ConfigDebugConsole that toggles 2px black borders on elements with class `svg-container`. This will help visualize SVG container boundaries during debugging.

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
# Take screenshot of config console (should NOT show "SVG Borders" checkbox)
# Save as: screenshots/before-svg-borders-console.png

# Take screenshot of SVG containers (no borders)
# Save as: screenshots/before-svg-containers-no-borders.png
```

### Step 3: Provide Task Summary
**Background Agent should provide a summary like this:**

---
**TASK UNDERSTANDING SUMMARY:**

I understand this task requires:
1. **Add new "SVG Borders" checkbox** to ConfigDebugConsole
2. **Add CSS rule** for 2px black borders on `.svg-container` elements
3. **Update interfaces**: Add `showSvgBorders` to `DebugSettings`, add `onSvgBordersToggle` to props
4. **Files to modify**: `ConfigDebugConsole.tsx`, `debug-svg.css`, `page.tsx`
5. **Expected result**: New toggle that shows/hides 2px black borders on SVG containers
6. **CSS selector**: `body.debug-mode.show-svg-borders .svg-container`

**BEFORE screenshots captured**:
- `screenshots/before-svg-borders-console.png` - Config console lacks "SVG Borders" checkbox
- `screenshots/before-svg-containers-no-borders.png` - SVG containers have no borders

**Ready to proceed with implementation.**

---

### Step 4: ⛔ WAIT FOR USER CONFIRMATION
**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**
- User will review the BEFORE screenshots
- User will confirm task understanding is correct
- User will give explicit permission to proceed

## Problem Description
Currently, there's no way to visualize SVG container boundaries in the debug console. Adding a toggle for SVG borders will help developers understand the layout and positioning of SVG elements by showing clear container boundaries.

## Implementation Instructions for Background Agent
**⚠️ ONLY PROCEED AFTER USER CONFIRMATION**

### Step 5: Update ConfigDebugConsole Interface
- Add `showSvgBorders` to `DebugSettings` interface
- Add `onSvgBordersToggle` to `ConfigDebugConsoleProps`
- Update `DEFAULT_SETTINGS` to include SVG borders setting

### Step 6: Add CSS Rule
Create CSS rule for SVG container borders in debug mode:
```css
body.debug-mode.show-svg-borders .svg-container {
  border: 2px solid black !important;
}
```

### Step 7: Implement Toggle Logic
- Add SVG borders checkbox to config console
- Implement body class management for `show-svg-borders`
- Connect toggle to localStorage persistence

### Step 8: Update Parent Component
- Add SVG borders toggle handler to main page
- Pass `onSvgBordersToggle` prop to ConfigDebugConsole
- Implement body class management logic

### Step 9: Take AFTER Screenshots
```bash
# With dev server running
# Enable debug mode and open config console
# Take screenshot showing new "SVG Borders" checkbox
# Save as: screenshots/after-svg-borders-console.png

# With "SVG Borders" checkbox UNCHECKED
# Take screenshot of SVG containers (no borders)
# Save as: screenshots/after-svg-borders-toggle-off.png

# CHECK the "SVG Borders" checkbox
# Take screenshot of SVG containers with 2px black borders
# Save as: screenshots/after-svg-borders-toggle-on.png
```

## Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG borders control
- `src/app/debug-svg.css` - Add CSS rule for SVG borders
- `src/app/page.tsx` - Add SVG borders toggle handler

## Acceptance Criteria
- [ ] Task preparation completed (environment, screenshots, summary)
- [ ] **USER CONFIRMATION RECEIVED**
- [ ] "SVG Borders" checkbox appears in config console
- [ ] Checkbox toggles 2px black borders on `.svg-container` elements
- [ ] Borders only appear when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] CSS rule uses proper selector pattern for debug mode control
- [ ] All existing debug functionality remains intact
- [ ] All tests pass including new SVG borders tests
- [ ] **BEFORE screenshots show missing functionality**
- [ ] **AFTER screenshots prove new toggle works**

## Background Agent Notes
- **Safe to auto-run**: Yes, BUT ONLY AFTER USER CONFIRMATION
- **Rollback plan**: Git checkout if issues arise
- **Confirmation Required**: Must wait for user approval before proceeding

---
**Status**: Ready for Background Agent implementation with confirmation checkpoint

## Test-Driven Development Approach

### Test Requirements
1. **Control Addition Test**:
   - Verify "SVG Borders" checkbox appears in config console
   - Confirm checkbox can be toggled on/off
   - Test checkbox state persists in localStorage

2. **Border Toggle Functionality Test**:
   - Verify toggling adds/removes borders on `.svg-container` elements
   - Confirm 2px black border styling is applied correctly
   - Test that borders only appear when debug mode is active AND toggle is enabled

3. **State Management Test**:
   - Test localStorage persistence for SVG borders state
   - Verify proper state restoration on page reload
   - Confirm integration with existing debug settings

## Implementation Requirements

### Primary Changes Required
1. **Update ConfigDebugConsole Interface**:
   - Add `showSvgBorders` to `DebugSettings` interface
   - Add `onSvgBordersToggle` to `ConfigDebugConsoleProps`
   - Update `DEFAULT_SETTINGS` to include SVG borders setting

2. **Add CSS Rule**:
   - Create CSS rule for SVG container borders in debug mode
   - Use pattern: `body.debug-mode.show-svg-borders .svg-container`
   - Apply 2px black border styling

3. **Implement Toggle Logic**:
   - Add SVG borders checkbox to config console
   - Implement body class management for `show-svg-borders`
   - Connect toggle to localStorage persistence

4. **Update Parent Component**:
   - Add SVG borders toggle handler to main page
   - Pass `onSvgBordersToggle` prop to ConfigDebugConsole
   - Implement body class management logic

### Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG borders control
- `src/app/debug-svg.css` - Add CSS rule for SVG borders
- `src/app/page.tsx` - Add SVG borders toggle handler

## Testing Strategy

### Unit Tests
```javascript
// Test checkbox presence
test('should render SVG Borders checkbox in config console', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  expect(screen.getByText('SVG Borders')).toBeInTheDocument();
});

// Test interface compliance
test('should accept onSvgBordersToggle prop', () => {
  const mockToggle = jest.fn();
  expect(() => 
    render(<ConfigDebugConsole onSvgBordersToggle={mockToggle} {...otherProps} />)
  ).not.toThrow();
});

// Test CSS class management
test('should add show-svg-borders class when SVG borders enabled', () => {
  const { rerender } = render(<Page />);
  
  // Enable debug mode first
  document.body.classList.add('debug-mode');
  
  // Find and toggle SVG borders checkbox
  const checkbox = screen.getByLabelText('SVG Borders');
  fireEvent.click(checkbox);
  
  expect(document.body).toHaveClass('show-svg-borders');
});
```

### Integration Tests
```javascript
// Test border visibility
test('should show SVG borders only when both debug mode and toggle are active', () => {
  render(<Page />);
  
  // Create test SVG container
  const svgContainer = document.createElement('div');
  svgContainer.className = 'svg-container';
  document.body.appendChild(svgContainer);
  
  // Case 1: Neither active - no borders
  expect(getComputedStyle(svgContainer).border).toBe('');
  
  // Case 2: Only debug mode - no borders
  document.body.classList.add('debug-mode');
  expect(getComputedStyle(svgContainer).border).toBe('');
  
  // Case 3: Both active - borders visible
  document.body.classList.add('show-svg-borders');
  expect(getComputedStyle(svgContainer).border).toContain('2px solid black');
});

// Test localStorage persistence
test('should persist SVG borders state in localStorage', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  
  const checkbox = screen.getByLabelText('SVG Borders');
  fireEvent.click(checkbox);
  
  const savedSettings = JSON.parse(localStorage.getItem('debugSettings'));
  expect(savedSettings.showSvgBorders).toBe(true);
});
```

### CSS Tests
```javascript
// Test CSS rule specificity
test('should apply SVG borders with correct CSS selector', () => {
  const svgContainer = document.createElement('div');
  svgContainer.className = 'svg-container';
  document.body.appendChild(svgContainer);
  
  // Test CSS rule application
  document.body.classList.add('debug-mode', 'show-svg-borders');
  
  const computedStyle = getComputedStyle(svgContainer);
  expect(computedStyle.border).toContain('2px');
  expect(computedStyle.border).toContain('black');
});
```

## Definition of Done
- [ ] SVG Borders checkbox added to config console
- [ ] CSS rule added for SVG container borders
- [ ] Toggle functionality implemented and working
- [ ] State persistence in localStorage working
- [ ] All unit and integration tests pass
- [ ] Visual testing confirms borders appear correctly
- [ ] Code review completed

## Technical Implementation Details

### CSS Rule to Add
```css
/* SVG container borders in debug mode */
body.debug-mode.show-svg-borders .svg-container {
  border: 2px solid black !important;
}
```

### Interface Updates
```typescript
interface DebugSettings {
  showGridOverlay: boolean;
  showLabels: boolean;
  showSectionBorders: boolean;
  showSvgBorders: boolean; // Add this
}

interface ConfigDebugConsoleProps {
  visible?: boolean;
  onGridToggle: (enabled: boolean) => void;
  onLabelsToggle: (enabled: boolean) => void;
  onSectionBordersToggle: (enabled: boolean) => void;
  onSvgBordersToggle: (enabled: boolean) => void; // Add this
}
```

### Default Settings Update
```typescript
const DEFAULT_SETTINGS: DebugSettings = {
  showGridOverlay: true,
  showLabels: true,
  showSectionBorders: false,
  showSvgBorders: false, // Add this
};
```

## Notes
- Follow the same pattern as existing border toggles (section borders)
- Ensure SVG borders only appear when both debug mode and toggle are enabled
- Use consistent naming convention with existing debug controls
- Test with actual SVG containers in the application
- Maintain clean separation between different debug features

---
**Status**: Ready for implementation 