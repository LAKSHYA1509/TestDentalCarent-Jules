import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://delhidentalcare.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/blog',
    '/contact',
  ];

  const servicePages = [
    '/services/general-dentistry',
    '/services/cosmetic-dentistry',
    '/services/orthodontics',
    '/services/dental-implants',
    '/services/root-canal',
    '/services/teeth-whitening',
    '/services/dentures-bridges',
    '/services/pediatric-dentistry',
    '/services/emergency-care',
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = servicePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
