import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingActionButtons } from '@/components/floating-action-buttons';
import { GoogleAnalytics } from '@/components/google-analytics';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://delhidentalcare.com'),
  title: {
    default: 'Delhi Dental Care Center - Best Dental Clinic in Delhi',
    template: '%s | Delhi Dental Care Center',
  },
  description: 'Premier dental care center in Delhi offering comprehensive services including general dentistry, cosmetic dentistry, orthodontics, dental implants, and root canal treatment. Trusted by 10,000+ patients.',
  keywords: 'dental clinic delhi, dentist in delhi, dental care, teeth whitening, dental implants, orthodontics, root canal treatment, cosmetic dentistry, emergency dental care',
  authors: [{ name: 'Delhi Dental Care Center' }],
  creator: 'Delhi Dental Care Center',
  publisher: 'Delhi Dental Care Center',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://delhidentalcare.com',
    siteName: 'Delhi Dental Care Center',
    title: 'Delhi Dental Care Center - Best Dental Clinic in Delhi',
    description: 'Providing exceptional dental care with state-of-the-art technology and experienced professionals.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Delhi Dental Care Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Dental Care Center - Best Dental Clinic in Delhi',
    description: 'Providing exceptional dental care with state-of-the-art technology and experienced professionals.',
    images: ['https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen pt-32">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
        <Toaster />
      </body>
    </html>
  );
}
