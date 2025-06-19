# Task: Remove Debug Toggle Button from Top-Left Corner
**Type**: feature  
**Priority**: LOW  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Remove the DEBUG toggle button from the top-left corner of the page. The button should be completely removed from the UI since debug functionality is now handled through the config console.

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
git checkout -b cursor/feature-remove-debug-toggle-button  # Create feature branch
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
# Confirm debug functionality works via config console
```
**Common Issues**: Race conditions, missing dependencies, CORS, CDN failures

### Step 3: Take BEFORE Screenshot
```bash
# With development server running at http://localhost:3000
# Use Playwright for focused screenshots (top-left corner only):
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,400,300 http://localhost:3000 screenshots/before-debug-toggle-button.png
# Focus on top-left corner where DEBUG button appears
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
- Debug toggle button location: [Component and line number]
- Button rendering method: [JSX/Component/etc]
- Associated styling: [CSS classes/inline styles]

**Implementation Plan:**
1. Locate DEBUG toggle button in component tree
2. Remove button JSX/component reference
3. Remove associated styling if no longer needed
4. Test that debug functionality still works via config console
5. Verify no broken references remain

**Before screenshot captured**: Shows DEBUG button in top-left corner

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
- Locate DEBUG toggle button in component files
- Remove button JSX element and any related code
- Remove associated CSS classes if no longer used
- Clean up any unused imports or references
- Ensure debug functionality remains available via config console

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Check for console errors
# Test that debug functionality works via config console
# Verify button is completely removed from UI
```

### Step 7: Screenshot Documentation (Exactly 3 Total)
```bash
# Use Playwright for focused screenshots (top-left corner area)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - button removed (same top-left corner area)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,400,300 http://localhost:3000 screenshots/AFTER-button-removed.png

# 3. AFTER - debug console still works
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-debug-console-functional.png
```

**Screenshot Requirements:**
1. **BEFORE-button.png**: Shows DEBUG button in top-left corner
2. **AFTER-removed.png**: Same area with no DEBUG button
3. **AFTER-console.png**: Debug console working correctly

**⚠️ Button removal must be clearly visible in before/after comparison**

## Files to Examine and Modify
- Search for DEBUG button in main components (likely `page.tsx` or layout files)
- Check for button-related CSS in stylesheets
- Remove any unused imports after button removal

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] DEBUG button completely removed from top-left corner
- [ ] No visual artifacts or spacing issues where button was
- [ ] Debug functionality still available via config console
- [ ] No console errors after button removal
- [ ] Screenshots clearly show button removal
- [ ] All existing tests pass
- [ ] Clean git commit with descriptive message

## Acceptance Criteria
- [ ] **Git workflow validated** (Step 0)
- [ ] **Environment healthy** (Step 1) 
- [ ] **Dependencies verified** (Step 2)
- [ ] **BEFORE screenshot captured** (Step 3)
- [ ] **Analysis summary provided** (Step 4)
- [ ] DEBUG button completely removed from top-left corner
- [ ] No broken styling or layout issues
- [ ] Debug functionality remains available via config console
- [ ] No console errors or warnings
- [ ] No unused code or imports remain
- [ ] All existing tests pass
- [ ] **Exactly 3 screenshots captured** showing clear removal
- [ ] **Clean git commit** on feature branch

## Technical Notes
- Search for "DEBUG" or "debug" in component files
- Look for toggle button implementations
- Check for onClick handlers that might be related
- Ensure no CSS is left unused after removal

## Troubleshooting Guide
**If button still appears:**
- Check all component files for button references
- Search for "DEBUG" in codebase
- Verify component re-rendering after changes
- Check for cached builds (try npm run build)

**If layout breaks:**
- Check for CSS Grid or Flexbox dependencies
- Verify no positioning issues after removal
- Look for spacing that depended on button presence

**If debug functionality breaks:**
- Ensure config console is still accessible
- Verify debug state management still works
- Check that only button was removed, not debug logic

**If screenshots fail:**
- Ensure dev server is running on http://localhost:3000
- Verify Playwright is installed: `npx playwright --version`
- Screenshots focus on relevant areas (not full page)
- Use --clip parameter for focused captures
- Check screenshots directory exists or create it

**If tests fail:**
- Update tests that expected DEBUG button to exist
- Remove button-related test assertions
- Verify accessibility requirements still met

---
**Status**: Ready for Background Agent execution with strategic checkpoints

## Definition of Done
- [ ] Feature branch created and synced
- [ ] DEBUG button completely removed from UI
- [ ] No layout or styling issues
- [ ] Debug functionality verified working via config console
- [ ] All unit tests pass
- [ ] Exactly 3 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 1-hour time limit 