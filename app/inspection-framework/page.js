import { getApi } from '../../lib/api';

export const metadata = {
  title: 'Inspection Framework',
  description: 'BIES school quality standards, indicators, elements and self-assessed ratings, based on the UAE School Inspection Framework.',
};
export const revalidate = 0;

const RATING_LABELS = {
  outstanding: 'Outstanding',
  very_good: 'Very Good',
  good: 'Good',
  acceptable: 'Acceptable',
  weak: 'Weak',
  very_weak: 'Very Weak',
};
const RATING_CLASS = {
  outstanding: 'scale-outstanding',
  very_good: 'scale-verygood',
  good: 'scale-good',
  acceptable: 'scale-acceptable',
  weak: 'scale-weak',
  very_weak: 'scale-veryweak',
};
const RATING_ORDER = ['outstanding', 'very_good', 'good', 'acceptable', 'weak', 'very_weak'];

function RatingBadge({ rating }) {
  if (!rating || !RATING_LABELS[rating]) {
    return <span className="scale-chip scale-pending">Not yet rated</span>;
  }
  return <span className={`scale-chip ${RATING_CLASS[rating]}`}>{RATING_LABELS[rating]}</span>;
}

const STANDARDS = [
  {
    num: '1', title: "Students' Achievement",
    indicators: [
      { key: '1.1', title: 'Attainment', elements: [
        'Attainment as measured against authorised and licensed curriculum standards',
        'Attainment as measured against national and appropriate international standards',
        'Knowledge, skills and understanding, especially in the key subjects',
        'Trends in attainment over time',
      ] },
      { key: '1.2', title: 'Progress', elements: [
        "Progress of students, including those with special educational needs, against their starting points and over time",
        'Progress in lessons',
        'Progress of different groups of students',
      ] },
      { key: '1.3', title: 'Learning skills', elements: [
        "Students' engagement in, and responsibility for, their own learning",
        "Students' interactions, collaboration and communication skills",
        'Application of learning to the world and making connections between areas of learning',
        'Innovation, enterprise, enquiry, research, critical thinking and use of learning technologies',
      ] },
    ],
  },
  {
    num: '2', title: "Students' Personal and Social Development, and Their Innovation Skills",
    indicators: [
      { key: '2.1', title: 'Personal development', elements: ['Attitudes', 'Behaviour', 'Relationships', 'Adoption of safe and healthy lifestyles', 'Attendance and punctuality'] },
      { key: '2.2', title: 'Understanding of Islamic values and awareness of Emirati and world cultures', elements: [
        "Appreciation of the role and values of Islam in society",
        'Respect for local heritage and culture',
        'Understanding and appreciation of their own and other world cultures',
      ] },
      { key: '2.3', title: 'Social responsibility and innovation skills', elements: [
        'Community involvement, volunteering and social contribution',
        'Work ethic, innovation, enterprise and entrepreneurship',
        'Environmental awareness and action',
      ] },
    ],
  },
  {
    num: '3', title: 'Teaching and Assessment',
    indicators: [
      { key: '3.1', title: 'Teaching for effective learning', elements: [
        "Teachers' knowledge of their subjects and how students learn them",
        'Lesson planning, the learning environment and the use of time and resources',
        'Teacher–student interactions including the use of questioning and dialogue',
        'Teaching strategies to meet the needs of individuals and groups of students',
        'Teaching to develop critical thinking, problem-solving, innovation and independent learning skills',
      ] },
      { key: '3.2', title: 'Assessment', elements: [
        'Internal assessment processes',
        'External, national and international benchmarking',
        "Analysis of assessment data to monitor students' progress",
        "Use of assessment information to influence teaching, the curriculum and students' progress",
        "Teachers' knowledge of, and support for, students' learning",
      ] },
    ],
  },
  {
    num: '4', title: 'Curriculum',
    indicators: [
      { key: '4.1', title: 'Curriculum design and implementation', elements: ['Rationale, balance and compliance', 'Continuity and progression', 'Curricular choices', 'Cross-curricular links', 'Review and development'] },
      { key: '4.2', title: 'Curriculum adaptation', elements: [
        'Modification of curriculum to meet the needs of all groups of students',
        'Enhancement, enterprise and innovation',
        'Links with local culture and society',
      ] },
    ],
  },
  {
    num: '5', title: 'The Protection, Care, Guidance and Support of Students',
    indicators: [
      { key: '5.1', title: 'Health and safety, including arrangements for child protection / safeguarding', elements: [
        'Care, welfare and safeguarding of students, including child protection',
        'Arrangements to ensure health, safety and security',
        'Quality of maintenance and record keeping',
        'Suitability of premises and facilities for all students, including those with special educational needs',
        'Provision for, and promotion of, safe and healthy lifestyles',
      ] },
      { key: '5.2', title: 'Care and support', elements: [
        'Staff-student relationships and behaviour management',
        'Promotion and management of attendance and punctuality',
        'Identification of students with special educational needs, and those who are gifted and/or talented',
        'Support for students with special educational needs, and those who are gifted and/or talented',
        'Guidance and support for all students',
      ] },
    ],
  },
  {
    num: '6', title: 'Leadership and Management',
    indicators: [
      { key: '6.1', title: 'The effectiveness of leadership', elements: ['Vision and direction', 'Educational leadership', 'Relationships and communication', 'Capacity to innovate and improve', 'Impact on and accountability for school performance and standards'] },
      { key: '6.2', title: 'Self-evaluation and improvement planning', elements: [
        'Processes for school self-evaluation',
        "Monitoring and evaluation of teaching and learning in relation to students' achievement",
        'The processes and impact of school improvement planning',
        'Improvement over time',
      ] },
      { key: '6.3', title: 'Partnerships with parents and the community', elements: ['Parental involvement', 'Communication', 'Reporting', 'Community and relevant partnerships'] },
      { key: '6.4', title: 'Governance', elements: [
        "Involvement of parents and other stakeholders and impact on decision-making",
        "Ensuring accountability for the school's actions and outcomes",
        "Influence on and responsibility for the school's performance",
      ] },
      { key: '6.5', title: 'Management, staffing, facilities and resources', elements: [
        'Management of the day-to-day life of the school',
        'Sufficiency, deployment and development of suitably qualified staff to optimise student achievements',
        'Appropriateness of the premises and learning environment to promote student achievements',
        'The relevance and range of resources for effective teaching and learning',
      ] },
    ],
  },
];

const INDICATOR_KEYS = STANDARDS.flatMap((s) => s.indicators.map((i) => i.key));

export default async function InspectionFrameworkPage() {
  const data = await getApi('inspection-framework');
  const ratings = data?.ratings || {};

  const counts = RATING_ORDER.reduce((acc, r) => ({ ...acc, [r]: 0 }), {});
  INDICATOR_KEYS.forEach((key) => {
    const r = ratings[key]?.rating;
    if (r && counts[r] !== undefined) counts[r]++;
  });
  const maxCount = Math.max(1, ...Object.values(counts));
  const overallRating = ratings['overall']?.rating;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>Quality &amp; Accountability</span>
          <h1>School Inspection Framework</h1>
          <p>
            BIES holds itself to a rigorous, transparent quality framework covering six performance
            standards, seventeen indicators and around 78 individual points of practice. Below is the
            full framework alongside BIES&apos;s own current self-assessed rating for each area, so
            parents and the community can judge our standards directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="overall-band">
            <span className="eyebrow" style={{ color: '#cfd2e6' }}>Overall Performance Judgement</span>
            <div style={{ marginTop: '10px' }}>
              <RatingBadge rating={overallRating} />
            </div>
            <p>Based on the &lsquo;best fit&rsquo; across all 17 indicators below, reviewed periodically by school leadership.</p>
          </div>

          <div className="section-head">
            <span className="eyebrow">The Six-Level Quality Scale</span>
            <h2>How every indicator is judged</h2>
          </div>
          <div className="scale-legend">
            {RATING_ORDER.map((r) => (
              <span key={r} className={`scale-chip ${RATING_CLASS[r]}`}>{RATING_LABELS[r]}</span>
            ))}
          </div>

          <div className="section-head">
            <span className="eyebrow">At a Glance</span>
            <h2>Ratings across all 17 indicators</h2>
          </div>
          <div className="chart-wrap">
            {RATING_ORDER.map((r) => (
              <div className="chart-bar-col" key={r}>
                <div
                  className={`chart-bar ${RATING_CLASS[r]}`}
                  style={{ height: `${Math.max(4, (counts[r] / maxCount) * 130)}px` }}
                  title={`${counts[r]} indicator(s)`}
                />
                <span className="chart-label">{RATING_LABELS[r]}<br />({counts[r]})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The Framework</span>
            <h2>Six standards, seventeen indicators, every point we&apos;re judged on</h2>
          </div>

          {STANDARDS.map((s) => (
            <div className="standard-block" key={s.num}>
              <div className="standard-head">
                <h3>Standard {s.num}: {s.title}</h3>
              </div>
              {s.indicators.map((ind) => (
                <div className="indicator-row" key={ind.key}>
                  <div className="indicator-title">
                    <h4>{ind.key} {ind.title}</h4>
                    <RatingBadge rating={ratings[ind.key]?.rating} />
                  </div>
                  <ul className="element-list">
                    {ind.elements.map((el, i) => <li key={i}>{el}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Cross-Cutting Principles</span>
            <h2>Innovation, Inclusion &amp; Self-Evaluation</h2>
            <ul>
              <li><strong>Innovation</strong> — new and creative approaches across curriculum, teaching, assessment and school organisation, driven by curiosity and a willingness to improve.</li>
              <li><strong>Inclusion</strong> — every student, including those with special educational needs and those who are gifted or talented, learns and participates together, with identification, curriculum modification and support all monitored closely.</li>
              <li><strong>Self-Evaluation</strong> — an ongoing, honest answer to three questions: How are we doing? How well should we be doing? What will we do to improve?</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">Special Educational Needs &amp; Gifted/Talented</span>
            <h2>Every learner, supported</h2>
            <p>BIES identifies and supports students with special educational needs (behavioural/social/emotional, sensory, physical, medical, speech/language, learning difficulties, and specific learning difficulties such as dyslexia and dyscalculia) and students who are gifted or talented, through differentiation, flexible groupings, appropriate pacing, and enrichment or extension opportunities.</p>
          </div>
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
