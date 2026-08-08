const SITE_URL = 'https://ksgfiber.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KSG Fiber',
    url: SITE_URL,
    logo: `${SITE_URL}/KSG_LOGO_FULL.png`,
    description: 'Regional fiber optic internet provider serving homes and businesses across the Midwest.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '408 Grant St. #6',
      addressLocality: 'Van Meter',
      addressRegion: 'IA',
      postalCode: '50261',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-775-743-4237',
      contactType: 'customer service',
      areaServed: ['US'],
      availableLanguage: ['English'],
    },
    areaServed: [
      { '@type': 'State', name: 'Wisconsin' },
      { '@type': 'State', name: 'Minnesota' },
      { '@type': 'State', name: 'Iowa' },
      { '@type': 'State', name: 'Illinois' },
      { '@type': 'State', name: 'Michigan' },
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InternetServiceProvider',
    name: 'KSG Fiber',
    url: SITE_URL,
    image: `${SITE_URL}/KSG_LOGO_FULL.png`,
    telephone: '+1-775-743-4237',
    email: 'hello@ksgfiber.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '408 Grant St. #6',
      addressLocality: 'Van Meter',
      addressRegion: 'IA',
      postalCode: '50261',
      addressCountry: 'US',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '25000',
      bestRating: '5',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

export function faqSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, price: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'KSG Fiber',
    },
    areaServed: {
      '@type': 'Country',
      name: 'US',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      url: `${SITE_URL}${url}`,
    },
  };
}
