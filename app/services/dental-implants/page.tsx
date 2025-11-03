import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dental Implants - Delhi Dental Care Center',
  description: 'Permanent tooth replacement with dental implants. Natural-looking, long-lasting solution for missing teeth.',
};

export default function DentalImplantsPage() {
  return (
    <div>
            <div className="min-h-screen">
                    <section className="relative aspect-[23/10] overflow-hidden">
                        <picture>
                          <Image
                            src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762166935/6_egt1qe.png"
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
                Our Dental Implants Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627526/pexels-photo-6627526.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Single Tooth Implant"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Single Tooth Implants</h3>
                <p className="text-gray-600 mb-4">
                  Replace a single missing tooth without affecting adjacent healthy teeth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Preserves jawbone structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Looks and feels natural</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">No damage to neighboring teeth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Multiple Implants"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Multiple Tooth Implants</h3>
                <p className="text-gray-600 mb-4">
                  Replace several missing teeth with strategically placed implants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Fewer implants needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cost-effective solution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Permanent restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627540/pexels-photo-6627540.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="All-on-4"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">All-on-4 Implants</h3>
                <p className="text-gray-600 mb-4">
                  Full arch restoration using just four strategically placed implants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Immediate function possible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">No bone grafting often needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Complete smile transformation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Implant Dentures"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Implant-Supported Dentures</h3>
                <p className="text-gray-600 mb-4">
                  Secure, stable dentures anchored by dental implants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">No slipping or clicking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Improved chewing ability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">More confident speaking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Implant Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">Comprehensive exam and 3D imaging</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Placement</h3>
                <p className="text-sm text-gray-600">Surgical placement of implant post</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Healing</h3>
                <p className="text-sm text-gray-600">Osseointegration period (3-6 months)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Restoration</h3>
                <p className="text-sm text-gray-600">Custom crown placement</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Dental Implants?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dental implants offer numerous advantages over traditional tooth replacement options. Unlike bridges, implants don't require alteration of adjacent healthy teeth. Unlike dentures, they're permanently fixed in place and feel and function just like natural teeth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The titanium implant post fuses with your jawbone through a process called osseointegration, providing a stable foundation that helps preserve bone structure and prevent the facial sagging that can occur with missing teeth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With proper care, dental implants can last a lifetime, making them a cost-effective long-term solution for tooth replacement.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Rate & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years Lifespan</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Natural Function</div>
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
              Ready to Restore Your Smile?
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
