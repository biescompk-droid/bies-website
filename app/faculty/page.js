import { pageMeta, SITE_URL } from '../../lib/seo';
import { getApi } from '../../lib/api';

export const metadata = pageMeta({
  title: 'BIES Faculty & Teachers | Islamabad',
  description:
    'Meet the BIES faculty and teachers in Islamabad, including their roles, qualifications and experience at Brilliance International Education System.',
  path: '/faculty',
});
export const revalidate = 0;

// Staff sometimes type entries in ALL CAPS or with stray spaces in the
// Content Manager. Tidy them for display only (the stored data is unchanged).
const KEEP = {
  BS: 'BS', BA: 'BA', MA: 'MA', MS: 'MS', BSC: 'BSc', MSC: 'MSc', 'B.ED': 'B.Ed',
  'M.ED': 'M.Ed', 'B.COM': 'B.Com', MBA: 'MBA', PHD: 'PhD', HONS: 'Hons', AI: 'AI',
};
const SMALL = new Set(['in', 'of', 'from', 'and', 'for', 'the', 'at', 'to']);

function tidy(value) {
  const s = (value || '').replace(/\s+/g, ' ').replace(/\s*,\s*/g, ', ').trim();
  if (!s || /[a-z]/.test(s)) return s; // already mixed case: leave as typed
  return s
    .split(' ')
    .map((w, i) => {
      const bare = w.replace(/[^A-Z.]/g, '');
      const tail = w.slice(bare.length);
      if (KEEP[bare]) return KEEP[bare] + tail;
      const lower = w.toLowerCase();
      if (i > 0 && SMALL.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

const LINK = { color: 'var(--navy)', fontWeight: 600 };

export default async function FacultyPage() {
  const data = await getApi('faculty');
  const faculty = (data?.faculty || []).map((f) => ({
    ...f,
    name: tidy(f.name),
    designation: tidy(f.designation),
    qualifications: tidy(f.qualifications),
  }));

  const jsonLd = faculty.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'BIES Faculty & Teachers',
        url: `${SITE_URL}/faculty`,
        about: {
          '@type': 'School',
          name: 'Brilliance International Education System (BIES)',
          url: SITE_URL,
          employee: faculty.map((f) => ({
            '@type': 'Person',
            name: f.name,
            ...(f.designation ? { jobTitle: f.designation } : {}),
            ...(f.qualifications ? { description: f.qualifications } : {}),
          })),
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Our Faculty</span>
          <h1>BIES Faculty &amp; Teachers</h1>
          <p>
            Meet the dedicated BIES faculty and teachers who support student
            learning and development at Brilliance International Education System
            in Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>The teaching team at BIES Islamabad</h2>
            <p>
              BIES teachers guide students from Montessori through the primary,
              middle and secondary years at our campus in PWD, Islamabad.
              {faculty.length > 0 &&
                ` Our current team has ${faculty.length} teachers and academic leaders,
                each listed below with their role and qualifications.`}{' '}
              Each teacher plans lessons around the school&apos;s own workbooks,
              follows the BIES{' '}
              <a href="/quality-framework" style={LINK}>Quality Framework</a>, and
              takes part in regular training so that every child is taught with
              care and high expectations.
            </p>
          </div>

          {faculty.length === 0 ? (
            <div className="empty-state">
              <p>
                BIES faculty profiles are currently being updated. Please check
                back soon to learn more about our teachers and their qualifications.
              </p>
            </div>
          ) : (
            <div className="faculty-grid">
              {faculty.map((f) => (
                <div className="faculty-card" key={f.id}>
                  <div className="faculty-photo">
                    {f.photo_url ? (
                      <img
                        src={f.photo_url}
                        alt={`${f.name}${f.designation ? `, ${f.designation}` : ''} at BIES Islamabad`}
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div className="faculty-info">
                    <h3>{f.name}</h3>
                    {f.designation && <span className="faculty-role">{f.designation}</span>}
                    {f.qualifications && <p>{f.qualifications}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p style={{ marginTop: '32px' }}>
            Learn more <a href="/about" style={LINK}>about BIES</a>, explore our{' '}
            <a href="/programs" style={LINK}>Academic Programs</a>, see how we
            measure school quality in the{' '}
            <a href="/inspection-framework" style={LINK}>School Inspection Framework</a>,
            or start the <a href="/admission" style={LINK}>admission process</a>.
            To join our teaching team, please{' '}
            <a href="/contact" style={LINK}>contact BIES</a>.
          </p>
        </div>
      </section>
    </>
  );
}
