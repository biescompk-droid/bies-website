import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Admission Preparation Kit | Islamabad',
  description:
    'Access the BIES admission preparation kit, syllabus outlines and study materials for the entry assessment at Brilliance International Education System in Islamabad.',
};

export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'preparation-kit' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Admissions
          </span>

          <h1>BIES Admission Preparation Kit</h1>

          <p>
            Access syllabus outlines and study materials to help students
            prepare for the BIES entry assessment in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state">
              <p>This section is being updated — check back soon.</p>
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
            Preparing for admission? Review the{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Admission Process
            </a>
            ,{' '}
            <a
              href="/admission-policy"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Policy
            </a>
            ,{' '}
            <a
              href="/entry-test-papers"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Entry Test Papers
            </a>
            ,{' '}
            <a
              href="/todo-list"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Checklist
            </a>
            , and{' '}
            <a
              href="/fee-structure"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Fee Structure
            </a>
            . For further questions, visit our{' '}
            <a
              href="/contact"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
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