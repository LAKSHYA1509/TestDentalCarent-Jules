'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const services = [
  { name: 'General Dentistry', href: '/services/general-dentistry', description: 'Routine checkups and preventive care' },
  { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry', description: 'Enhance your smile' },
  { name: 'Orthodontics', href: '/services/orthodontics', description: 'Braces and aligners' },
  { name: 'Dental Implants', href: '/services/dental-implants', description: 'Permanent tooth replacement' },
  { name: 'Root Canal Treatment', href: '/services/root-canal', description: 'Save infected teeth' },
  { name: 'Teeth Whitening', href: '/services/teeth-whitening', description: 'Brighter smile' },
  { name: 'Dentures & Bridges', href: '/services/dentures-bridges', description: 'Prosthetic solutions' },
  { name: 'Pediatric Dentistry', href: '/services/pediatric-dentistry', description: 'Care for children' },
  { name: 'Emergency Dental Care', href: '/services/emergency-care', description: 'Urgent dental issues' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919268245412" className="flex items-center space-x-2 hover:text-blue-100 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 92682 45412</span>
              </a>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Moti Nagar, Delhi</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Mon - Sat: 9AM-1PM & 4PM-7PM</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600"><Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1761899039/delhi_dental_logo_lypqku.png"
                alt="Delhi Dental Care"
                width={150}
                height={60}
                className="h-20 w-70"
              />
              </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative group">
              <button
                className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                onMouseEnter={() => setServicesDropdownOpen(true)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-4 grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block p-3 rounded-md hover:bg-blue-50 transition-colors group"
                      >
                        <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                          {service.name}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-base font-medium text-gray-700 hover:text-blue-600 flex items-center justify-between"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
