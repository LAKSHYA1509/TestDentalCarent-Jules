import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Orthodontics - Braces & Aligners - Delhi Dental Care Center',
  description: 'Straighten your teeth with braces, clear aligners, and modern orthodontic solutions.',
};

export default function OrthodonticsPage() {
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
                Orthodontics
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Achieve a perfectly aligned smile with our comprehensive orthodontic treatments. From traditional braces to clear aligners, we offer solutions for all ages.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Orthodontics"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Orthodontic Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Traditional Braces"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Traditional Braces</h3>
                <p className="text-gray-600 mb-4">
                  Effective treatment for complex alignment issues.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Most cost-effective option</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Treats complex cases</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reliable results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627478/pexels-photo-6627478.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ceramic Braces"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Ceramic Braces</h3>
                <p className="text-gray-600 mb-4">
                  Less visible alternative to metal braces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Tooth-colored brackets</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">More aesthetic</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Same effectiveness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627482/pexels-photo-6627482.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Clear Aligners"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Clear Aligners</h3>
                <p className="text-gray-600 mb-4">
                  Nearly invisible, removable orthodontic solution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Virtually invisible</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Removable for eating</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comfortable fit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Duration</h2>
            <p className="text-gray-600 mb-8">Most orthodontic treatments take 12-24 months, depending on the complexity of your case.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12-18</div>
                <div className="text-gray-600">Months (Average)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">All Ages</div>
                <div className="text-gray-600">Children & Adults</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Customized Plans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Smile Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free orthodontic consultation today
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
