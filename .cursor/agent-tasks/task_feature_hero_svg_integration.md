# Task: Hero Section SVG Integration

## Task Type: feature
**Created**: 2025-01-21  
**Status**: PENDING  
**Assigned Branch**: main  
**Priority**: High  

## Objective
Integrate all SVG elements in the hero section with proper positioning hierarchy to match Figma design exactly.

## Requirements

### Positioning Structure
```
hero-section (position: relative)
├── hero-cat-1 (positioned relative to section)
├── hero-flame-1 (positioned relative to THE CAT)
├── hero-flame-2 (positioned relative to THE CAT)  
├── hero-flame-3 (positioned relative to section)
└── hero-speech-bubble-group (positioned relative to section)
    ├── bubble-svg (positioned relative to bubble group)
    ├── tail-svg (positioned relative to bubble group)
    ├── text-content (positioned relative to bubble group)
    ├── hero-stars-1 (positioned relative to SPEECH BUBBLE)
    ├── hero-stars-2 (positioned relative to SPEECH BUBBLE)
    └── hero-stars-2-duplicate (positioned relative to SPEECH BUBBLE)
```

### SVG File Mappings

#### Cat Character
- **File**: `public/figma-exports/characters/cat-hero.svg`
- **Position**: x: 182, y: 86 (relative to section)
- **Dimensions**: 399 × 670

#### Flame Elements (relative to cat)
- **hero-flame-1**: `public/figma-exports/decorations/hero-flame-1.svg`
  - Position: x: 0, y: 280 (relative to cat position)
  - Dimensions: 324 × 441
- **hero-flame-2**: `public/figma-exports/decorations/hero-flame-2.svg`
  - Position: x: 337, y: 407 (relative to cat position)
  - Dimensions: 586 × 334
- **hero-flame-3**: `public/figma-exports/decorations/hero-flame-3.svg`
  - Position: x: 1525, y: 486 (relative to section)
  - Dimensions: 444 × 276

#### Speech Bubble Group
- **Group Position**: x: 555, y: 3 (relative to section)
- **Group Dimensions**: 1356 × 628

##### Speech Bubble Components
- **Bubble SVG**: `public/figma-exports/backgrounds/bg-speech-bubble-1.svg`
  - Position: x: 274, y: 0 (relative to bubble group)
  - Dimensions: 1082 × 628
- **Tail SVG**: Part of speech bubble SVG (check if separate)
  - Position: x: 0, y: 203 (relative to bubble group)
  - Dimensions: 367 × 141

##### Text Content
- **Position**: x: 1013, y: 101 (relative to bubble group)
- **Dimensions**: 771 × 481
- **Content**: "Hello, my name is Deg! $NOTFINE is the memecoin..."

##### Stars (relative to speech bubble)
- **hero-stars-1**: `public/figma-exports/decorations/stars-1.svg`
  - Position: x: 831, y: 42 (relative to speech bubble)
  - Dimensions: 152 × 144
- **hero-stars-2**: `public/figma-exports/decorations/stars-1.svg` (same file)
  - Position: x: 1814, y: 374 (relative to speech bubble)
  - Dimensions: 92 × 87
- **hero-stars-2-duplicate**: `public/figma-exports/decorations/stars-1.svg` (same file)
  - Position: x: 1729, y: 0 (relative to speech bubble)
  - Dimensions: 178 × 169

## Implementation Notes

### CSS Structure
1. Hero section should have `position: relative`
2. Cat positioned absolutely within section
3. Flames 1 & 2 positioned absolutely relative to cat container
4. Flame 3 positioned absolutely relative to section
5. Speech bubble group positioned absolutely within section
6. All stars positioned absolutely within speech bubble group

### Technical Considerations
- All SVG files are already exported and available
- Ensure proper z-index layering (flames behind cat, stars above bubble)
- Maintain responsive behavior
- Preserve visual effects from Figma (shadows, strokes)

## Acceptance Criteria
- [ ] All 8 SVG elements properly positioned
- [ ] Positioning hierarchy matches specification
- [ ] Visual layout matches Figma design exactly
- [ ] Responsive behavior maintained
- [ ] No layout shifts or overlapping issues

## Files to Modify
- Hero section component
- CSS/styling files for positioning
- Import statements for SVG files

## Dependencies
- All SVG files confirmed present in figma-exports
- Header SVG integration task (for consistency)

---
**PM Notes**: Remember to check `layout_` values in MCP response for positioning data and analyze nested `children` structure for hierarchy understanding. 