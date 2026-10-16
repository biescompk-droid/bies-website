import { pageMeta } from '../../lib/seo';
import { getApi } from '../../lib/api';

export const metadata = pageMeta({
  title: 'BIES Scholarships | Merit-Based Financial Support | Islamabad',
  description:
    'BIES Scholarship & Financial Assistance Policy: academic excellence, merit, need-based, improvement, STEM & AI and co-curricular scholarships, eligibility, application steps and renewal rules.',
  path: '/scholarship',
});

export const revalidate = 0;

const LINK = { color: 'var(--navy)', fontWeight: 600 };
const LIST = { color: 'var(--ink-soft)', paddingLeft: '20px', margin: '0 0 8px', lineHeight: 1.7 };
const NOTE = { color: 'var(--ink-soft)', fontStyle: 'italic', marginTop: '24px' };

const OBJECTIVES = [
  'Recognize and reward academic excellence and consistent improvement.',
  'Support deserving students from financially disadvantaged backgrounds.',
  'Encourage discipline, regular attendance, responsible behaviour, and a positive attitude towards learning.',
  'Promote participation in STEM, artificial intelligence, digital literacy, innovation, and other future-oriented skills.',
  'Encourage students to participate in academic competitions, creative projects, and skill-development programmes.',
  'Build a culture of merit, fairness, responsibility, and lifelong learning.',
];

const CATEGORIES = [
  {
    title: 'Academic Excellence Scholarship',
    body: 'Awarded to students demonstrating outstanding academic performance in school examinations and assessments.',
  },
  {
    title: 'Merit-Based Scholarship',
    body: 'Awarded to students who demonstrate exceptional ability, consistent progress, intellectual curiosity, and commitment to learning.',
  },
  {
    title: 'Need-Based Financial Assistance',
    body: 'Provided to eligible students whose families demonstrate genuine financial hardship and require assistance to continue their education.',
  },
  {
    title: 'Outstanding Improvement Scholarship',
    body: 'Designed to encourage students who demonstrate significant improvement in academic performance, learning habits, attendance, and overall development.',
  },
  {
    title: 'STEM, AI & Innovation Scholarship',
    body: 'Recognizes students with outstanding potential in science, technology, engineering, mathematics, artificial intelligence, coding, robotics, digital creativity, or practical problem-solving.',
  },
  {
    title: 'Co-Curricular Excellence Scholarship',
    body: 'May be awarded for exceptional achievement in debate, public speaking, sports, arts, leadership, community service, or other school-approved activities.',
  },
  {
    title: 'Sibling and Special Consideration Support',
    body: 'BIES may provide sibling concessions or other forms of financial assistance in accordance with its approved fee concession arrangements.',
  },
];

const ELIGIBILITY = [
  'Academic results and assessment records, where applicable.',
  'Consistency of performance and willingness to improve.',
  'Attendance, punctuality, and participation in learning activities.',
  'Responsible conduct and compliance with school policies.',
  'Demonstrated talent, achievement, or potential in the relevant field.',
  'Verified financial circumstances for need-based assistance.',
  'Submission of the required application and supporting documents within the announced deadline.',
];

const STEPS = [
  { title: 'Announcement', body: 'The school announces available scholarships, eligibility requirements, application deadlines, and any applicable award details.' },
  { title: 'Application', body: 'Parents or guardians submit the prescribed application form and required supporting documents.' },
  { title: 'Verification', body: 'The administration may verify academic records, financial information, achievements, and other relevant details.' },
  { title: 'Assessment', body: 'Applications are evaluated against the published criteria for the relevant scholarship category.' },
  { title: 'Recommendation', body: 'The designated scholarship committee reviews eligible applications and makes recommendations.' },
  { title: 'Approval', body: 'Final approval is granted by the authorized school management.' },
  { title: 'Notification', body: 'Successful applicants are informed through official school communication channels.' },
];

const BENEFITS = [
  'Scholarships apply only to the fee components specified by the school.',
  'Admission fees, security deposits, books, uniforms, transport, examination charges, activity charges, and other ancillary expenses are not automatically covered.',
  'Scholarships are not treated as cash payments to students or parents.',
  'Scholarship benefits are adjusted against the relevant school fee account.',
  'Awards are subject to the terms and duration stated in the official scholarship approval.',
];

const RENEWAL = [
  'Maintaining the required academic performance.',
  'Meeting attendance and participation expectations.',
  'Demonstrating satisfactory conduct and compliance with school rules.',
  'Submitting updated documentation where required.',
  'Continued availability of the relevant scholarship allocation.',
];

const RESPONSIBILITIES = [
  'Provide accurate and complete information during the application process.',
  'Submit authentic supporting documents.',
  'Maintain regular communication with the school.',
  'Follow school rules, academic expectations, and codes of conduct.',
  'Notify the administration of any material change in circumstances relevant to need-based assistance.',
  "Use the opportunity responsibly and remain committed to the student's educational development.",
];

const REVIEW = [
  'Submission of false, misleading, or materially incomplete information.',
  'Failure to meet clearly communicated scholarship conditions.',
  'A material change in eligibility or financial circumstances, where relevant.',
  'Disciplinary or other circumstances affecting eligibility, following a fair review.',
  'Administrative or funding changes affecting the availability of a scholarship programme.',
];

const FAIRNESS = [
  'Applications are evaluated against relevant, consistently applied criteria.',
  'Personal and financial information is handled confidentially and accessed only by authorized personnel for legitimate administrative purposes.',
  'Students are not subjected to unfair discrimination on the basis of personal background or financial circumstances.',
  'Need-based assistance is assessed sensitively, preserving the dignity and privacy of students and families.',
  "Scholarship decisions are documented and approved through the school's designated procedures.",
];

function List({ items }) {
  return (
    <ul style={LIST}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default async function ScholarshipPage() {
  const data = await getApi('scholarships');
  const scholarships = data?.scholarships || [];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            Scholarship
          </span>
          <h1>BIES Scholarships | Merit-Based Financial Support</h1>
          <p>
            The Scholarship &amp; Financial Assistance Policy of Brilliance
            International Education System (BIES), Islamabad: who can apply,
            the types of scholarships, and how awards are made and renewed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Policy Statement</span>
            <h2>Every deserving student should have the chance to reach their potential</h2>
            <p>
              BIES is committed to promoting academic excellence, equal
              educational opportunities, personal development, and future-ready
              learning. The school believes that every deserving student should
              have the opportunity to develop their potential, regardless of
              financial circumstances.
            </p>
            <p>
              Through its Scholarship &amp; Financial Assistance Programme, BIES
              aims to recognize outstanding achievement, encourage consistent
              academic progress, support students facing financial challenges,
              and motivate learners to develop the knowledge, skills, creativity,
              and character required for success in a rapidly evolving world.
            </p>
          </div>

          {scholarships.length > 0 && (
            <>
              <h3 style={{ marginBottom: '16px' }}>Current scholarship announcements</h3>
              <div className="card-list" style={{ marginBottom: '44px' }}>
                {scholarships.map((s) => (
                  <div className="info-card" key={s.id}>
                    <h3>{s.title}</h3>
                    {s.eligibility && (
                      <p>
                        <strong>Eligibility:</strong> {s.eligibility}
                      </p>
                    )}
                    {s.description && <p>{s.description}</p>}
                  </div>
                ))}
              </div>
            </>
          )}

          <h3>1. Objectives of the Scholarship Programme</h3>
          <List items={OBJECTIVES} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">2. Categories</span>
            <h2>Types of scholarships at BIES</h2>
            <p>
              BIES may offer scholarships under the following categories,
              subject to the school&apos;s approved budget, eligibility criteria,
              and available funding.
            </p>
          </div>
          <div className="why-grid">
            {CATEGORIES.map((c) => (
              <div className="why-item" key={c.title}>
                <span className="mark">✦</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={NOTE}>
            The availability of each category and the applicable scholarship
            amount or percentage are determined by school management and
            communicated through official channels.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">3. Eligibility</span>
            <h2>Who can be considered</h2>
            <p>
              Applicants may be considered for a scholarship based on the
              relevant category and the following factors:
            </p>
            <List items={ELIGIBILITY} />
            <p style={{ color: 'var(--ink-soft)' }}>
              For newly admitted students, eligibility may be assessed through
              previous academic records, an admission assessment, an interview,
              or other relevant evidence, depending on the scholarship category.
            </p>
          </div>
          <div>
            <span className="eyebrow">4. How to Apply</span>
            <h2>Application and selection procedure</h2>
            <div className="steps">
              {STEPS.map((s, i) => (
                <div className="step" key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={NOTE}>Submission of an application does not guarantee the award of a scholarship.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">5. Benefits</span>
            <h2>Scholarship benefits and fee adjustment</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              Scholarships may be awarded as a percentage or a fixed amount
              against eligible school fees, depending on the approved scholarship
              category. Unless explicitly stated in the official award letter:
            </p>
            <List items={BENEFITS} />
            <p style={{ color: 'var(--ink-soft)' }}>
              The school communicates the approved benefit, applicable fee
              components, duration, and renewal conditions to the parent or
              guardian. See the current{' '}
              <a href="/fee-structure" style={LINK}>BIES Fee Structure</a>.
            </p>
          </div>
          <div>
            <span className="eyebrow">6. Duration &amp; Renewal</span>
            <h2>How long a scholarship lasts</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              Scholarships may be awarded for a term, an academic year, or
              another specified period. Renewal depends on the conditions
              communicated at the time of award, which may include:
            </p>
            <List items={RENEWAL} />
            <p style={{ color: 'var(--ink-soft)' }}>
              Scholarships do not automatically renew unless the award letter or
              applicable school policy expressly provides for automatic renewal.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">7. Responsibilities</span>
            <h2>Responsibilities of parents and students</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              Parents and students receiving scholarships are expected to:
            </p>
            <List items={RESPONSIBILITIES} />
          </div>
          <div>
            <span className="eyebrow">8. Review</span>
            <h2>Review, suspension and withdrawal</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              BIES reserves the right to review a scholarship where there is a
              legitimate reason to do so, including:
            </p>
            <List items={REVIEW} />
            <p style={{ color: 'var(--ink-soft)' }}>
              Any suspension, reduction, or withdrawal is considered by the
              authorized school management in accordance with the applicable
              award conditions and school procedures. Parents or guardians are
              informed of the decision and the reasons for it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">9. Fairness</span>
            <h2>Fairness, confidentiality and non-discrimination</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              BIES is committed to a fair, transparent, and respectful
              scholarship process.
            </p>
            <List items={FAIRNESS} />
          </div>
          <div>
            <span className="eyebrow">10. External Opportunities</span>
            <h2>International scholarships and external opportunities</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              BIES encourages students to explore legitimate international
              scholarships, educational exchanges, online learning programmes,
              competitions, and externally funded certifications that support
              their academic and professional development. The school may guide
              students and parents in identifying suitable opportunities,
              understanding eligibility requirements, preparing applications,
              and developing relevant academic and digital skills.
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              External scholarships and certifications are governed by their
              respective providers. BIES does not guarantee admission, funding,
              certification, or selection by any external organization. Students
              and parents should verify the authenticity, eligibility criteria,
              deadlines, and terms of external opportunities before applying.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">11. Governance</span>
            <h2>Scholarship committee and governance</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              The school may establish a Scholarship Committee or designate
              authorized representatives to manage applications, verify
              eligibility, evaluate candidates, maintain records, and recommend
              awards. All scholarships are subject to approval by the authorized
              school management. The school may introduce, revise, or discontinue
              a scholarship category in accordance with its educational
              objectives, available resources, and applicable requirements.
            </p>
          </div>
          <div>
            <span className="eyebrow">12. Policy Review</span>
            <h2>Policy review and amendments</h2>
            <p style={{ color: 'var(--ink-soft)' }}>
              This policy may be reviewed periodically to ensure its continued
              relevance, fairness, and effectiveness. Any amendments are approved
              by the authorized school management and communicated through
              official school channels. The version published on the official
              BIES website, together with any applicable formal scholarship
              announcement or individual award letter, serves as the reference
              for the relevant scholarship terms.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our Commitment</span>
            <h2>Recognizing potential, rewarding effort</h2>
            <p>
              At Brilliance International Education System, we believe that
              education should recognize potential, reward effort, encourage
              innovation, and create meaningful opportunities for every learner.
              Through our Scholarship &amp; Financial Assistance Programme, we aim
              to nurture confident, capable, responsible, and future-ready
              students who can contribute positively to society.
            </p>
          </div>
          <p>
            Explore our <a href="/programs" style={LINK}>Academic Programs</a>,
            learn about the <a href="/admission" style={LINK}>BIES Admission Process</a>,
            or review the <a href="/admission-policy" style={LINK}>BIES Admission Policy</a>.
            For scholarship enquiries, please{' '}
            <a href="/contact" style={LINK}>contact BIES</a>.
          </p>
        </div>
      </section>
    </>
  );
}
