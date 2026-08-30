import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgw8lxYByioxvKDqw7BDZk0l8HHCYSf6_MAgaYN0dnxSxFsgtTjO7gCVV3b1slHNpynjCTRXuu_5Txpdq_f76igQo9q1lYh5DTqnaVb_Vlc-VEj-5HO-GMwqzmA5mTZRfcWI342dcXGfxF0pjkyzH1xNGNo9rN6QgPtqpJ2pGLE9glL-b2GAMKjh-NC0hc=s312"
              alt="BIES logo"
            />
            <p>An AI Enabled School — igniting curiosity, illuminating potential.</p>
          </div>
          <div>
            <h4>Campus</h4>
            <p>H # 29, Street 17, PWD Block C, Islamabad, Pakistan</p>
            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=House+No+29%2C+Street+No+17%2C+Block+C%2C+PWD+Housing+Society%2C+Islamabad"
              target="_blank"
              rel="noreferrer"
            >
              📍 View on Map
            </a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+92516103338">051-6103338</a>
            <a href="tel:+923325637029">+92 332 5637029 (WhatsApp)</a>
            <a href="mailto:bies.com.pk@gmail.com">bies.com.pk@gmail.com</a>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/admission">Admission</Link>
            <Link href="/faculty">Our Faculty</Link>
            <Link href="/standards-guidelines">Standards &amp; Guidelines</Link>
            <Link href="/training">Montessori Training</Link>
            <Link href="/inspection-framework">Inspection Framework</Link>
            <Link href="/activities">Activities</Link>
            <Link href="/about">About Us</Link>
            <a href="https://ecampus.bies.com.pk" target="_blank" rel="noreferrer">Student Portal</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Brilliance International Education System (BIES). All rights reserved.</p>
          <div className="footer-social">
            <a href="https://web.facebook.com/BISS.edu" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@brillianceinternationaleducati" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
