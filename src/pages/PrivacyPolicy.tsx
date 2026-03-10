import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <StickyNav />
    <main className="container mx-auto px-4 py-16 max-w-3xl text-foreground">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 10, 2026</p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">1. Introduction</h2>
          <p>Refined Aesthetics Med Spa ("we," "us," or "our"), located at 108 Church St., Suite B, SE, Leesburg, VA 20175, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">2. Information We Collect</h2>
          <h3 className="font-semibold mb-2">Personal Information</h3>
          <p className="mb-3">We may collect personal information that you voluntarily provide, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Date of birth</li>
            <li>Medical history and health information relevant to treatments</li>
            <li>Payment and billing information</li>
            <li>Before-and-after photographs (with consent)</li>
          </ul>
          <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed. We may also use cookies, web beacons, and similar tracking technologies.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">3. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schedule and manage appointments</li>
            <li>Provide medical aesthetic treatments and services</li>
            <li>Process payments and send transaction confirmations</li>
            <li>Communicate with you about promotions, offers, and updates (with your consent)</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve our website, services, and patient experience</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Maintain accurate medical records as required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">4. HIPAA Compliance</h2>
          <p>As a medical aesthetics provider, we are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information (PHI) is handled in accordance with HIPAA privacy and security rules. We maintain appropriate administrative, technical, and physical safeguards to protect your PHI. A separate Notice of Privacy Practices is available upon request at our office.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">5. Disclosure of Your Information</h2>
          <p className="mb-3">We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website, processing payments, or delivering services (e.g., payment processors, email marketing platforms, scheduling software)</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">6. Cookies and Tracking Technologies</h2>
          <p className="mb-3">Our website uses cookies and similar technologies to enhance your browsing experience. These may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
          </ul>
          <p className="mt-3">You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">8. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">9. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Medical records are retained in accordance with applicable Virginia state law and federal regulations.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">10. Your Rights</h2>
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information (subject to legal exceptions)</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us using the information provided below.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">11. Children's Privacy</h2>
          <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">12. Changes to This Privacy Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-primary">13. Contact Us</h2>
          <p className="mb-2">If you have questions or concerns about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
