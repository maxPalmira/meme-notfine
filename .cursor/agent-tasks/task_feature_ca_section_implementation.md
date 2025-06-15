# Task: CA Section Implementation

## Task Type: feature
**Created**: 2025-01-21  
**Status**: PENDING  
**Assigned Branch**: main  
**Priority**: High  

## Objective
Implement the CA (Contract Address) section with proper styling, copy functionality, and responsive design to match Figma specifications exactly.

## Requirements

### Section Structure
```
ca-section (position: relative, 1467×219px)
├── ca-button-group (contract address display)
│   ├── ca-button-background (cream background with black border)
│   └── contract-address-text (copyable address)
└── copy-button-group (copy functionality)
    ├── copy-button-background (red background with shadow)
    └── copy-button-text ("copy")
```

### Design Specifications

#### Container
- **Dimensions**: 1467×219px
- **Layout**: Center-aligned content

#### CA Button (Contract Address Display)
- **Background**: Rectangle with cream fill (#FFF3DC)
- **Border**: 7px solid black (#000000)
- **Border Radius**: 40px
- **Dimensions**: 1467×80px
- **Position**: Top of section (y: 0)

#### Contract Address Text
- **Content**: `0x71C7656EC7ab88b098defB751B7401B5f6d8976F`
- **Font**: Jua, 400 weight, 24px
- **Color**: Black (#000000)
- **Position**: x: 453, y: 27 (within button)
- **Alignment**: Left-aligned
- **Functionality**: Clickable to copy to clipboard

#### Copy Button
- **Background**: Rectangle with red fill (#E85834)
- **Border**: 7px solid black (#000000)
- **Border Radius**: 40px
- **Shadow**: 8px 8px 0px rgba(0, 0, 0, 1)
- **Dimensions**: 378×80px
- **Position**: x: 555, y: 139 (relative to section)

#### Copy Button Text
- **Content**: "copy"
- **Font**: Jua, 400 weight, 64px
- **Color**: Black (#000000)
- **Position**: x: 679, y: 136 (relative to section)
- **Alignment**: Left-aligned

## Implementation Requirements

### Functionality
1. **Copy to Clipboard**: Click contract address or copy button to copy address
2. **Visual Feedback**: Show confirmation when address is copied
3. **Responsive Design**: Maintain proportions on different screen sizes
4. **Accessibility**: Proper ARIA labels and keyboard navigation

### Styling Details
- Use exact colors from Figma (#FFF3DC, #E85834, #000000)
- Implement box-shadow for copy button: `8px 8px 0px rgba(0, 0, 0, 1)`
- Border radius: 40px for both buttons
- Border width: 7px for both buttons
- Font family: Jua (ensure it's loaded)

### Technical Implementation
- React component with useState for copy feedback
- Use navigator.clipboard API for copy functionality
- Tailwind CSS for styling with custom classes if needed
- Proper error handling for clipboard operations
- Mobile-responsive breakpoints

## Acceptance Criteria
- [ ] Section matches Figma design exactly (colors, spacing, typography)
- [ ] Contract address is copyable by clicking address or copy button
- [ ] Visual feedback shown when address is copied
- [ ] Responsive design works on mobile and desktop
- [ ] Accessibility requirements met (ARIA labels, keyboard nav)
- [ ] Error handling for unsupported browsers/clipboard issues
- [ ] Smooth hover effects for interactive elements

## Files to Create/Modify
- CA section component (`src/app/components/CASection.tsx`)
- Styling implementation (Tailwind classes or custom CSS)
- Main page component (to include CA section)
- Add copy confirmation state management

## Dependencies
- Jua font should be loaded (check font configuration)
- Clipboard API support detection
- Toast/notification system for copy feedback (optional)

## Technical Notes
- Contract address: `0x71C7656EC7ab88b098defB751B7401B5f6d8976F`
- Section is primarily functional UI rather than decorative
- Focus on precise typography and spacing to match Figma
- Ensure copy functionality works across different browsers

---
**PM Notes**: This section is more functional than decorative - focus on precise styling and robust copy functionality rather than SVG positioning. 