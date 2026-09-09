export const metadata = {
  title: 'BIES Admission | Brilliance International Education System Islamabad',
  description:
    'Apply for admission to Brilliance International Education System (BIES) in Islamabad. Annual admissions are open from March to June for Montessori through College.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.bies.com.pk/admission',
  },
  openGraph: {
    title:
      'BIES Admission | Brilliance International Education System Islamabad',
    description:
      'Apply for admission to Brilliance International Education System (BIES) in Islamabad. Annual admissions are open from March to June for Montessori through College.',
    url: 'https://www.bies.com.pk/admission',
  },
};

const STEPS = [
  {
    n: '01',
    title: 'Fill the Online Form',
    body: "Complete the admission form below with your child's details.",
  },
  {
    n: '02',
    title: 'Submit Documents & Fee',
    body: 'Provide the latest grades along with the application fee.',
  },
  {
    n: '03',
    title: 'Assessment & Interview',
    body: 'Sit an assessment test and attend an interview (Middle & Secondary applicants).',
  },
  {
    n: '04',
    title: 'Confirmation',
    body: "We'll confirm your seat and share the next steps by phone or email.",
  },
];

export default function AdmissionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            BIES Admissions
          </span>

          <h1>
            Brilliance International Education System Admission
          </h1>

          <p>
            Apply for admission to Brilliance International Education System
            (BIES) in PWD, Islamabad. Annual admissions run from March to June
            for students from Montessori through College.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">BIES Admission Process</span>

            <h2>How to Apply for Admission</h2>

            <p>
              The Brilliance International Education System admission process
              is designed to make applying straightforward for parents and
              students. Follow these four steps to begin your application.
            </p>

            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step-num">{s.n}</span>

                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '24px' }}>
              Before applying, please review our{' '}
              <a
                href="/admission-policy"
                style={{ color: 'var(--navy)', fontWeight: 600 }}
              >
                Admission Policy
              </a>
              ,{' '}
              <a
                href="/todo-list"
                style={{ color: 'var(--navy)', fontWeight: 600 }}
              >
                To Do List
              </a>
              , and{' '}
              <a
                href="/fee-structure"
                style={{ color: 'var(--navy)', fontWeight: 600 }}
              >
                Fee Structure
              </a>
              .
            </p>
          </div>

          <div>
            <span className="eyebrow">Apply Now</span>

            <h2>Online Admission Form</h2>

            <p>
              Start your BIES admission application by completing the online
              form below.
            </p>

            <iframe
              className="form-embed"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfmPbw1jRLB5w5udnwHuNJAt-PodPVArKf1T8NV-vbFZNqf9A/viewform?embedded=true"
              title="Brilliance International Education System Online Admission Form"
              loading="lazy"
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Admissions Information</span>

            <h2>Join Brilliance International Education System</h2>

            <p>
              BIES welcomes students across its educational pathway from
              Montessori through College. Parents can use the online
              admission form above and review the admission policy, required
              steps and fee information before applying.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}