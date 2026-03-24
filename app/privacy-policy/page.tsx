import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'Privacy Policy | A2V2.ai',
  description:
    'A2V2.ai Privacy Policy. Learn how we collect, use, store, and protect your personal data.',
  alternates: {
    canonical: 'https://www.a2v2.ai/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />
      <div className="bg-background">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-base text-text-secondary">
              Last updated: March 24, 2026
            </p>
          </header>

          <article className="prose-blog">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how A2V2.ai, Inc. and its subsidiaries (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares your data in connection with our websites at A2V2.ai, our mobile applications, and all related products and services (collectively, the &ldquo;Services&rdquo;). Your use of the Services is governed by this Privacy Policy and our Terms and Conditions.
            </p>

            <h2>What Data We Collect</h2>
            <ul>
              <li>Personal identification information (name, email address, phone number, physical address)</li>
              <li>Payment and billing information (processed through Stripe &mdash; we do not store payment details)</li>
              <li>Purchase history</li>
              <li>User preferences</li>
              <li>IP address</li>
              <li>Geo-location data</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2>How We Collect Your Data</h2>
            <p>We collect data when you:</p>
            <ul>
              <li>Register, subscribe, or place an order for our products or services</li>
              <li>Complete a transaction through Stripe</li>
              <li>Complete a survey or provide feedback</li>
              <li>Use or view our platform via your browser&apos;s cookies</li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Process your orders and manage your account</li>
              <li>Communicate with you about your account and our Services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Conduct research and development</li>
              <li>Analyze usage trends by geography and demographic</li>
            </ul>
            <p>
              <strong>We do not sell your data under any circumstances.</strong>
            </p>

            <h2>Third-Party Services</h2>
            <p>The following third-party services may have access to your data:</p>
            <ul>
              <li><strong>Google Analytics</strong> (analytics)</li>
              <li><strong>Stripe</strong> (payment processing)</li>
              <li><strong>Twilio/SendGrid</strong> (communications)</li>
              <li><strong>Social media platforms</strong> (Facebook, Instagram, TikTok, YouTube)</li>
            </ul>
            <p>
              These third parties have their own privacy policies. It is your responsibility to review them.
            </p>

            <h2>How We Store Your Data</h2>
            <p>
              Your data is stored on secure servers. We do not store payment information &mdash; this is handled by Stripe. We retain your data for <strong>five (5) years</strong> following account termination or deactivation. Data is stored indefinitely for active subscriptions. You may request deletion of your data at any time.
            </p>

            <h2>How We Protect Your Data</h2>
            <p>
              We protect your data using encryption and industry-standard security measures.
            </p>

            <h2>HIPAA Compliance</h2>
            <p>
              For users of our healthcare-related products, A2V2.ai maintains HIPAA compliance. Protected Health Information (PHI) is handled in accordance with all applicable HIPAA regulations.
            </p>
            <ul>
              <li>PHI is encrypted using <strong>AES-256 encryption</strong> at rest and <strong>TLS 1.3</strong> in transit</li>
              <li>We sign a <strong>Business Associate Agreement (BAA)</strong> with all applicable clients</li>
              <li>Patient data is <strong>never used to train external AI models</strong></li>
            </ul>

            <h2>Marketing Communications</h2>
            <p>
              If you have opted in to receive marketing communications, you may opt out at any time by using the &ldquo;unsubscribe&rdquo; link in any marketing email or by contacting us at <strong>support@a2v2.ai</strong>.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <strong>support@a2v2.ai</strong>. We will respond within 30 days.
            </p>
            <p>
              <strong>California residents:</strong> You may make a personal information request up to twice in a 12-month period. We will respond within 45 days.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies to keep you signed in, remember your preferences, understand how you use our platform, and serve relevant advertising. You can manage cookie preferences in your browser settings. Some platform features may not function without cookies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from anyone under the age of 13. If you believe a child under 13 has provided us with personal information, please contact us at <strong>support@a2v2.ai</strong> and we will delete that information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We will notify users of material changes via email.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, contact us at <strong>support@a2v2.ai</strong>.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
