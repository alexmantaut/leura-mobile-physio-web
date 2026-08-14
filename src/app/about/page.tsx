import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sarah | Leura Mobile Physio',
  description: 'Meet Sarah Tiong, an experienced physiotherapist with over 15 years of clinical expertise providing high-quality, personalized care.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16 md:py-20">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="mb-4">About Sarah Tiong</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced physiotherapist dedicated to providing high quality, personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Image Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="overflow-hidden rounded-lg border-2 border-sage-200 bg-sage-50 shadow-lg">
                  <Image
                    src="/sarah.jpeg"
                    alt="Sarah Tiong"
                    width={800}
                    height={1000}
                    className="h-[28rem] w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div>
                <h2 className="mb-6">Introducing Sarah</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With over 15 years of clinical experience, Sarah is passionate about providing high quality physiotherapy that is accessible to her local community. She believes that everyone deserves professional, compassionate care regardless of their circumstances.
                  </p>
                  <p>
                    Sarah's approach is person-centered and evidence-based. She takes time to understand your unique situation, develop a tailored treatment plan, and empower you to take an active role in your recovery.
                  </p>
                  <p>
                    Whether you're recovering from an injury, managing a chronic condition, or looking to improve your mobility and wellbeing, Sarah's goal is to help you achieve your health objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-center">Qualifications & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-sage-600 mb-3">Professional Credentials</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Bachelor of Physiotherapy</li>
                  <li>✓ Postgraduate diploma in Rehabilitation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-sage-600 mb-3">Areas of Expertise</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Orthopaedic rehabilitation</li>
                  <li>✓ Older person's health & balance</li>
                  <li>✓ Cardiovascular conditions</li>
                  <li>✓ Neurological conditions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-sage-600 mb-3">Special Interests</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ NDIS support coordination</li>
                  <li>✓ Chronic pain management</li>
                  <li>✓ Falls prevention programs</li>
                  <li>✓ Disability support services</li>
                  <li>✓ Community health</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-sage-600 mb-3">Treatment Philosophy</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Evidence-based practice</li>
                  <li>✓ Person-centered care</li>
                  <li>✓ Holistic approach</li>
                  <li>✓ Empowerment & education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="border-l-4 border-sage-500 pl-6">
              <p className="text-2xl font-semibold text-gray-900 italic">
                "I'm interested in providing a high quality physiotherapy service that is accessible for my local community"
              </p>
              <p className="text-sage-600 font-medium mt-4">— Sarah Tiong, Physiotherapist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sage-500 to-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Work with Sarah</h2>
          <p className="text-lg mb-8 opacity-90">
            Let Sarah help you achieve your health and recovery goals with personalized, professional physiotherapy care.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-sage-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
