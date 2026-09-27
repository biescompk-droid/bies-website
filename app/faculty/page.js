import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Faculty & Teachers | Islamabad',
  description:
    'Meet the teachers and faculty at Brilliance International Education System (BIES) in Islamabad and learn about their qualifications and roles.',
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
          <h1>BIES Faculty &amp; Teachers</h1>
          <p>
  Meet the dedicated BIES faculty and teachers who support student
  learning and development at Brilliance International Education System
  in Islamabad.
</p>
        
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {faculty.length === 0 ? (
            <div className="empty-state"><div className="empty-state">
  <p>
    BIES faculty profiles are currently being updated. Please check
    back soon to learn more about our teachers and their qualifications.
  </p>
</div></div>
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
