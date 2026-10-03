export const metadata = {
  title: 'Montessori Teacher Training in Islamabad | BIES',
  description:
    'Join the Montessori Teacher Training Programme by Brilliance International Education System (BIES), with guided modules, practical work, assessment and a verified certificate.',
};

export default function TrainingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Training &amp; Courses
          </span>

          <h1>Montessori Teacher Training in Islamabad | BIES</h1>

          <p>
            Learn Montessori philosophy, classroom practice and teaching
            methods through a structured teacher training programme by BIES.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">About the Programme</span>

            <h2>A structured path into Montessori education</h2>

            <p>
              A step-by-step Montessori training programme covering philosophy,
              materials, and classroom practice — built around guided modules,
              a final assessment, hands-on project work, and practical
              demonstrations. Open to BIES teachers and to anyone interested
              in Montessori education.
            </p>

            <ul>
              <li>
                Step-by-step modules you work through at your own pace
              </li>
              <li>A final quiz to assess your understanding</li>
              <li>Project and practical demonstration submissions</li>
              <li>A verified certificate on successful completion</li>
            </ul>
          </div>

          <div>
            <span className="eyebrow">Get Started</span>

            <h2>Enroll Today</h2>

            <p>
              Create your free account on our training portal to begin the
              programme.
            </p>

            <a
              href="https://ecampus.bies.com.pk/training-register.html"
              className="btn btn-primary"
            >
              Enroll Now
            </a>

            <p className="form-note">
              Already enrolled?{' '}
              <a
                href="https://ecampus.bies.com.pk/training-login.html"
                style={{ color: 'var(--navy)', fontWeight: 600 }}
              >
                Log in here
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Syllabus</span>

          <h2>What you&apos;ll cover</h2>

          <p>
            The full syllabus is being finalized and will be published here
            soon. Enroll now to be notified as soon as it&apos;s ready.
          </p>

          <p style={{ marginTop: '24px' }}>
            Explore our{' '}
            <a
              href="/programs"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Academic Programs
            </a>
            , learn more about our{' '}
            <a
              href="/faculty"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Faculty &amp; Teachers
            </a>
            , or read{' '}
            <a
              href="/about"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              About BIES
            </a>
            . For questions about Montessori teacher training, visit our{' '}
            <a
              href="/contact"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Contact BIES
            </a>{' '}
            page.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to begin your Montessori journey?</h2>

          <a
            href="https://ecampus.bies.com.pk/training-register.html"
            className="btn btn-light"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </>
  );
}