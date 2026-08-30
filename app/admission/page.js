export const metadata = {
  title: 'Admission',
  description: 'Apply for admission to Brilliance International Education System — annual admissions open March to June.',
};

const STEPS = [
  { n: '01', title: 'Fill the Online Form', body: "Complete the admission form below with your child's details." },
  { n: '02', title: 'Submit Documents & Fee', body: 'Provide the latest grades along with the application fee.' },
  { n: '03', title: 'Assessment & Interview', body: 'Sit an assessment test and attend an interview (Middle & Secondary applicants).' },
  { n: '04', title: 'Confirmation', body: "We'll confirm your seat and share the next steps by phone or email." },
];

export default function AdmissionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Admissions</span>
          <h1>Admission Open</h1>
          <p>Annual admissions run from March to June, for Montessori through College. Start your child&apos;s application below.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2>Four simple steps</h2>
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
              See our full <a href="/admission-policy" style={{ color: 'var(--navy)', fontWeight: 600 }}>Admission Policy</a>,{' '}
              <a href="/todo-list" style={{ color: 'var(--navy)', fontWeight: 600 }}>To Do List</a>, and{' '}
              <a href="/fee-structure" style={{ color: 'var(--navy)', fontWeight: 600 }}>Fee Structure</a> before applying.
            </p>
          </div>
          <div>
            <span className="eyebrow">Apply Now</span>
            <h2>Online Admission Form</h2>
            <iframe
              className="form-embed"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfmPbw1jRLB5w5udnwHuNJAt-PodPVArKf1T8NV-vbFZNqf9A/viewform?embedded=true"
              title="BIES Online Admission Form"
              loading="lazy"
            >Loading form…</iframe>
          </div>
        </div>
      </section>
    </>
  );
}
