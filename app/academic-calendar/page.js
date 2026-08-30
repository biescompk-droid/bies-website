import { getApi } from '../../lib/api';

export const metadata = { title: 'Academic Calendar', description: 'Session dates and key academic events at BIES.' };
export const revalidate = 0;

export default async function AcademicCalendarPage() {
  const data = await getApi('academic-calendar');
  const events = data?.events || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Academic Calendar</span>
          <h1>Session Dates &amp; Events</h1>
          <p>Key holidays, exams and events for the current academic session.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {events.length === 0 ? (
            <div className="empty-state"><p>The academic calendar is being updated — check back soon.</p></div>
          ) : (
            <div className="doc-items">
              {events.map((e) => (
                <div className="doc-item" key={e.id}>
                  <div>
                    <div className="doc-item-name">{e.title}</div>
                    {e.description && <div className="doc-item-desc">{e.description}</div>}
                  </div>
                  <span className="doc-item-price">{e.event_date} · {e.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
