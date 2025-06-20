# Task: Fix Section Borders Toggle Functionality
**Type**: bug  
**Priority**: HIGH  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  
## Overview
The "Section Borders" button in the config console is currently not functioning. It should toggle blue dashed borders around `<section>` elements, but currently the CSS is applied statically. Need to implement proper toggle functionality with additional class control.

## Background Agent Context

### Project Environment
- **Framework**: Next.js 14+ with TypeScript
- **Testing**: Jest + React Testing Library
- **Styling**: Tailwind CSS + Custom CSS (`debug-svg.css`)
- **Debug System**: ConfigDebugConsole with external library integration

### Current Implementation Files
- **CSS**: `src/app/debug-svg.css` (contains static section border rule)
- **Console**: `src/app/components/ConfigDebugConsole.tsx` (has non-functional toggle)
- **Main Page**: `src/app/page.tsx` (needs toggle handler implementation)
- **Tests**: `src/app/components/__tests__/ConfigDebugConsole.test.tsx`

### Dependencies to Verify
```bash
# Ensure project builds and tests run
npm install
npm run build
npm test

# Check if ConfigConsole external library loads
npm run dev
# Open browser and check if config console appears
```

### Current Broken Implementation
In `debug-svg.css`:
```css
/* This is ALWAYS active when debug-mode is on - BROKEN */
body.debug-mode section {
  border: 1px dashed blue !important;
}
```

## Problem Description
Currently, section borders are controlled by static CSS rule that makes borders always visible when in debug mode, regardless of the toggle state. The checkbox exists but doesn't actually control the visibility of section borders.

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
# Take 3 BEFORE screenshots documenting current broken behavior:

# 1. Debug mode OFF
# Ensure debug mode is OFF, take screenshot of sections
# Save as: screenshots/before-section-borders-debug-off.png

# 2. Debug mode ON (shows broken behavior)
# Enable debug mode, open config console
# Take screenshot showing section borders (likely visible due to bug)
# Save as: screenshots/before-section-borders-debug-on.png

# 3. Config console view
# Take screenshot of config console showing "Section Borders" checkbox
# Save as: screenshots/before-section-borders-console.png
```

### Step 3: Provide Task Summary
**Background Agent should provide a summary like this:**

---
**TASK UNDERSTANDING SUMMARY:**

I understand this task requires:
1. **Fix broken section borders toggle** - Currently always shows borders when debug mode is ON
2. **Update CSS rule** in `src/app/debug-svg.css` to use combined selector `body.debug-mode.show-section-borders section`
3. **Add toggle handler** in `src/app/page.tsx` to manage `show-section-borders` class
4. **Expected result**: Borders only appear when BOTH debug mode is ON AND toggle is checked
5. **Files to modify**: `debug-svg.css`, `page.tsx`, potentially `ConfigDebugConsole.tsx`

**BEFORE screenshots captured**:
- `screenshots/before-section-borders-debug-off.png` - No borders (correct)
- `screenshots/before-section-borders-debug-on.png` - Shows borders (broken - should be controllable)
- `screenshots/before-section-borders-console.png` - Non-functional toggle

**Current bug**: Section borders always visible when debug mode is ON, regardless of toggle state.

**Ready to proceed with implementation.**

---

### Step 4: ⛔ WAIT FOR USER CONFIRMATION
**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**
- User will review the BEFORE screenshots
- User will confirm task understanding is correct
- User will give explicit permission to proceed

## Screenshot Requirements for Background Agent

### CRITICAL: Before Starting Implementation

1. **Take BEFORE screenshots** (3 states required):

   **State 1 - Debug Mode OFF**:
   ```bash
   npm run dev
   # Wait for server to start
   # Open browser to development server
   # Ensure debug mode is OFF (no debug-mode class on body)
   # Take screenshot of main content area showing sections without borders
   # Save as: screenshots/before-section-borders-debug-off.png
   ```

   **State 2 - Debug Mode ON + Section Borders Toggle**:
   ```bash
   # With browser open to development server
   # Enable debug mode (however it's currently done)
   # Open config console
   # Find "Section Borders" checkbox - note its current state
   # Take screenshot showing section borders (likely visible due to bug)
   # Save as: screenshots/before-section-borders-debug-on.png
   ```

   **State 3 - Config Console View**:
   ```bash
   # With config console open
   # Take screenshot of the config console showing "Section Borders" checkbox
   # Save as: screenshots/before-section-borders-console.png
   ```

### CRITICAL: After Implementation

1. **Take AFTER screenshots** (4 states required):

   **State 1 - Debug Mode OFF (should be same)**:
   ```bash
   npm run dev
   # Ensure debug mode is OFF
   # Take screenshot of sections (should have no borders)
   # Save as: screenshots/after-section-borders-debug-off.png
   ```

   **State 2 - Debug Mode ON, Toggle OFF**:
   ```bash
   # Enable debug mode
   # Open config console
   # Ensure "Section Borders" checkbox is UNCHECKED
   # Take screenshot showing sections WITHOUT blue borders
   # Save as: screenshots/after-section-borders-toggle-off.png
   ```

   **State 3 - Debug Mode ON, Toggle ON**:
   ```bash
   # With debug mode ON
   # In config console, CHECK the "Section Borders" checkbox
   # Take screenshot showing sections WITH blue dashed borders
   # Save as: screenshots/after-section-borders-toggle-on.png
   ```

   **State 4 - Config Console Final State**:
   ```bash
   # Take screenshot of config console with working toggle
   # Save as: screenshots/after-section-borders-console.png
   ```

### Screenshot Verification Checklist
- [ ] **BEFORE**: Debug off shows no borders ✓
- [ ] **BEFORE**: Debug on shows borders (due to bug) ✓  
- [ ] **BEFORE**: Console screenshot shows non-functional toggle ✓
- [ ] **AFTER**: Debug off shows no borders ✓
- [ ] **AFTER**: Debug on + toggle off shows NO borders ✓
- [ ] **AFTER**: Debug on + toggle on shows BLUE DASHED borders ✓
- [ ] **AFTER**: Console shows functional toggle ✓
- [ ] **Visual comparison confirms toggle now controls border visibility**

## Implementation Instructions for Background Agent
**⚠️ ONLY PROCEED AFTER USER CONFIRMATION**

### Step 5: Update CSS Rule
In `src/app/debug-svg.css`:
```css
/* REPLACE the existing rule */
/* OLD - Remove this: */
body.debug-mode section {
  border: 1px dashed blue !important;
}

/* NEW - Add this: */
body.debug-mode.show-section-borders section {
  border: 1px dashed blue !important;
}
```

### Step 6: Add Toggle Handler to Main Page
In `src/app/page.tsx`, add this handler function:
```typescript
// Add this function for section borders toggle
const handleSectionBordersToggle = (enabled: boolean) => {
  if (enabled) {
    document.body.classList.add('show-section-borders');
  } else {
    document.body.classList.remove('show-section-borders');
  }
};
```

### Step 7: Connect Handler to ConfigDebugConsole
In `src/app/page.tsx`, ensure the prop is passed:
```typescript
<ConfigDebugConsole
  // ... other props
  onSectionBordersToggle={handleSectionBordersToggle}
  // ... rest of props
/>
```

### Step 8: Verification Commands
```bash
# Build and test
npm run build
npm test

# Manual verification
npm run dev
# 1. Open browser to development server
# 2. Enable debug mode (via existing method)
# 3. Open config console
# 4. Toggle "Section Borders" checkbox
# 5. Verify borders appear/disappear on <section> elements
```

### Step 9: Take AFTER Screenshots
```bash
# With dev server running
# Take all 4 AFTER screenshots as documented above
# This proves the toggle now works correctly
```

## Test-Driven Development Approach

### Test Requirements
1. **Toggle Functionality Test**:
   - Verify section borders can be toggled on/off independently of debug mode
   - Confirm checkbox state controls actual border visibility
   - Test that borders only appear when both debug mode is active AND toggle is enabled

2. **CSS Class Control Test**:
   - Implement new CSS class for section borders control
   - Verify proper class application/removal on body element
   - Ensure borders only show with correct class combination

3. **State Persistence Test**:
   - Verify toggle state persists in localStorage
   - Confirm state restoration on page reload
   - Test default state behavior

## Acceptance Criteria
- [ ] Section borders toggle checkbox controls actual border visibility
- [ ] Borders only appear when debug mode is active AND section borders toggle is enabled
- [ ] CSS uses combined class selector: `body.debug-mode.show-section-borders section`
- [ ] Toggle state persists across page reloads
- [ ] Checkbox reflects actual state of border visibility
- [ ] No borders show when toggle is disabled (even in debug mode)
- [ ] All existing tests pass
- [ ] Project builds successfully (`npm run build`)
- [ ] Visual verification in browser confirms functionality
- [ ] **BEFORE screenshots document the broken behavior**
- [ ] **AFTER screenshots prove the toggle works correctly**
- [ ] **Visual comparison shows proper toggle control implementation**
- [ ] **USER CONFIRMATION RECEIVED before implementation**

## Testing Strategy for Background Agent

### Automated Tests to Add/Update
```javascript
// Test CSS class management
test('should add show-section-borders class when section borders enabled', () => {
  render(<Page />);
  // Enable debug mode
  document.body.classList.add('debug-mode');
  
  // Find and click section borders checkbox
  const checkbox = screen.getByLabelText('Section Borders');
  fireEvent.click(checkbox);
  
  expect(document.body).toHaveClass('show-section-borders');
});

// Test borders visibility
test('should show section borders only when both debug mode and toggle are active', () => {
  render(<Page />);
  
  // Case 1: Neither active - no borders
  expect(document.body).not.toHaveClass('debug-mode');
  expect(document.body).not.toHaveClass('show-section-borders');
  
  // Case 2: Only debug mode - no borders
  document.body.classList.add('debug-mode');
  expect(getComputedStyle(document.querySelector('section')).border).toBe('');
  
  // Case 3: Both active - borders visible
  document.body.classList.add('show-section-borders');
  expect(getComputedStyle(document.querySelector('section')).border).toContain('blue');
});
```

### Manual Verification Steps
1. `npm run dev`
2. Open browser to development server
3. Enable debug mode (however it's currently done)
4. Open config console
5. Test section borders checkbox:
   - Unchecked = no section borders
   - Checked = blue dashed borders on all sections
6. Refresh page and verify state persistence

### Commands to Run
```bash
# Full verification sequence
npm install
npm run build
npm test
npm run dev

# Specific tests if they exist
npm test -- --testNamePattern="section.*border"
```

## Files to Modify
- `src/app/debug-svg.css` - Update CSS selector for section borders
- `src/app/page.tsx` - Implement section borders toggle handler  
- `src/app/components/ConfigDebugConsole.tsx` - Ensure proper callback connection (if needed)

## Technical Implementation Details

### CSS Changes Required
```css
/* In src/app/debug-svg.css */

/* OLD - Remove this rule */
body.debug-mode section {
  border: 1px dashed blue !important;
}

/* NEW - Add this rule */
body.debug-mode.show-section-borders section {
  border: 1px dashed blue !important;
}
```

### State Management Pattern
- Add `show-section-borders` class to body when toggle is enabled
- Remove class when toggle is disabled
- Persist toggle state in localStorage with debug settings
- Ensure proper initialization on page load

## Background Agent Notes
- **Complexity**: Medium - involves CSS, state management, and testing
- **Safe to auto-run**: Yes, BUT ONLY AFTER USER CONFIRMATION
- **Critical verification**: Manual browser testing is essential
- **Dependencies**: Requires ConfigDebugConsole to be functional
- **Rollback plan**: Git checkout if issues arise
- **Screenshots**: CRITICAL for documenting before/after behavior
- **Confirmation Required**: Must wait for user approval before proceeding

## Definition of Done
- [ ] Task preparation completed (environment, screenshots, summary)
- [ ] **USER CONFIRMATION RECEIVED**
- [ ] Section borders toggle controls actual border visibility
- [ ] CSS updated to use combined class selector
- [ ] Toggle state persists in localStorage
- [ ] Checkbox accurately reflects border visibility state
- [ ] All unit and integration tests pass
- [ ] Project builds without errors
- [ ] Manual browser verification completed
- [ ] Visual testing confirms borders toggle correctly
- [ ] **Comprehensive before/after screenshots captured**
- [ ] **Screenshots demonstrate functional toggle behavior**

## Notes for Background Agent
- Borders should only be visible when BOTH debug mode AND section borders toggle are active
- Maintain existing debug functionality for all other features
- Test across different section types and layouts
- Ensure no interference with other debug controls
- **Screenshots are essential for proving the fix works**
- **Must wait for user confirmation before proceeding with implementation**

---
**Status**: Ready for Background Agent implementation with confirmation checkpoint 