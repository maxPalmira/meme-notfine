# Task: Remove Debug Outlines Control from Config Console
**Type**: feature  
**Priority**: LOW  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Remove the "Debug Outlines" checkbox from the ConfigDebugConsole. This control is no longer needed and should be completely removed from the interface, including all related code and functionality.

## Execution Mode: AUTONOMOUS with Strategic Checkpoints
- **Autonomous**: Environment setup, code changes, testing, screenshots
- **Confirmation Required**: After initial analysis (Step 4), before final commit
- **⛔ HARD STOPS**: Git workflow issues, environment failures, external dependency problems

## Error Classification System
- 🔴 **HARD STOP**: Git conflicts, server won't start, core functionality broken
- 🟡 **PROCEED WITH CAUTION**: Linting warnings, test failures in unrelated components  
- 🟢 **CONTINUE**: Missing optional dependencies with workarounds available

## Cost Control Measures
- **Max debugging iterations**: 3 attempts before escalation
- **Debugging Attempt Definition**: Each cycle of modify code → test → verify → screenshot
- **Reset counter**: After successful partial completion
- **Screenshot limit**: Exactly 3 final images (no debugging screenshots)
- **External dependency timeout**: 30 minutes before escalation
- **Task time limit**: 1 hour maximum

---

## PRE-EXECUTION PHASE

### Step 0: Git Workflow Validation ⚠️ MANDATORY
```bash
# Verify current branch and sync
git branch                           # Confirm current branch
git checkout development            # Switch to base branch  
git pull origin development         # Pull latest changes
git checkout -b cursor/feature-remove-debug-outlines-control  # Create feature branch
git status                          # Confirm clean working directory
```
**⛔ DO NOT PROCEED until git workflow is confirmed clean**

### Step 1: Environment Health Check
```bash
# Verify core environment
node --version                      # Verify Node.js available
npm --version                       # Verify npm available
npm install                         # Install dependencies
npm run build                       # Verify build works
npm test                           # Run existing tests

# Verify screenshot tools
npx playwright install              # Install browsers for screenshots
npx playwright --version           # Verify Playwright available

# Start development server
npm run dev                        # Should start without errors
# Verify server runs on http://localhost:3000
```

**Environment Dependencies:**
- Node.js + npm (verified above)
- Playwright with browser installation
- Development server port availability (3000)
- Screenshots directory (create if missing)

**⛔ If any failures, STOP and report dependency issues**

### Step 2: External Dependencies Verification
```bash
# Check browser console for errors (http://localhost:3000)
# Verify all external scripts load correctly
# Check for any React hydration issues
# Confirm config console functionality works
```
**Common Issues**: Race conditions, missing dependencies, CORS, CDN failures

### Step 3: Take BEFORE Screenshot
```bash
# With development server running at http://localhost:3000
# Enable debug mode and open config console
# Use Playwright for focused screenshots (config console area only):
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/before-debug-outlines-removal.png
# Focus on config console showing "Debug Outlines" checkbox
```

### Step 4: Analysis Summary
**Mode-Specific Behavior:**

**Background Agent Mode (Autonomous):**
- Provide analysis summary in commit message and task file
- Proceed automatically to implementation
- Document findings for PM review

**Interactive Mode:**
- Provide analysis summary and wait for user confirmation
- User reviews BEFORE screenshots and approach
- Explicit permission required to proceed

---
**ANALYSIS SUMMARY FORMAT:**

**Current State Identified:**
- Config console component: `src/app/components/ConfigDebugConsole.tsx`
- Debug Outlines checkbox location: [line number and context]
- Related interfaces: DebugSettings, ConfigDebugConsoleProps
- Associated functionality: [handlers, state management]

**Implementation Plan:**
1. Remove "Debug Outlines" checkbox from config console UI
2. Remove `showDebugOutlines` from DebugSettings interface
3. Remove `onDebugOutlinesToggle` prop and handler
4. Clean up any related CSS or styling
5. Update default settings and localStorage logic

**Before screenshot captured**: Shows config console with "Debug Outlines" checkbox

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
- Remove "Debug Outlines" checkbox from ConfigDebugConsole JSX
- Remove `showDebugOutlines` from DebugSettings interface
- Remove `onDebugOutlinesToggle` from ConfigDebugConsoleProps
- Remove related handler function from parent component
- Update DEFAULT_SETTINGS to remove debug outlines setting
- Clean up any unused imports or references

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Check for console errors
# Test config console functionality (other toggles work)
# Verify TypeScript compilation passes
```

### Step 7: Screenshot Documentation (Exactly 3 Total)
```bash
# Use Playwright for focused screenshots (config console area)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - config console without Debug Outlines checkbox
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-debug-outlines-removed.png

# 3. AFTER - verify remaining toggles still work
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-other-toggles-functional.png
```

**Screenshot Requirements:**
1. **BEFORE-with-checkbox.png**: Config console showing "Debug Outlines" checkbox
2. **AFTER-removed.png**: Config console without "Debug Outlines" checkbox
3. **AFTER-functional.png**: Other config toggles still working

**⚠️ Checkbox removal must be clearly visible in before/after comparison**

## Files to Examine and Modify
- `src/app/components/ConfigDebugConsole.tsx` - Remove debug outlines control
- `src/app/page.tsx` - Remove debug outlines toggle handler
- Related TypeScript interfaces - Remove debug outlines properties

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] "Debug Outlines" checkbox completely removed from config console
- [ ] No TypeScript compilation errors
- [ ] Other config console toggles still work correctly
- [ ] No console errors after removal
- [ ] Screenshots clearly show checkbox removal
- [ ] All existing tests pass
- [ ] Clean git commit with descriptive message

## Acceptance Criteria
- [ ] **Git workflow validated** (Step 0)
- [ ] **Environment healthy** (Step 1) 
- [ ] **Dependencies verified** (Step 2)
- [ ] **BEFORE screenshot captured** (Step 3)
- [ ] **Analysis summary provided** (Step 4)
- [ ] "Debug Outlines" checkbox completely removed from config console
- [ ] `showDebugOutlines` removed from DebugSettings interface
- [ ] `onDebugOutlinesToggle` removed from props and handlers
- [ ] No broken TypeScript types or compilation errors
- [ ] Other debug toggles remain functional
- [ ] All existing tests pass
- [ ] **Exactly 3 screenshots captured** showing clear removal
- [ ] **Clean git commit** on feature branch

## Technical Notes
- Focus on ConfigDebugConsole component in `src/app/components/`
- Remove from DebugSettings interface: `showDebugOutlines: boolean`
- Remove from props: `onDebugOutlinesToggle: (enabled: boolean) => void`
- Update DEFAULT_SETTINGS object to remove debug outlines setting

## Troubleshooting Guide
**If TypeScript errors occur:**
- Check all interface references to debug outlines properties
- Verify parent component props are updated correctly
- Look for unused imports after removal

**If other toggles break:**
- Ensure only debug outlines code was removed
- Check that shared state management wasn't affected
- Verify localStorage persistence still works for other toggles

**If config console doesn't render:**
- Check for JSX syntax errors after removal
- Verify no missing commas or brackets
- Check React component structure integrity

**If screenshots fail:**
- Ensure dev server is running on http://localhost:3000
- Verify Playwright is installed: `npx playwright --version`
- Screenshots focus on config console area (not full page)
- Use --clip parameter for focused captures
- Ensure debug mode is enabled before taking screenshots
- Check screenshots directory exists or create it

**If tests fail:**
- Update tests that expected debug outlines checkbox
- Remove debug outlines related test assertions
- Check for hardcoded interface expectations

---
**Status**: Ready for Background Agent execution with strategic checkpoints

## Definition of Done
- [ ] Feature branch created and synced
- [ ] "Debug Outlines" checkbox completely removed
- [ ] TypeScript interfaces cleaned up
- [ ] Other config console functionality verified working
- [ ] All unit tests pass
- [ ] Exactly 3 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 1-hour time limit 