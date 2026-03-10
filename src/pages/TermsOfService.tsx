import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <>
    <StickyNav />
    <main className="container mx-auto px-4 py-16 max-w-3xl text-foreground">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 10, 2026</p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">1. Acceptance of Terms</h2>
          <p>By accessing or using the website and services of Refined Aesthetics Med Spa ("we," "us," or "our"), located at 108 Church St., Suite B, SE, Leesburg, VA 20175, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">2. Services</h2>
          <p>Refined Aesthetics Med Spa provides medical aesthetic treatments and related services, including but not limited to injectable treatments (Botox, dermal fillers), skin rejuvenation, and other cosmetic procedures. All treatments are performed by licensed medical professionals under appropriate supervision.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">3. Eligibility</h2>
          <p>You must be at least 18 years of age to use our services. By using our website and scheduling an appointment, you represent that you are at least 18 years old and have the legal capacity to enter into a binding agreement.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">4. Appointments and Scheduling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Appointments can be scheduled through our website, by phone, or in person.</li>
            <li>We require at least 24 hours' notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.</li>
            <li>We reserve the right to cancel or reschedule appointments at our discretion.</li>
            <li>Arriving more than 15 minutes late may result in your appointment being rescheduled.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">5. Medical Disclaimer</h2>
          <p className="mb-3">The information provided on our website is for general informational purposes only and does not constitute medical advice. It is not intended to replace a consultation with a qualified healthcare provider.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Results from treatments vary by individual and are not guaranteed.</li>
            <li>All treatments carry potential risks and side effects, which will be discussed during your consultation.</li>
            <li>You are required to provide accurate and complete medical history prior to treatment.</li>
            <li>You must disclose all medications, supplements, and medical conditions before any procedure.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">6. Informed Consent</h2>
          <p>Prior to any treatment, you will be required to sign an informed consent form that outlines the procedure, expected results, potential risks, side effects, and aftercare instructions. Treatments will not be performed without a signed consent form.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">7. Pricing and Payment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices are listed in U.S. dollars and are subject to change without prior notice.</li>
            <li>Payment is due at the time of service unless otherwise arranged.</li>
            <li>We accept major credit cards, debit cards, and other payment methods as specified.</li>
            <li>Promotional offers, gift certificates, and discounts cannot be combined unless explicitly stated.</li>
            <li>Gift certificates are non-refundable and non-transferable unless otherwise noted.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">8. Promotional Offers and Gift Certificates</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Promotional offers are valid for a limited time and subject to specific terms and conditions.</li>
            <li>Gift certificates must be redeemed within the timeframe specified at the time of issuance.</li>
            <li>Gift certificates have no cash value and cannot be exchanged for cash.</li>
            <li>We reserve the right to modify or discontinue any promotional offer at any time.</li>
            <li>One promotional offer per person per visit unless otherwise stated.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">9. Refund and Return Policy</h2>
          <p>Due to the nature of medical aesthetic services, all sales are final. Refunds are not provided for completed treatments. If you are dissatisfied with your results, please contact us to discuss your concerns and explore available options, including complimentary follow-up consultations.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">10. Intellectual Property</h2>
          <p>All content on our website, including text, images, logos, graphics, and design elements, is the property of Refined Aesthetics Med Spa and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">11. User Conduct</h2>
          <p className="mb-3">When using our website, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the website for any unlawful purpose</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Interfere with or disrupt the website's functionality</li>
            <li>Upload or transmit viruses or malicious code</li>
            <li>Scrape, harvest, or collect information from the website without authorization</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">12. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Refined Aesthetics Med Spa, its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">13. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Refined Aesthetics Med Spa, its owners, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of our website or services, your violation of these Terms, or your violation of any rights of a third party.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">14. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the courts of Loudoun County, Virginia.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">15. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">16. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or services after changes are posted constitutes your acceptance of the updated Terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">17. Contact Us</h2>
          <p className="mb-2">If you have questions about these Terms of Service, please contact us:</p>
          <div className="bg-card p-4 rounded border border-border">
            <p className="font-semibold">Refined Aesthetics Med Spa</p>
            <p>108 Church St., Suite B, SE</p>
            <p>Leesburg, VA 20175</p>
            <p>Phone: <a href="tel:7037945689" className="text-accent hover:underline">(703) 794-5689</a></p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TermsOfService;
