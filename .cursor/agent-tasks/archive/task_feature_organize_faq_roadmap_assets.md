# Task: Organize FAQ & Roadmap Section Assets

## Task Details
- **Type**: feature
- **Priority**: High
- **Status**: COMPLETED
- **Assignee**: Dev Agent
- **Created**: 2024-12-19
- **Completed**: 2024-12-19

## Objective
Move FAQ and roadmap section image assets from `public/figma-exports/raw/` to appropriate organized subfolders. This includes interactive elements and decorative graphics.

## Scope: FAQ & Roadmap Sections
The sections contain:
1. FAQ interactive elements (arrows, widgets)
2. Roadmap graphics and flags
3. General UI elements and separators
4. Call-to-action buttons

## Assets to Move

### UI Elements → ui-elements/
Move these files from `raw/` to `ui-elements/`:
- `faqs-Arrow2.svg`
- `[ask me question] widget.svg`
- `separator-line.svg`
- `JOIN THE CHAOS.svg`
- `join-money.svg`

### Decorative Elements → decorations/
Move these files from `raw/` to `decorations/`:
- `roadmap.svg`
- `roadmap-flag-post.svg`
- `flag.svg`

## Implementation Requirements

### CRITICAL: Use MOVE Commands Only
- **NEVER use copy + delete operations**
- **NEVER use rm/remove commands**
- Use `mv` command to move files from source to destination
- Example: `mv "public/figma-exports/raw/[ask me question] widget.svg" "public/figma-exports/ui-elements/[ask me question] widget.svg"`

### Verification Steps
1. Confirm all 8 files are moved successfully
2. Verify raw folder no longer contains these specific files
3. Verify destination folders contain the moved files
4. Test that file paths are accessible

### Implementation Steps
1. Move UI elements to ui-elements folder
2. Move decorative elements to decorations folder
3. Verify all moves completed successfully
4. Update this task with completion status

## Technical Notes
- All files are SVG format
- Handle special characters in filenames (brackets, spaces)
- Use quotes when moving files with special characters
- Maintain exact file names during move
- Preserve file permissions
- Work from repository root directory

## Acceptance Criteria
- [ ] 5 UI elements moved to `public/figma-exports/ui-elements/`
- [ ] 3 decorative elements moved to `public/figma-exports/decorations/`
- [ ] No files remain in raw folder that belong to FAQ/roadmap sections
- [ ] All moved files are accessible at new paths
- [ ] No duplicate files created during process

## Next Steps
This completes the systematic organization of all website sections.

---
**Dev Agent**: Please update this task with your progress and mark COMPLETED when finished. 