We are embarking on a significant overhaul of the BuiltIt.dev website. Your primary goal is to transform the current local draft of the website into a highly polished, modern, dark-mode marketing page that precisely matches our target design and functional specifications.
Project Foundation & Core Reference Documents:

Primary Visual Target: You will be working towards replicating the design shown in the provided screenshot: TARGET_BUILTIT_SCREENSHOT_V1.3.png. This image represents our desired final look for the homepage.
Hero Gradient & Animation Inspiration: For the Hero section's dynamic background gradient, refer to the provided screenshot: DRAFTBIT_HERO_INSPIRATION.png.
Product Requirements Document (PRD): The MOST IMPORTANT document for this project is PRD_BUILTIT_V1.3.md. This PRD contains:
The detailed vision and goals.
The complete, updated Color Palette (V1.3 - Purple Dominant).
Typography guidelines.
Specific design instructions for each section.
All approved copy for each section (cross-reference with TARGET_BUILTIT_SCREENSHOT_V1.3.png for exact phrasing and placement).
Technical specifications and scope.
You MUST read, understand, and constantly refer to this PRD throughout the entire development process.
Crucial Emphasis on Documentation:
Location: All project documentation, including PRD_BUILTIT_V1.3.md, this initialization prompt (save as LLM_INITIALIZATION_PROMPT.md), and a DEVELOPMENT_LOG.MD, MUST reside in a /docs folder within the project's root directory.
Constant Updates: As you implement features, make changes, or encounter challenges, you are required to update the DEVELOPMENT_LOG.MD. This log should track:
Date of work.
Section/Feature worked on (referencing PRD section numbers).
Key changes implemented.
Any deviations from the PRD (and the reason, if discussed with me).
Questions or blockers.
PRD is Living: If we discuss and agree on changes to the plan or design, I (the human supervisor) will update PRD_BUILTIT_V1.3.md. You should always work from the latest version.
Do NOT Delete Old Documentation: We maintain a history. Update existing documents; do not delete and replace them unless explicitly instructed.
Initial Project Setup & Guidelines:
Verify Project Base: You will be working on an existing local Next.js project. Familiarize yourself with its current structure.
Create/Verify /docs Folder: Ensure the /docs folder exists. Place PRD_BUILTIT_V1.3.md and this prompt (LLM_INITIALIZATION_PROMPT.md) inside it. Create an empty DEVELOPMENT_LOG.MD file.
Environment Setup:
Ensure all necessary dependencies are installed (npm install or yarn install).
Confirm you can run the project locally (npm run dev or yarn dev).
Version Control (Git): I will manage Git commits initially. Focus on implementing changes. We will establish a commit rhythm later.
Coding Style:
Adhere to clean, readable, and maintainable code practices.
Use Tailwind CSS utility classes extensively for styling, as per the PRD and existing project patterns.
Write semantic HTML5.
Comment complex logic where necessary.
High-Level Development Plan (Step-by-Step, Referencing PRD V1.3):
Your work will be iterative. After each major step or section, I will review your progress. Log your work in DEVELOPMENT_LOG.MD continuously.
Phase 1: Global Styling & Hero Section Implementation
* Task 1.1: Global Styles Configuration (PRD Section 7.1, 7.2):
* Open tailwind.config.js. Update the theme.extend.colors and theme.extend.fontFamily to precisely match the Color Palette V1.3 (Purple Dominant) and Typography guidelines from PRD_BUILTIT_V1.3.md.
* Update global CSS (globals.css or equivalent) to set the default body background to Primary Background (Deep Charcoal - #0D0E11) and default text color to Primary Text (Off-White - #E0E0E0). Ensure "Inter" is the default font.
* Task 1.2: Navigation Bar Styling (PRD Section 8.1 & Target Screenshot):
* Restyle the existing Navbar to match the target screenshot and PRD V1.3 (colors, fonts, Electric Purple CTA button).
* Task 1.3: Hero Section Overhaul (PRD Section 8.2 & Draftbit Hero Screenshot):
* Implement the dynamic, subtly moving gradient background inspired by DRAFTBIT_HERO_INSPIRATION.png, using our Electric Purple and other specified colors. Focus on achieving a slow, atmospheric movement.
* Implement all text content and CTAs as per TARGET_BUILTIT_SCREENSHOT_V1.3.png and style them according to PRD V1.3 (font sizes, weights, colors, button styles).
* Task 1.4: Footer Styling (PRD Target Screenshot):
* Restyle the existing Footer to match the target screenshot and PRD V1.3.
Phase 2: Core Content Section Implementation & Revisions
* Task 2.1: "Ship Fast, Validate Ideas..." Section (PRD Section 8.3 & Target Screenshot):
* Implement this section precisely as shown in the target screenshot, including the pill tag styling.
* Task 2.2: "Why Most Builds Stall" - REVISED DESIGN (PRD Section 8.4):
* Implement Option 1 (Horizontal Compact Bar) or Option 2 (Minimalist Icons + Text) from the PRD. Prioritize compactness and sleekness. We can explore Option 3 (Collapsible) later if these don't meet the mark. Consult with me if unsure which option to start with.
* Task 2.3: "The BuiltIt Sprint: From Idea to Launch" - NEW TIMELINE DESIGN (PRD Section 8.5):
* Implement the new vertical timeline design with staggered cards and Electric Purple accents as detailed in the PRD. Ensure it's responsive.
* Task 2.4: "Proof We Ship Fast" (Portfolio) Styling (PRD Section 8.6 & Target Screenshot):
* Restyle existing portfolio cards to match the target screenshot (Dark Slate bg, glows, Acid Lime "Coming Soon" tag). Implement placeholders for images.
* Task 2.5: "The BuiltIt Advantage" (Features) Styling (PRD Section 8.7 & Target Screenshot):
* Restyle feature cards with Electric Purple icons and hover glows as per the target and PRD.
Phase 3: Remaining Sections & Polish
* Task 3.1: "Meet the Founder" (About Section) Implementation (PRD Section 8.8 & Target Screenshot):
* Create and style this new section as per the PRD and target screenshot. Use a placeholder for the image.
* Task 3.2: "What Our Clients Say" (Testimonials) Styling (PRD Section 8.9 & Target Screenshot):
* Restyle testimonial cards, ensuring Electric Purple quote icons.
* Task 3.3: "Ready to Build Your MVP?" (Contact Section) Styling (PRD Section 8.10 & Target Screenshot):
* Restyle this section, ensuring the Acid Lime CTA button and email link.
* Task 3.4: Responsive Design Pass (PRD Section 9):
* Thoroughly test and refine responsiveness for all sections on mobile, tablet, and desktop views.
* Task 3.5: Micro-Animations & Interactions (PRD Section 10):
* Implement subtle hover effects on cards and buttons.
* Implement subtle scroll-triggered entrance animations for sections/elements. Keep these tasteful and quick.
Working Method & Communication:
Iterative Approach: I expect to review your work after each major task or section is completed (e.g., after Hero, after Timeline).
Clarity is Key: If any part of the PRD or a task is unclear, please ask for clarification before spending significant time on implementation.
Problem Solving: If you encounter technical challenges implementing a specific design element (e.g., the hero gradient movement), explain the issue and propose alternative solutions if necessary.
Focus on Visual Accuracy: Your primary goal is to make the local website look and feel exactly like TARGET_BUILTIT_SCREENSHOT_V1.3.png, incorporating the dynamic elements described.
Let's begin with Phase 1, Task 1.1 (Global Styles Configuration). Please confirm you have access to all referenced documents and screenshots, and that you've set up the /docs folder and DEVELOPMENT_LOG.MD. I'm excited to see your progress!
