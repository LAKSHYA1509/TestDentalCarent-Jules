import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "General Dentistry Services in Delhi | Checkups, Cleanings & More",
  description:
    "Comprehensive general dentistry services in Delhi including routine checkups, professional cleanings, fillings, gum disease treatment & preventive care. Book your appointment today!",
  keywords:
    "general dentistry delhi, dental checkup delhi, teeth cleaning delhi, cavity filling delhi, gum disease treatment",
  openGraph: {
    title: "General Dentistry Services - Delhi Dental Care Center",
    description: "Professional general dentistry services with experienced dentists",
  },
}

export default function GeneralDentistryPage() {
  return (
    <div>
      <ServiceSchema
        name="General Dentistry"
        description="Comprehensive general dentistry services including checkups, cleanings, fillings, and preventive care"
        url="https://delhidentalcare.com/services/general-dentistry"
      />
      <BreadcrumbSchema
        items={[{ name: "Services", url: "https://delhidentalcare.com/services" }, { name: "General Dentistry" }]}
      />
      <div className="min-h-screen">
        <section className="relative aspect-[18/9] sm:aspect-[21/9] lg:aspect-[16/7] overflow-hidden z-0">
            <picture>
              {/* Mobile image first */}
              <source
                media="(max-width: 768px)"
                srcSet="https://res.cloudinary.com/dajphu5rf/image/upload/v1761913528/genral_mcjlek.png"
              />
              {/* Desktop fallback */}
              <Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1761904331/banner_1_w0z5rf.png"
                alt="General Dentistry - Delhi Dental Care"
                fill
                className="object-cover object-center sm:object-top"
                priority
              />
            </picture>
          </section>
          <section className="py-16">
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
                Our General Dentistry Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive dental care tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#8ec4df]/30 hover:border-[#0085c4] transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#8ec4df]/20 flex items-center justify-center mb-4">
                      <CheckCircle className="h-7 w-7 text-[#0085c4]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#233870]">Dental Checkups & Examinations</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Regular dental examinations are crucial for maintaining optimal oral health. Our comprehensive
                      checkups include:
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Complete oral examination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Digital X-rays for accurate diagnosis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Oral cancer screening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Gum disease assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#8ec4df]/30 hover:border-[#0085c4] transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#8ec4df]/20 flex items-center justify-center mb-4">
                      <CheckCircle className="h-7 w-7 text-[#0085c4]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#233870]">Professional Teeth Cleaning</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Professional cleaning removes plaque and tartar that regular brushing cannot reach:
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Ultrasonic scaling for thorough cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Polishing for smooth, bright teeth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Fluoride treatment for cavity protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Stain removal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#8ec4df]/30 hover:border-[#0085c4] transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#8ec4df]/20 flex items-center justify-center mb-4">
                      <CheckCircle className="h-7 w-7 text-[#0085c4]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#233870]">Cavity Treatment & Fillings</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      We offer advanced filling solutions to restore damaged teeth:
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Tooth-colored composite fillings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Pain-free procedures with local anesthesia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Long-lasting, natural-looking results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Same-day treatment available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#8ec4df]/30 hover:border-[#0085c4] transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#8ec4df]/20 flex items-center justify-center mb-4">
                      <CheckCircle className="h-7 w-7 text-[#0085c4]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#233870]">Gum Disease Treatment</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Early detection and treatment of gum disease can prevent serious complications:
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Deep cleaning (scaling and root planing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Antibiotic therapy when needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Ongoing maintenance programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0085c4] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Patient education for prevention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            </div>
            </div>
            </section>

            <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#233870] to-[#0085c4] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(142,196,223,0.1),transparent_50%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center text-balance">
              Why Choose Delhi Dental Care?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">15+</div>
                <div className="text-lg text-white/90">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">10,000+</div>
                <div className="text-lg text-white/90">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-lg text-white/90">Satisfaction Rate</div>
              </div>
            </div>
            </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-28 bg-muted/30">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#233870] mb-6 text-balance">
                    Preventive Care Philosophy
                  </h2>
                </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Delhi Dental Care Center, we believe that prevention is the best medicine. Our general dentistry
                services are designed to catch problems early, before they become serious and costly. Regular checkups
                and cleanings, combined with good home care, can help you maintain your natural teeth for life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We recommend that most patients visit us every six months for routine checkups and cleanings. However,
                some patients with specific oral health concerns may benefit from more frequent visits. Our team will
                work with you to create a personalized care plan that meets your individual needs.
              </p>

              <div className="bg-card border-2 border-[#8ec4df]/30 rounded-2xl p-8 md:p-10 mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#233870] mb-6">What to Expect During Your Visit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your appointment will begin with a thorough examination of your teeth, gums, and mouth. We use the
                  latest digital X-ray technology to get a complete picture of your oral health. This technology uses
                  significantly less radiation than traditional X-rays while providing clearer, more detailed images.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  After your examination, our dental hygienist will perform a professional cleaning to remove plaque and
                  tartar buildup. We'll also provide personalized recommendations for improving your oral hygiene
                  routine at home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#0085c4] to-[#233870] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(142,196,223,0.1),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Schedule Your Checkup?
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
  )
}
