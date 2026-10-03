import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Book List | Textbooks & School Books',
  description:
    'View the BIES book list, approved textbooks and class-wise school books for students at Brilliance International Education System in Islamabad.',
};

export const revalidate = 0;

export default async function BookListPage() {
  const data = await getApi('documents', { category: 'book-list' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span
            className="eyebrow"
            style={{ color: '#e7a8ad' }}
          >
            Book List
          </span>

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
            <div className="empty-state">
              <p>
                The BIES book list is currently being updated. Please check
                back soon for class-wise textbooks and approved school books.
              </p>
            </div>
          ) : (
            <div className="doc-items">
              {documents.map((d) => (
                <div className="doc-item" key={d.id}>
                  <div>
                    <div className="doc-item-name">{d.title}</div>

                    {d.description && (
                      <div className="doc-item-desc">
                        {d.description}
                      </div>
                    )}
                  </div>

                  {d.link_url && (
                    <a
                      className="doc-link"
                      href={d.link_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          <p style={{ marginTop: '24px' }}>
            Explore our{' '}
            <a
              href="/programs"
              style={{
                color: 'var(--navy)',
                fontWeight: 600,
              }}
            >
              Academic Programs
            </a>
            , review the{' '}
            <a
              href="/admission"
              style={{
                color: 'var(--navy)',
                fontWeight: 600,
              }}
            >
              BIES Admission Process
            </a>
            , or view our{' '}
            <a
              href="/uniform"
              style={{
                color: 'var(--navy)',
                fontWeight: 600,
              }}
            >
              School Uniform Guidelines
            </a>
            . For more information, visit our{' '}
            <a
              href="/contact"
              style={{
                color: 'var(--navy)',
                fontWeight: 600,
              }}
            >
              Contact BIES
            </a>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  );
}