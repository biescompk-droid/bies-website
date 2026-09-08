import { Fraunces, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Brilliance International Education System — AI Enabled School',
    template: '%s | BIES',
  },
  description:
    'BIES — Brilliance International Education System, an AI Enabled School in PWD, Islamabad. Montessori through College.',

  verification: {
    google: 'OeppV0xDQDtz4VG4_H0TOJy97SVD4hE3_cdigfg4TE0',
  },

  metadataBase: new URL('https://www.bies.com.pk'),

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Brilliance International Education System — AI Enabled School',
    description:
      'Igniting curiosity, illuminating potential — Montessori through College in PWD, Islamabad.',
    url: 'https://www.bies.com.pk',
    siteName: 'BIES',
  },

  twitter: {
    card: 'summary',
    title: 'Brilliance International Education System — AI Enabled School',
    description:
      'Igniting curiosity, illuminating potential — Montessori through College in PWD, Islamabad.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}
      >

        {/* BIES Structured Data / Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'School',
                  '@id': 'https://www.bies.com.pk/#school',
                  name: 'Brilliance International Education System — AI Enabled School',
                  alternateName: 'BIES',
                  url: 'https://www.bies.com.pk/',
                  description:
                    'Brilliance International Education System (BIES), an AI Enabled School in PWD, Islamabad, offering education from Montessori through College.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'H # 29, Street 17, PWD Block C',
                    addressLocality: 'Islamabad',
                    addressCountry: 'PK',
                  },
                  telephone: '+923325637029',
                  email: 'bies.com.pk@gmail.com',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.bies.com.pk/#website',
                  url: 'https://www.bies.com.pk/',
                  name: 'Brilliance International Education System — AI Enabled School',
                  alternateName: 'BIES',
                  publisher: {
                    '@id': 'https://www.bies.com.pk/#school',
                  },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.bies.com.pk/#webpage',
                  url: 'https://www.bies.com.pk/',
                  name: 'Brilliance International Education System — AI Enabled School',
                  isPartOf: {
                    '@id': 'https://www.bies.com.pk/#website',
                  },
                  about: {
                    '@id': 'https://www.bies.com.pk/#school',
                  },
                },
              ],
            }),
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QB1PGDC4H8"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QB1PGDC4H8');
          `}
        </Script>

      </body>
    </html>
  );
}