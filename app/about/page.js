export const metadata = {
  title: 'About Us',
  description: 'Learn about the vision, mission and values of Brilliance International Education System (BIES), Islamabad.',
};

const DIFFERENT = [
  { title: 'Modern Curriculum', body: 'Academic excellence blended with character-building and global awareness.' },
  { title: 'Qualified Faculty', body: 'Experienced, dedicated teachers who bring out the best in every student.' },
  { title: 'AI-Enabled Learning', body: 'Smart technologies integrated into everyday classroom learning.' },
  { title: 'Co-Curricular Activities', body: 'Sports, arts and clubs as part of a genuinely holistic education.' },
  { title: 'Focus on Values', body: 'Honesty, respect, responsibility and compassion, taught alongside every subject.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow" style={{ color: '#e7a8ad' }}>About BIES</span>
          <h1>Where education meets excellence</h1>
          <p>Brilliance International Education System (BIES) is an AI Enabled School in Islamabad, committed to nurturing well-rounded individuals from Montessori through College.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Our Vision</span>
            <h2>Global citizens, lifelong learners</h2>
            <p>To inspire and equip students to become global citizens who are lifelong learners, critical thinkers and compassionate leaders.</p>
          </div>
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2>Four commitments we hold to</h2>
            <ul>
              <li>Provide world-class education grounded in strong ethical values.</li>
              <li>Foster creativity, innovation and curiosity through modern teaching methods.</li>
              <li>Create a safe, inclusive and encouraging environment for every learner.</li>
              <li>Build a strong partnership with parents and the community.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What Makes Us Different</span>
            <h2>Five things parents notice first</h2>
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
            <h2>Built for safety and creativity</h2>
            <p>Our campus is equipped with modern classrooms, science labs, computer labs, libraries and recreational areas — designed so every student has room to focus and to play.</p>
          </div>
          <div>
            <span className="eyebrow">Join the Family</span>
            <h2>Come see it for yourself</h2>
            <p>Whether you&apos;re a parent looking for a future-focused school, or a student seeking a vibrant learning environment, we&apos;d love to show you around.</p>
            <a href="/contact" className="btn btn-primary">Plan a Visit</a>
          </div>
        </div>
      </section>
    </>
  );
}
