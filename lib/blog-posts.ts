export interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  href: string
  thumbnail?: string
}

/** All published blog posts, newest first. */
export const blogPosts: BlogPost[] = [
  {
    id: 20,
    title: 'Make it unmistakably yours: agent theming is here',
    description:
      'Style your agent with light, dark, or fully custom colors so it matches your brand and builds patient trust.',
    category: "What's New",
    href: '/blog/agent-theming',
    thumbnail: '/images/agent-theming.png',
  },
  {
    id: 19,
    title: 'Attach more, do more: multi-file upload is here',
    description:
      'Patients can now share lab reports, scans, and documents right in the chat, up to 5 files per message, and your agent reads them directly.',
    category: "What's New",
    href: '/blog/multi-file-upload-in-chat',
    thumbnail: '/images/multi-file-upload-in-chat.png',
  },
  {
    id: 18,
    title: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol',
    description:
      'NAD+ IV therapy has one of the highest drop-off rates in longevity medicine. Here is the session-by-session retention playbook that keeps patients through the full 6-week cycle.',
    category: 'Best Practices',
    href: '/blog/nad-therapy-patient-management',
    thumbnail: '/images/blog-post18.png',
  },
  {
    id: 17,
    title: 'How to Choose an AI Chatbot for Your Medical Practice',
    description:
      'There are hundreds of AI chatbot platforms. Fewer than a dozen are built for healthcare. Here is a practical framework and 12 questions to ask every vendor before signing.',
    category: 'Quick Guides',
    href: '/blog/how-to-choose-ai-chatbot-medical-practice',
    thumbnail: '/images/blog-post17.png',
  },
  {
    id: 16,
    title: 'Patient Retention Strategies for Functional Medicine Practices',
    description:
      '60 to 80% of functional medicine patients disengage before completing their protocols. Here are the 7 specific retention strategies that keep them engaged through every phase.',
    category: 'Best Practices',
    href: '/blog/patient-retention-strategies-functional-medicine',
    thumbnail: '/images/blog-post16.png',
  },
  {
    id: 15,
    title: 'Why 73% of Longevity Patients Quit Their Treatment Protocols',
    description:
      'The protocols work. The patients leave anyway. Here are the 7 predictable reasons longevity patients drop off and what clinics can do about each one.',
    category: 'Best Practices',
    href: '/blog/why-longevity-patients-quit-protocols',
    thumbnail: '/images/blog-post15.png',
  },
  {
    id: 14,
    title: 'How Much Revenue Are You Losing to Patient Drop-Off?',
    description:
      '73% of longevity patients disengage within 6 months. Use our calculator to see exactly what that is costing your clinic and what AI-powered retention could recover.',
    category: 'Best Practices',
    href: '/blog/revenue-loss-patient-drop-off-calculator',
    thumbnail: '/images/blog-post14.png',
  },
  {
    id: 13,
    title: 'ChatGPT vs HIPAA-Compliant AI: Why Your Clinic Needs to Know the Difference',
    description:
      'Your staff is probably already using ChatGPT with patient data. That is a HIPAA violation. Here is what is actually at risk and what to use instead.',
    category: 'Privacy & Trust',
    href: '/blog/chatgpt-vs-hipaa-compliant-ai',
    thumbnail: '/images/blog-post13.png',
  },
  {
    id: 12,
    title: 'How to Automate Patient Follow-Ups Without Violating HIPAA',
    description:
      'Patient follow-ups are where retention is won or lost. Here is how to automate them safely with HIPAA-compliant tools, protocol-aware timing, and encrypted messaging.',
    category: 'Best Practices',
    href: '/blog/automate-patient-follow-ups-hipaa',
    thumbnail: '/images/blog-post12.png',
  },
  {
    id: 11,
    title: 'Best AI Tools for Longevity Clinics in 2026',
    description:
      'We evaluated the AI landscape for longevity clinics. Here is what to look for, which tools are worth evaluating, and how they compare on protocols, compliance, and cost.',
    category: 'Best Practices',
    href: '/blog/best-ai-tools-longevity-clinics-2026',
    thumbnail: '/images/blog-post11.png',
  },
  {
    id: 10,
    title: 'What Is HIPAA-Compliant AI? A Guide for Healthcare Providers',
    description:
      'Most AI tools were never built to handle patient data safely. Here is what HIPAA-compliant AI actually means, why it matters, and how to evaluate whether your AI vendor meets the standard.',
    category: 'Privacy & Trust',
    href: '/blog/what-is-hipaa-compliant-ai',
    thumbnail: '/images/blog-post10-fix.png',
  },
  {
    id: 9,
    title: 'Medical Agents User Guide: Everything You Need to Get Started',
    description:
      'Step-by-step guide to creating Medical Agents on A2V2.ai. Set up HIPAA compliance, health parameters, medications, prescriptions, document extraction, and per-field CRM encryption.',
    category: 'Quick Guides',
    href: '/blog/medical-agents-user-guide',
    thumbnail: '/images/blog-post9/blog-post9-heroimage.png',
  },
  {
    id: 7,
    title: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime',
    description:
      'We just refreshed the entire model catalog. The HIPAA-eligible lineup got a lot bigger, most credit costs went down, and every retired model has been auto-migrated.',
    category: "What's New",
    href: '/blog/april-2026-model-catalog-update',
    thumbnail: '/images/blog-post7.png',
  },
  {
    id: 8,
    title: 'Introducing Medical Agents: HIPAA-Aware Chatbots, Built Right Into A2V2',
    description:
      'A2V2 now offers Medical Agents with BAA gating, field-level encryption, HIPAA-eligible models, and clinical modules for health parameters, medications, prescriptions, and document extraction.',
    category: "What's New",
    href: '/blog/introducing-medical-agents',
    thumbnail: '/images/blog-post8.png',
  },
  {
    id: 6,
    title: 'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks',
    description:
      'The problem is not your team. It is the system they are working inside. Here is what needs to change.',
    category: 'Quick Guides',
    href: '/blog/longevity-clinic-staff-burnout-automation',
    thumbnail: '/images/Blog-Post6-Heroimage.png',
  },
  {
    id: 5,
    title: 'The Patients You Already Lost Are Your Biggest Revenue Opportunity',
    description:
      'You spent thousands to acquire them. They already trust your clinic. And right now, hundreds of them are sitting in your EHR doing absolutely nothing.',
    category: 'Best Practices',
    href: '/blog/lapsed-patient-re-engagement-longevity-clinics',
    thumbnail: '/images/Blog-Post5-Heroimage.png',
  },
  {
    id: 4,
    title: 'Your Patients Are Generating Health Data 24/7 — Your Clinic Is Ignoring All of It',
    description:
      'They wear Oura Rings. They strap on Whoop bands. They stick CGMs to their arms. So why isn\'t any of that data reaching your clinic?',
    category: 'Quick Guides',
    href: '/blog/wearable-data-gap-longevity-clinics',
    thumbnail: '/images/Blog-Post4-Heroimage.png',
  },
  {
    id: 3,
    title: 'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking',
    description:
      'The problem isn\'t your protocols. It\'s the 89 days between appointments when no one is paying attention.',
    category: 'Best Practices',
    href: '/blog/protocol-adherence-crisis-longevity-medicine',
    thumbnail: '/images/Blog-Post3-MainHeroImage.png',
  },
  {
    id: 2,
    title: 'Your AI Is a HIPAA Violation Waiting to Happen — Here\'s How to Fix It',
    description:
      'If your staff has ever pasted patient data into ChatGPT, Claude, or Gemini, your clinic is already exposed.',
    category: 'Privacy & Trust',
    href: '/blog/hipaa-compliant-ai-healthcare',
    thumbnail: '/images/Blog-Post-photo2.png',
  },
  {
    id: 1,
    title: 'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It',
    description:
      'Most longevity clinics don\'t have a patient acquisition problem. They have a patient disappearance problem.',
    category: 'Best Practices',
    href: '/blog/silent-revenue-killer-longevity-medicine',
    thumbnail: '/images/Blog_post_photo1.png',
  },
]

/**
 * Returns related posts for a given post, excluding the current post.
 * Shows up to `limit` most recent published posts.
 */
export function getRelatedPosts(currentHref: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.href !== currentHref)
    .slice(0, limit)
}
