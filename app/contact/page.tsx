import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form';
import { EnquiryForm } from '@/components/forms/enquiry-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Contact Us - Book Your Dental Appointment in Delhi',
  description: 'Contact Delhi Dental Care Center to book an appointment, send enquiries, or visit our clinic. Call +91-123-456-7890 or WhatsApp us. Located in Connaught Place, New Delhi.',
  keywords: 'dental appointment delhi, book dentist delhi, dental clinic contact, emergency dental care delhi',
  openGraph: {
    title: 'Contact Delhi Dental Care Center',
    description: 'Book your dental appointment or visit our clinic in Delhi',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Contact Us' }]} />
      <div>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help! Reach out to us for appointments, enquiries, or any questions about our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <Tabs defaultValue="enquiry" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="enquiry">Quick Enquiry</TabsTrigger>
                  <TabsTrigger value="contact">Contact Form</TabsTrigger>
                </TabsList>
                <TabsContent value="enquiry" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Enquiry Form</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <EnquiryForm />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          22/18 Adjacent to Nagpal Store<br />
                          Near Nishkam Mandir, Moti Nagar<br />
                          New Delhi, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <a href="tel:+919268245412" className="text-blue-600 hover:underline block">
                          +91 92682 45412
                        </a>
                        <a href="tel:+911142283412" className="text-blue-600 hover:underline block">
                          +91 11422 83412
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <a href="mailto:info@delhidentalcare.com" className="text-blue-600 hover:underline block">
                          info@delhidentalcare.com
                        </a>
                        {/* <a href="mailto:appointments@delhidentalcare.com" className="text-blue-600 hover:underline block sm:hidden text-sm">
                          appointments@delhidentalcare.com
                        </a>
                        <a href="mailto:appointments@delhidentalcare.com" className="text-blue-600 hover:underline block hidden sm:inline">
                          appointments@delhidentalcare.com
                        </a> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp Us</h3>
                        <a
                          href="https://wa.me/919268245412?text=Hi, I would like to book an appointment at Delhi Dental Care Center."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline block font-medium"
                        >
                          +91 92682 45412
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Quick responses • Available 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Saturday</p>
                          <p className="font-medium">Morning: 9:00 AM - 1:00 PM</p>
                          <p className="font-medium">Evening: 4:00 PM - 7:00 PM</p>
                          <p className="text-red-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us on Map</h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5887.665014730484!2d77.13361809478172!3d28.66491132455902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a86a8b7561%3A0x79f31fb9d73b3bb0!2sNishkam%20Bhawan!5e0!3m2!1sen!2sin!4v1762340414927!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
