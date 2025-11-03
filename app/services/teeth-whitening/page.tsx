import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Teeth Whitening - Delhi Dental Care Center',
  description: 'Professional teeth-whitening services in Delhi',
};

export default function ServicePage() {
  return (
     <div>
            <div className="min-h-screen">
                    <section className="relative aspect-[23/10] overflow-hidden">
                        <picture>
                          <Image
                            src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762167080/5_uemnqt.png"
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
                Our Teeth Whitening Services
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
                <h3 className="text-xl font-bold mb-4">In-Office Professional Teeth Whitening</h3>
                <p className="text-gray-600 mb-4">
                  Brighten your smile instantly with a professional whitening treatment performed by your dentist.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Delivers immediate and long-lasting results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Safe and effective for all tooth types</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Removes deep stains from coffee, tea, and smoking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6529108/pexels-photo-6529108.jpeg?_gl=1?auto=compress&cs=tinysrgb&w=800"
                  alt="Multiple Implants"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Laser Teeth Whitening</h3>
                <p className="text-gray-600 mb-4">
                  Achieve a dramatically whiter smile in under an hour using advanced laser technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Fast and pain-free procedure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Provides visibly lighter teeth in one session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Performed under expert supervision for safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://tendercaredental.net/wp-content/uploads/2024/07/pexels-gustavo-fring-5622271-scaled-e1720207147652.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="All-on-4"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">At-Home Whitening Kits (Custom Trays)</h3>
                <p className="text-gray-600 mb-4">
                  Whiten your teeth at your convenience with custom-fit trays and professional-grade whitening gel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Easy and comfortable to use</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Gradual, controlled whitening results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Designed and monitored by your dentist</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Implant Dentures"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Whitening for Sensitive Teeth</h3>
                <p className="text-gray-600 mb-4">
                  Gentle whitening solutions specially designed for patients with sensitive teeth or gums.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Minimizes tooth and gum sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Provides safe, effective whitening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom treatment plans for comfort and care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Whitening Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">Smile assessment and shade evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Cleaning</h3>
                <p className="text-sm text-gray-600">Remove plaque and surface stains</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Whitening Treatment</h3>
                <p className="text-sm text-gray-600">Apply professional-grade whitening gel</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Activation</h3>
                <p className="text-sm text-gray-600">Laser or light enhances whitening effect</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 className="font-bold mb-2">Results</h3>
                <p className="text-gray-600 text-sm">Instantly Brighter, Radiant Smile</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Do Teeth Whitening?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Teeth whitening is one of the most effective ways to enhance your smile’s appearance. It helps remove years of discoloration caused by coffee, tea, wine, smoking, and natural aging, restoring your teeth to a brighter, more youthful shade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Professional whitening treatments are safer and more effective than over-the-counter options, as they use advanced formulas applied under the supervision of a dental professional to ensure even, lasting results without damaging enamel.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With proper care and occasional touch-ups, your whiter smile can last for years—helping you look more confident, radiant, and ready to show off your best self.
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
              Ready to Make your Smile Shine!
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