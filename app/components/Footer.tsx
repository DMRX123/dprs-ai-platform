import { Code, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-[#4ecdc4]" />
              <h2 className="text-xl font-bold gradient-text">DPRS Developers</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Professional Web & Flutter Development Services. We build high-quality websites and cross-platform mobile applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-[#4ecdc4] transition">Home</a></li>
              <li><a href="#services" className="hover:text-[#4ecdc4] transition">Services</a></li>
              <li><a href="#quote" className="hover:text-[#4ecdc4] transition">Get Quote</a></li>
              <li><a href="#portfolio" className="hover:text-[#4ecdc4] transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#4ecdc4] transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#4ecdc4] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#4ecdc4] transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ff6b6b]" /> by DPRS Developers
          </p>
          <p className="mt-2">© 2026 DPRS. All rights reserved. | Web & Flutter Development Experts</p>
        </div>
      </div>
    </footer>
  )
}