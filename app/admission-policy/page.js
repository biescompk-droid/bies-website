import { getApi } from '../../lib/api';

export const metadata = {
  title: 'Admission Policy | BIES Islamabad',
  description:
    'Read the Brilliance International Education System (BIES) admission policy, application requirements and admission process for students in Islamabad.',};
export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'admission-policy' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Admissions</span>
          <h1>Admission Policy</h1>
          <p>
          Learn about the BIES admission policy, application requirements and
          admission process for students applying to Brilliance International
          Education System in Islamabad.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state"><div className="empty-state">
  <p>
    The BIES admission policy is currently being updated. Please check
    back soon for admission requirements, guidelines and application
    information.
  </p>
</div></div>
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
