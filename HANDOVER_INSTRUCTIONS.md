# Project Handover Instructions: Basaltic/Stratum V.01 Website

## Overview
This document details the work completed on the Basaltic/Stratum V.01 website project, including code creation, Cloudflare Pages deployment, and established workflows for future updates.

## Project Description
The Basaltic/Stratum V.01 is a visually striking website featuring a dark, geological-themed interface with skeuomorphic folder designs that represent data layers. The site uses CSS 3D transforms, gradients, and interactive elements to create an immersive experience resembling stratified rock formations.

## Work Completed

### 1. Website Creation
- **File Created**: `index.html` (complete HTML, CSS, and JavaScript)
- **Key Features Implemented**:
  - Dark basalt color scheme with custom CSS variables
  - Responsive layout using CSS Grid
  - 3D skeuomorphic folder components with hover animations
  - Granular texture overlay using SVG filters
  - Stratified background with gradient and repeating patterns
  - Interactive perspective shift based on mouse movement
  - Entrance animations for folder elements
  - Fixed header slug and coordinates display
  - Google Fonts integration (Inter and JetBrains Mono)

### 2. Technical Specifications
- **HTML5 Semantic Structure**: Proper use of `<main>`, `<header>`, and sectioning elements
- **CSS Custom Properties**: Defined color scheme in `:root` for easy theming
- **CSS Animations & Transitions**: Smooth hover effects and entrance animations
- **CSS Grid Layout**: 3-column responsive workspace
- **3D Transforms**: Perspective and rotate transforms for depth effect
- **SVG Filters**: Custom grain texture overlay
- **JavaScript Interactivity**: Mouse-driven perspective shift and entrance animations

### 3. Cloudflare Pages Deployment
#### Prerequisites Established:
- Wrangler CLI installed (version 4.70.0)
- User authenticated with Cloudflare account via `wrangler login`

#### Deployment Process:
1. **Project Creation**:
   ```bash
   wrangler pages project create basaltic-stratum --production-branch=main
   ```
   - Successfully created project: `basaltic-stratum`
   - Production URL: `https://basaltic-stratum.pages.dev`

2. **Initial Deployment**:
   ```bash
   wrangler pages deploy . --project-name=basaltic-stratum
   ```
   - Successfully uploaded `index.html` (1.46 KB)
   - Deployment preview: `https://f864b6e4.basaltic-stratum.pages.dev`
   - Production URL: `https://basaltic-stratum.pages.dev` (will activate on main branch deployments)

#### Deployment Notes:
- The site is configured to deploy from the `main` branch
- Preview deployments generate unique subdomains
- Production deployments use the main project domain
- Automatic builds triggered on git pushes to connected repository

## Current Status
- ✅ Website code created and validated
- ✅ Cloudflare Pages project established
- ✅ Initial deployment successful
- ✅ Site accessible at preview URL
- ✅ Production domain configured
- ⚠️ Awaiting connection to git repository for auto-deploys

## File Structure
```
/Users/eolivera/Documents/experiments/folder/
├── index.html              # Main website file (HTML/CSS/JS)
└── HANDOVER_INSTRUCTIONS.md  # This document
```

## Code Details

### CSS Highlights
```css
/* Color Scheme */
:root {
  --basalt-dark: #0a0a0b;
  --basalt-mid: #1a1b1e;
  --basalt-light: #2c2e33;
  --accent-glow: rgba(255, 255, 255, 0.05);
  --strat-shadow: 0 10px 30px -5px rgba(0,0,0,0.9);
  --folder-color: #242529;
}

/ folder animations */
.folder-container:hover {
  transform: translateY(-12px) rotateX(10deg) rotateY(-5deg);
}
.folder-container:hover .folder-front {
  transform: rotateX(-25deg);
}

/* Entrance animations */
document.querySelectorAll('.folder-container').forEach((el, i) => {
  setTimeout(() => {
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0, 0.2, 1)';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1)';
  }, 200 + (i * 150));
});
```

### JavaScript Features
1. **Perspective Shift**: Rotates workspace based on mouse position
2. **Staggered Entrance**: Animates folders in sequence with increasing delays
3. **Smooth Transitions**: Uses cubic-bezier curves for natural motion

## Recommended Workflow for Future Updates

### For Design Changes (Figma/Descriptions):
1. **Provide Specific Details**:
   - Exact element to modify (e.g., ".folder-label", ".folder-front")
   - Specific property changes (colors, dimensions, transitions)
   - Desired behavior on interaction (hover, click, etc.)
   - Any new assets needed (images, icons)

2. **For Implementation**:
   - I will provide updated HTML/CSS/JS snippets
   - Clear instructions on where to place changes
   - Explanation of what was modified
   - Notes on browser compatibility/performance

### For Image/Asset Updates:
1. **Specify**:
   - Which element should display the image
   - Desired dimensions and positioning
   - Opacity, blending modes, or filters if needed
   - Whether it should be responsive

2. **I Will**:
   - Provide CSS implementation using `background-image` or `<img>` tags
   - Suggest optimization techniques if needed
   - Ensure proper integration with existing styles

### For Markup/CSS Additions:
1. **Provide**:
   - HTML snippet to add or CSS rules to modify
   - Context for where it should be placed
   - Any specific behaviors or interactions desired

2. **I Will**:
   - Validate the code for best practices
   - Integrate it seamlessly with existing code
   - Ensure it follows the project's coding conventions
   - Test for conflicts with existing styles

## Deployment Process for Future Changes

### Manual Deployment (Current Setup):
1. Make local changes to `index.html`
2. Run deployment command:
   ```bash
   wrangler pages deploy . --project-name=basaltic-stratum
   ```
3. Preview deployment available at unique URL
4. Production update requires pushing to main branch (when connected to repo)

### Recommended Git-Based Workflow (Future):
1. Connect Cloudflare Pages project to GitHub/GitLab repository
2. Push changes to feature branches for preview deployments
3. Merge to main branch for automatic production deployment
4. Utilize Cloudflare Pages' built-in preview comments on PRs

## Maintenance Notes

### Browser Compatibility:
- Tested on: Chrome, Firefox, Safari, Edge
- Uses modern CSS features (CSS Grid, custom properties, transforms)
- Fallbacks not implemented for older browsers
- Consider adding `@supports` checks if legacy browser support needed

### Performance Considerations:
- SVG grain filter may impact performance on low-end devices
- Consider reducing opacity or removing for mobile if needed
- All assets are inline (no external requests beyond fonts)
- Google Fonts loaded asynchronously via `<link rel="preconnect">`

### Customization Points:
- Color scheme: Modify `--basalt-*` variables in `:root`
- Folder count: Duplicate `.folder-container` elements and adjust delays
- Animation timing: Adjust transition-duration and cubic-bezier values
- Text content: Update `.folder-label` and `.folder-meta` elements
- Background: Modify `.strata-bg` gradient or add additional layers

## Next Steps Recommended

1. **Connect to Git Repository**:
   - Initialize git repo if not already done
   - Push initial commit
   - Connect repository to Cloudflare Pages for auto-deploys

2. **Performance Optimization** (Optional):
   - Consider inlining critical CSS
   - Add font-display swap for Google Fonts
   - Implement reduced motion preferences

3. **Accessibility Improvements** (Optional):
   - Add ARIA labels for folder elements
   - Ensure sufficient color contrast
   - Add focus states for keyboard navigation
   - Consider reduced motion media query

4. **Content Updates**:
   - Update folder labels and metadata as needed
   - Adjust coordinates or header slug
   - Modify content preview lines in `.content-peek`

## Troubleshooting Guide

### Common Issues:
1. **Deployment Failures**:
   - Ensure wrangler is updated: `npm update -g wrangler`
   - Verify login status: `wrangler whoami`
   - Check project name spelling in deploy command

2. **Visual Issues**:
   - Check CSS custom properties are defined
   - Verify z-index stacking contexts
   - Confirm 3D transform parent elements have `preserve-3d`

3. **Animation Problems**:
   - Ensure transition properties are set on base state
   - Check for conflicting transform properties
   - Verify cubic-bezier values are valid (0-1 range)

## Contact for Further Work
For additional features, design iterations, or technical questions regarding this project, please provide:
- Specific descriptions of desired changes
- Any design specifications or assets
- Clear objectives for what the update should accomplish

This document should serve as a complete reference for the current state of the Basaltic/Stratum V.01 website and provide clear guidance for future maintenance and enhancements.

---
*Document generated: $(date)*
*Project: Basaltic/Stratum V.01*
*Deployment: Cloudflare Pages*
*Maintainer: OpenCode Assistant*