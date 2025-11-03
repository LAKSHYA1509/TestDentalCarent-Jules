import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pediatric Dentistry - Delhi Dental Care Center',
  description: 'Professional pediatric-dentistry services in Delhi',
};

export default function ServicePage() {
  return (
    <div>
            <div className="min-h-screen">
                    <section className="relative aspect-[23/10] overflow-hidden">
                        <picture>
                          <Image
                            src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762167051/9_ertgxf.png"
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
                Our Pediatric Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Single Tooth Implant"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Routine Checkups & Cleanings</h3>
                <p className="text-gray-600 mb-4">
                  Keep your child’s teeth healthy regularly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Prevents cavities and gum disease</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Monitors oral development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Gentle, child-friendly approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762165040/images_klwqbv.jpg"
                  alt="Multiple Implants"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Fluoride & Sealants</h3>
                <p className="text-gray-600 mb-4">
                  Protect teeth from decay effectively.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Strengthens enamel and prevents cavities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quick and painless application</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Long-lasting protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://lirp.cdn-website.com/37132b22/dms3rep/multi/opt/pexels-nadezhda-moryak-7800560-bf7c20b9-640w.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="All-on-4"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Early Orthodontic Evaluation</h3>
                <p className="text-gray-600 mb-4">
                  Detects bite or alignment issues early.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Guides jaw and teeth growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Prevents complicated future treatments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comfortable, kid-friendly assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <img
                  src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762165267/pexels-pixabay-52527_stgjw9.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Implant Dentures"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold mb-4">Emergency Dental Care</h3>
                <p className="text-gray-600 mb-4">
                  Immediate care for dental injuries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Treats pain, broken or knocked-out teeth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Fast, professional response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduces risk of long-term issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Implant Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Welcome & Assessment</h3>
                <p className="text-sm text-gray-600">Friendly checkup and oral evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Cleaning & Prevention</h3>
                <p className="text-sm text-gray-600">Teeth cleaning, fluoride, or sealants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Treatment Planning</h3>
                <p className="text-sm text-gray-600">Identify cavities or alignment needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Education & Guidance</h3>
                <p className="text-sm text-gray-600">Teach brushing, flossing, and habits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 className="font-bold mb-2">Follow Up</h3>
                <p className="text-sm text-gray-600">Schedule next Checkup or Treatment</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Pediatric Dentistry?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pediatric dentistry focuses on children’s unique oral health needs. From preventing cavities to monitoring growth and development, early dental care ensures a lifetime of healthy smiles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our child-friendly approach makes visits comfortable and enjoyable, helping kids build good oral hygiene habits while addressing dental issues promptly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Regular pediatric care helps prevent problems before they start, making dental visits positive and ensuring long-term oral health for your child.
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
