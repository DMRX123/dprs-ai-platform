import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | DPRS Web & Flutter Development',
  description: 'Terms and conditions for using DPRS development services',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#05050a] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#4ecdc4] hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
        
        <div className="space-y-8 text-gray-300">
          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">1. Acceptance of Terms</h2>
            <p>By accessing and using DPRS development services, you agree to be bound by these Terms of Service. If you disagree with any part, please do not use our services.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">2. Services Provided</h2>
            <p>DPRS offers the following development services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>🌐 Website Development (React, Next.js, HTML/CSS/JS)</li>
              <li>📱 Flutter App Development (iOS, Android, Web, Windows)</li>
              <li>🍎 iOS App Development (Swift/SwiftUI)</li>
              <li>🤖 Android App Development (Kotlin/Java)</li>
              <li>💻 Windows Application Development</li>
              <li>🛒 E-commerce Website Development</li>
              <li>⚙️ Backend API Development</li>
              <li>🎨 UI/UX Design Services</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">3. Project Estimates & Quotes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project estimates are approximate and based on information provided</li>
              <li>Final pricing may vary after detailed requirement analysis</li>
              <li>Quotes are valid for 30 days from the date of issue</li>
              <li>Additional features may incur extra costs</li>
              <li>All prices are in Indian Rupees (INR) excluding GST</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">4. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Advance Payment:</strong> 30-50% advance for project initiation</li>
              <li><strong>Milestone Payments:</strong> Based on project milestones</li>
              <li><strong>Final Payment:</strong> Upon project completion and delivery</li>
              <li><strong>Payment Methods:</strong> Bank transfer, UPI, PayPal</li>
              <li><strong>Refund Policy:</strong> No refunds after work has commenced</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">5. Delivery & Timeline</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Timelines are estimates and may vary based on complexity</li>
              <li>Delays caused by client (delayed feedback, changes) will extend timeline</li>
              <li>Force majeure events may cause reasonable delays</li>
              <li>Regular progress updates will be provided via email/WhatsApp</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">6. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Upon Full Payment:</strong> Client owns the final delivered code</li>
              <li><strong>DPRS Rights:</strong> We retain rights to showcase the project in portfolio</li>
              <li><strong>Third-Party:</strong> Libraries, APIs, and assets have their own licenses</li>
              <li><strong>Source Code:</strong> Delivered via GitHub or direct transfer</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">7. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide clear project requirements and timely feedback</li>
              <li>Make milestone payments as agreed</li>
              <li>Provide necessary access, assets, and credentials</li>
              <li>Test deliverables and report issues within 7 days</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">8. Warranty & Support</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bug Fixes:</strong> 30 days free bug fixing after delivery</li>
              <li><strong>Support:</strong> Email support for 3 months (response within 48 hours)</li>
              <li><strong>Maintenance:</strong> Separate AMC available for long-term support</li>
              <li><strong>Hosting:</strong> Not included (client arranges own hosting)</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>DPRS is not liable for indirect, incidental, or consequential damages</li>
              <li>Maximum liability is limited to the total amount paid by client</li>
              <li>We are not responsible for third-party service disruptions</li>
              <li>No warranty for uninterrupted or error-free service</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">10. Termination</h2>
            <p>Either party may terminate the agreement with written notice:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Client termination: Paid work delivered, advance non-refundable</li>
              <li>DPRS termination: Refund of unutilized advance payment</li>
              <li>Immediate termination for breach of terms</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">11. Confidentiality</h2>
            <p>Both parties agree to keep confidential information private, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Business strategies and ideas</li>
              <li>Source code and technical specifications</li>
              <li>Client data and personal information</li>
              <li>Pricing and contract terms</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">12. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">13. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes become effective immediately upon posting.</p>
          </section>

          <section className="glass-card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ecdc4]">14. Contact Information</h2>
            <p>For questions about these Terms:</p>
            <ul className="list-none space-y-2 mt-2">
              <li>📧 Email: <strong className="text-[#4ecdc4]">contact@dprs.in</strong></li>
              <li>📞 Phone: <strong>+91 XXXXXXXXXX</strong></li>
            </ul>
          </section>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mt-8">
            <p className="text-green-400 font-semibold mb-2">📋 Summary for Clients</p>
            <ul className="text-sm text-green-300/80 space-y-1">
              <li>✓ Clear communication = Better results</li>
              <li>✓ Timely payments = Faster delivery</li>
              <li>✓ Detailed requirements = Accurate quotes</li>
              <li>✓ Regular feedback = Smooth development</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/#quote" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-full font-semibold hover:scale-105 transition"
            >
              Accept & Get Your Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}