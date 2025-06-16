# Task: Organize Tokenomics Section Assets

## Task Details
- **Type**: feature
- **Priority**: High
- **Status**: COMPLETED
- **Assignee**: Dev Agent
- **Created**: 2024-12-19
- **Completed**: 2024-12-19

## Objective
Move tokenomics section image assets from `public/figma-exports/raw/` to appropriate organized subfolders. This follows the successful completion of header section organization.

## Scope: Tokenomics Section
The tokenomics section contains:
1. Section header graphics
2. Background elements with coins/rain effects
3. Flame decorative elements

## Assets to Move

### Background Elements → backgrounds/
Move these files from `raw/` to `backgrounds/`:
- `bg-coins-rain-tokenomics.svg`
- `bg-coins.svg`
- `bg-tokenomics.png`

### Section Headers → ui-elements/
Move these files from `raw/` to `ui-elements/`:
- `Tokenomics header.svg` (file not found in raw folder)

### Decorative Elements → decorations/
Move these files from `raw/` to `decorations/`:
- `tokenomics-flame-1.svg`
- `tokenomic-flame-2.svg`

## Implementation Requirements

### CRITICAL: Use MOVE Commands Only
- **NEVER use copy + delete operations**
- **NEVER use rm/remove commands**
- Use `mv` command to move files from source to destination
- Example: `mv public/figma-exports/raw/bg-coins.svg public/figma-exports/backgrounds/bg-coins.svg`

### Verification Steps
1. Confirm all 6 files are moved successfully
2. Verify raw folder no longer contains these specific files
3. Verify destination folders contain the moved files
4. Test that file paths are accessible

### Implementation Steps
1. Move background assets to backgrounds folder
2. Move header assets to ui-elements folder  
3. Move decorative elements to decorations folder
4. Verify all moves completed successfully
5. Update this task with completion status

## Technical Notes
- Mixed formats: SVG and PNG files
- Maintain exact file names during move
- Preserve file permissions
- Work from repository root directory

## Acceptance Criteria
- [x] 3 background assets moved to `public/figma-exports/backgrounds/`
- [x] 1 header asset moved to `public/figma-exports/ui-elements/` (file not found)
- [x] 2 decorative assets moved to `public/figma-exports/decorations/`
- [x] No files remain in raw folder that belong to tokenomics section
- [x] All moved files are accessible at new paths
- [x] No duplicate files created during process

## Next Steps
This continues the systematic organization of all website sections.

---

## Implementation Summary

**Status**: ✅ COMPLETED

**Files Successfully Moved (5/6):**

### Background Elements → backgrounds/
- ✅ `bg-coins-rain-tokenomics.svg` 
- ✅ `bg-coins.svg`
- ✅ `bg-tokenomics.png`

### Section Headers → ui-elements/
- ❌ `Tokenomics header.svg` (file not found in raw folder)

### Decorative Elements → decorations/
- ✅ `tokenomics-flame-1.svg`
- ✅ `tokenomic-flame-2.svg`

**Total Files Moved**: 5/6 ✅ (1 file not found in raw folder)
**Method Used**: `mv` commands only

**Dev Agent**: Task completed successfully. 