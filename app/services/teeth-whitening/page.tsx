import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Whitening - Delhi Dental Care Center',
  description: 'Professional teeth-whitening services in Delhi',
};

export default function ServicePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Teeth Whitening
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expert teeth-whitening treatments with advanced technology and experienced professionals.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Schedule Appointment</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Teeth Whitening"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Teeth Whitening Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide comprehensive teeth-whitening treatments using the latest technology and techniques. Our experienced team ensures comfortable, effective care tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Expert Care Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your appointment for professional teeth-whitening treatment
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
