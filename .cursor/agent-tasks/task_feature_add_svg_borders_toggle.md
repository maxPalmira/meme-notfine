# Task: Add SVG Borders Toggle to Config Console
**Type**: feature  
**Priority**: MEDIUM  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Add a new "SVG Borders" checkbox to the ConfigDebugConsole that toggles 2px black borders around SVG containers. This will help visualize SVG boundaries during debugging without affecting the SVG content itself.

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
git checkout -b cursor/feature-svg-borders-toggle  # Create feature branch
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
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/before-svg-borders-console.png
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
- CSS file location: `src/app/debug-svg.css`

**Implementation Plan:**
1. Add `showSvgBorders` to DebugSettings interface
2. Add "SVG Borders" checkbox to config console UI
3. Add CSS rule for 2px black borders on SVG containers
4. Implement toggle logic with body class management
5. Test toggle functionality

**Before screenshot captured**: Shows current config console without SVG Borders toggle

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
- Update ConfigDebugConsole interface (add `showSvgBorders` to DebugSettings)
- Add "SVG Borders" checkbox to config console
- Add CSS rule: `body.debug-mode.show-svg-borders .svg-container { border: 2px solid black !important; }`
- Implement toggle logic with body class management
- Connect to localStorage persistence

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Check for console errors
# Test toggle functionality (on/off states)
# Verify black borders appear/disappear on .svg-container elements
```

### Step 7: Screenshot Documentation (Exactly 4 Total)
```bash
# Use Playwright for focused screenshots (config console and SVG area)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - config console with new SVG Borders toggle
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-svg-borders-console.png

# 3. AFTER - toggle OFF (no borders on SVG containers)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,600 http://localhost:3000 screenshots/AFTER-toggle-off-no-borders.png

# 4. AFTER - toggle ON (2px black borders visible on SVG containers)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,600 http://localhost:3000 screenshots/AFTER-toggle-on-borders.png
```

**Screenshot Requirements:**
1. **BEFORE-console.png**: Current config console (no SVG Borders toggle)
2. **AFTER-console.png**: Config console with new SVG Borders checkbox
3. **AFTER-toggle-off.png**: SVG containers with no borders
4. **AFTER-toggle-on.png**: SVG containers with 2px black borders

**⚠️ Border appearance/disappearance must be clearly visible in screenshots**

## Files to Examine and Modify
- `src/app/components/ConfigDebugConsole.tsx` - Add SVG borders control
- `src/app/debug-svg.css` - Add CSS rule for SVG borders
- `src/app/page.tsx` - Add SVG borders toggle handler

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] "SVG Borders" checkbox appears in config console
- [ ] Checkbox toggles 2px black borders on `.svg-container` elements
- [ ] Borders only appear when debug mode is active AND toggle is enabled
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
- [ ] "SVG Borders" checkbox appears in config console
- [ ] Checkbox toggles 2px black borders on `.svg-container` elements
- [ ] Borders only appear when debug mode is active AND toggle is enabled
- [ ] Toggle state persists across page reloads
- [ ] CSS rule uses proper selector: `body.debug-mode.show-svg-borders .svg-container`
- [ ] Border style: `2px solid black`
- [ ] All existing debug functionality remains intact
- [ ] All existing tests pass
- [ ] **Exactly 4 screenshots captured** showing clear toggle functionality
- [ ] **Clean git commit** on feature branch

## Technical Notes
- Focus on ConfigDebugConsole component in `src/app/components/`
- Add to DebugSettings interface: `showSvgBorders: boolean`
- CSS selector pattern: `body.debug-mode.show-svg-borders .svg-container`
- Use !important to ensure borders show over existing styles

## Troubleshooting Guide
**If toggle doesn't appear:**
- Check ConfigDebugConsole interface updates
- Verify checkbox is added to JSX render
- Check for TypeScript compilation errors

**If borders don't show:**
- Verify CSS rule selector matches body classes
- Check for CSS specificity issues
- Inspect .svg-container elements exist on page
- Verify debug mode is active

**If borders affect SVG content:**
- Use border instead of outline to avoid affecting layout
- Check that borders are applied to containers, not SVG elements themselves
- Verify borders don't interfere with existing positioning

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
- [ ] SVG Borders toggle working correctly
- [ ] 2px black borders toggle on .svg-container elements
- [ ] All unit tests pass
- [ ] Exactly 4 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 2-hour time limit 