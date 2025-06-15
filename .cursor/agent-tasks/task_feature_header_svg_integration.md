# Task: Header Section SVG Integration

## Task Type: feature
**Created**: 2025-01-21  
**Status**: PENDING  
**Assigned Branch**: main  
**Priority**: Medium  

## Objective
Replace text-based navigation elements and integrate proper SVG files for the header section to match Figma design with visual effects.

## Requirements

### Navigation Buttons (6 SVG files)
Replace current HTML text elements with corresponding SVG files:
- `nav-tokenomics.svg` → Tokenomics button
- `nav-roadmap.svg` → Roadmap button  
- `nav-ourteam.svg` → Our Team button
- `nav-artcommunity.svg` → Art community button
- `nav-howtobuy.svg` → How to buy button
- `nav-faq.svg` → F.A.Q button

### Social Media Icons (Discord SVG fixes)
- Fix Discord icon implementation (currently has 2 SVG elements)
- Ensure Twitter and Telegram icons are properly connected
- Verify all social icons match Figma positioning and styling

## Technical Details
- All SVG files are already available in `public/figma-exports/ui-elements/`
- Header dimensions: 1920px × 88px with green background (#869241)
- Navigation buttons should maintain hover states and accessibility
- Social icons positioned in right section of header

## Acceptance Criteria
- [ ] All 6 navigation buttons render as SVG images
- [ ] Visual effects (shadows, borders, textures) are preserved
- [ ] Discord icon displays correctly (resolve dual SVG issue)
- [ ] All social media icons are properly positioned
- [ ] Header matches Figma design pixel-perfect
- [ ] Hover states and interactions work correctly
- [ ] Accessibility attributes maintained

## Files to Update
- Header component (likely in `src/app/components/`)
- Update imports and image paths
- Remove HTML text elements
- Add proper SVG implementations

## Git Workflow
- Create feature branch: `feature/header-svg-integration`
- Test thoroughly before merge
- Reference this task in commit messages

---
**Dev Agent**: Update this file with progress, commits, and completion status. 