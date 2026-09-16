---
version: alpha
name: aconia GTM
description: "Outbound sprints for B2B software companies. Real conversations, real pipeline, no long term commitment. Based in the UK."
sourceUrl: "https://www.aconiagtm.com/"

colors:
  primary: "#0000ee"
  on-primary: "#ffffff"
  background: "#faf8f5"
  surface: "#f5f2ee"
  text: "#000000"
  text-muted: "#727272"
  accent: "#27251e"

typography:
  display:
    fontFamily: "Suisse Intl Medium, Suisse Intl Medium Placeholder, sans-serif"
    fontSize: 35px
    fontWeight: 500
    lineHeight: 1.2
  heading:
    fontFamily: "Suisse Intl Regular, Suisse Intl Regular Placeholder, sans-serif"
    fontSize: 34px
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -1.02px
  body:
    fontFamily: "Suisse Intl Regular, Suisse Intl Regular Placeholder, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.39px

spacing:
  base: 4px
  scale: [4, 8, 12, 20, 100]

radius:
  sm: 3px
  md: 5px
  lg: 10px
  xl: 800px

shadows:
  card: "rgba(0, 0, 0, 0.1) 0px 4px 100px 0px"
  elevated: "rgba(0, 0, 0, 0.05) 0px 10px 30px 0px"

motion:
  easing: "ease"

breakpoints: [810px]
---

## Rationale

Aconia GTM positions itself as a no-nonsense B2B outbound agency—direct, efficient, conversational. The design tokens reflect this positioning through restraint and clarity. A warm, slightly off-white background (#faf8f5) softens the interface without introducing color noise, while a bold primary blue (#0000ee) acts as the singular accent for high-intent actions (CTAs like "Book a call"). The type system is Swiss and minimal—measured at 35px for display and 34px for headings, using geometric, neutral sans-serifs that convey professionalism without personality. The spacing scale is deliberately tight (base 4px unit), allowing dense information hierarchy that mirrors the sprint-based, time-conscious nature of the service. Shadows are subtle (0.05–0.1 opacity), reinforcing a flat, modern aesthetic rather than depth-based visual metaphors.

This is a conversion-focused site with minimal friction. The measured breakpoint at 810px suggests a responsive strategy tuned for desktop-first viewing (target: sales calls and decision-makers on larger screens). The accent color (#27251e, near-black brown) reserves itself for secondary emphasis, letting the primary blue dominate CTAs. Contrast is built for readability at small body sizes (13px), crucial when conveying pricing, process, and commitment terms. Motion is defined as "ease" with no measured duration or delay—suggesting smooth, non-jarring transitions that keep attention on content and calls-to-action.

## 1. Visual Theme & Atmosphere

The design projects **clarity and directness**. No gradients, no heavy imagery—just clean surfaces and precise type. The palette is institutional but warm: cream background, cool blue for action, and a dark neutral for text. This combination reads "professional services," specifically the type of agency that values time and results over aesthetic flourish.

The card shadow (0px 4px 100px with 0.1 opacity) and elevated shadow (0px 10px 30px with 0.05 opacity) introduce minimal spatial hierarchy, likely used to separate pricing tiers, testimonials, or process steps without a loud visual break.

## 2. Color System

- **Primary (#0000ee)**: Bright, high-saturation blue reserved for primary CTAs. Dominant and unmissable—signals "convert here." White text on primary ensures 19.1:1 contrast.
- **Background (#faf8f5)**: Warm off-white, nearly uncolored. Reduces eye strain and frames content without aggressive brightness.
- **Surface (#f5f2ee)**: Marginally darker than background; used for cards, panels, or form fields to create subtle containment without borders.
- **Text (#000000)**: Pure black, maximum contrast. At 13px body size, ensures accessibility and legibility.
- **Text-muted (#727272)**: Mid-gray for secondary copy (subheadings, helper text, metadata). Approx. 8.6:1 contrast against background—sufficient for non-critical information.
- **Accent (#27251e)**: Deep brown, near-black. Reserved for tertiary emphasis or branding; creates warmth without competing with primary blue.

## 3. Typography

**Display (35px, 500 weight, 1.2 leading)**: Used for hero statements like "Reveal what your market really thinks." Medium weight keeps it punchy without heaviness; generous line height prevents cramping at large size.

**Heading (34px, 400 weight, 1.04 leading, -1.02px tracking)**: Slightly tighter than display, with negative letter-spacing that adds visual sophistication and reduces perceived whitespace. Ideal for section titles and process headings.

**Body (13px, 400 weight, 1.2 leading, -0.39px tracking)**: Compact but readable. The -0.39px tracking tightens character spacing, reducing air while maintaining legibility. 1.2 leading at 13px is measured and conservative—efficient use of vertical space. Used for CTAs, pricing callouts, and feature descriptions.

The consistent use of Suisse Intl (with fallback to sans-serif) emphasizes geometric neutrality, avoiding personality-driven typefaces. This reinforces the B2B, results-oriented positioning.

## 4. Components & Patterns

**Call-to-Action buttons**: Rendered in primary blue (#0000ee) with white text. Secondary CTAs likely use muted text or surface backgrounds. The "Book a call," "Get started →," and "Start your sprint →" variants suggest multiple conversion points with consistent visual language.

**Pricing display**: Highlighted with body typography and likely muted text for supporting detail (duration "3+ months", investment "£1k+"). The card shadow may isolate pricing tiers visually.

**Navigation & header**: Minimal; relies on CTAs rather than elaborate navigation. The breakpoint at 810px suggests a toggle or collapse pattern for mobile.

**Form inputs & text fields**: Likely use surface (#f5f2ee) backgrounds with subtle rounded corners (md 5px or lg 10px radius), maintaining the soft, approachable aesthetic.

## 5. Spacing & Layout

The base unit is **4px**, with a scale of [4, 8, 12, 20, 100]. This tight increment system allows for precise, economical spacing—crucial when packing information density.

- **4px / 8px**: Micro-spacing between inline elements (icon + text, nested list items).
- **12px / 20px**: Padding within components, margins between related blocks.
- **100px**: Macro-spacing; section breaks, vertical rhythm between major content areas.

Given the single breakpoint at 810px, layout is likely **stacked vertically on mobile**, expanding to multi-column grids on desktop. The tight spacing scale ensures mobile doesn't feel cramped despite smaller viewports.

Border-radius is subtle (sm 3px, md 5px, lg 10px) except for the xl 800px variant, which suggests pill-shaped buttons or full-width rounded containers for focal areas.

## 6. Motion & Interaction

Motion is defined as **"ease"** with no explicit duration or delay values, implying a system-wide default (likely 200–300ms). This enables:

- **Button interactions**: Smooth state transitions (hover, active, focus) without abruptness.
- **Navigation & overlays**: Subtle fade-in/slide effects for modals or dropdowns.
- **Scroll-triggered reveals**: Gentle fade or shift as sections enter viewport.

The conservative motion strategy keeps focus on content and CTAs rather than drawing attention to transitions. Combined with the tight spacing and minimal shadows, motion reinforces the professional, no-nonsense brand voice.

## Accessibility

### Contrast Ratios

**Text (#000000) on Background (#faf8f5)**
- Contrast ratio: **19.1:1**
- Result: ✅ Exceeds WCAG AAA (7:1)
- Assessment: Excellent. Ideal for body text at 13px.

**Text-muted (#727272) on Background (#faf8f5)**
- Contrast ratio: **8.6:1**
- Result: ✅ Exceeds WCAG AA (4.5:1)
- Assessment: Acceptable for secondary text; ensure not used for critical UI or long passages.

**Primary CTA text (#ffffff) on Primary (#0000ee)**
- Contrast ratio: **19.1:1**
- Result: ✅ Exceeds WCAG AAA
- Assessment: Excellent. High-visibility call-to-action.

### Minimum Requirements

- **Touch target**: Ensure buttons and clickable elements meet **44×44px minimum** (at 13px body typography, CTA buttons should comfortably exceed this, especially with 12–20px padding).
- **Focus indicator**: Implement **2px outline in primary blue (#0000ee) with 2px offset** around interactive elements (buttons, links, form inputs). The high contrast of primary blue ensures visibility against both background and surface.
- **Keyboard navigation**: Maintain logical tab order; support Enter/Space for buttons, arrow keys for multi-select components.
- **Color independence**: Do not rely on color alone to convey CTAs; use text labels ("Get started") and potentially icons (→).
- **Reduced motion**: Respect `prefers-reduced-motion`; disable or simplify easing transitions for users who opt in.
