import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description:
    'BIES — Brilliance International Education System, an AI Enabled School in PWD, Islamabad. Montessori through College.',
};

const PATHWAY = [
  { n: '01', name: 'Montessori', blurb: 'A whole-child philosophy that nurtures growth across every developmental area, right from the start.' },
  { n: '02', name: 'Junior School', blurb: 'Primary education building strong foundations in literacy and numeracy.' },
  { n: '03', name: 'Secondary School', blurb: 'The bridge between primary and higher education, preparing students for Matriculation.' },
  { n: '04', name: 'College', blurb: '11th & 12th grade under the Federal Board, Islamabad — FA, FSc, ICS & I.Com.' },
];

const WHY = [
  { title: 'A Home-Like Environment', body: 'Children feel safe, comfortable and confident enough to explore and learn freely.' },
  { title: 'AI-Enabled Learning', body: 'Modern technology woven into everyday classroom teaching, preparing students for the future.' },
  { title: 'Quality, Affordable Educators', body: 'Trusted, highly-trained teachers, because educators shape everything that follows.' },
];

const QUICK_LINKS = [
  { href: '/programs', title: 'Our Programs', body: 'Montessori through College — see the full academic pathway.' },
  { href: '/about', title: 'About Us', body: 'Our vision, mission and what makes BIES different.' },
  { href: '/faculty', title: 'Our Faculty', body: 'Meet our teachers — names, photos and qualifications.' },
  { href: '/standards-guidelines', title: 'Standards & Guidelines', body: 'Required Standards & SLOs, and suggested guidelines.' },
  { href: '/training', title: 'Montessori Training', body: 'A step-by-step Montessori teacher training course.' },
  { href: '/inspection-framework', title: 'Inspection Framework', body: 'Our school quality standards, indicators and ratings.' },
  { href: '/admission-policy', title: 'Admission Policy', body: 'How our admissions process works.' },
  { href: '/todo-list', title: 'To Do List', body: 'What you need to prepare before applying.' },
  { href: '/academic-calendar', title: 'Academic Calendar', body: 'Session dates and key academic events.' },
  { href: '/book-list', title: 'Book List', body: 'Approved textbooks by class.' },
  { href: '/uniform', title: 'Uniform List', body: 'Official uniform details and guidelines.' },
  { href: '/scholarship', title: 'Scholarship', body: 'Merit-based scholarship opportunities.' },
  { href: '/fee-structure', title: 'Fee Structure', body: 'Tuition and fee details by programme.' },
  { href: '/preparation-kit', title: 'Preparation Kit', body: 'Syllabus outlines and study material.' },
  { href: '/entry-test-papers', title: 'Entry Test Papers', body: 'Past papers and answer keys.' },
  { href: '/guidelines', title: 'School Guidelines', body: 'Rules and expectations for students & parents.' },
  { href: '/contact', title: 'Campuses & Contact', body: 'Location, phone, email and map.' },
  { href: '/activities', title: 'Activities & Gallery', body: 'Photos and videos from school life.' },
];

const HIGHLIGHTS = [
  { tag: 'Independence Day', title: 'Happy Independence Day, BIES!', body: 'Students and staff marked the day with flag-hoisting and patriotic performances.' },
  { tag: 'Mango Day', title: 'Mango Day Celebration', body: 'A colourful, culture-connected celebration — proof that learning can be fun and delicious.' },
  { tag: "Father's Day", title: "Celebrating Father's Day", body: 'A day dedicated to family values and the bond between students and their fathers.' },
  { tag: 'Results', title: 'Outstanding Results, Again', body: 'Another strong year of academic performance across Matric and O-Level examinations.' },
];

export default function HomePage() {
  return (
    <>
      <div className="admissions-banner">
        📢 Admissions Open for 2026–27 — <Link href="/admission">Apply Now</Link>
      </div>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">PWD Islamabad</span>
            <h1>Brilliance International Education System<br />(AI Enabled School)</h1>
            <p className="hero-sub">Montessori through College — an AI Enabled School built for confident, curious learners.</p>
            <div className="hero-actions">
              <Link href="/admission" className="btn btn-primary">Apply for Admission</Link>
              <a href="https://ecampus.bies.com.pk" target="_blank" rel="noreferrer" className="btn btn-ghost">Student Portal</a>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiItpxZUNI6oAAXkVsyHcu0OlFxa4d_JcC12lDxgoMUgv8wHcKvX6WllbjP5fVt1V6eqWLlubc5HqLwyvoL6GaX15gz4ZlMH6Rq4_h-_CewCG3Ba9AsEsIJfdyiUkr8pBa0PAM8YaFtXz2hjvUC63B5DHwj1eZ9x8NgCo6TRt4UOILznh7Dminmb7P5vV0/s16000/SCHOOL%20MAIN%20IMAGE.jpg"
              alt="BIES main campus"
            />
            <span className="hero-tag">MAIN CAMPUS · PWD ISLAMABAD</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Quick Links</span>
            <h2>Everything you need, in one place</h2>
          </div>
          <div className="quicklinks-grid">
            {QUICK_LINKS.map((q) => (
              <Link href={q.href} key={q.href} className="quicklink-card">
                <span className="mark">✦</span>
                <h3>{q.title}</h3>
                <p>{q.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <span className="timetable-label">The Academic Pathway</span>
          <div className="prog-row">
            {PATHWAY.map((p) => (
              <div className="prog-card" key={p.n}>
                <span className="prog-num">{p.n}</span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why BIES</span>
            <h2>Built around how children actually learn</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-item" key={w.title}>
                <span className="mark">✦</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 44px' }}>
            <span className="eyebrow">In His Own Words</span>
            <h2>A message from our Director</h2>
          </div>
          <div className="director-feature">
            <div className="director-photo-wrap">
              <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgqELs1WTwRVchEiQ1woS9MQJ6Z8gxU7QOdpsBFHlk0v52pY7lM8W-J9vs-Bz4RtOWm1FPCyonL_m7fe4ph-d3AO3OS-P8gOb2rw1TYQEFHcYAnGkZZo1vzvWrfd4HIE_VwYq_TmUYwJXzPVTd7h1onz2znGzFJPTvE7DhYCg0PmDLZyMvYaeGAW3ZY_L4" alt="Muhammad Azmat Sajjad, Director of BIES" />
            </div>
            <div className="msg-card">
              <span className="msg-quote">&ldquo;</span>
              <p>Welcome to Brilliance International Education System, where we ignite curiosity, inspire excellence, and nurture the leaders of tomorrow. Our commitment is to provide a world-class education that empowers students to succeed, innovate, and make a positive impact in the world.</p>
              <div className="msg-person">
                <span>Muhammad Azmat Sajjad — Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Recent Highlights</span>
            <h2>What&apos;s been happening at BIES</h2>
          </div>
          <div className="highlight-grid">
            {HIGHLIGHTS.map((h) => (
              <div className="highlight-card" key={h.title}>
                <span className="eyebrow">{h.tag}</span>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to join the BIES family?</h2>
          <Link href="/admission" className="btn btn-light">Apply for Admission</Link>
        </div>
      </section>
    </>
  );
}
