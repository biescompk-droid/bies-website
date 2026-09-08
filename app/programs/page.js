export const metadata = {
  title: 'Academic Programs — Montessori to College',
  description: 'The full academic pathway at Brilliance International Education System — Montessori through College.',
};

const PATHWAY = [
  { n: '01', name: 'Montessori', blurb: 'A whole-child philosophy that nurtures growth across every developmental area — cognitive, social, emotional and physical — right from the start.' },
  { n: '02', name: 'Junior School', blurb: 'Primary education for young learners, building strong foundations in literacy, numeracy and curiosity-driven learning.' },
  { n: '03', name: 'Secondary School', blurb: 'The bridge between primary and higher education, preparing students for Matriculation under the Federal Board.' },
  { n: '04', name: 'College', blurb: '11th & 12th grade under the Federal Board, Islamabad — FA, FSc, ICS & I.Com streams.' },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Our Programs</span>
          <h1>The Academic Pathway</h1>
          <p>From a child&apos;s very first classroom to their college years — one continuous, connected journey.</p>
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
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Find the right stage for your child</h2>
          <a href="/admission" className="btn btn-light">Apply for Admission</a>
        </div>
      </section>
    </>
  );
}
