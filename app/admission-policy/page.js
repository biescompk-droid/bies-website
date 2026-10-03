import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Admission Policy | Islamabad',
  description:
    'Read the BIES admission policy, application requirements and admission process for students applying to Brilliance International Education System in Islamabad.',
};

export const revalidate = 0;

export default async function Page() {
  const data = await getApi('documents', { category: 'admission-policy' });
  const documents = data?.documents || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Admissions
          </span>

          <h1>BIES Admission Policy in PWD Islamabad</h1>

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
            <div className="empty-state">
              <p>
                The BIES admission policy is currently being updated. Please
                check back soon for admission requirements, guidelines and
                application information.
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
            Before applying, review our{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Process
            </a>
            ,{' '}
            <a
              href="/preparation-kit"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Preparation Kit
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