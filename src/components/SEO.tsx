import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://ksgfiber.com';
const SITE_NAME = 'KSG Fiber';
const DEFAULT_DESCRIPTION = 'KSG Fiber delivers reliable, fast fiber optic internet to homes and businesses across the Midwest. No data caps. No contracts. Your neighbors in fiber.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/KSG_LOGO_FULL.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  children,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Fiber-Fast Internet Built for the Midwest`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {children}
    </Helmet>
  );
}

export { SITE_URL, SITE_NAME };
