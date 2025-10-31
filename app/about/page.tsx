import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Delhi Dental Care Center',
  description: 'Learn about Delhi Dental Care Center, our mission, values, and experienced team of dental professionals committed to your oral health.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Delhi Dental Care Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in dental care since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Delhi Dental Care Center was founded by Dr. Prachee Garg in 2012 with a vision to provide world-class dental care tailored to the needs of Indian families. Located in Moti Nagar, one of Delhi's well-connected neighborhoods, we have been serving West Delhi residents with dedication, expertise, and compassion for over 12 years.
                </p>
                <p>
                  Dr. Prachee Garg, with her specialized training in Conservative Dentistry and Endodontics (Root Canal Treatment), leads our team of experienced dental professionals. Our state-of-the-art clinic is equipped with the latest dental technology including digital X-rays, rotary endodontic systems, and advanced sterilization equipment - ensuring that every patient receives safe, effective, and pain-free treatment.
                </p>
                <p>
                  We understand the unique dental challenges faced by Indian patients - from dietary habits to climate conditions. Our treatment plans are customized to suit Indian lifestyles, and we accept most major insurance providers including Star Health, ICICI Lombard, and Religare. We believe quality dental care should be accessible and affordable for every family in Delhi.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Users className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Compassion</h3>
                <p className="text-gray-600 text-center">
                  We treat every patient with empathy, respect, and genuine care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Excellence</h3>
                <p className="text-gray-600 text-center">
                  We pursue the highest standards in every aspect of dental care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Integrity</h3>
                <p className="text-gray-600 text-center">
                  We maintain honesty and transparency in all our patient relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Community</h3>
                <p className="text-gray-600 text-center">
                  We're committed to serving and improving our local community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  Our mission is to provide comprehensive, personalized dental care that enhances the oral health and overall wellbeing of every patient we serve. We strive to create lasting relationships built on trust, deliver exceptional results using cutting-edge technology, and make quality dental care accessible and comfortable for families throughout Delhi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experienced professionals dedicated to your smile
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Prachee Garg</h3>
                <p className="text-blue-100">Lead Dentist & Founder</p>
                <p className="text-sm text-blue-200 mt-2">12+ years experience</p>
                <p className="text-sm text-blue-200 mt-1">BDS, MDS (Conservative Dentistry & Endodontics)</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Rahul Mehta</h3>
                <p className="text-blue-100">Orthodontist & Implantologist</p>
                <p className="text-sm text-blue-200 mt-2">10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Neha Kapoor</h3>
                <p className="text-blue-100">Pediatric Dentist</p>
                <p className="text-sm text-blue-200 mt-2">8+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
