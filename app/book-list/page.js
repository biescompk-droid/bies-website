import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Book List & Textbooks | Islamabad',
  description:
    'View approved class-wise book lists and textbooks for students at Brilliance International Education System (BIES) in Islamabad.',
};
export const revalidate = 0;

export default async function BookListPage() {
  const data = await getApi('documents', { category: 'book-list' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Book List</span>
          <h1>BIES Book List &amp; Textbooks</h1>
         <p>
         View the BIES approved book list, including class-wise textbooks
         and required school books for students.
        </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state"> <p>
    The BIES book list is currently being updated. Please check back
    soon for class-wise textbooks and approved school books.
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
