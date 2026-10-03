import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES School Activities & Events | Islamabad',
  description:
    'Explore BIES school activities, photos, celebrations, assemblies and events at Brilliance International Education System in PWD, Islamabad.',
};

export const revalidate = 0;

export default async function ActivitiesPage() {
  const data = await getApi('gallery');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Activities & Photos
          </span>

          <h1>BIES School Activities, Photos &amp; Events in PWD Islamabad</h1>

          <p>
            Explore photos and videos from school activities, assemblies,
            celebrations and events at Brilliance International Education
            System in PWD, Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Life at BIES</span>

            <h2>BIES School Activities, Photos and Events</h2>

            <p>
              Take a look at life at BIES through photos and videos from our
              school activities and events. From celebrations and assemblies
              to special occasions, our gallery highlights the experiences
              and moments that make school life memorable for our students.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="empty-state">
              <p>
                Gallery photos and videos are being updated — check back soon.
              </p>
            </div>
          ) : (
            <div className="gallery-grid">
              {items.map((item, i) => (
                <a
                  href={
                    item.media_type === 'embed'
                      ? item.embed_url
                      : item.file_url
                  }
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                  className={i === 0 ? 'gspan' : ''}
                >
                  {item.media_type === 'video' ? (
                    <video
                      src={item.file_url}
                      muted
                      aria-label={
                        item.caption ||
                        'Brilliance International Education System activity video'
                      }
                    />
                  ) : (
                    <img
                      src={item.file_url}
                      alt={
                        item.caption ||
                        'Brilliance International Education System activity in Islamabad'
                      }
                      loading="lazy"
                    />
                  )}
                </a>
              ))}
            </div>
          )}

          <p style={{ marginTop: '24px' }}>
            Learn more about our{' '}
            <a
              href="/programs"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              Academic Programs
            </a>
            , check the{' '}
            <a
              href="/academic-calendar"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Academic Calendar
            </a>
            , explore our{' '}
            <a
              href="/faculty"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              BIES Faculty &amp; Teachers
            </a>
            , or learn more{' '}
            <a
              href="/about"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              About BIES
            </a>
            . If you are interested in joining BIES, visit our{' '}
            <a
              href="/admission"
              style={{ color: 'var(--navy)', fontWeight: 600 }}
            >
              School Admission
            </a>{' '}
            page. For more information, visit our{' '}
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