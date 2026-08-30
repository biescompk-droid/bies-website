import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Brilliance International Education System — PWD Campus, Islamabad.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Contact</span>
          <h1>Let&apos;s talk</h1>
          <p>Questions about admissions, fees or a campus visit? Reach us directly, or send a message below.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <div className="card-list">
              <div className="info-card">
                <h3>Campus</h3>
                <p>H # 29, Street 17, PWD Block C, Islamabad</p>
              </div>
              <div className="info-card">
                <h3>Phone</h3>
                <a href="tel:+92516103338">051-6103338</a><br />
                <a href="tel:+923325637029">+92 332 5637029 (WhatsApp)</a>
              </div>
              <div className="info-card">
                <h3>Email</h3>
                <a href="mailto:bies.com.pk@gmail.com">bies.com.pk@gmail.com</a>
              </div>
            </div>
            <iframe
              className="map-frame"
              style={{ marginTop: '24px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13297.41259155361!2d73.1442445!3d33.570179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed15ff36f1c5%3A0x2368bf155b50d5ed!2sBrilliance%20International%20Education%20System!5e0!3m2!1sen!2s!4v1726290975631!5m2!1sen!2s"
              loading="lazy"
              title="BIES campus location"
            />
          </div>
          <div>
            <span className="eyebrow">Send a Message</span>
            <h2>We usually reply within a day</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
