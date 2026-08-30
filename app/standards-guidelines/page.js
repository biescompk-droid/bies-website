import { getApi } from '../../lib/api';

export const metadata = { title: 'Standards & Guidelines', description: 'Required Standards & SLOs, and suggested guidelines at Brilliance International Education System.' };
export const revalidate = 0;

function DocGroup({ title, documents }) {
  if (!documents || documents.length === 0) return null;
  return (
    <div className="doc-group">
      <h3>{title}</h3>
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
    </div>
  );
}

export default async function StandardsGuidelinesPage() {
  const [standardsData, guidelinesData] = await Promise.all([
    getApi('documents', { category: 'required-standards' }),
    getApi('documents', { category: 'suggested-guidelines' }),
  ]);
  const standards = standardsData?.documents || [];
  const guidelines = guidelinesData?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Standards &amp; Guidelines</span>
          <h1>Required Standards &amp; SLOs</h1>
          <p>Our required academic standards and suggested guidelines for teaching and learning.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {standards.length === 0 && guidelines.length === 0 ? (
            <div className="empty-state"><p>This section is being updated — check back soon.</p></div>
          ) : (
            <>
              <DocGroup title="Required Standards & SLOs" documents={standards} />
              <DocGroup title="Suggested Guidelines" documents={guidelines} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
