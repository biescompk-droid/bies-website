import { getApi } from '../../lib/api';

export const metadata = {  title: 'BIES School Guidelines & Rules | Islamabad',
  description:
    'Read the BIES school guidelines, rules and expectations for students and parents at Brilliance International Education System in Islamabad.',
};
export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'guidelines' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>School Guidelines</span>
          <h1>BIES School Guidelines for Students &amp; Parents</h1>
<p>
  Review the BIES school guidelines, rules and expectations for
  students and parents at Brilliance International Education System
  in Islamabad.
</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state"><p>
    BIES school guidelines are currently being updated. Please check
    back soon for the latest school rules and guidelines for students
    and parents.
  </p></div>
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
