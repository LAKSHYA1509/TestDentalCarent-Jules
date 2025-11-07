import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Sparkles, Braces, HeartPulse, Zap, Users, Baby, Shield, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Delhi Dental Care Center',
  description: 'Comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canal treatment, and more.',
};

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive oral health care including routine checkups, cleanings, and preventive treatments.',
    details: [
      'Regular dental checkups and examinations',
      'Professional teeth cleaning and scaling',
      'Cavity detection and fillings',
      'Gum disease treatment',
      'Oral cancer screening',
    ],
    link: '/services/general-dentistry'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic dental procedures.',
    details: [
      'Porcelain veneers',
      'Dental bonding',
      'Smile makeovers',
      'Gum contouring',
      'Full mouth rehabilitation',
    ],
    link: '/services/cosmetic-dentistry'
  },
  {
    icon: Braces,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct bite issues with modern orthodontic solutions.',
    details: [
      'Traditional metal braces',
      'Ceramic braces',
      'Clear aligners',
      'Retainers',
      'Early orthodontic treatment',
    ],
    link: '/services/orthodontics'
  },
  {
    icon: HeartPulse,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
    details: [
      'Single tooth implants',
      'Multiple tooth implants',
      'All-on-4 implants',
      'Implant-supported dentures',
      '3D imaging and planning',
    ],
    link: '/services/dental-implants'
  },
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    description: 'Save infected or damaged teeth with our painless root canal procedures.',
    details: [
      'Single and multi-canal treatments',
      'Retreatment procedures',
      'Pain-free techniques',
      'Advanced endodontic care',
      'Same-day emergency treatments',
    ],
    link: '/services/root-canal'
  },
  {
    icon: Zap,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
    details: [
      'In-office power whitening',
      'Custom take-home kits',
      'Laser teeth whitening',
      'Stain removal',
      'Long-lasting results',
    ],
    link: '/services/teeth-whitening'
  },
  {
    icon: Users,
    title: 'Dentures & Bridges',
    description: 'Custom-made prosthetic solutions to restore your smile and functionality.',
    details: [
      'Complete dentures',
      'Partial dentures',
      'Flexible dentures',
      'Fixed bridges',
      'Implant-supported prosthetics',
    ],
    link: '/services/dentures-bridges'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, comfortable environment.',
    details: [
      'First dental visit',
      'Preventive care for kids',
      'Fluoride treatments',
      'Dental sealants',
      'Behavior management',
    ],
    link: '/services/pediatric-dentistry'
  },
  {
    icon: Shield,
    title: 'Emergency Dental Care',
    description: 'Immediate care for dental emergencies and urgent oral health issues.',
    details: [
      'Toothache relief',
      'Broken or chipped tooth repair',
      'Lost fillings or crowns',
      'Dental trauma treatment',
      'Same-day appointments',
    ],
    link: '/services/emergency-care'
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Dental Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care tailored to meet your unique needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link href={service.link}>
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use state-of-the-art equipment to ensure precise diagnosis and comfortable treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Digital X-Rays</h3>
                <p className="text-sm text-gray-600">
                  90% less radiation exposure than traditional X-rays
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">3D Imaging</h3>
                <p className="text-sm text-gray-600">
                  Precise treatment planning for implants and surgeries
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Laser Dentistry</h3>
                <p className="text-sm text-gray-600">
                  Minimally invasive procedures with faster healing
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Intraoral Camera</h3>
                <p className="text-sm text-gray-600">
                  See what we see for better understanding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Latest</div>
              <div className="text-blue-100">Technology</div>
            </div>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
