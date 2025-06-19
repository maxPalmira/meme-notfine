# Task: Rename Debug Labels to SVG Labels in Config Console
**Type**: feature  
**Priority**: LOW  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  
## Overview
Rename the "Debug Labels" checkbox in the ConfigDebugConsole to "SVG Labels" to better reflect its purpose. This is a label-only change that should not affect any functionality or component behavior.

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
# Take screenshot of config console showing "Debug Labels" checkbox
# Save as: screenshots/before-debug-labels-rename.png
```

### Step 3: Provide Task Summary
**Background Agent should provide a summary like this:**

---
**TASK UNDERSTANDING SUMMARY:**

I understand this task requires:
1. **Rename "Debug Labels" to "SVG Labels"** in ConfigDebugConsole checkbox text only
2. **Files to modify**: `src/app/components/ConfigDebugConsole.tsx` (change checkbox label)
3. **Preserve**: All functionality, prop names, state management, localStorage keys
4. **Expected result**: Config console shows "SVG Labels" instead of "Debug Labels"
5. **No changes**: Component interfaces, callback functions, or internal logic

**BEFORE screenshot captured**: `screenshots/before-debug-labels-rename.png`
- Shows "Debug Labels" checkbox in config console

**Ready to proceed with implementation.**

---

### Step 4: ⛔ WAIT FOR USER CONFIRMATION
**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**
- User will review the BEFORE screenshot
- User will confirm task understanding is correct
- User will give explicit permission to proceed

## Problem Description
The current "Debug Labels" naming in the config console is generic and doesn't clearly indicate that these labels are specifically for SVG elements. Renaming to "SVG Labels" will provide better clarity about the feature's purpose.

## Implementation Instructions for Background Agent
**⚠️ ONLY PROCEED AFTER USER CONFIRMATION**

### Step 5: Update ConfigDebugConsole Component
- Change checkbox label from "Debug Labels" to "SVG Labels"
- Locate the `addCheckbox` call for debug labels
- Update only the display text, not the functionality

### Step 6: Preserve All Functionality
- Keep `onLabelsToggle` callback unchanged
- Maintain localStorage settings and keys
- Preserve all state management logic

### Step 7: Take AFTER Screenshot
```bash
# With dev server running
# Enable debug mode and open config console
# Take screenshot showing "SVG Labels" checkbox
# Save as: screenshots/after-debug-labels-rename.png
```

## Files to Modify
- `src/app/components/ConfigDebugConsole.tsx` - Update checkbox label text

## Files to Keep Unchanged
- All functionality and state management
- Component prop names and interfaces
- localStorage keys and structure
- Test logic (except for text expectations)

## Acceptance Criteria
- [ ] Task preparation completed (environment, screenshots, summary)
- [ ] **USER CONFIRMATION RECEIVED**
- [ ] Config console displays "SVG Labels" instead of "Debug Labels"
- [ ] Checkbox functionality remains identical
- [ ] All existing functionality preserved (toggle, state, persistence)
- [ ] No layout or visual regressions
- [ ] Updated tests pass with new label text
- [ ] Accessibility attributes maintained
- [ ] **BEFORE screenshot shows "Debug Labels"**
- [ ] **AFTER screenshot shows "SVG Labels"**

## Background Agent Notes
- **Safe to auto-run**: Yes, BUT ONLY AFTER USER CONFIRMATION
- **Rollback plan**: Git checkout if issues arise
- **Confirmation Required**: Must wait for user approval before proceeding

---
**Status**: Ready for Background Agent implementation with confirmation checkpoint

## Test-Driven Development Approach

### Test Requirements
1. **Label Text Verification Test**:
   - Verify checkbox displays "SVG Labels" instead of "Debug Labels"
   - Confirm the label text change appears in the config console
   - Ensure the checkbox remains functional with new label

2. **Functionality Preservation Test**:
   - Verify checkbox still controls the same underlying functionality
   - Confirm `onLabelsToggle` callback remains connected and functional
   - Ensure localStorage key and behavior remain unchanged

3. **UI Consistency Test**:
   - Verify new label fits properly in config console layout
   - Confirm no visual regressions or layout issues
   - Test label accessibility attributes are maintained

## Testing Strategy

### Unit Tests
```javascript
// Test new label text
test('should display SVG Labels checkbox in config console', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  expect(screen.getByText('SVG Labels')).toBeInTheDocument();
  expect(screen.queryByText('Debug Labels')).not.toBeInTheDocument();
});

// Test functionality preservation
test('should maintain labels toggle functionality with new name', () => {
  const mockOnLabelsToggle = jest.fn();
  render(<ConfigDebugConsole onLabelsToggle={mockOnLabelsToggle} {...otherProps} />);
  
  const checkbox = screen.getByLabelText('SVG Labels');
  fireEvent.click(checkbox);
  
  expect(mockOnLabelsToggle).toHaveBeenCalledWith(true);
});

// Test accessibility
test('should maintain accessibility with new label', () => {
  render(<ConfigDebugConsole {...defaultProps} />);
  
  const checkbox = screen.getByLabelText('SVG Labels');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute('type', 'checkbox');
});
```

### Integration Tests
```javascript
// Test full integration with new label
test('should control SVG labels functionality via renamed checkbox', () => {
  render(<Page />);
  
  // Find SVG Labels checkbox
  const checkbox = screen.getByLabelText('SVG Labels');
  
  // Test toggle functionality
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  
  // Verify underlying functionality works
  // (labels appear/disappear as expected)
});
```

### Regression Tests
- Verify all existing debug functionality works
- Confirm localStorage persistence unchanged
- Test state restoration with new label text

## Definition of Done
- [ ] "SVG Labels" text appears in config console
- [ ] "Debug Labels" text no longer appears
- [ ] All functionality remains identical
- [ ] Tests updated and passing
- [ ] No visual or layout regressions
- [ ] Accessibility maintained
- [ ] Code review completed

## Technical Implementation Notes

### Specific Change Location
In `ConfigDebugConsole.tsx`, locate this line:
```typescript
consoleRef.current.addCheckbox('Debug Labels', loadedSettings.showLabels, (value: boolean) => {
```

Change to:
```typescript
consoleRef.current.addCheckbox('SVG Labels', loadedSettings.showLabels, (value: boolean) => {
```

### Test Updates Required
Update test expectations that check for "Debug Labels" text to instead check for "SVG Labels"

### No Changes Required
- Component prop names (`onLabelsToggle`)
- State property names (`showLabels`)
- localStorage keys
- Callback functionality
- Interface definitions

## Notes
- This is a cosmetic change only - no functional modifications
- Very low risk change with minimal testing requirements
- Focus on ensuring the label change doesn't break anything
- Maintain all existing behavior and state management
- Update only user-facing text, not internal naming

---
**Status**: Ready for implementation 