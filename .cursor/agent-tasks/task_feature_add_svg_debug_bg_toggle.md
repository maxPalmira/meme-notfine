# Task: Add SVG Debug Background Toggle to Config Console
**Type**: feature  
**Priority**: MEDIUM  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Add a new "SVG Debug BG" checkbox to the ConfigDebugConsole that toggles a red transparent background on elements with class `svg-container`. This will help visualize SVG container areas during debugging.

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
- **Screenshot limit**: Exactly 4 final images (no debugging screenshots)
- **External dependency timeout**: 30 minutes before escalation
- **Task time limit**: 2 hours maximum

---

## PRE-EXECUTION PHASE

### Step 0: Git Workflow Validation ⚠️ MANDATORY
```bash
# Verify current branch and sync
git branch                           # Confirm current branch
git checkout development            # Switch to base branch  
git pull origin development         # Pull latest changes
git checkout -b cursor/feature-svg-debug-bg-toggle  # Create feature branch
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
# Confirm debug toggle functionality works
```
**Common Issues**: Race conditions, missing dependencies, CORS, CDN failures

### Step 3: Take BEFORE Screenshot
```bash
# With development server running at http://localhost:3000
# Enable debug mode and open config console
# Use Playwright for focused screenshots (config console area only):
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/before-svg-debug-bg-console.png
# Focus on config console area, not full page
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
- Current toggles: [list existing toggles]
- SVG containers: Elements with class `svg-container`

**Implementation Plan:**
1. Add `showSvgDebugBg` to DebugSettings interface
2. Add checkbox to config console UI
3. Add CSS rule for red transparent background
4. Implement toggle logic with body class management
5. Test toggle functionality

**Before screenshot captured**: Shows current config console without SVG debug BG toggle

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
- Update ConfigDebugConsole interface (add `showSvgDebugBg` to DebugSettings)
- Add "SVG Debug BG" checkbox to config console
- Add CSS rule: `body.debug-mode.show-svg-debug-bg .svg-container { background: rgba(255, 0, 0, 0.2) !important; }`
- Implement toggle logic with body class management
- Connect to localStorage persistence

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Check for console errors
# Test toggle functionality (on/off states)
# Verify red background appears/disappears on .svg-container elements
```

### Step 7: Screenshot Documentation (Exactly 4 Total)
```bash
# Use Playwright for focused screenshots (config console and SVG area)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - config console with new toggle
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-svg-debug-bg-console.png

# 3. AFTER - toggle OFF (no red background)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,600 http://localhost:3000 screenshots/AFTER-toggle-off-no-bg.png

# 4. AFTER - toggle ON (red background visible)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,600 http://localhost:3000 screenshots/AFTER-toggle-on-red-bg.png
```

**Screenshot Requirements:**
1. **BEFORE-console.png**: Current config console (no SVG Debug BG toggle)
2. **AFTER-console.png**: Config console with new SVG Debug BG checkbox
3. **AFTER-toggle-off.png**: SVG containers with no red background
4. **AFTER-toggle-on.png**: SVG containers with red transparent background

**⚠️ Red background difference must be clearly visible in screenshots**

## Files to Examine and Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG debug background control
- `src/app/debug-svg.css` - Add CSS rule for SVG debug background
- `src/app/page.tsx` - Add SVG debug background toggle handler

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] "SVG Debug BG" checkbox appears in config console
- [ ] Checkbox toggles red transparent background on `.svg-container` elements
- [ ] Background only appears when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] No console errors in browser
- [ ] Screenshots clearly demonstrate toggle functionality
- [ ] All existing tests pass
- [ ] Clean git commit with descriptive message

## Acceptance Criteria
- [ ] **Git workflow validated** (Step 0)
- [ ] **Environment healthy** (Step 1) 
- [ ] **Dependencies verified** (Step 2)
- [ ] **BEFORE screenshot captured** (Step 3)
- [ ] **Analysis summary provided** (Step 4)
- [ ] "SVG Debug BG" checkbox appears in config console
- [ ] Checkbox toggles red transparent background on `.svg-container` elements
- [ ] Background only appears when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] CSS rule uses proper selector: `body.debug-mode.show-svg-debug-bg .svg-container`
- [ ] Background color: `rgba(255, 0, 0, 0.2)` (20% red transparency)
- [ ] All existing debug functionality remains intact
- [ ] All existing tests pass
- [ ] **Exactly 4 screenshots captured** showing clear toggle functionality
- [ ] **Clean git commit** on feature branch

## Technical Notes
- Focus on ConfigDebugConsole component in `src/app/components/`
- Add to DebugSettings interface: `showSvgDebugBg: boolean`
- CSS selector pattern: `body.debug-mode.show-svg-debug-bg .svg-container`
- Use !important to ensure background shows over existing styles

## Troubleshooting Guide
**If toggle doesn't appear:**
- Check ConfigDebugConsole interface updates
- Verify checkbox is added to JSX render
- Check for TypeScript compilation errors

**If background doesn't show:**
- Verify CSS rule selector matches body classes
- Check for CSS specificity issues
- Inspect .svg-container elements exist on page
- Verify debug mode is active

**If screenshots fail:**
- Ensure dev server is running on http://localhost:3000
- Verify Playwright is installed: `npx playwright --version`
- Screenshots focus on relevant areas (not full page)
- Use --clip parameter for focused captures
- If Playwright fails, use browser dev tools to crop screenshots
- Ensure debug mode is enabled before taking screenshots
- Check screenshots directory exists or create it

**If tests fail:**
- Update test expectations for new toggle
- Check for hardcoded interface assertions
- Verify accessibility requirements still met

---
**Status**: Ready for Background Agent execution with strategic checkpoints

## Definition of Done
- [ ] Feature branch created and synced
- [ ] Code implementation completed
- [ ] SVG Debug BG toggle working correctly
- [ ] Red transparent background toggles on .svg-container elements
- [ ] All unit tests pass
- [ ] Exactly 4 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 2-hour time limit 