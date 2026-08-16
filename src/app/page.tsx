import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { conditions } from '@/data/conditions';

export default function Home() {
  const featuredConditions = conditions.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fffcf7] py-6 md:py-9">
        <div className="container-custom px-4 py-3 md:px-6 md:py-5">
          <div className="flex flex-col items-center text-center gap-3 md:gap-5">
            <div className="flex justify-center bg-[#fffcf7] p-2 rounded-lg">
              <Image
                src="/logo.jpeg"
                alt="Leura Mobile Physio Logo"
                width={520}
                height={520}
                loading="eager"
                className="h-[8rem] w-auto rounded-lg md:h-[11.2rem]"
              />
            </div>
            {/* <div className="flex gap-3 flex-wrap justify-center pt-2">
              <Link href="/services" className="btn-primary">
                View Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book Appointment
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Personalised, evidence-based physiotherapy services tailored to your unique needs. As a mobile physiotherapy service, we come to you.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredConditions.map((condition) => (
              <ServiceCard
                key={condition.id}
                title={condition.name}
                description={condition.description}
                icon="🏥"
              />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Transparent Pricing</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Initial Consultation</span>
                  <span className="text-lg font-bold text-sage-600">$180</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Follow-up Consultation</span>
                  <span className="text-lg font-bold text-sage-600">$140</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Extended Consultation</span>
                  <span className="text-lg font-bold text-sage-600">$180</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Travel fees apply based on distance from Leura. Contact us for details.
              </p>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="btn-primary">
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sage-500 to-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Start Your Recovery?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to book your consultation and begin your journey to better health.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-sage-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
