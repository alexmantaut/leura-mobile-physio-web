import Link from 'next/link';
import { pricing } from '@/data/pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Leura Mobile Physio',
  description: 'Transparent pricing for physiotherapy consultations. Initial consultation $180, follow-up $140, with travel fees based on distance.',
};

export default function PricingPage() {
  const consultations = pricing.slice(0, 3);
  const travelFees = pricing.slice(3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16 md:py-20">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="mb-4">Our Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent, fair pricing with no hidden fees. We believe quality physiotherapy should be accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Consultation Pricing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Consultation Pricing</h2>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                {consultations.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      index !== consultations.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{item.type}</p>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-sage-600">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Inclusion Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <p className="font-semibold text-green-900 mb-1">Travel Included</p>
              <p className="text-green-900">
                Travel costs to Katoomba and Bullaburra are included in all consultation prices. No additional travel fees apply for clients in these areas.
              </p>
            </div>

            {/* Additional Travel Fees */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Travel Fees</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-900">
                  Additional travel fees apply based on distance from Leura. Additional time and fuel costs are calculated as follows:
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                {travelFees.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-6 ${
                      index !== travelFees.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{item.type}</p>
                    <p className="text-2xl font-bold text-sage-600">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Do you accept Medicare referrals?</h3>
                  <p className="text-gray-600">
                    Yes! Chronic Disease Management/Medicare Benefit Scheme referrals from GPs are welcome.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I claim the cost through insurance or NDIS?</h3>
                  <p className="text-gray-600">
                    Yes! Our services are eligible for NDIS funding. We can also provide invoices for insurance claims. Contact us for specific information about your coverage.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I need to cancel an appointment?</h3>
                  <p className="text-gray-600">
                    We require 24 hours notice for cancellations. Cancellations made with less notice may incur a cancellation fee. Please contact us to reschedule.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How many sessions will I need?</h3>
                  <p className="text-gray-600">
                    The number of sessions depends on your condition and recovery goals. During your initial consultation, we'll discuss an estimated treatment plan and timeline with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sage-500 to-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Questions About Pricing?</h2>
          <p className="text-lg mb-8 opacity-90">
            Don't hesitate to reach out. We're happy to discuss your specific needs and circumstances.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-sage-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
