import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-2">
              Email:{' '}
              <a href="mailto:leuramobilephysio@gmail.com" className="text-sage-600 hover:text-sage-700">
                leuramobilephysio@gmail.com
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              Phone: <span className="text-gray-700">[Contact for details]</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sage-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-sage-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-sage-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sage-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Service Area</h3>
            <p className="text-gray-600 text-sm">
              Mobile physiotherapy provided within Leura and surrounding Blue Mountains areas.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Leura Mobile Physio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
