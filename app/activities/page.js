import { getApi } from '../../lib/api';

export const metadata = {
  title: 'Activities',
  description: 'Photos and videos from events and activities at Brilliance International Education System.',
};

export const revalidate = 0;

export default async function ActivitiesPage() {
  const data = await getApi('gallery');
  const items = data?.items || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Activities</span>
          <h1>Life at BIES</h1>
          <p>Photos and videos from assemblies, celebrations and events at BIES.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {items.length === 0 ? (
            <div className="empty-state">
              <p>Gallery photos and videos are being updated — check back soon.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {items.map((item, i) => (
                <a
                  href={item.media_type === 'embed' ? item.embed_url : item.file_url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.id}
                  className={i === 0 ? 'gspan' : ''}
                >
                  {item.media_type === 'video' ? (
                    <video src={item.file_url} muted />
                  ) : (
                    <img src={item.file_url} alt={item.caption || 'BIES activity'} loading="lazy" />
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
