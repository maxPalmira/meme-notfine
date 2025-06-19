# Task: Increase Debug Labels Font Size by 4px
**Type**: feature  
**Priority**: LOW  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Increase the font size of debug labels by 4px to improve readability. The debug labels are rendered by the `DebugLabels` component and should have their font size increased while maintaining all other styling properties.

## Execution Mode: AUTONOMOUS with Strategic Checkpoints
- **Autonomous**: Environment setup, code changes, testing, screenshots
- **Confirmation Required**: After initial analysis (Step 4), before final commit
- **⛔ HARD STOPS**: Git workflow issues, environment failures, external dependency problems

## Cost Control Measures
- **Max debugging iterations**: 3 attempts before escalation
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
git checkout -b cursor/feature-debug-labels-font-size  # Create feature branch
git status                          # Confirm clean working directory
```
**⛔ DO NOT PROCEED until git workflow is confirmed clean**

### Step 1: Environment Health Check
```bash
# Verify environment setup
npm install                         # Install dependencies
npm run build                       # Verify build works
npm test                           # Run existing tests

# Start development server
npm run dev                        # Should start without errors
```
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
# Enable debug mode to show debug labels
# Use Playwright for focused screenshots (debug labels area only):
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/before-debug-labels-font-size.png
# Focus on top portion where debug labels appear, not full page
```

### Step 4: Provide Analysis Summary & WAIT FOR CONFIRMATION
**Background Agent must provide summary and WAIT:**

---
**TASK ANALYSIS SUMMARY:**

**Current State Identified:**
- Debug labels component: `src/app/components/DebugLabels.tsx`
- Current font size: [X]px (specify exact current value)
- Font styling method: [CSS classes/inline styles/Tailwind]

**Implementation Plan:**
1. Increase font size from [X]px to [X+4]px
2. Update [specific file/class/property]
3. Maintain all other styling (color, weight, positioning)
4. Test across all label instances

**Before screenshot captured**: Shows current [X]px font size

**⛔ AWAITING USER CONFIRMATION TO PROCEED**

---

**DO NOT PROCEED WITH IMPLEMENTATION UNTIL USER CONFIRMS**

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
- Locate current font size in `DebugLabels.tsx`
- Increase by exactly 4px from current value
- Ensure consistency across all label instances
- Maintain responsive behavior if present

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Check for console errors
# Test debug toggle functionality
# Verify no layout overflow or positioning issues
```

### Step 7: Screenshot Documentation (Exactly 4 Total)
```bash
# Use Playwright for focused screenshots (debug labels area only)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - larger font (same area as BEFORE for comparison)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-larger-font.png

# 3. AFTER - toggle test (debug OFF, same area should show no labels)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-toggle-test.png  

# 4. AFTER - responsive check (focused on labels area)
npx playwright screenshot --viewport-size=375,667 --clip=0,0,375,300 http://localhost:3000 screenshots/AFTER-responsive-check.png
```

**Screenshot Requirements:**
1. **BEFORE-current-font.png**: Current font size (debug ON, labels visible)
2. **AFTER-larger-font.png**: Increased font size (debug ON, labels clearly larger)
3. **AFTER-toggle-test.png**: Toggle functionality works (debug OFF, no labels)
4. **AFTER-responsive-check.png**: Mobile/responsive view with larger font

**⚠️ Font size difference must be clearly visible in screenshots**

## Files to Examine and Modify
- `src/app/components/DebugLabels.tsx` - Primary component file
- Related CSS/styling files if font is externalized
- Check for Tailwind classes or CSS-in-JS solutions

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] Font size increased by exactly 4px (measure using browser dev tools)
- [ ] All debug labels use consistent new font size
- [ ] Labels remain properly positioned (no overflow)
- [ ] Debug toggle functionality unaffected  
- [ ] No console errors in browser
- [ ] Screenshots clearly demonstrate +4px increase
- [ ] All existing tests pass
- [ ] Clean git commit with descriptive message

## Acceptance Criteria
- [ ] **Git workflow validated** (Step 0)
- [ ] **Environment healthy** (Step 1) 
- [ ] **Dependencies verified** (Step 2)
- [ ] **BEFORE screenshot captured** (Step 3)
- [ ] **USER CONFIRMATION RECEIVED** (Step 4)
- [ ] Debug labels font size increased by exactly 4px
- [ ] All debug labels use consistent font size
- [ ] Labels maintain proper positioning and readability
- [ ] No layout issues or text overflow
- [ ] Font change persists across debug mode toggles
- [ ] All existing tests pass
- [ ] **Exactly 4 screenshots captured** showing clear improvement
- [ ] **Clean git commit** on feature branch

## Technical Notes
- Focus on `DebugLabels` component in `src/app/components/`
- Look for font-size in: CSS classes, inline styles, Tailwind classes
- Add 4px to current value (e.g., 12px → 16px, 14px → 18px)
- Maintain existing units (px/rem/em) and responsive scaling

## Troubleshooting Guide
**If font size doesn't change:**
- Check CSS specificity issues
- Verify Tailwind config if using utility classes
- Check for !important declarations overriding changes
- Inspect computed styles in browser dev tools

**If layout breaks:**
- Check for fixed heights/widths on label containers
- Verify text doesn't overflow parent elements
- Test on different screen sizes

**If screenshots fail:**
- Ensure dev server is running on http://localhost:3000
- Verify Playwright is installed: `npx playwright --version`
- Screenshots focus on debug labels area only (not full page)
- Use --clip parameter to capture relevant sections: top 400px for desktop, top 300px for mobile
- If Playwright fails, use browser dev tools to crop screenshots to debug labels area
- Ensure debug mode is enabled before taking screenshots
- Check screenshots directory exists or create it

**If tests fail:**
- Update test expectations for new font size
- Check for hardcoded font size assertions
- Verify accessibility requirements still met

---
**Status**: Ready for Background Agent execution with strategic checkpoints

## Definition of Done
- [ ] Feature branch created and synced
- [ ] Code implementation completed
- [ ] Font size measurably increased by 4px
- [ ] Visual regression testing confirms no layout issues
- [ ] All unit tests pass
- [ ] Exactly 4 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 2-hour time limit 