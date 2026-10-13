// Shared SEO helper: gives every page its own canonical URL, title,
// description and social-sharing tags, so Google treats each page as
// a separate page instead of a copy of the homepage.

export const SITE_URL = 'https://bies.com.pk';
const OG_IMAGE = {
  url: `${SITE_URL}/images/bies-logo.png`,
  width: 1200,
  height: 630,
  alt: 'Brilliance International Education System — BIES',
};

export function pageMeta({ title, description, path = '/' }) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'BIES — Brilliance International Education System',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
