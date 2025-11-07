import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Award, Clock, Shield, Users, Star } from 'lucide-react';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/json-ld';

export const metadata = {
  title: 'Delhi Dental Care Center - Best Dentist in Delhi | Premium Dental Services',
  description: 'Experience world-class dental care in Delhi. Offering general dentistry, cosmetic dentistry, orthodontics, dental implants & more. Book your appointment today!',
  keywords: 'dentist delhi, dental clinic delhi, teeth whitening delhi, dental implants delhi, orthodontics delhi, cosmetic dentistry',
  openGraph: {
    title: 'Delhi Dental Care Center - Best Dentist in Delhi',
    description: 'Premier dental care with state-of-the-art technology and experienced professionals',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <div>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Smile is Our
                <span className="text-blue-600"> Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience world-class dental care with state-of-the-art technology and compassionate professionals. We're committed to giving you the healthy, beautiful smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1761893170/home_page_hero_image_1_qdfmnd.png"
                alt="Happy patient with beautiful smile at Delhi Dental Care Center"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1761893170/home_page_hero_image_2_hnkdbm.png"
                alt="Modern dental treatment room with advanced equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Dental Facility
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our clinic features the latest dental technology and equipment, ensuring you receive the most advanced care available. From digital X-rays to laser dentistry, we invest in technology that makes your treatment more comfortable, accurate, and efficient.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Sterilization & Safety</span>
                    <p className="text-gray-600 text-sm">Highest standards of infection control</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Digital Technology</span>
                    <p className="text-gray-600 text-sm">90% less radiation than traditional X-rays</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Smile className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Comfort First</span>
                    <p className="text-gray-600 text-sm">Relaxing atmosphere with patient amenities</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delhi Dental Care Center?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and compassionate care to provide exceptional dental services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Expert Dentists</CardTitle>
                <CardDescription>
                  Highly qualified and experienced dental professionals dedicated to your oral health.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Advanced Technology</CardTitle>
                <CardDescription>
                  State-of-the-art equipment ensuring precise diagnosis and comfortable treatments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Flexible Hours</CardTitle>
                <CardDescription>
                  Convenient scheduling options including evenings and weekends to fit your lifestyle.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Family Friendly</CardTitle>
                <CardDescription>
                  Comprehensive dental care for patients of all ages in a warm, welcoming environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Affordable Care</CardTitle>
                <CardDescription>
                  Quality dental services at competitive prices with flexible payment options.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Patient Comfort</CardTitle>
                <CardDescription>
                  Painless procedures and a relaxing atmosphere to ensure your complete comfort.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Dental Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'General Dentistry',
                description: 'Routine checkups, cleanings, and preventive care to maintain optimal oral health.',
              },
              {
                title: 'Cosmetic Dentistry',
                description: 'Enhance your smile with veneers, bonding, and professional whitening treatments.',
              },
              {
                title: 'Orthodontics',
                description: 'Straighten teeth with braces and clear aligners for a perfect smile.',
              },
              {
                title: 'Dental Implants',
                description: 'Permanent tooth replacement solutions that look and feel natural.',
              },
              {
                title: 'Root Canal Treatment',
                description: 'Pain-free procedures to save infected teeth and restore oral health.',
              },
              {
                title: 'Teeth Whitening',
                description: 'Professional whitening treatments for a brighter, more confident smile.',
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Best dental experience I've ever had! The staff is professional, friendly, and the clinic is spotless. Dr. Kumar explained everything clearly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I was nervous about getting dental implants, but the team made me feel comfortable. The results are amazing - my new teeth look completely natural!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">PS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">New Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "My children actually look forward to their dental visits now! The pediatric care is exceptional, and the staff is so patient with kids."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AV</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Amit Verma</p>
                    <p className="text-sm text-gray-500">South Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your appointment today and experience the difference of exceptional dental care.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Schedule Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}
