import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { conditions } from '@/data/conditions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Leura Mobile Physio',
  description: 'We treat a range of conditions including orthopaedic injuries, older person\'s health, cardiovascular conditions, disability support, falls prevention, and neurological conditions.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16 md:py-20">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We treat a range of conditions with evidence-based and individually tailored care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {conditions.map((condition) => (
              <ServiceCard
                key={condition.id}
                title={condition.name}
                description={condition.description}
                icon="✓"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-sage-600 font-bold mb-2">Expertise & Experience</h3>
                <p className="text-gray-600">
                  With over 15 years of clinical experience, Sarah brings expertise and knowledge to every consultation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-sage-600 font-bold mb-2">Personalized Care</h3>
                <p className="text-gray-600">
                  Each consultation is tailored to you. We develop treatment plans that address your unique needs and help you reach your personal goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-sage-600 font-bold mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Mobile service means no need to travel to a clinic. We bring physiotherapy to you in a comfortable, familiar environment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-sage-600 font-bold mb-2">Evidence-Based Treatment</h3>
                <p className="text-gray-600">
                  All treatment approaches are grounded in the latest research and clinical best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-8">Ready to Get Started?</h2>
          <Link href="/contact" className="btn-primary">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
