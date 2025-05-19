## Product Requirements Document (PRD) - BuiltIt.dev Website V1.3 (Draftbit-Inspired Dark Mode)

**Project:** BuiltIt.dev Website - V1 Relaunch (Dark Mode)
**Document Version:** 1.3
**Last Updated:** May 17, 2025 (based on visual target V_Current_BuiltIt_Screenshot & Draftbit Hero inspiration)
**Owner:** Lyor Itzhaki
**Contact:** `hello@builtit.dev`
**Status:** Approved for Development

**1. Introduction & Vision**
BuiltIt.dev is a boutique product development agency specializing in rapidly delivering high-quality, AI-ready Minimum Viable Products (MVPs) for SaaS and fintech founders. This document outlines the requirements for the V1 relaunch of the BuiltIt.dev marketing website, adopting a sophisticated, modern dark mode aesthetic inspired by `draftbit.com`.

The vision is to create a visually stunning, highly polished website that effectively communicates BuiltIt's value, showcases expertise, builds trust, and serves as the primary lead generation engine. The user experience will be focused, high-tech, and premium, with strategic use of vibrant accents to guide the user.

**2. V1 Project Goals**
*   Launch a professional, credible online presence with a distinct, modern dark mode aesthetic.
*   Clearly articulate value proposition: "Launch an AI-ready MVP in 14 Days."
*   Generate qualified leads via clear Calls to Action.
*   Showcase capabilities and past project structures effectively.
*   Build a strong brand identity reflecting quality, speed, and tech-forward thinking.
*   Ensure seamless responsiveness and an engaging user experience with subtle animations.

**3. Target Audience**
*   Primary: Early-stage SaaS founders (non-technical or semi-technical).
*   Secondary: Fintech and E-commerce startups needing modern web applications.
*   Psychographics: Value speed, quality, clear communication, strategic partnership, and a premium, tech-savvy presentation.

**4. Core Value Proposition & Messaging (Refer to latest screenshot for exact copy per section)**
*   **Hero Headline:** "Launch an AI-ready MVP in 14 Days"
*   **Hero Sub-headline:** "Product strategy and modern code, delivered by a SaaS product leader. Less talk, more shipping."
*   **Pill Tag (above second headline):** "The BuiltIt Advantage"
*   **Second Headline:** "Ship Fast, Validate Ideas, Build with an Expert"
*   **Second Sub-headline:** "BuiltIt combines product leadership with rapid development to turn your vision into a market-ready app, efficiently and effectively."
*   *(Other section copy as per the provided BuiltIt.dev screenshot)*

**5. V1 Website Structure (Sitemap - Homepage Focus)**
Single, comprehensive homepage with sections as per the provided BuiltIt.dev screenshot:
1.  Navigation Bar
2.  Hero Section
3.  "Ship Fast, Validate Ideas..." (with Pill Tag)
4.  "Why Most Builds Stall" (Compact/Revised)
5.  "The BuiltIt Sprint: From Idea to Launch" (New Timeline Design)
6.  "Proof We Ship Fast" (Portfolio)
7.  "The BuiltIt Advantage" (Features)
8.  "Meet the Founder" (About Section)
9.  "What Our Clients Say" (Testimonials)
10. "Ready to Build Your MVP?" (Contact/CTA Section)
11. Footer

**6. Design Philosophy & Overall Aesthetic (Draftbit-Inspired Dark Mode)**
*   **Overall Feel:** Sophisticated, modern, premium, tech-focused, dark. Inspired by `draftbit.com`.
*   **Key Elements:** Strong typography, clear visual hierarchy, generous "dark space," vibrant purple as the primary accent, sparingly used lime green for specific highlights, subtle glows, and smooth micro-animations.
*   **Polish:** Meticulous attention to detail in spacing, alignment, border radii, and transitions.

**7. Visual Design System (V1.3)**

    *   **7.1. Color Palette (Purple Dominant):**
        *   **Primary Background (Deep Charcoal):** `#0D0E11`
        *   **Secondary Background/Card Surface (Dark Slate):** `#1A1B20`
        *   **Primary Accent (Vibrant Electric Purple):** `#7000FF` (Main CTAs, active states, key icons, highlights, glows).
        *   **Secondary Accent (Vibrant Acid Lime):** `#B2FF59` (Used sparingly: "Coming Soon" tags, specific highlights).
        *   **Primary Text (Off-White):** `#E0E0E0`
        *   **Secondary Text (Medium Gray):** `#A0A0A0`
        *   **Subtle Borders/Dividers (Charcoal Gray):** `#2D2D2D`
        *   **Glows:** Primarily subtle `Electric Purple` glows (e.g., `rgba(112, 0, 255, 0.1)` to `0.2`).
    *   **7.2. Typography:**
        *   **Font Family:** "Inter" (sans-serif).
        *   **Weights:** Regular (400), Medium (500), Semi-Bold (600), Bold (700).
        *   **Headings (H1, H2, H3):** "Inter" Bold or Semi-Bold, `Primary Text (Off-White)`. Sizes to match visual hierarchy in the target BuiltIt.dev screenshot.
        *   **Body Text (P):** "Inter" Regular or Medium, `Primary Text (Off-White)`.
        *   **Sub-Text/Captions:** "Inter" Regular, `Secondary Text (Medium Gray)`.
        *   **Line Height:** `leading-relaxed` or similar for readability.
    *   **7.3. Spacing:** Generous padding within/between sections. Consistent use of an 8px grid or Tailwind scale.
    *   **7.4. Iconography:** Clean, modern line-art or subtly filled icons. `Electric Purple` for primary icons, `Acid Lime` for specific highlights, `Medium Gray` for standard. (Refer to target screenshot for icon styles).
    *   **7.5. Card Styling:**
        *   Background: `Secondary Background (Dark Slate - #1A1B20)`.
        *   Borders: Very subtle `Subtle Borders/Dividers (Charcoal Gray)` or none.
        *   Corner Radius: `rounded-lg` or `rounded-xl` (e.g., 10-12px).
        *   Hover/Focus: Subtle lift and/or soft `Electric Purple` glow.
    *   **7.6. Button Styling:**
        *   **Primary CTA (e.g., Nav "Book a Call", Hero "Book Free Strategy Call"):** `Electric Purple (#7000FF)` background, `Off-White (#E0E0E0)` text.
        *   **Secondary CTA (e.g., Hero "View Portfolio"):** `Secondary Background (Dark Slate - #1A1B20)` background, `Primary Text (Off-White)` text, subtle `Charcoal Gray` border.
        *   **Lime Accent CTA (e.g., Contact section "Book Free Strategy Call"):** `Acid Lime (#B2FF59)` background, `Deep Charcoal (#0D0E11)` text. (This is an exception for high visibility).
    *   **7.7. Favicon:** Simplified BuiltIt.dev logo, optimized for dark/light system themes.

**8. Section-Specific Design & Content Details (Based on Target BuiltIt.dev Screenshot & Draftbit Hero):**

    *   **8.1. Navigation Bar:**
        *   Layout & Content: As per target screenshot.
        *   Styling: `Primary Background`, `Electric Purple` CTA. Links `Off-White`, hover `Electric Purple`.
    *   **8.2. Hero Section:**
        *   **Gradient Background:**
            *   Replicate the dynamic, subtly moving gradient aesthetic from the **Draftbit hero screenshot (top portion)**.
            *   Base: `Primary Background (Deep Charcoal - #0D0E11)`.
            *   Gradient Layers: Use large, soft, blurred radial or linear gradients of `Electric Purple` and potentially a touch of a darker blue/teal (as seen in Draftbit) at very low opacities.
            *   **Movement:** Implement a slow, continuous, subtle animation for these gradient layers (e.g., slowly shifting position, pulsing opacity, or rotating). The effect should be atmospheric and not distracting. CSS animations or a lightweight JS library.
        *   Content & Styling: As per target screenshot (Headlines, Sub-headline, CTAs with updated color scheme).
    *   **8.3. "Ship Fast, Validate Ideas..." Section:**
        *   Layout & Content: As per target screenshot (Pill tag, Headline, Sub-headline).
        *   Pill Tag "The BuiltIt Advantage": `Secondary Background (Dark Slate)`, `Electric Purple` subtle border/glow, `Off-White` text, `rounded-full`.
    *   **8.4. "Why Most Builds Stall" - REVISED DESIGN:**
        *   **Goal:** Highly compact, sleek, potentially interactive.
        *   **Option 1 (Horizontal Compact Bar):** A single, wide, slim bar. Title: "Common Roadblocks We Eliminate". On hover/click, it could subtly expand to show icons + keywords (No Owner, Vague Scope, Slow Dev, No Strategy).
        *   **Option 2 (Minimalist Icons + Text):** Four small icon + text pairings horizontally, much smaller than current cards. Minimal detail.
        *   **Option 3 (Collapsible - if interactive):** A single bar "Why Most Builds Stall?" that expands to show a concise list.
        *   **Styling:** Minimalist. Use `Dark Slate` for any card/bar background. Icons in `Electric Purple`.
    *   **8.5. "The BuiltIt Sprint: From Idea to Launch" - NEW TIMELINE DESIGN:**
        *   **Goal:** Modern, visually engaging, mobile-friendly vertical timeline.
        *   **Inspiration:** Search for "modern vertical timeline css" or "tailwind css vertical timeline examples." Look for designs that are clean, use cards for steps, and have a clear connecting line.
        *   **Structure:**
            *   Central vertical line (`Subtle Border/Divider Gray` or low-opacity `Electric Purple`).
            *   Circular markers for each phase (0, 1-2, 3-8, 9-12, 14) on the line: `Electric Purple` background, `Off-White` text.
            *   Content cards for each step, staggered left/right of the line (or all on one side if cleaner). Cards: `Dark Slate` background, `rounded-lg`.
                *   Title of step (e.g., "Discovery Call"): `Primary Text (Off-White)`, bold.
                *   Description: `Secondary Text (Medium Gray)`, concise.
        *   **Animation:** As user scrolls, each step card can subtly fade/slide into view.
    *   **8.6. "Proof We Ship Fast" (Portfolio):**
        *   Layout & Content: As per target screenshot.
        *   Card Styling: `Dark Slate` background, `rounded-lg`. Subtle `Electric Purple` glow on hover.
        *   "Coming Soon" Tag: `Acid Lime` background, `Deep Charcoal` text.
        *   *Placeholder for actual project images.*
    *   **8.7. "The BuiltIt Advantage" (Features):**
        *   Layout & Content: As per target screenshot.
        *   Card Styling: `Dark Slate` background, `rounded-lg`. Icons `Electric Purple`. Subtle `Electric Purple` glow on hover.
    *   **8.8. "Meet the Founder" (About):**
        *   Layout & Content: As per target screenshot (Circular image placeholder, Name, Title, Bio).
        *   Lyor's Title ("Founder, Product & Tech Lead"): `Electric Purple` text.
    *   **8.9. "What Our Clients Say" (Testimonials):**
        *   Layout & Content: As per target screenshot.
        *   Card Styling: `Dark Slate` background, `rounded-lg`. Quote icons `Electric Purple`.
    *   **8.10. "Ready to Build Your MVP?" (Contact):**
        *   Layout & Content: As per target screenshot.
        *   CTA Button: `Acid Lime` background, `Deep Charcoal` text (for high visibility here).
        *   Email link: `Acid Lime` text.
    *   **8.11. Footer:**
        *   Layout & Content: As per target screenshot.
        *   "BuiltIt.dev" logo text `Off-White`. Links `Off-White`, hover `Electric Purple`.

**9. Responsiveness & Mobile-First:**
*   All sections and components must be fully responsive and optimized for an excellent experience on mobile, tablet, and desktop.
*   The new timeline design for "The BuiltIt Sprint" must stack elegantly on mobile.

**10. Animations & Interactions (Micro-Animations):**
*   **Hero Gradient:** Subtle, continuous slow movement.
*   **Button Hovers:** Slight scale, brightness change, or fill effect.
*   **Card Hovers:** Subtle lift and/or glow.
*   **Scroll-Triggered Entrances:** Gentle fade-in/slide-up for sections or elements as they enter the viewport. Keep these quick and non-intrusive.
*   **Interactive Timeline Steps (Optional):** Hovering a timeline step could subtly highlight it.

**11. Accessibility (WCAG AA as a target):**
*   Sufficient color contrast for all text.
*   Keyboard navigability.
*   Semantic HTML.
*   ARIA attributes where necessary.
*   `alt` text for images.

**12. SEO Basics:**
*   Proper heading structure (H1, H2, H3...).
*   Meta title & description for the homepage.
*   Image `alt` tags.

**13. Technology Stack & Development Approach (for Windsurf & LLMs):**
*   **Base:** Existing codebase (current BuiltIt.dev draft).
*   **Framework:** Next.js.
*   **Styling:** Tailwind CSS.
*   **Animation:** Framer Motion (if needed for complex hero animation, otherwise CSS transitions/animations).
*   **Development Process:**
    *   Use this PRD and the target BuiltIt.dev screenshot as the primary guide for LLMs via Windsurf.
    *   Break down tasks by section for the LLM.
    *   Start with global style changes (colors, fonts).
    *   Tackle the Hero section gradient and animation first, as it's visually critical.
    *   Implement the new "Why Most Builds Stall" and "The BuiltIt Sprint" designs.
    *   Refine existing sections to match the target screenshot and new color palette.
    *   Iteratively review and provide specific feedback to the LLM.

**14. Documentation (/docs folder in repo):**
*   This PRD (Version 1.3).
*   `DEVELOPMENT_LOG.md`: A log of major changes, decisions, and tasks completed by the LLM (Windsurf can help populate this).
*   `COMPONENT_GUIDE.md` (Optional, for later): Descriptions of key reusable components.

**15. Scope:**
*   **IN:** Full implementation of the homepage as described, matching the target BuiltIt.dev screenshot and incorporating the Draftbit-inspired hero gradient/movement. All copy from the target screenshot. Responsive design. Micro-animations.
*   **OUT (for this iteration):** Backend functionality beyond mailto links, blog, individual portfolio pages, complex database integrations.
