export const metadata = { title: 'Scholarship', description: 'Merit-based scholarship opportunities at Brilliance International Education System.' };
export const revalidate = 0;

import { getApi } from '../../lib/api';

export default async function ScholarshipPage() {
  const data = await getApi('scholarships');
  const scholarships = data?.scholarships || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Scholarship</span>
          <h1>Scholarship Opportunities</h1>
          <p>Merit-based scholarships available to eligible students.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {scholarships.length === 0 ? (
            <div className="empty-state"><p>Scholarship details are being updated — check back soon.</p></div>
          ) : (
            <div className="card-list">
              {scholarships.map((s) => (
                <div className="info-card" key={s.id}>
                  <h3>{s.title}</h3>
                  {s.eligibility && <p><strong>Eligibility:</strong> {s.eligibility}</p>}
                  {s.description && <p>{s.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
