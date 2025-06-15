# Task: Fix Component Integration Issues

## Task Type: bug
**Created**: 2025-01-21  
**Status**: CREATED  
**Assigned Branch**: feature/ca-section-implementation  
**Priority**: HIGH - CRITICAL VISUAL ISSUES  

## Issues Identified (Screenshot Evidence)

### 1. Social SVG Icons Broken in Header ❌
- Social icons showing as broken image placeholders
- Discord, Twitter, Telegram icons not loading
- **Impact**: Header looks broken, social links non-functional

### 2. Background Sections Not Stretching ❌  
- Hero and CA sections have weird background clipping/borders
- Sections don't extend full width properly
- **Impact**: Unprofessional appearance, layout broken

### 3. Debug System Missing in New Components ❌
- SVG labels and borders not showing on integrated components
- Debug system not connected to new HeroSection/CASection/HeaderNavigation
- **Impact**: Development workflow broken, can't debug new sections

## Definition of Done
- [ ] Social SVG icons loading and displaying correctly in header
- [ ] Background sections stretch full width without clipping
- [ ] Debug labels and borders working on all integrated components
- [ ] All fixes visible and functional in browser
- [ ] PM verification completed with screenshot proof
- [ ] Integration testing completed

## Integration Requirements
**CRITICAL:** These are not component-level fixes but APPLICATION-LEVEL integration issues:

### Social Icons Fix Requirements:
- [ ] Verify SVG file paths are correct in HeaderNavigation component
- [ ] Check if files exist in public/figma-exports/social-icons/
- [ ] Test icon loading in browser
- [ ] Ensure hover states work

### Background Fix Requirements:
- [ ] Review CSS for HeroSection and CASection components
- [ ] Check if background gradient and styling are properly applied
- [ ] Ensure sections inherit proper styling from main layout
- [ ] Test responsive behavior

### Debug System Integration:
- [ ] Add debug attributes to new components (data-filename, debug-image classes)
- [ ] Ensure new components connect to DebugLabels system
- [ ] Test grid overlay on new sections
- [ ] Verify SVG border styling applies

## Verification Checklist
- [ ] Screenshot showing social icons working
- [ ] Screenshot showing backgrounds stretching properly  
- [ ] Screenshot showing debug labels on new components
- [ ] All functionality tested in browser
- [ ] PM approval with visual verification

## Technical Investigation Required
1. **Check SVG file existence**: Verify all social icon files are in correct paths
2. **CSS inheritance**: Ensure new components inherit background styling properly
3. **Debug system hooks**: Add debug system integration to new components

## Root Cause Analysis
These issues occurred because:
- Components were integrated but styling/assets not properly connected
- Debug system was not extended to new components during integration
- Background styling assumptions from hardcoded sections not carried over

---
**PM Notes**: Critical visual issues identified from user screenshot. These are integration problems, not component problems - the components work but aren't properly connected to the overall application styling and debug systems. 