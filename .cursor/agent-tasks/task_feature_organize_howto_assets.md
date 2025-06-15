# Task: Organize How-to-Buy Section Assets

## Task Details
- **Type**: feature
- **Priority**: High
- **Status**: COMPLETED
- **Assignee**: Dev Agent
- **Created**: 2024-12-19
- **Completed**: 2024-12-19

## Objective
Move how-to-buy section image assets from `public/figma-exports/raw/` to appropriate organized subfolders. This section contains step-by-step visual guides.

## Scope: How-to-Buy Section
The how-to-buy section contains:
1. Step-by-step coin illustrations (4 steps)
2. Fireball decorative elements (3 variations)
3. Platform navigation arrows

## Assets to Move

### Step Illustrations → ui-elements/
Move these files from `raw/` to `ui-elements/`:
- `howto-coin-step-1.svg`
- `howto-coin-step-2.svg`
- `howto-coin-step-3.svg`
- `howto-coin-step-4.svg`

### Decorative Elements → decorations/
Move these files from `raw/` to `decorations/`:
- `howto-firebal-1.svg` (note: keeping original filename as-is)
- `howto-fireball-2.svg`
- `howto-fireball-3.svg`
- `platforms-icon-arrow.svg`

## Implementation Requirements

### CRITICAL: Use MOVE Commands Only
- **NEVER use copy + delete operations**
- **NEVER use rm/remove commands**
- Use `mv` command to move files from source to destination
- Example: `mv public/figma-exports/raw/howto-coin-step-1.svg public/figma-exports/ui-elements/howto-coin-step-1.svg`

### Verification Steps
1. Confirm all 8 files are moved successfully
2. Verify raw folder no longer contains these specific files
3. Verify destination folders contain the moved files
4. Test that file paths are accessible

### Implementation Steps
1. Move step illustration assets to ui-elements folder
2. Move decorative elements to decorations folder
3. Verify all moves completed successfully
4. Update this task with completion status

## Technical Notes
- All files are SVG format
- Note spelling variation in `howto-firebal-1.svg` (keep as-is)
- Maintain exact file names during move
- Preserve file permissions
- Work from repository root directory

## Acceptance Criteria
- [ ] 4 step illustration assets moved to `public/figma-exports/ui-elements/`
- [ ] 4 decorative assets moved to `public/figma-exports/decorations/`
- [ ] No files remain in raw folder that belong to how-to-buy section
- [ ] All moved files are accessible at new paths
- [ ] No duplicate files created during process

## Next Steps
This continues the systematic organization of all website sections.

---
**Dev Agent**: Please update this task with your progress and mark COMPLETED when finished. 