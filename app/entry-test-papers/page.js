import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Entry Test Papers | Admission Test Preparation',
  description:
    'Find BIES entry test papers and answer keys to help students prepare for the BIES admission test at Brilliance International Education System in Islamabad.',
};

export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'entry-test-papers' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Admissions
          </span>

          <h1>BIES Entry Test Papers</h1>

          <p>
            View BIES past entry test papers and answer keys to help students
            prepare for the admission test.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {documents.length === 0 ? (
            <div className="empty-state">
              <p>
                BIES entry test papers and answer keys are currently being
                updated. Please check back soon for available admission test
                papers.
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
            Preparing for the BIES admission test? Review the{' '}
            <a
              href="/preparation-kit"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Preparation Kit
            </a>
            ,{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Process
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