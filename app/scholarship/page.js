export const metadata = {
  title: 'BIES Scholarships | Merit-Based Financial Support | Islamabad',
  description:
    'Explore BIES scholarships in Islamabad, including merit-based financial support, eligibility requirements and scholarship opportunities for students.',
};

export const revalidate = 0;

import { getApi } from '../../lib/api';

export default async function ScholarshipPage() {
  const data = await getApi('scholarships');
  const scholarships = data?.scholarships || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Scholarship
          </span>

          <h1>BIES Scholarships | Merit-Based Financial Support</h1>

          <p>
            Explore merit-based scholarship opportunities and eligibility
            information for students at BIES Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {scholarships.length === 0 ? (
            <div className="empty-state">
              <p>
                Scholarship details are being updated — check back soon.
              </p>
            </div>
          ) : (
            <div className="card-list">
              {scholarships.map((s) => (
                <div className="info-card" key={s.id}>
                  <h3>{s.title}</h3>

                  {s.eligibility && (
                    <p>
                      <strong>Eligibility:</strong> {s.eligibility}
                    </p>
                  )}

                  {s.description && <p>{s.description}</p>}
                </div>
              ))}
            </div>
          )}

          <p style={{ marginTop: '24px' }}>
            Explore our{' '}
            <a
              href="/programs"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Academic Programs
            </a>
            , learn about the{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Process
            </a>
            , or review the{' '}
            <a
              href="/admission-policy"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Policy
            </a>
            . For more information, visit our{' '}
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
    </>
  );
}