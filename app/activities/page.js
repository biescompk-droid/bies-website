import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES Activities & Photos | Brilliance International Education System Islamabad',
  description:
    'Explore photos and videos from Brilliance International Education System in Islamabad, including school activities, celebrations, assemblies and events.',
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

          <h1>
            Brilliance International Education System Photos & Activities
          </h1>

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

            <h2>
              Brilliance International Education System Islamabad Photos
            </h2>

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
        </div>
      </section>
    </>
  );
}