import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Fee Structure | Brilliance International Education System',
  description:
    'View the fee structure and tuition details for Brilliance International Education System (BIES) in Islamabad, including fees by programme.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bies.com.pk/fee-structure',
  },
  openGraph: {
    title: 'BIES Fee Structure | Brilliance International Education System',
    description:
      'View the fee structure and tuition details for Brilliance International Education System (BIES) in Islamabad, including fees by programme.',
    url: 'https://bies.com.pk/fee-structure',
  },
};

export const revalidate = 0;

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function FeeStructurePage() {
  const data = await getApi('fee-schedule-current');
  const feeSchedule = data && data.success && data.file_url ? data : null;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            BIES Fees
          </span>

          <h1>
            Brilliance International Education System Fee Structure
          </h1>

          <p>
            Tuition and fee details by programme at Brilliance International
            Education System in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Fee Information</span>

            <h2>
              BIES School Fees by Programme
            </h2>

            <p>
              Find the current tuition and fee information for programmes
              offered at Brilliance International Education System (BIES).
              The fee structure below provides details according to the
              available programmes.
            </p>
          </div>

          {feeSchedule ? (
            <div
              style={{
                background: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '2rem',
                maxWidth: '640px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{feeSchedule.title}</h3>
              <p style={{ color: '#555', marginBottom: '1.5rem' }}>
                Academic Session {feeSchedule.session}
                {feeSchedule.effective_from && (
                  <> &middot; Effective from {formatDate(feeSchedule.effective_from)}</>
                )}
              </p>
              
                href={feeSchedule.file_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#1a2b5c',
                  color: '#fff',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                View / Download Fee Schedule
                {feeSchedule.file_type ? ` (${feeSchedule.file_type.toUpperCase()})` : ''}
              </a>
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: '#777' }}>
              Fee structure is being updated — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
