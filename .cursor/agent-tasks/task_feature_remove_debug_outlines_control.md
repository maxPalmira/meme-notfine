# Task: Remove Debug Outlines Control from Config Console
**Type**: feature  
**Priority**: MEDIUM  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  
## Overview
Remove the "Debug Outlines" checkbox control from the ConfigDebugConsole. This control is currently one of the checkboxes in the debug console but should be removed while keeping all other debug controls intact.

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

### Step 2: Take BEFORE Screenshot
```bash
# With development server running
# Enable debug mode and open config console
# Take screenshot of config console showing "Debug Outlines" checkbox
# Save as: screenshots/before-debug-outlines-removal.png
```

### Step 3: Provide Task Summary
**Background Agent should provide a summary like this:**

---
**TASK UNDERSTANDING SUMMARY:**

I understand this task requires:
1. **Remove "Debug Outlines" checkbox** from ConfigDebugConsole
2. **Update interfaces**: Remove `showDebugOutlines` from `DebugSettings`, remove `onBordersToggle` from props
3. **Files to modify**: `src/app/components/ConfigDebugConsole.tsx`, `src/app/page.tsx`
4. **Expected result**: Config console shows other controls but NOT "Debug Outlines"
5. **Preserve**: All other debug functionality (Grid Overlay, Debug Labels, Section Borders)

**BEFORE screenshot captured**: `screenshots/before-debug-outlines-removal.png`
- Shows "Debug Outlines" checkbox in config console

**Ready to proceed with implementation.**

---

### Step 4: ⛔ WAIT FOR USER CONFIRMATION
**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**
- User will review the BEFORE screenshot
- User will confirm task understanding is correct
- User will give explicit permission to proceed

## Problem Description
The ConfigDebugConsole currently has a "Debug Outlines" checkbox that controls `showDebugOutlines` state. This specific control should be removed from the console interface while preserving all other debug functionality.

## Implementation Instructions for Background Agent
**⚠️ ONLY PROCEED AFTER USER CONFIRMATION**

### Step 5: Update ConfigDebugConsole Interface
- Remove `onBordersToggle` from `ConfigDebugConsoleProps`
- Remove `showDebugOutlines` from `DebugSettings` interface
- Update `DEFAULT_SETTINGS` object

### Step 6: Remove Checkbox from Console
- Remove "Debug Outlines" checkbox from console initialization
- Remove corresponding callback function
- Clean up related state management

### Step 7: Update Component Usage
- Remove `onBordersToggle` prop from `<ConfigDebugConsole>` in `page.tsx`
- Remove any related state handlers in parent component

### Step 8: Take AFTER Screenshot
```bash
# With dev server running
# Enable debug mode and open config console
# Take screenshot showing config console WITHOUT "Debug Outlines" checkbox
# Save as: screenshots/after-debug-outlines-removal.png
```

## Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Remove debug outlines control
- `src/app/page.tsx` - Remove onBordersToggle prop usage

## Acceptance Criteria
- [ ] Task preparation completed (environment, screenshots, summary)
- [ ] **USER CONFIRMATION RECEIVED**
- [ ] "Debug Outlines" checkbox is not present in config console
- [ ] `DebugSettings` interface no longer includes `showDebugOutlines`
- [ ] `ConfigDebugConsoleProps` no longer includes `onBordersToggle`
- [ ] All other debug controls remain functional
- [ ] localStorage handling updated to exclude debug outlines
- [ ] All existing tests pass (updated as needed)
- [ ] No console errors or warnings
- [ ] **BEFORE screenshot shows "Debug Outlines" checkbox**
- [ ] **AFTER screenshot confirms checkbox removal**

## Background Agent Notes
- **Safe to auto-run**: Yes, BUT ONLY AFTER USER CONFIRMATION
- **Rollback plan**: Git checkout if issues arise
- **Confirmation Required**: Must wait for user approval before proceeding

---
**Status**: Ready for Background Agent implementation with confirmation checkpoint

## Test-Driven Development Approach

### Test Requirements
1. **Control Removal Test**:
   - Verify "Debug Outlines" checkbox is not present in config console
   - Confirm `showDebugOutlines` property is removed from interface
   - Ensure `onBordersToggle` callback is removed from component

2. **Remaining Controls Test**:
   - Verify other checkboxes remain: Grid Overlay, Debug Labels, Section Borders
   - Confirm utility buttons remain: Clear Logs, Reset Settings
   - Ensure all remaining functionality works correctly

3. **State Management Test**:
   - Remove `showDebugOutlines` from DebugSettings interface
   - Remove corresponding localStorage handling
   - Update DEFAULT_SETTINGS to exclude debug outlines

## Implementation Requirements

### Primary Changes Required
1. **Update ConfigDebugConsole Interface**:
   - Remove `onBordersToggle` from `ConfigDebugConsoleProps`
   - Remove `showDebugOutlines` from `DebugSettings` interface
   - Update `DEFAULT_SETTINGS` object

2. **Remove Checkbox from Console**:
   - Remove "Debug Outlines" checkbox from console initialization
   - Remove corresponding callback function
   - Clean up related state management

3. **Update Component Usage**:
   - Remove `onBordersToggle` prop from `<ConfigDebugConsole>` in `page.tsx`
   - Remove any related state handlers in parent component

### Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Remove debug outlines control
- `src/app/page.tsx` - Remove onBordersToggle prop usage

## Testing Strategy

### Unit Tests
```javascript
// Test that Debug Outlines checkbox is not rendered
test('should not render Debug Outlines checkbox in config console', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  expect(screen.queryByText('Debug Outlines')).not.toBeInTheDocument();
});

// Test that other controls remain
test('should render all other debug controls', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  expect(screen.getByText('Grid Overlay')).toBeInTheDocument();
  expect(screen.getByText('Debug Labels')).toBeInTheDocument();
  expect(screen.getByText('Section Borders')).toBeInTheDocument();
});

// Test interface compliance
test('should not require onBordersToggle prop', () => {
  const props = {
    onGridToggle: jest.fn(),
    onLabelsToggle: jest.fn(),
    onSectionBordersToggle: jest.fn(),
    // onBordersToggle should not be required
  };
  expect(() => render(<ConfigDebugConsole {...props} />)).not.toThrow();
});
```

### Integration Tests
```javascript
// Test localStorage handling without debug outlines
test('should handle localStorage without showDebugOutlines', () => {
  const settings = { showGridOverlay: true, showLabels: false };
  localStorage.setItem('debugSettings', JSON.stringify(settings));
  render(<ConfigDebugConsole {...defaultProps} />);
  // Should not crash and should use default values for missing properties
});
```

### Type Safety Tests
- Verify TypeScript compilation succeeds
- Confirm interface changes don't break existing code
- Ensure proper prop types for component usage

## Definition of Done
- [ ] Debug Outlines checkbox removed from config console
- [ ] Interface and type definitions updated
- [ ] Parent component updated to remove onBordersToggle prop
- [ ] localStorage handling cleaned up
- [ ] All tests pass and updated as needed
- [ ] TypeScript compilation succeeds
- [ ] Code review completed

## Notes
- Preserve all other debug functionality
- Ensure clean removal without affecting other controls
- Update tests to reflect the interface changes
- Maintain backward compatibility for localStorage settings
- Focus on clean code removal without breaking existing functionality

---
**Status**: Ready for implementation 