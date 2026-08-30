import { getApi } from '../../lib/api';

export const metadata = { title: 'Book List', description: 'Approved textbooks by class at Brilliance International Education System.' };
export const revalidate = 0;

export default async function BookListPage() {
  const data = await getApi('documents', { category: 'book-list' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Book List</span>
          <h1>Approved Textbooks</h1>
          <p>Class-wise approved book lists.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state"><p>The book list is being updated — check back soon.</p></div>
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
