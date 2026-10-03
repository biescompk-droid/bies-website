import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Academic Calendar & Session Dates | Islamabad',
  description:
    'View the BIES academic calendar, session dates, holidays, exams and important academic events for students and parents in Islamabad.',
};

export const revalidate = 0;

export default async function AcademicCalendarPage() {
  const data = await getApi('academic-calendar');
  const events = data?.events || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Academic Calendar
          </span>

          <h1>BIES Academic Calendar &amp; Session Dates</h1>

          <p>
            View the BIES academic calendar, including session dates, holidays,
            exams and important academic events for students and parents.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {events.length === 0 ? (
            <div className="empty-state">
              <p>
                The BIES academic calendar is currently being updated. Please
                check back soon for upcoming session dates, holidays, exams and
                important academic events.
              </p>
            </div>
          ) : (
            <div className="doc-items">
              {events.map((e) => (
                <div className="doc-item" key={e.id}>
                  <div>
                    <div className="doc-item-name">{e.title}</div>

                    {e.description && (
                      <div className="doc-item-desc">
                        {e.description}
                      </div>
                    )}
                  </div>

                  <span className="doc-item-price">
                    {e.event_date} · {e.category}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p style={{ marginTop: '24px' }}>
            Explore our{' '}
            <a
              href="/programs"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Academic Programs
            </a>
            , view upcoming{' '}
            <a
              href="/activities"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES School Activities and Events
            </a>
            , learn more about{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              School Admission
            </a>
            , or review the{' '}
            <a
              href="/fee-structure"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Fee Structure
            </a>
            . For questions about dates or academic information, visit our{' '}
            <a
              href="/contact"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Contact
            </a>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  );
}