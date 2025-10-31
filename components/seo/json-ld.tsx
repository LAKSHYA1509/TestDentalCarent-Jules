export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Delhi Dental Care Center',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200',
    '@id': 'https://delhidentalcare.com',
    url: 'https://delhidentalcare.com',
    telephone: '+91-92682-45412',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '22/18 Adjacent to Nagpal Store, Near Nishkam Mandir',
      addressLocality: 'Moti Nagar',
      addressRegion: 'New Delhi',
      postalCode: '110015',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6601,
      longitude: 77.1460,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '16:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://facebook.com/delhidentalcare',
      'https://instagram.com/delhidentalcare',
      'https://twitter.com/delhidentalcare',
      'https://linkedin.com/company/delhidentalcare',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Delhi Dental Care Center',
    description: 'Premier dental care center in Delhi offering comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, and dental implants.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200',
    telephone: '+91-92682-45412',
    email: 'info@delhidentalcare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '22/18 Adjacent to Nagpal Store, Near Nishkam Mandir',
      addressLocality: 'Moti Nagar',
      addressRegion: 'New Delhi',
      postalCode: '110015',
      addressCountry: 'IN',
    },
    url: 'https://delhidentalcare.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url?: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://delhidentalcare.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.url && { item: item.url }),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: name,
    description: description,
    url: url,
    provider: {
      '@type': 'Dentist',
      name: 'Delhi Dental Care Center',
      url: 'https://delhidentalcare.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
