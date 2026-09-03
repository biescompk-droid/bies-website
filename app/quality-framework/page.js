import { getApi } from '../../lib/api';

export const metadata = {
  title: 'BIES International School Quality Framework',
  description: 'BIES International School Quality Framework — 10 domains, 100 standards, and BIES\'s own self-assessed quality ratings, rated through eCampus.',
};
export const revalidate = 0;

const RATING_LABELS = {
  0: 'Not Implemented',
  1: 'Initial',
  2: 'Developing',
  3: 'Established',
  4: 'Advanced',
  5: 'Excellence',
};
// Reuses the same six-level scale-chip color classes as the Inspection
// Framework page (scale-outstanding .. scale-veryweak), mapped onto the
// 0-5 numeric scale so no new global CSS is required.
const RATING_CLASS = {
  5: 'scale-outstanding',
  4: 'scale-verygood',
  3: 'scale-good',
  2: 'scale-acceptable',
  1: 'scale-weak',
  0: 'scale-veryweak',
};
const RATING_ORDER = [5, 4, 3, 2, 1, 0];

function RatingBadge({ rating }) {
  if (rating === null || rating === undefined) {
    return <span className="scale-chip scale-pending">Not yet rated</span>;
  }
  return <span className={`scale-chip ${RATING_CLASS[rating]}`}>{rating} — {RATING_LABELS[rating]}</span>;
}

function levelFromPercent(pct) {
  if (pct >= 95) return 'Excellence';
  if (pct >= 90) return 'Outstanding';
  if (pct >= 80) return 'Very Good';
  if (pct >= 70) return 'Good';
  if (pct >= 60) return 'Developing';
  return 'Requires Significant Improvement';
}

const DOMAINS = [
  {
    num: '1', title: 'Leadership, Governance & Vision',
    standards: [
      'BIES shall maintain a clear school vision, mission and core values.',
      'School policies shall be documented, approved and regularly reviewed.',
      'Leadership decisions shall be based on evidence and school data.',
      'Every department shall have clearly defined roles and responsibilities.',
      'Annual strategic goals shall be established and monitored.',
      'School performance shall be reviewed at least annually.',
      'The school shall maintain a continuous school-improvement plan.',
      'Leadership shall promote ethical, transparent and professional practices.',
      'All branches shall follow common BIES policies and quality standards.',
      'Major school decisions shall prioritize student learning and well-being.',
    ],
  },
  {
    num: '2', title: 'Curriculum & Academic Planning',
    standards: [
      'Curriculum shall meet applicable national/regulatory requirements.',
      'International benchmarks shall be incorporated where appropriate.',
      'Every subject shall have clearly defined learning outcomes/SLOs.',
      'Curriculum shall progress logically from one grade to the next.',
      'Learning objectives shall be age and development appropriate.',
      'Curriculum shall balance knowledge, skills and values.',
      'Lessons shall connect learning with real-life applications.',
      'Curriculum shall include critical thinking and problem-solving.',
      'Curriculum shall include digital and AI literacy appropriate to age.',
      'Curriculum effectiveness shall be reviewed using assessment evidence.',
    ],
  },
  {
    num: '3', title: 'Teaching & Learning',
    standards: [
      'Teaching shall be primarily student-centered.',
      'Teachers shall use active-learning strategies.',
      'Teachers shall explain concepts before expecting memorization.',
      'Lessons shall include appropriate questioning techniques.',
      'Students shall have opportunities to investigate and discover.',
      'Teachers shall use differentiated instruction where needed.',
      'Classroom activities shall encourage participation by all learners.',
      'Teachers shall connect new concepts with prior knowledge.',
      'Students shall receive opportunities for independent learning.',
      'Teaching strategies shall be reviewed and improved through observation.',
    ],
  },
  {
    num: '4', title: 'Teacher Professional Standards',
    standards: [
      'Every teacher shall maintain an updated professional profile.',
      'Teachers shall prepare structured lesson plans.',
      'Teachers shall demonstrate subject-matter competency.',
      'Teachers shall receive regular professional development.',
      'Teachers shall participate in peer learning and collaboration.',
      'Teachers shall use assessment evidence to improve instruction.',
      'Teachers shall maintain professional classroom behavior.',
      'Teachers shall use appropriate educational technology.',
      'Teachers shall maintain accurate student academic records.',
      'Teacher performance shall be reviewed against transparent criteria.',
    ],
  },
  {
    num: '5', title: 'Assessment & Examination',
    standards: [
      'Assessment shall measure the intended learning outcomes.',
      'BIES shall use diagnostic, formative and summative assessment.',
      'Assessment shall include knowledge, application and higher-order thinking.',
      'Students shall receive timely feedback.',
      'Assessment criteria shall be communicated clearly.',
      'Examination papers shall be reviewed for quality and accuracy.',
      'Question papers shall maintain appropriate difficulty balance.',
      'Academic integrity shall be protected during examinations.',
      'Assessment results shall be analyzed to identify learning gaps.',
      'Assessment data shall inform future teaching and intervention.',
    ],
  },
  {
    num: '6', title: 'Student Development & Well-being',
    standards: [
      'Every student shall be treated with dignity and respect.',
      'BIES shall maintain a safe and supportive learning environment.',
      'Student voice and participation shall be encouraged.',
      'Students shall develop communication skills.',
      'Students shall develop collaboration skills.',
      'Students shall develop creativity and innovation.',
      'Students shall develop critical-thinking skills.',
      'Students shall develop leadership and responsibility.',
      'Students shall receive age-appropriate career and future guidance.',
      'Student achievements shall be recognized fairly and appropriately.',
    ],
  },
  {
    num: '7', title: 'Child Protection, Safeguarding & Inclusion',
    standards: [
      'BIES shall maintain a formal child-protection policy.',
      'Staff shall understand their safeguarding responsibilities.',
      'Bullying and harassment shall be addressed through documented procedures.',
      'Discrimination shall not be tolerated.',
      'Students with different learning needs shall receive appropriate support.',
      'School facilities shall provide reasonable accessibility.',
      'Student confidentiality shall be protected.',
      'Emergency and safeguarding procedures shall be communicated to staff.',
      'Staff recruitment shall include appropriate verification procedures.',
      'Safeguarding procedures shall be reviewed regularly.',
    ],
  },
  {
    num: '8', title: 'Technology, Digital Learning & AI',
    standards: [
      'BIES shall maintain a secure digital learning environment.',
      'Student information systems shall maintain accurate records.',
      'Teachers shall receive digital-literacy training.',
      'Students shall receive age-appropriate digital-literacy education.',
      'Students shall be taught responsible digital citizenship.',
      'AI use in education shall follow defined ethical guidelines.',
      'AI tools shall support learning rather than replace meaningful teaching.',
      'AI-generated educational content shall be reviewed for accuracy.',
      'Student data shall be protected when using digital/AI systems.',
      'eCampus shall support academic, administrative and communication workflows.',
    ],
  },
  {
    num: '9', title: 'Administration, HR & Operations',
    standards: [
      'Student admission procedures shall be documented and standardized.',
      'Student records shall be accurate and securely maintained.',
      'Attendance shall be recorded accurately.',
      'Staff attendance and leave shall be systematically managed.',
      'HR records shall be maintained for every employee.',
      'Job descriptions shall exist for key positions.',
      'Staff induction shall be provided to new employees.',
      'Financial and administrative procedures shall have appropriate controls.',
      'School assets and equipment shall be properly recorded.',
      'All branches shall maintain consistent administrative procedures.',
    ],
  },
  {
    num: '10', title: 'Parents, Community & Continuous Improvement',
    standards: [
      'Parents shall receive regular academic progress information.',
      'Parent communication channels shall be clearly defined.',
      'Parent concerns shall be handled through a documented process.',
      'Parent feedback shall be collected periodically.',
      'Students shall receive opportunities for community engagement.',
      'BIES shall maintain relationships with relevant educational organizations.',
      'School performance indicators/KPIs shall be monitored.',
      'Internal quality audits shall be conducted periodically.',
      'Corrective actions shall be documented and followed up.',
      'BIES shall maintain a culture of continuous improvement and innovation.',
    ],
  },
];

const STANDARD_KEYS = DOMAINS.flatMap((d) => d.standards.map((_, i) => `${d.num}.${i + 1}`));

export default async function QualityFrameworkPage() {
  const data = await getApi('quality-framework');
  const ratings = data?.ratings || {};
  const summary = data?.summary || {};

  const counts = RATING_ORDER.reduce((acc, r) => ({ ...acc, [r]: 0 }), {});
  STANDARD_KEYS.forEach((key) => {
    const r = ratings[key]?.rating;
    if (r !== null && r !== undefined && counts[r] !== undefined) counts[r]++;
  });
  const maxCount = Math.max(1, ...Object.values(counts));

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Quality &amp; Accountability</span>
          <h1>BIES International School Quality Framework</h1>
          <p>
            A framework for quality, accountability, continuous improvement and excellence — ten
            domains, one hundred standards, and BIES&apos;s own current self-assessed rating for each
            one, so parents and the community can judge our standards directly. Ratings are carried
            out by school leadership through BIES eCampus.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="overall-band">
            <span className="eyebrow" style={{ color: '#cfd2e6' }}>Overall Quality Score</span>
            <div style={{ marginTop: '10px' }}>
              {summary.percentage === null || summary.percentage === undefined ? (
                <span className="scale-chip scale-pending">Not yet assessed</span>
              ) : (
                <span className={`scale-chip ${RATING_CLASS[Math.min(5, Math.round(summary.percentage / 20))] || 'scale-pending'}`}>
                  {summary.percentage}% — {levelFromPercent(summary.percentage)}
                </span>
              )}
            </div>
            <p>
              {summary.assessedCount || 0} of {summary.totalStandards || 100} standards assessed so far,
              out of {(summary.totalStandards || 100) * 5} maximum possible points. Reviewed periodically
              by school leadership through BIES eCampus.
            </p>
          </div>

          <div className="section-head">
            <span className="eyebrow">The Six-Level Rating Scale</span>
            <h2>How every standard is judged</h2>
          </div>
          <div className="scale-legend">
            {RATING_ORDER.map((r) => (
              <span key={r} className={`scale-chip ${RATING_CLASS[r]}`}>{r} — {RATING_LABELS[r]}</span>
            ))}
          </div>

          <div className="section-head">
            <span className="eyebrow">At a Glance</span>
            <h2>Ratings across all 100 standards</h2>
          </div>
          <div className="chart-wrap">
            {RATING_ORDER.map((r) => (
              <div className="chart-bar-col" key={r}>
                <div
                  className={`chart-bar ${RATING_CLASS[r]}`}
                  style={{ height: `${Math.max(4, (counts[r] / maxCount) * 130)}px` }}
                  title={`${counts[r]} standard(s)`}
                />
                <span className="chart-label">{r}<br />({counts[r]})</span>
              </div>
            ))}
          </div>

          <div className="section-head">
            <span className="eyebrow">By Domain</span>
            <h2>Score across all 10 domains</h2>
          </div>
          <div className="chart-wrap">
            {DOMAINS.map((d) => {
              const score = summary.domainScores ? summary.domainScores[d.num] : null;
              return (
                <div className="chart-bar-col" key={d.num}>
                  <div
                    className={score !== null && score !== undefined ? `chart-bar ${RATING_CLASS[Math.min(5, Math.round(score / 20))] || 'scale-pending'}` : 'chart-bar scale-pending'}
                    style={{ height: `${score !== null && score !== undefined ? Math.max(4, (score / 100) * 130) : 4}px` }}
                    title={`Domain ${d.num}: ${score !== null && score !== undefined ? score + '%' : 'not yet assessed'}`}
                  />
                  <span className="chart-label">D{d.num}<br />{score !== null && score !== undefined ? score + '%' : '—'}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The Framework</span>
            <h2>Ten domains, one hundred standards, every point we&apos;re judged on</h2>
          </div>

          {DOMAINS.map((d) => (
            <div className="standard-block" key={d.num}>
              <div className="standard-head">
                <h3>Domain {d.num}: {d.title}</h3>
              </div>
              <ul className="element-list">
                {d.standards.map((text, i) => {
                  const key = `${d.num}.${i + 1}`;
                  return (
                    <li key={key} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <span>{key} {text}</span>
                      <RatingBadge rating={ratings[key]?.rating ?? null} />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Questions about our standards?</h2>
          <a href="/contact" className="btn btn-light">Get in Touch</a>
        </div>
      </section>
    </>
  );
}
