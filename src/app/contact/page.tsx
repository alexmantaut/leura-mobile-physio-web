import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Leura Mobile Physio',
  description: 'Get in touch with Leura Mobile Physio to book an appointment or ask about our services.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-6 md:py-9">
        <div className="container-custom px-4 py-3 md:px-6 md:py-5">
          <div className="text-center">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Ready to book an appointment? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:leuramobilephysio@gmail.com" className="text-sage-600 hover:text-sage-700">
                    leuramobilephysio@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Area</h3>
                  <p className="text-gray-600">
                    Mobile physiotherapy provided within Leura and surrounding Blue Mountains areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">NDIS Support</h3>
                  <p className="text-gray-600">
                    NDIS funding accepted. We can assist with claim submissions and coordination.
                  </p>
                </div>

                <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 mt-8">
                  <h3 className="font-semibold text-sage-900 mb-2">In an Emergency?</h3>
                  <p className="text-sage-800 text-sm">
                    For life-threatening emergencies, please contact emergency services (000) or attend your nearest hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Appointment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  We offer appointment times that work with your schedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-gray-900 mb-2">Home-Based Care</h3>
                <p className="text-gray-600 text-sm">
                  Sessions conducted in your home or preferred location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">
                  No hidden fees. See our pricing page for full details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
