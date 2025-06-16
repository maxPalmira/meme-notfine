# Visual Edits Task List - $NOTFINE Website
Date: 2025-01-21  
Status: PLANNING  
Priority: HIGH  

## Overview
Based on Figma analysis (Node 38:620) and user feedback about restricted width and mismatched styling issues in CA and memes sections.

## Critical Issues Identified

### 1. Container Width & Layout Issues
**Problem**: Sections appear to have restricted width instead of full responsive design
**Impact**: Visual mismatch with Figma design, poor responsive experience

#### CA Section (Node 266:11)
- **Current**: Fixed width container restricting section
- **Required**: Full-width responsive container
- **Figma Spec**: 1467×219px positioned at x: 216, y: 953
- **Fix**: Implement responsive scaling while maintaining design proportions

#### Memes Section (Node 266:13)  
- **Current**: Width constraints affecting layout
- **Required**: Full-width container with proper SVG positioning
- **Figma Spec**: 1712.168×768.357px positioned at x: 118, y: 2652
- **Fix**: Absolute positioning for decorative elements, responsive grid for content

### 2. Background Gradient Flow Issues
**Problem**: Background gradients may not flow properly between sections
**Impact**: Visual discontinuity, design inconsistency

#### Section Transitions
- **Check**: Gradient transitions between hero, memes, CA sections
- **Verify**: Main page gradient (#A6B857 → #CDE26F → #FFF587 → #FFD272)
- **Fix**: Ensure sections inherit or complement main gradient

### 3. SVG Asset Positioning Issues
**Problem**: SVG elements may not match exact Figma positioning
**Impact**: Character and decoration misalignment

#### Memes Section SVGs
- **memes-cat-sad.svg**: Should be 255×474px at relative position
- **Background clouds**: Precise gradient overlay positioning
- **Z-index**: Character (z-20) above backgrounds (z-10), content (z-30)

### 4. Typography & Color Consistency
**Problem**: Font sizes or colors may not match Figma specifications
**Impact**: Visual hierarchy and branding inconsistency

#### Font Verification
- **Headers**: 96px (Jua, 400 weight)
- **Buttons**: 48px uppercase (meme buttons), 64px (copy button)
- **Contract Address**: 24px
- **Colors**: Exact hex values from Figma palette

## Detailed Fix Requirements

### Task 1: CA Section Width Fix
**Type**: Layout Adjustment  
**Priority**: HIGH  
**Estimated Time**: 2-4 hours

#### Changes Needed:
1. **Container Structure**:
   - Remove width restrictions on section container
   - Implement responsive max-width with centering
   - Maintain 1467×219px design on desktop

2. **Button Layout**:
   - CA button: Full responsive width with max 1467px
   - Copy button: Maintain 378×80px with proper positioning
   - Ensure buttons scale appropriately on mobile

3. **Positioning**:
   - Center section within viewport
   - Maintain relative positioning between elements
   - Test responsive breakpoints (768px, 1024px, 1440px)

### Task 2: Memes Section Layout Optimization
**Type**: SVG Integration & Layout  
**Priority**: HIGH  
**Estimated Time**: 3-5 hours

#### Changes Needed:
1. **Container System**:
   - Full-width section container
   - Centered content area with max-width
   - Proper overflow handling for decorative elements

2. **SVG Positioning**:
   - **memes-cat-sad.svg**: Absolute position, responsive scaling
   - **Background clouds**: Gradient overlays with proper z-index
   - **Decorative elements**: Maintain design integrity across screen sizes

3. **Content Grid**:
   - 4 meme buttons in responsive grid
   - Maintain 756×132px button size on desktop
   - Stack vertically on mobile with appropriate spacing

### Task 3: Background Gradient Continuity
**Type**: Styling Enhancement  
**Priority**: MEDIUM  
**Estimated Time**: 1-2 hours

#### Changes Needed:
1. **Gradient Analysis**:
   - Verify main page gradient implementation
   - Check section background inheritance
   - Ensure smooth transitions between sections

2. **Section Background**:
   - CA section: Transparent/inherit from main gradient
   - Memes section: Coordinate with cloud gradients
   - Maintain visual flow throughout page

### Task 4: Mobile Responsive Optimization
**Type**: Responsive Design  
**Priority**: MEDIUM  
**Estimated Time**: 2-3 hours

#### Changes Needed:
1. **Breakpoint Strategy**:
   - Mobile (320px-768px): Stack elements, scale fonts
   - Tablet (768px-1024px): Adjusted proportions
   - Desktop (1024px+): Full Figma specifications

2. **Element Scaling**:
   - Proportional scaling of buttons and text
   - SVG responsive positioning
   - Touch-friendly interactive elements

### Task 5: Debug System Verification
**Type**: Development Tools  
**Priority**: LOW  
**Estimated Time**: 1 hour

#### Changes Needed:
1. **Debug Integration**:
   - Verify debug-image classes on all elements
   - Check data-filename attributes
   - Test grid overlay alignment

2. **Visual Debugging**:
   - Border visibility for all section elements
   - Debug console controls functionality
   - Screenshot comparison tools

## Testing Requirements

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)  
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Screen Size Testing
- [ ] Mobile: 320px, 375px, 414px
- [ ] Tablet: 768px, 1024px
- [ ] Desktop: 1280px, 1440px, 1920px

### Functionality Testing
- [ ] CA copy functionality on all devices
- [ ] Hover states and interactions
- [ ] Touch interactions on mobile
- [ ] Debug system controls

## Acceptance Criteria

### Visual Accuracy
- [ ] Sections match Figma design exactly at 1920px width
- [ ] Responsive scaling maintains design proportions
- [ ] Colors match exact hex values from Figma
- [ ] Typography sizing and spacing accurate

### Technical Performance
- [ ] No layout shift on load
- [ ] Smooth scrolling between sections
- [ ] Fast SVG loading and rendering
- [ ] Proper accessibility attributes

### User Experience
- [ ] Intuitive interaction on all devices
- [ ] Fast copy functionality
- [ ] Clear visual feedback
- [ ] Consistent design language

## Implementation Timeline

### Phase 1 (Day 1): Critical Fixes
- CA section width and positioning
- Memes section container optimization
- Basic responsive behavior

### Phase 2 (Day 2): Enhancement
- Background gradient flow
- SVG positioning refinement
- Mobile responsive optimization

### Phase 3 (Day 3): Polish
- Debug system verification
- Cross-browser testing
- Final visual adjustments

## Risk Assessment

### High Risk
- Container width changes may affect other sections
- SVG positioning changes may break existing layout
- Responsive changes may impact page performance

### Mitigation
- Incremental testing after each change
- Component isolation during development
- Backup of working implementation before changes

## Dependencies
- Figma design access for exact specifications
- SVG asset availability in public/figma-exports/
- Test environment for responsive verification
- Debug system functionality

---
**PM Notes**: This task list addresses the core visual discrepancies identified through Figma analysis and user feedback. Implementation should be done incrementally with testing at each stage to prevent regression issues. 