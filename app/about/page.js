export const metadata = {
  title: 'About Brilliance International Education System | BIES Islamabad',
  description:
  'Learn about Brilliance International Education System (BIES), an AI-enabled school in Islamabad offering Montessori to College education with a focus on academic excellence, character development and lifelong learning.',
};

const DIFFERENT = [
  {
    title: 'Modern Curriculum',
    body: 'A modern academic curriculum that combines academic excellence, character-building and global awareness.',
  },
  {
    title: 'Qualified Faculty',
    body: 'Experienced and dedicated teachers who support students and bring out the best in every learner.',
  },
  {
    title: 'AI-Enabled Learning',
    body: 'Smart technologies integrated into classroom learning to support a modern and future-focused education.',
  },
  {
    title: 'Co-Curricular Activities',
    body: 'Sports, arts and clubs that encourage creativity, teamwork and a well-rounded education.',
  },
  {
    title: 'Focus on Values',
    body: 'Honesty, respect, responsibility and compassion taught alongside academic learning.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>
            About BIES
          </span>

          <h1>About Brilliance International Education System (BIES) in Islamabad</h1>

          <p>
            Brilliance International Education System (BIES) is an AI-enabled
            education system in PWD, Islamabad, committed to nurturing
            well-rounded individuals from Montessori through College.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Our Education System</span>

            <h2>Modern Education at BIES in Islamabad</h2>

            <p>
            Brilliance International Education System (BIES) combines academic
            learning with character development, creativity, technology and
            real-world awareness. Our approach helps students build strong
            foundations while becoming confident, curious and responsible learners.
            </p>

            <p>
            From Montessori through College, BIES provides a continuous
            educational pathway that supports students through different
            stages of their academic journey, helping them grow academically
            and personally.
            </p>
          </div>

          <div>
            <span className="eyebrow">Our Vision</span>

            <h2>Developing Global Citizens and Lifelong Learners at BIES</h2>

            <p>
              To inspire and equip students to become global citizens who are
              lifelong learners, critical thinkers and compassionate leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Our Mission</span>

           <h2>Our Four Commitments to Quality Education at BIES</h2>

            <ul>
              <li>
                Provide world-class education grounded in strong ethical
                values.
              </li>
              <li>
                Foster creativity, innovation and curiosity through modern
                teaching methods.
              </li>
              <li>
                Create a safe, inclusive and encouraging environment for
                every learner.
              </li>
              <li>
                Build a strong partnership with parents and the community.
              </li>
            </ul>
          </div>

          <div>
            <span className="eyebrow">What Makes Us Different</span>

            <h2>Five Things Parents Notice First at BIES</h2>

            <p>
            The BIES education system is built around academic quality,
            experienced educators, AI-enabled learning, co-curricular
            activities and strong personal values.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our Strengths</span>

            <h2>
              What Makes the BIES Education System Different
              </h2>
          </div>

          <div className="why-grid">
            {DIFFERENT.map((d) => (
              <div className="why-item" key={d.title}>
                <span className="mark">✦</span>

                <h3>{d.title}</h3>

                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Our Campus</span>

           <h2>Built for Safety, Creativity, and Learning</h2>
           
            <p>
            The BIES campus in PWD, Islamabad, includes modern classrooms,
            science labs, computer labs, libraries and recreational areas,
            providing students with spaces to learn, focus and play.
            </p>
          </div>

          <div>
            <span className="eyebrow">Join the Family</span>

            <h2>Visit BIES and See Our School for Yourself</h2>

           <p> 
           Whether you&apos;re a parent looking for a future-focused school
           in Islamabad or a student seeking a vibrant learning environment,
           we&apos;d love to show you around the BIES campus.
        </p>

        <a href="/contact" className="btn btn-primary">
          Plan a Visit
          </a>
          </div>
        </div>
      </section>
    </>
  );
}