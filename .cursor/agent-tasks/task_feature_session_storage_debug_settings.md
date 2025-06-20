# Task: Implement Session Storage for Debug Console Settings
**Type**: feature  
**Priority**: HIGH  
**Status**: PENDING  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Update the ConfigDebugConsole to use `sessionStorage` instead of `localStorage` for debug settings persistence. This ensures debug settings are maintained during the browser session but reset when a new session starts, providing better debugging experience while keeping sessions clean.

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
- **Task time limit**: 1.5 hours maximum

---

## PRE-EXECUTION PHASE

### Step 0: Git Workflow Validation ⚠️ MANDATORY
```bash
# Verify current branch and sync
git branch                           # Confirm current branch
git checkout main                   # Switch to base branch  
git pull origin main                # Pull latest changes
git checkout -b cursor/feature-session-storage-debug-settings  # Create feature branch
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
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/before-session-storage-implementation.png
# Focus on config console area showing current localStorage behavior
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
- Current storage: `localStorage.getItem('debugSettings')`
- Current settings persisted: Grid Overlay, SVG Labels, Section Borders, SVG Borders, SVG Debug BG
- Storage functions: `loadSettings()` and `saveSettings()`

**Implementation Plan:**
1. Replace `localStorage` with `sessionStorage` in loadSettings function
2. Replace `localStorage` with `sessionStorage` in saveSettings function
3. Update error handling for sessionStorage API
4. Test persistence within session (page reloads)
5. Test session reset behavior (new browser tab/window)

**Before screenshot captured**: Shows current config console with localStorage behavior

---

## IMPLEMENTATION PHASE (Only after confirmation)

### Step 5: Code Implementation
**Changes to `src/app/components/ConfigDebugConsole.tsx`:**

1. **Update loadSettings function:**
```javascript
// Change from:
const saved = localStorage.getItem('debugSettings');
// To:
const saved = sessionStorage.getItem('debugSettings');

// Change from:
localStorage.removeItem('debugSettings');
// To:
sessionStorage.removeItem('debugSettings');
```

2. **Update saveSettings function:**
```javascript
// Change from:
localStorage.setItem('debugSettings', JSON.stringify(settings));
// To:
sessionStorage.setItem('debugSettings', JSON.stringify(settings));
```

3. **Update error handling comments:**
- Update function comments to reflect sessionStorage usage
- Ensure fallback behavior remains robust

### Step 6: Testing & Validation
```bash
# Verify component renders correctly
npm run dev

# Manual Testing:
# 1. Open config console, toggle some debug settings
# 2. Reload page → settings should persist (same session)
# 3. Open new tab → settings should reset (new session)
# 4. Close browser, reopen → settings should reset (new session)
```

### Step 7: Screenshot Documentation (Exactly 3 Total)
```bash
# Use Playwright for focused screenshots (config console behavior)
# 1. BEFORE screenshot (already taken in Step 3)

# 2. AFTER - same session reload (settings persisted)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-session-reload-persisted.png

# 3. AFTER - new session (settings reset to defaults)
npx playwright screenshot --viewport-size=1200,800 --clip=0,0,1200,400 http://localhost:3000 screenshots/AFTER-new-session-reset.png
```

**Screenshot Requirements:**
1. **BEFORE-localStorage.png**: Current localStorage behavior
2. **AFTER-session-persisted.png**: Settings persisted after same-session reload
3. **AFTER-session-reset.png**: Settings reset in new session

## Files to Examine and Modify
- `src/app/components/ConfigDebugConsole.tsx` - Update storage API calls

## Success Criteria Validation ✅
Before marking COMPLETED, verify:
- [ ] `sessionStorage` replaces `localStorage` in loadSettings function
- [ ] `sessionStorage` replaces `localStorage` in saveSettings function
- [ ] Settings persist during same browser session (page reloads)
- [ ] Settings reset in new browser tabs/windows
- [ ] Settings reset when browser is closed and reopened
- [ ] All existing debug functionality works correctly
- [ ] No console errors during session storage operations
- [ ] Screenshots demonstrate session vs new session behavior

## Acceptance Criteria
- [ ] **Git workflow validated** (Step 0)
- [ ] **Environment healthy** (Step 1) 
- [ ] **Dependencies verified** (Step 2)
- [ ] **BEFORE screenshot captured** (Step 3)
- [ ] **Analysis summary provided** (Step 4)
- [ ] `sessionStorage` API used instead of `localStorage`
- [ ] Settings persist during page reloads within same session
- [ ] Settings reset when opening new browser tab/window
- [ ] Settings reset when browser is closed and reopened
- [ ] All debug toggles work correctly with sessionStorage
- [ ] Error handling updated for sessionStorage API
- [ ] All existing tests pass
- [ ] **Exactly 3 screenshots captured** showing session behavior
- [ ] **Clean git commit** on feature branch

## Technical Notes
- **sessionStorage vs localStorage**: sessionStorage persists only during browser session
- **Session Scope**: Different tabs have separate sessions
- **API Compatibility**: sessionStorage has same API as localStorage
- **Error Handling**: Keep robust try-catch blocks for storage failures

## Troubleshooting Guide
**If settings don't persist during reload:**
- Check browser doesn't block sessionStorage (incognito mode issues)
- Verify sessionStorage API is available in browser
- Check for JavaScript errors in console

**If settings persist across new tabs:**
- Verify using sessionStorage, not localStorage
- Test in different browser tabs, not just reloads
- Check browser developer tools → Application → Session Storage

**If tests fail:**
- Update test mocks for sessionStorage instead of localStorage
- Check test environment supports sessionStorage API
- Verify test cleanup between test runs

---
**Status**: Ready for Background Agent execution with strategic checkpoints

## Definition of Done
- [ ] Feature branch created and synced
- [ ] sessionStorage implemented for debug settings
- [ ] Settings persist within browser session
- [ ] Settings reset between sessions  
- [ ] All existing functionality preserved
- [ ] All unit tests pass
- [ ] Exactly 3 documentation screenshots captured
- [ ] Clean git commit ready for review
- [ ] Task completed within 1.5-hour time limit 