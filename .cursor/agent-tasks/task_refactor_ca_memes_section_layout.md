# Task: Fix CA and Memes Section Layout Issues
**Type**: refactor  
**Priority**: HIGH  
**Status**: TODO  
**Created**: 2025-01-21  
**Assigned To**: dev agent  

## Overview
Based on Figma design analysis and user feedback, the CA and memes sections have layout issues with restricted width and incorrect background styling that don't match the Figma design specifications.

## Problem Description
1. **Restricted Width**: Sections appear to have fixed width containers instead of full responsive design
2. **Background Issues**: Additional unwanted background styling applied
3. **Layout Mismatch**: Current implementation doesn't match Figma Node 38:620 specifications

## Design References
- **Figma File**: PZCXc4tndOeY0qkZpvZTaX
- **Design Node**: 38-620 (Desktop Frame)
- **Analysis File**: `figma_analysis_node_38_620.txt`
- **Visual Edits List**: `visual_edits_task_list.md`

## Required Changes

### CA Section (Node 266:11)
- **Remove**: Fixed width restrictions causing narrow layout
- **Implement**: Full-width responsive container (1467px design width)
- **Fix**: Background styling to match Figma (#FFF3DC with 7px black stroke)
- **Ensure**: 40px border radius on container
- **Position**: Proper spacing and alignment as per design

### Memes Section (Node 266:13)  
- **Remove**: Restricted width container
- **Implement**: Full-width responsive layout (1467px design width)
- **Fix**: Background color to match Figma (#F5F5DC)
- **Ensure**: 40px border radius consistency
- **Maintain**: SVG integration functionality

## Technical Requirements
1. **Responsive Design**: Sections should scale properly on all screen sizes
2. **Container Structure**: Use full-width containers with proper max-width constraints
3. **Background Styling**: Remove any extra background divs/wrappers causing conflicts
4. **Spacing**: Maintain proper margins and padding as per Figma specs
5. **Testing**: Ensure no regression in existing functionality

## Acceptance Criteria
- [ ] CA section displays full-width on desktop (matches Figma proportions)
- [ ] Memes section displays full-width on desktop (matches Figma proportions)  
- [ ] Background colors match Figma exactly (#FFF3DC for CA, #F5F5DC for memes)
- [ ] Border radius of 40px applied correctly
- [ ] Responsive behavior works on mobile/tablet
- [ ] No extra background containers causing visual conflicts
- [ ] Copy functionality in CA section still works
- [ ] SVG functionality in memes section still works
- [ ] All existing tests pass

## Files to Modify
Based on previous task analysis:
- `src/app/components/CA.tsx`
- `src/app/components/Memes.tsx`
- Related CSS/styling files if any

## Testing
- Run existing test suites for both components
- Visual testing on different screen sizes
- Functionality testing (copy button, SVG interactions)

## Definition of Done
- Layout matches Figma design specifications
- Responsive behavior works correctly
- All existing functionality preserved
- Tests pass
- User approval on visual design match

---
**Dev Agent**: Please update this file with your progress, commit references, and any blockers. 