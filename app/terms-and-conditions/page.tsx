import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | A2V2.ai',
  description:
    'A2V2.ai Terms and Conditions. Read the terms governing your use of our platform and services.',
  alternates: {
    canonical: 'https://www.a2v2.ai/terms-and-conditions',
  },
}

export default function TermsAndConditionsPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />
      <div className="bg-background">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <header className="mb-12">
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-base text-text-secondary">
              Last updated: March 24, 2026
            </p>
          </header>

          <article className="prose-blog">
            <h2>Agreement to Terms</h2>
            <p>
              A2V2.ai, Inc. and its subsidiaries (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the websites at A2V2.ai and related mobile applications (the &ldquo;Platform&rdquo;). By accessing or using the Platform, its content, products, or services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Services.
            </p>

            <h2>Arbitration Notice</h2>
            <p>
              Unless you opt out as described below, you agree that disputes between you and the Company will be resolved by <strong>binding individual arbitration</strong>. You waive your right to a jury trial and to participate in class action lawsuits or class-wide arbitration.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms at any time by posting changes to the Platform. Continued use after changes are posted constitutes acceptance. If you disagree, your remedy is to stop using the Services.
            </p>

            <h2>Eligibility</h2>
            <p>
              The Services are available to individuals who are at least <strong>18 years of age</strong> (or the age of majority in their jurisdiction) and located in states where we offer the Services. Individuals under 13 are prohibited from using the Services. Individuals between 13 and 18 may access educational materials only with parental consent.
            </p>

            <h2>Account Registration and Security</h2>
            <p>
              You must register an account to access the Services. You agree to provide accurate information, keep it current, and notify us immediately of any unauthorized use of your account at <strong>support@a2v2.ai</strong>. We may suspend or terminate accounts with inaccurate information.
            </p>

            <h2>Subscription Products and Services</h2>
            <p>
              Some products and services require a recurring subscription. Your payment method will be charged automatically at regular intervals until you cancel. You may cancel at any time by emailing <strong>support@a2v2.ai</strong> or through your online account.
            </p>
            <p>
              Cancellation takes effect at the end of the current billing period. Cancel at least <strong>7 days before your renewal date</strong> to avoid being charged. All fees are non-refundable, though we may provide refunds on a case-by-case basis at our discretion.
            </p>

            <h2>Use and Ownership</h2>
            <p>
              The Services and all content are protected by copyright law. We grant you a limited, non-transferable, revocable license to access and use the Services for personal use. All rights, title, and interest in the Services belong to the Company.
            </p>

            <h2>Your Relationship with Us</h2>
            <p>
              We are not a service provider. Using the Services does not create a professional-client relationship with the Company. We may connect you with third-party affiliates who provide services independently. Those affiliates are solely responsible for their services.
            </p>

            <h2>Financial Responsibility</h2>
            <p>
              You are solely responsible for the costs of any products or services purchased through the Services.
            </p>

            <h2>HIPAA and Healthcare Data</h2>
            <p>
              For users of our healthcare-related products, the Company maintains HIPAA compliance. Protected Health Information is handled in accordance with applicable regulations. We sign Business Associate Agreements with applicable clients. Patient data is never used to train external AI models or shared with unauthorized parties.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate your access to the Services at any time, for any reason, without notice.
            </p>

            <h2>Disclaimers</h2>
            <p className="uppercase text-sm leading-relaxed">
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2>Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">
              To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or exemplary damages. Our total liability shall not exceed $1,000 USD. Claims must be brought within one (1) year of the event giving rise to the claim.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold the Company harmless from any claims, damages, losses, or expenses arising from your use of the Services, your violation of these Terms, or your violation of any rights of any third party.
            </p>

            <h2>Electronic Communications</h2>
            <p>
              By using the Services, you consent to receive communications from us electronically. You agree that electronic communications satisfy any legal requirement for written communication.
            </p>

            <h2>Copyright</h2>
            <p>
              If you believe your copyrighted work has been infringed on our Platform, contact our Copyright Agent at <strong>support@a2v2.ai</strong> with the required information as specified under the Digital Millennium Copyright Act (DMCA).
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of the Services is also governed by our Privacy Policy, available at{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                /privacy-policy
              </Link>.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at <strong>support@a2v2.ai</strong>.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
