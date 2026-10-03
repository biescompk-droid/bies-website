import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Fee Structure & School Fees | Islamabad',
  description:
    'View the BIES fee structure, school fees and tuition details for Brilliance International Education System in Islamabad, including fees by programme.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bies.com.pk/fee-structure',
  },
  openGraph: {
    title: 'BIES Fee Structure & School Fees | Islamabad',
    description:
      'View the BIES fee structure, school fees and tuition details for Brilliance International Education System in Islamabad, including fees by programme.',
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
  const feeSchedule =
    data && data.success && data.file_url ? data : null;

  const effectiveDate = feeSchedule
    ? formatDate(feeSchedule.effective_from)
    : '';

  const fileTypeLabel =
    feeSchedule && feeSchedule.file_type
      ? feeSchedule.file_type.toUpperCase()
      : '';

  const buttonLabel =
    'View or Download Fee Schedule' +
    (fileTypeLabel ? ' (' + fileTypeLabel + ')' : '');

  const sessionLine =
    'Academic Session ' +
    (feeSchedule ? feeSchedule.session : '') +
    (effectiveDate ? ' - Effective from ' + effectiveDate : '');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            BIES Fees
          </span>

          <h1>BIES Fee Structure &amp; School Fees</h1>

          <p>
            View the current BIES fee structure, school fees and tuition
            details by programme for students at Brilliance International
            Education System in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Fee Information</span>

            <h2>BIES School Fees by Programme</h2>

            <p>
              Find the current tuition and fee information for programmes
              offered at Brilliance International Education System (BIES).
              The fee schedule below provides details for the available
              academic programmes.
            </p>
          </div>

          {feeSchedule && (
            <div className="fee-schedule-card">
              <h3>{feeSchedule.title}</h3>

              <p>{sessionLine}</p>

              <a
                href={feeSchedule.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="fee-schedule-btn"
              >
                {buttonLabel}
              </a>
            </div>
          )}

          {!feeSchedule && (
            <p style={{ textAlign: 'center', color: '#777' }}>
              The BIES fee structure is currently unavailable. Please check
              back soon for the latest school fees and fee schedule.
            </p>
          )}

          <p style={{ marginTop: '24px' }}>
            Before reviewing the fees, learn more about the{' '}
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
            , and{' '}
            <a
              href="/todo-list"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Admission Checklist
            </a>
            .
          </p>
        </div>
      </section>

      <style>{`
        .fee-schedule-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 2rem;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        .fee-schedule-card h3 {
          margin-bottom: 0.5rem;
        }

        .fee-schedule-card p {
          color: #555;
          margin-bottom: 1.5rem;
        }

        .fee-schedule-btn {
          display: inline-block;
          background: #1a2b5c;
          color: #fff;
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}