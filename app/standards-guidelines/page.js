import { getApi } from '../../lib/api';

export const metadata = {
  title:
    'BIES Standards & Guidelines | Brilliance International Education System',
  description:
    'View academic standards, SLOs and teaching guidelines at Brilliance International Education System (BIES) in Islamabad.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.bies.com.pk/standards-guidelines',
  },
  openGraph: {
    title:
      'BIES Standards & Guidelines | Brilliance International Education System',
    description:
      'View academic standards, SLOs and teaching guidelines at Brilliance International Education System (BIES) in Islamabad.',
    url: 'https://www.bies.com.pk/standards-guidelines',
  },
};

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

              {d.description && (
                <div className="doc-item-desc">{d.description}</div>
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
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            BIES Standards &amp; Guidelines
          </span>

          <h1>
            Brilliance International Education System Standards &amp;
            Guidelines
          </h1>

          <p>
            Explore the academic standards, Student Learning Outcomes (SLOs)
            and suggested teaching and learning guidelines used at
            Brilliance International Education System in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Academic Standards</span>

            <h2>BIES Standards, SLOs &amp; Teaching Guidelines</h2>

            <p>
              This section provides the required academic standards and SLOs,
              together with suggested guidelines for teaching and learning at
              Brilliance International Education System (BIES).
            </p>
          </div>

          {standards.length === 0 && guidelines.length === 0 ? (
            <div className="empty-state">
              <p>
                Standards and guidelines are being updated — check back soon.
              </p>
            </div>
          ) : (
            <>
              <DocGroup
                title="Required Standards & SLOs"
                documents={standards}
              />

              <DocGroup
                title="Suggested Guidelines"
                documents={guidelines}
              />
            </>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              Brilliance International Education System
            </span>

            <h2>Academic Standards at BIES Islamabad</h2>

            <p>
              The standards and guidelines available on this page support
              teaching and learning at Brilliance International Education
              System. Parents, students and educators can review the available
              documents and access the relevant resources above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}