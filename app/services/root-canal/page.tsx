import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Root Canal - Delhi Dental Care Center',
  description: 'Professional root-canal services in Delhi',
};

export default function ServicePage() {
  return (
    <div>
            <div className="min-h-screen">
                    <section className="relative aspect-[23/10] overflow-hidden">
                        <picture>
                          <Image
                            src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762167070/3_lnaxpr.png"
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
                Our Root Canal Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800"
                  alt="Single Tooth Implant"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Conventional Root Canal Treatment</h3>
                <p className="text-gray-600 mb-4">
                  This is the standard procedure done when the tooth pulp is infected or inflamed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Involves removing the pulp, cleaning, disinfecting, and sealing the canals.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Restores tooth function and prevents extraction.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Completed in one or two visits using advanced cleaning and sealing techniques.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://abumaizar.com/wp-content/uploads/2025/07/pexels-gustavo-fring-4971514-scaled.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Multiple Implants"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Endodontic Retreatment</h3>
                <p className="text-gray-600 mb-4">
                  Sometimes, a tooth that has already had a root canal can become reinfected.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Specialized treatment for teeth that have previously undergone a root canal but developed new infection or complications.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Removes old filling material, disinfects the canal system, and reseals the tooth for long-term success.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Used when the first root canal failed due to new decay, cracks, or incomplete cleaning.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://s43932.pcdn.co/wp-content/uploads/sites/12/2023/05/Root-Canal_1493475077.jpg.optimal.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="All-on-4"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Apicoectomy (Surgical Root Canal)</h3>
                <p className="text-gray-600 mb-4">
                  If a reinfection persists after a regular root canal, a minor surgical procedure may be needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">A microsurgical procedure to treat persistent infection at the root tip.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Involves removing the end of the root and sealing the canal to stop infection spread.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Helps save teeth that cannot be treated with a conventional root canal.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://www.shutterstock.com/image-photo/photo-partial-pulpotomy-root-canal-260nw-1105154969.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Implant Dentures"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Pulpotomy (Partial Root Canal)</h3>
                <p className="text-gray-600 mb-4">
                  A complete removal of pulp from both the crown and roots of a tooth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">A conservative treatment that removes only the infected part of the pulp, keeping the healthy portion intact.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Common in pediatric dentistry to preserve primary (baby) teeth until natural exfoliation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Promotes continued tooth development and function.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Implant Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Examination & X-rays</h3>
                <p className="text-sm text-gray-600">Dentist examines and takes X-rays.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Local Anesthesia</h3>
                <p className="text-sm text-gray-600">Numbing medicine applied around tooth.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Access Opening</h3>
                <p className="text-sm text-gray-600">Small opening made in crown.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Pulp Removal</h3>
                <p className="text-sm text-gray-600">Custom crown placement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 className="font-bold mb-2">Disinfection & Filling</h3>
                <p className="text-sm text-gray-600">Canals disinfected and tightly filled.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">6</span>
                </div>
                <h3 className="font-bold mb-2">Sealing & Restoration</h3>
                <p className="text-sm text-gray-600">Tooth sealed and crown placed.</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Root Canal?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A root canal treatment helps save a severely decayed or infected tooth, preventing the need for extraction. It eliminates pain and infection while preserving your natural tooth structure.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            During the procedure, the infected pulp is removed, and the inside of the tooth is carefully cleaned, disinfected, and sealed to stop further bacterial growth and protect surrounding tissues.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With proper care and restoration, such as a crown, a tooth treated with a root canal can last a lifetime—maintaining both function and appearance.
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
