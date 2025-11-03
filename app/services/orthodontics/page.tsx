import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Orthodontics - Braces & Aligners - Delhi Dental Care Center',
  description: 'Straighten your teeth with braces, clear aligners, and modern orthodontic solutions.',
};

export default function OrthodonticsPage() {
  return (
    <div>
            <div className="min-h-screen">
                    <section className="relative aspect-[23/10] overflow-hidden">
                        <picture>
                          <Image
                            src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762167008/4_cbclcm.png"
                            alt="General Dentistry - Delhi Dental Care"
                            fill
                            className="object-contain object-center sm:object-top"
                            priority
                          />
                        </picture>
                      </section>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 text-[#233870] hover:text-[#0085c4]">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Our Orthodontics Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div>
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
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#0085c4] to-[#233870] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(142,196,223,0.1),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to make your Smile Shine!
            </h2>
            <p className="text-xl text-white/90 mb-10 text-pretty">
              Maintain your oral health with regular dental care from experienced professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-[#233870] hover:bg-white/90 text-lg px-8 h-14">
                <Link href="/contact">Book Your Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
