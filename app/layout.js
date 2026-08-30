import { Fraunces, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
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
  metadataBase: new URL('https://www.bies.com.pk'),
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Brilliance International Education System — AI Enabled School',
    description: 'Igniting curiosity, illuminating potential — Montessori through College in PWD, Islamabad.',
    url: 'https://www.bies.com.pk',
    siteName: 'BIES',
  },
  twitter: {
    card: 'summary',
    title: 'Brilliance International Education System — AI Enabled School',
    description: 'Igniting curiosity, illuminating potential — Montessori through College in PWD, Islamabad.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
