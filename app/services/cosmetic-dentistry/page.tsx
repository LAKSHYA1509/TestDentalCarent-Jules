import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Services - Delhi Dental Care Center",
  description:
    "Transform your smile with our cosmetic dentistry services including veneers, bonding, smile makeovers, and more.",
}

export default function CosmeticDentistryPage() {
  return (
    <div>
   <section className="relative aspect-[23/10] overflow-hidden">
            <picture>
              <Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1762166923/2_jpdw09.png"
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
                Our Cosmetic Dentistry Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Porcelain Veneers</h3>
                <img
                  src="https://images.pexels.com/photos/6627370/pexels-photo-6627370.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Veneers"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Thin, custom-made shells that cover the front surface of teeth to improve appearance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Natural-looking results</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Stain-resistant material</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Long-lasting solution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Dental Bonding</h3>
                <img
                  src="https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bonding"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Quick and affordable way to repair chipped, cracked, or discolored teeth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Single-visit procedure</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cost-effective solution</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Minimal tooth preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Smile Makeover</h3>
                <img
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Smile Makeover"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Comprehensive treatment combining multiple procedures for complete smile transformation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Customized treatment plan</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Digital smile preview</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Dramatic results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Gum Contouring</h3>
                <img
                  src="https://images.pexels.com/photos/6627613/pexels-photo-6627613.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gum Contouring"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Reshape your gum line for a more balanced and aesthetically pleasing smile.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Laser technology available</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Minimal discomfort</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quick healing time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Tooth Reshaping</h3>
                <img
                  src="https://images.pexels.com/photos/6627466/pexels-photo-6627466.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tooth Reshaping"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Subtle changes to tooth shape can create significant improvements in your smile.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Conservative approach</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Immediate results</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Pain-free procedure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-[#8ec4df]/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#233870]">Full Mouth Rehabilitation</h3>
                <img
                  src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Full Mouth Rehabilitation"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-gray-600 mb-4">
                  Comprehensive restoration of all teeth for optimal function and aesthetics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Personalized treatment</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced techniques</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Life-changing results</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-bold text-[#233870] mb-6">The Cosmetic Dentistry Process</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your journey to a beautiful smile begins with a comprehensive consultation. We'll discuss your goals,
              examine your teeth and gums, and use advanced digital imaging to show you what your new smile could look
              like. This allows us to create a customized treatment plan that addresses your specific needs and desires.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the latest technology and materials to ensure natural-looking results that complement your facial
              features. Our cosmetic procedures are designed to not only improve the appearance of your teeth but also
              maintain their health and function.
            </p>
          </div>

          <div className="bg-[#8ec4df]/10 rounded-2xl p-8 border border-[#8ec4df]/20">
            <h2 className="text-2xl font-bold text-[#233870] mb-6 text-center">Before & After Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#233870]">Before Your Procedure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comprehensive oral examination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Digital smile design preview</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Detailed treatment plan discussion</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#233870]">After Your Procedure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Detailed aftercare instructions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Follow-up appointments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0085c4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Ongoing maintenance support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#0085c4] to-[#233870] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(142,196,223,0.1),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Ready for Your Dream Smile?</h2>
          <p className="text-xl text-white/90 mb-10 text-pretty">Schedule your cosmetic dentistry consultation today</p>
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
  )
}
