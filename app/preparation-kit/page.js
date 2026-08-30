import { getApi } from '../../lib/api';

export const metadata = { title: 'Preparation Kit', description: 'Preparation kit and syllabus outlines for BIES entry assessment.' };
export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'preparation-kit' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Admissions</span>
          <h1>Preparation Kit</h1>
          <p>Syllabus outlines and study material for the entry assessment.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state"><p>This section is being updated — check back soon.</p></div>
          ) : (
            <div className="doc-items">
              {documents.map((d) => (
                <div className="doc-item" key={d.id}>
                  <div>
                    <div className="doc-item-name">{d.title}</div>
                    {d.description && <div className="doc-item-desc">{d.description}</div>}
                  </div>
                  {d.link_url && <a className="doc-link" href={d.link_url} target="_blank" rel="noreferrer">Open →</a>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
