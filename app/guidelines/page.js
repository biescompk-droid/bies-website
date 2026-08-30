import { getApi } from '../../lib/api';

export const metadata = { title: 'School Guidelines', description: 'School rules and guidelines for students and parents at BIES.' };
export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'guidelines' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Policies</span>
          <h1>School Guidelines</h1>
          <p>Rules and expectations for students and parents.</p>
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
