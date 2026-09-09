import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact BIES | Brilliance International Education System Islamabad',
  description:
    'Contact Brilliance International Education System (BIES) in PWD, Islamabad for admissions, fees, campus visits and general enquiries.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.bies.com.pk/contact',
  },
  openGraph: {
    title:
      'Contact BIES | Brilliance International Education System Islamabad',
    description:
      'Contact Brilliance International Education System (BIES) in PWD, Islamabad for admissions, fees, campus visits and general enquiries.',
    url: 'https://www.bies.com.pk/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Contact BIES
          </span>

          <h1>
            Contact Brilliance International Education System
          </h1>

          <p>
            Get in touch with Brilliance International Education System (BIES)
            in PWD, Islamabad for questions about admissions, fees, campus
            visits or general enquiries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">BIES Islamabad Contact</span>

            <h2>Visit or Contact Our Campus</h2>

            <p>
              Parents and students can contact Brilliance International
              Education System directly using the details below or visit our
              PWD campus in Islamabad.
            </p>

            <div className="card-list">
              <div className="info-card">
                <h3>Campus</h3>
                <p>H # 29, Street 17, PWD Block C, Islamabad</p>
              </div>

              <div className="info-card">
                <h3>Phone</h3>
                <a href="tel:+92516103338">051-6103338</a>
                <br />
                <a href="tel:+923325637029">
                  +92 332 5637029 (WhatsApp)
                </a>
              </div>

              <div className="info-card">
                <h3>Email</h3>
                <a href="mailto:bies.com.pk@gmail.com">
                  bies.com.pk@gmail.com
                </a>
              </div>
            </div>

            <iframe
              className="map-frame"
              style={{ marginTop: '24px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13297.41259155361!2d73.1442445!3d33.570179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed15ff36f1c5%3A0x2368bf155b50d5ed!2sBrilliance%20International%20Education%20System!5e0!3m2!1sen!2s!4v1726290975631!5m2!1sen!2s"
              loading="lazy"
              title="Brilliance International Education System campus location in Islamabad"
            />
          </div>

          <div>
            <span className="eyebrow">Send a Message</span>

            <h2>Contact BIES</h2>

            <p>
              Have a question about admission, fees or visiting the campus?
              Send us a message and our team will get back to you.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Brilliance International Education System</span>

            <h2>Get in Touch With BIES Islamabad</h2>

            <p>
              Brilliance International Education System is located in PWD,
              Islamabad. Contact our team for information about admissions,
              school fees, campus visits and other school-related enquiries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}