'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/faculty', label: 'Our Faculty' },
  { href: '/training', label: 'Training' },
  { href: '/inspection-framework', label: 'Inspection Framework' },
  { href: '/activities', label: 'Activities' },
  { href: '/admission', label: 'Admission' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">
          <a href="tel:+92516103338">051-6103338</a>
          <span className="dot">•</span>
          <a href="mailto:bies.com.pk@gmail.com">bies.com.pk@gmail.com</a>
          <span className="dot">•</span>
          <a href="https://web.facebook.com/BISS.edu" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@brillianceinternationaleducati" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
      <div className="main-nav">
        <Link href="/" className="brand">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgw8lxYByioxvKDqw7BDZk0l8HHCYSf6_MAgaYN0dnxSxFsgtTjO7gCVV3b1slHNpynjCTRXuu_5Txpdq_f76igQo9q1lYh5DTqnaVb_Vlc-VEj-5HO-GMwqzmA5mTZRfcWI342dcXGfxF0pjkyzH1xNGNo9rN6QgPtqpJ2pGLE9glL-b2GAMKjh-NC0hc=s312"
            alt="BIES logo"
          />
          <span className="brand-name">Brilliance International<br />Education System</span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <a
            href="https://ecampus.bies.com.pk"
            target="_blank"
            rel="noreferrer"
            className="nav-portal"
            onClick={() => setOpen(false)}
          >
            Student Portal
          </a>
          <Link href="/admission" className="nav-cta" onClick={() => setOpen(false)}>Admission Open</Link>
        </nav>
      </div>
    </header>
  );
}
