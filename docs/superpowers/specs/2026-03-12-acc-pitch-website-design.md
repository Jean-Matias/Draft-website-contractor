# American Custom Concrete — Pitch Website Design Spec

## Purpose

Build a production-quality, modern website for American Custom Concrete (Fredericksburg, VA) to pitch as a contract-winning redesign. The site must look polished, interactive, and dramatically different from their current site — demonstrating what a premium web presence looks like for a concrete contractor.

## Brand Context

- **Company:** American Custom Concrete, Inc.
- **Location:** 74 Simpson Rd, Fredericksburg, VA 22406
- **Phone:** (540) 845-5381
- **Experience:** 25+ years, family-owned since 2011
- **Services:** Stamped concrete, driveways, patios, walkways, retaining walls, fire pits, pavers, flagstone, pergolas, composite decks
- **Differentiators:** BBB member, Angie Awards, licensed & insured, 1-year warranty, free estimates

## Design Direction: Clean & Earthy

### Color Palette

| Role        | Color     | Hex       |
|-------------|-----------|-----------|
| Primary     | Forest Green | `#2d6a4f` |
| Primary Light | Sage Green | `#40916c` |
| Accent      | Warm Sand | `#d4a373` |
| Background  | Light Stone | `#f8f9fa` |
| Surface     | Soft Gray | `#e9ecef` |
| Text        | Charcoal  | `#212529` |
| Text Muted  | Gray      | `#6c757d` |
| Dark Section | Deep Green | `#1b4332` |

### Typography

- **Headings:** Inter (bold weights: 700, 900)
- **Body:** Inter (regular 400), generous line-height (1.6)
- **Accent text:** Letter-spaced uppercase for labels and categories

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** 21st-dev MCP library for polished, interactive components
- **Language:** TypeScript

## Page Structure (Single Page, Sectioned)

### 1. Sticky Navigation

- Transparent background over hero, solid `#f8f9fa` on scroll
- Logo (left) + nav links (center/right) + "Get Free Estimate" CTA button (accent color)
- Smooth scroll to sections on click
- Mobile: hamburger menu

### 2. Hero Section

- Full-width with background image (concrete project photo) + gradient overlay
- Headline: company tagline or compelling copy
- Subtext: location + experience summary
- Two CTAs: "Get Free Estimate" (primary) + "View Our Work" (outline)
- Fade-in animations on load

### 3. Services Grid

- Section heading with subtitle
- 6 service cards in responsive grid (3-col desktop, 2-col tablet, 1-col mobile)
- Each card: icon, service name, brief description
- Hover effect: lift + shadow enhancement
- Scroll-triggered fade-in/slide-up animation (staggered)

### 4. Stats Bar

- Horizontal row of 3 key metrics
- **25+** Years Experience | **500+** Projects Completed | **1 Year** Warranty
- Animated number counters that count up when scrolled into view
- Clean dividers between stats

### 5. Featured Projects Gallery

- Section heading
- Uniform image grid (3-col desktop, 2-col tablet, 1-col mobile) with project photos
- Hover: slight zoom + overlay with project type label
- Scroll-triggered image reveal animations
- Before/after comparison slider for at least one project (drag handle)

### 6. Testimonials

- Carousel/slider with customer quotes
- Star ratings display
- Customer name + project type
- Auto-play with manual navigation dots/arrows
- Smooth slide transitions

### 7. Trust Badges

- Horizontal row of certification/award logos
- BBB, Angie Awards, Licensed & Insured, Fredericksburg Builders Association
- Subtle fade-in on scroll

### 8. CTA Section

- Dark green (`#1b4332`) background
- Compelling headline: "Ready to Transform Your Outdoor Space?"
- Subtext reinforcing free estimates / no obligation
- Large "Get Your Free Estimate" button that opens the intake form modal
- Warm sand accent color on button

### 9. Footer

- Dark background (`#212529`)
- Company info: name, address, phone
- Service area mention
- Quick links to sections
- Social media icons (placeholder links to Facebook, Instagram)
- Hours of operation
- Copyright

## Intake Form (Lead Capture Modal)

### Trigger
- "Get Free Estimate" buttons throughout the page open a centered modal/dialog

### Fields
1. **Full Name** — text input, required
2. **Phone Number** — tel input, required
3. **Email Address** — email input, required
4. **Brief Project Description** — textarea, optional
5. **Preferred Contact Method** — radio buttons: Call / Text / Email

### Behavior
- Animated entrance (scale + fade)
- Inline validation with friendly error messages
- Success state with confirmation message (no actual network request — pitch demo only)
- Backdrop click or X button to close
- Sourced from 21st-dev component library for visual polish

## Interactive & Animation Elements

| Element | Animation Type |
|---------|---------------|
| Page load | Hero content fades in with stagger |
| Scroll | Sections fade-in/slide-up as they enter viewport |
| Stats | Number counters animate from 0 to target |
| Service cards | Hover lift + shadow, staggered scroll reveal |
| Gallery images | Reveal animation on scroll, hover zoom |
| Before/after slider | Draggable comparison handle |
| Testimonials | Smooth carousel transitions |
| Nav | Background transitions from transparent to solid |
| Form modal | Scale + fade entrance, smooth close |
| CTA buttons | Hover scale + color shift |

## Content Sources

- Services list and descriptions from current americancustomconcrete.com
- Stats and credentials from current site (25+ years, BBB, Angie Awards, etc.)
- Placeholder images from Unsplash (concrete/construction/outdoor) for the pitch
- Testimonial quotes adapted from current site reviews

## Out of Scope

- Backend/database for form submissions (form is visual only for the pitch)
- CMS integration
- Blog/FAQ pages
- SEO optimization beyond basics
- Domain/hosting setup
