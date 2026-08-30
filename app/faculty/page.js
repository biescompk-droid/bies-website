import { getApi } from '../../lib/api';

export const metadata = {
  title: 'Our Faculty',
  description: 'Meet the teaching faculty at Brilliance International Education System.',
};

export const revalidate = 0;

export default async function FacultyPage() {
  const data = await getApi('faculty');
  const faculty = data?.faculty || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Our Faculty</span>
          <h1>Meet Our Teachers</h1>
          <p>The educators behind every student&apos;s success at BIES.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {faculty.length === 0 ? (
            <div className="empty-state"><p>Faculty profiles are being updated — check back soon.</p></div>
          ) : (
            <div className="faculty-grid">
              {faculty.map((f) => (
                <div className="faculty-card" key={f.id}>
                  <div className="faculty-photo">
                    {f.photo_url ? (
                      <img src={f.photo_url} alt={f.name} loading="lazy" />
                    ) : null}
                  </div>
                  <div className="faculty-info">
                    <h3>{f.name}</h3>
                    {f.designation && <span className="faculty-role">{f.designation}</span>}
                    {f.qualifications && <p>{f.qualifications}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
