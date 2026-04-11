import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | DPRS Web & Flutter Development',
  description: 'Privacy policy for DPRS development services - How we protect your data',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#4ecdc4] hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
        
        <div className="space-y-8 text-gray-300">
          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">1. Information We Collect</h2>
            <p className="mb-3">As a freelance development service provider, we collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number (provided voluntarily by you)</li>
              <li><strong>Project Information:</strong> Project requirements, budget range, timeline preferences</li>
              <li><strong>Communication Data:</strong> Email correspondence, chat history, call records</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information (for analytics)</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>✓ To respond to your inquiries and provide project quotes</li>
              <li>✓ To communicate about your project status and updates</li>
              <li>✓ To improve our services and client experience</li>
              <li>✓ To send important service-related announcements</li>
              <li>✗ We do NOT sell, rent, or trade your personal information</li>
              <li>✗ We do NOT share your data with third parties for marketing</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">3. Data Security</h2>
            <p className="mb-3">We implement industry-standard security measures:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>🔒 SSL/TLS encryption for all data transmission</li>
              <li>🔒 Secure email communication via Gmail SMTP</li>
              <li>🔒 No permanent storage of sensitive financial data</li>
              <li>🔒 Regular security audits and updates</li>
              <li>🔒 Rate limiting to prevent abuse</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">4. Cookies & Tracking</h2>
            <p>We use essential cookies for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>🍪 Analytics to improve user experience</li>
              <li>🍪 Performance monitoring</li>
              <li>🍪 Form data persistence</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">You can disable cookies in your browser settings, but some features may not work properly.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">5. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact form submissions: 6 months</li>
              <li>Project inquiries: Until project completion</li>
              <li>Email correspondence: As long as necessary for project completion</li>
              <li>You can request deletion anytime by emailing contact@dprs.in</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">6. Your Rights</h2>
            <p>Under Indian IT Act and GDPR principles, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>📋 Access your personal data</li>
              <li>✏️ Correct inaccurate data</li>
              <li>🗑️ Request data deletion</li>
              <li>⛔ Object to data processing</li>
              <li>📥 Data portability</li>
            </ul>
            <p className="mt-3">To exercise these rights, email: <strong className="text-[#4ecdc4]">contact@dprs.in</strong></p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">7. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>📧 <strong>Gmail (Google)</strong> - For email communication</li>
              <li>📊 <strong>Vercel Analytics</strong> - For performance monitoring</li>
              <li>🔗 <strong>GitHub</strong> - For code hosting (portfolio links)</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">These services have their own privacy policies. We recommend reviewing them.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">8. Children's Privacy</h2>
            <p>Our services are not intended for children under 13. We do not knowingly collect data from children.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">9. Changes to This Policy</h2>
            <p>We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">10. Contact Us</h2>
            <p>For privacy concerns or data requests:</p>
            <ul className="list-none space-y-2 mt-2">
              <li>📧 Email: <strong className="text-[#4ecdc4]">contact@dprs.in</strong></li>
              <li>📞 Phone: <strong>+91 8839094644</strong></li>
              <li>📍 Location: <strong>India (Remote)</strong></li>
            </ul>
          </section>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mt-8">
            <p className="text-yellow-400 font-semibold mb-2">⚠️ Disclaimer</p>
            <p className="text-sm text-yellow-300/80">
              DPRS is currently operating as an individual/freelance service provider. 
              Business registration is in progress. All data handling follows best practices 
              and Indian IT laws. For projects above ₹50,000, a formal agreement will be signed.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/#contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Us for Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}