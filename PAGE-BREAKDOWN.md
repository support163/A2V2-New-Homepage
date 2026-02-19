# Page & Section Breakdown — Fill This In

<!-- 
For each page in your design:
1. Export a 2x PNG screenshot and put it in /design-refs/
2. Fill in the sections below describing what's on the page
-->

---

## Page 1: Homepage
**Screenshot file:** `design-refs/homepage.png`

### Navbar
- Logo: public/icons/logo.svg (A2V2.ai logo, left-aligned)
- Navigation links: Home, Pricing, Blog (centered in the middle)
- Right side: "Sign In" (text link with a small dropdown arrow/chevron) and "Try For Free" (blue filled button, rounded/pill shape)
- Is the navbar sticky?: Yes
- Mobile behavior: hamburger menu
- Layout notes: White background, single row with logo on the left, nav links centered, and Sign In + CTA on the right. Thin bottom border or subtle shadow to separate from content below.

### Hero Section
- Headline text: "Clone Yourself. Scale Your Influence."
- Subheadline text: "The all-in-one bio hub that chats like you, captures leads like a CRM, and converts while you sleep."
- Button(s) and their text: "Try For Free" (dark/black filled button, rounded/pill shape) and "See a Demo" (white/outline button with dark border, rounded/pill shape), side by side
- Small note below buttons: "No credit card required" with a small card icon to the left
- Image/illustration file: public/images/hero-chat-mockup.png
- Layout: Text left + image right. Left side has the headline, subheadline, two buttons, and the no credit card note. Right side has a chat widget mockup showing the A2V2 AI Assistance interface with a welcome message, a question input field, emoji/mic icons, and an "Agent by A2V2.ai" badge at the bottom. The mockup has a light background with a subtle shadow/border and rounded corners.

### Section 2: How It Works / Train Your AI In Seconds
- What is this section?: Three-step process showing how to set up your AI — connect content, train it, and deploy
- Content description:
  - Section heading: "Train your AI in seconds." (left-aligned, bold)
  - Subtext below heading: "No coding. Just upload your content, and we build your digital twin."
  - 3 cards in a row:
    - Card 1: "Connect" — "Sync your YouTube, PDFs, and website URLs." Shows an illustration with the A2V2 logo connected to a YouTube icon, PDF icon, and Example.com via dashed lines.
    - Card 2: "Train" — "Our engine learns your voice, facts, and offers." Shows the A2V2 logo centered on a dashed grid/network pattern.
    - Card 3: "Deploy" — "Share your a2v2 link anywhere." Shows a phone mockup of a live A2V2 profile page with a profile photo, social icons, and chat input.
- Image files used: public/images/connect-illustration.png, public/images/train-illustration.png, public/images/deploy-mockup.png
- Layout notes: White/light background. Heading and subtext are left-aligned above the cards. Cards are in a 3-column equal-width row. Cards have a dark/black background with rounded corners. Each card has the illustration taking up most of the space on top, with the bold title and description text at the bottom left of the card.

### Section 3: Features / The Smartest Link In Your Bio
- What is this section?: Feature showcase with a heading, subtext, and 3 feature cards with UI mockup images
- Content description: 
  - Section heading: "The smartest link in your bio." (left-aligned, bold)
  - Subtext below heading: "Replace your static buttons with an interactive profile. A2V2 combines your content, your personality, and your sales funnel into one link."
  - 3 feature cards:
    - Card 1 (large, left side): "Conversations, not just clicks." — description about AI suggesting content and keeping users engaged 3x longer. Shows a chat UI mockup image.
    - Card 2 (top right): "Instant Lead Capture" — description about AI asking for emails and syncing leads to dashboard. Shows a contact list UI mockup image.
    - Card 3 (bottom right): "Secure by Design." — description about HIPAA-compliant infrastructure. Shows a lock icon with HIPAA and SOC2 badges.
- Image files used: public/images/chat-mockup.png, public/images/lead-capture-mockup.png, public/images/security-badge.png
- Layout notes: Dark/black background section. Heading and subtext are left-aligned above the cards. Cards are arranged in a bento grid — one tall card on the left taking full height, two stacked cards on the right (equal height). Cards have a dark surface background with rounded corners. Each card has a UI mockup image on top and the title + description text below it.

### Section 4: Use Cases / Powering The Next Generation Of Experts
- What is this section?: Tabbed showcase section where users toggle between industries to see how A2V2 works for their niche
- Content description:
  - Section heading: "Powering the next generation of experts." (centered, bold)
  - Subtext below heading: "From viral creators to licensed clinicians, A2V2 adapts to your specific workflow. Toggle below to see how our engine transforms to meet your industry's unique demands." (centered)
  - 3 toggle tabs centered below the subtext: "Real Estate" (house icon), "Creators" (person icon), "Healthcare" (heart icon). Active tab has an underline or highlight.
  - Tab 1 — Real Estate:
    - Mockup image: Phone showing a real estate agent profile (James Sterling) with property listing cards
    - Title: "Your 24/7 Inside Sales Agent."
    - Description: about AI qualifying leads, answering listing questions, and scheduling private viewings automatically
  - Tab 2 — Creators:
    - Mockup image: Phone showing a creator profile (Isabella Hart) with cloud background, social icons, and "Ask me anything" chat
    - Title: "Scale your personal brand on autopilot."
    - Description: about AI twin engaging fans, recommending products, and booking high-ticket calls 24/7
  - Tab 3 — Healthcare:
    - Mockup image: Chat UI showing Dr. Sarah Bennet's AI handling an emergency dental appointment, with a HIPAA Compliance Verified badge floating beside it
    - Title: "Automated intake and triage, fully compliant."
    - Description: about securely answering FAQs, pre-screening appointments, and routing urgent needs within a HIPAA-ready environment
- Image files used: public/images/usecase-realestate.png, public/images/usecase-creators.png, public/images/usecase-healthcare.png
- Layout notes: White/light background for the heading area, dark/black background for the card content area below the tabs. The whole tab content area is one large dark rounded card. Mockup image is centered in the card. Title and description text sit at the bottom left of the card. Only one tab's content is visible at a time — the others show on click. This will need JavaScript/React to handle the tab switching.

### Section 5: Trust / Your Data. Your Audience. Protected.
- What is this section?: Security and privacy section with a heading, subtext, two CTAs, and three trust/compliance cards
- Content description:
  - Section heading: "Your data. Your audience. Protected." (centered, bold)
  - Subtext: "We built A2V2 on a privacy-first architecture. We never train public models on your private client data, and every conversation is encrypted." (centered)
  - Two CTAs side by side centered below subtext: "Book a Demo" (blue filled button, rounded/pill shape) and "Learn more >" (text link with arrow)
  - 3 cards in a row below:
    - Card 1: Shield/checkmark icon, title "Enterprise-Grade Data Security", description "SOC2 Type II certified with AES-256 encryption at rest and in transit." (centered text)
    - Card 2: Lock icon, title "Zero-Retention Private AI", description "Your data is isolated and never used to train our public models." (centered text)
    - Card 3: Medical shield/cross icon, title "HIPAA Compliant Architecture", description "Full BAA support and PHI protection for all healthcare providers." (centered text)
- Image files used: public/icons/icon-security.svg, public/icons/icon-lock.svg, public/icons/icon-hipaa.svg
- Layout notes: White/light background. Heading, subtext, and CTAs are all centered. Cards are in a 3-column equal-width row. Cards have a dark/black background with rounded corners. Each card has the icon centered at top, bold title centered below, and description text centered underneath. Icons are white/light outline style.

### Section 6: CTA Banner / Your Audience Is Waiting
- What is this section?: Final call-to-action banner before the footer
- Content description:
  - Heading: "Your audience is waiting to talk to you." (white text, bold, left-aligned)
  - Subtext: "Join the creators and professionals turning static traffic into active conversations. It's free to start and takes less than 2 minutes to train your first model." (white text, left-aligned)
  - Button: "Sign up Free" (white filled button with dark/black text, rounded/pill shape)
  - Small note below button: "No credit card required" with a small card/shield icon to the left (white text)
  - Right side has a decorative dotted/particle illustration of a bird or speech bubble shape
- Image files used: public/images/cta-decoration.png, public/images/cta-background.png
- Layout notes: Full-width rounded card/banner with a blue background (looks like #3B5BF6 or similar — grab the exact hex from Figma). Content is left-aligned taking roughly the left half. The decorative particle art sits on the right half. The whole banner has generous padding and rounded corners. There's also a subtle dot grid pattern on the blue background behind everything. Export the decorative illustration as a PNG with transparent background if possible.

### Footer
- What is this section?: Site footer with logo, navigation links, newsletter signup, socials, and legal info
- Content description:
  - Top row has 4 columns:
    - Column 1 (left): A2V2.ai logo, tagline below it "Turn Your YouTube Videos into a Personal AI Clone"
    - Column 2: "About" heading with "Contact" link below
    - Column 3: "Company" heading with "Terms of Service" and "Privacy Policy" links below
    - Column 4 (right): "Subscribe to our Newsletter" heading, email input field with placeholder "Enter your email" and a white "Subscribe" button next to it. Below that, "Socials" label with Facebook, X, Instagram, and LinkedIn icons in a row
  - Divider line (thin horizontal rule) separating top section from bottom
  - Bottom row: "©2026 A2V2.ai All rights reserved" on the left, "Privacy Policy | Terms & Conditions" on the right
- Image files used: public/icons/logo.svg, public/icons/icon-facebook.svg, public/icons/icon-x.svg, public/icons/icon-instagram.svg, public/icons/icon-linkedin.svg
- Layout notes: Dark/black background, white text throughout. 4-column layout on the top row. Email input has a dark background with a light border, Subscribe button is white with dark text. Social icons are white, circular outline style. Bottom row is a simple two-column flex with text on each end. Thin divider line between top and bottom sections, looks like a subtle grey or dark grey line.

