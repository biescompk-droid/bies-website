import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Admission Checklist & To-Do List | Islamabad',
  description:
    'Find out what students and parents need to prepare before applying for admission to Brilliance International Education System (BIES).',
};

export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'todo-list' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Admissions
          </span>

          <h1>BIES Admission Checklist &amp; To-Do List | Islamabad</h1>

          <p>
            Find out what students and parents need to prepare before applying
            for admission to BIES Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state">
              <p>
                This section is being updated — check back soon.
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
            Start your application through our{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission
            </a>
            , review the{' '}
            <a
              href="/admission-policy"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Policy
            </a>
            , or prepare using our{' '}
            <a
              href="/preparation-kit"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Preparation Kit
            </a>
            . You can also review the{' '}
            <a
              href="/fee-structure"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Fee Structure
            </a>
            {' '}before completing your admission preparations.
          </p>
        </div>
      </section>
    </>
  );
}