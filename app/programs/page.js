export const metadata = {
  title: 'Academic Programs | Montessori to College | BIES Islamabad',
  description:
    'Explore academic programs at Brilliance International Education System (BIES) in Islamabad, from Montessori and Junior School through Secondary School and College.',
};

const PATHWAY = [
  {
    n: '01',
    name: 'Montessori',
    blurb:
      'A whole-child philosophy that nurtures growth across every developmental area — cognitive, social, emotional and physical — right from the start.',
  },
  {
    n: '02',
    name: 'Junior School',
    blurb:
      'Primary education for young learners, building strong foundations in literacy, numeracy and curiosity-driven learning.',
  },
  {
    n: '03',
    name: 'Secondary School',
    blurb:
      'Secondary education at BIES that prepares students for Matriculation under the Federal Board, with a strong foundation for higher education.',
  },
  {
    n: '04',
    name: 'College',
    blurb:
      '11th & 12th grade under the Federal Board, Islamabad — FA, FSc, ICS & I.Com streams.',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Our Programs
          </span>

          <h1>BIES Academic Programs | Montessori to College</h1>

          <p>
            From a child&apos;s very first classroom to their college years —
            one continuous, connected journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="steps">
            {PATHWAY.map((p) => (
              <div className="step" key={p.n}>
                <span className="step-num">{p.n}</span>

                <div>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '24px' }}>
            Learn more{' '}
            <a
              href="/about"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              About BIES
            </a>
            , meet our{' '}
            <a
              href="/faculty"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Faculty &amp; Teachers
            </a>
            , review the{' '}
            <a
              href="/fee-structure"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Fee Structure
            </a>
            , or explore the{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Process
            </a>
            .
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Find the right stage for your child</h2>

          <a href="/admission" className="btn btn-light">
            Apply for Admission
          </a>
        </div>
      </section>
    </>
  );
}