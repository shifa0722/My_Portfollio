
import { useState, lazy, Suspense } from "react";
import "./App.css";

const Projects = lazy(() => import("./components/Projects"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "BiteBox",
      category: "Food Ordering Website",
      description:
        "A food ordering website with a clean interface designed to make browsing food options simple and convenient.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://shifa0722.github.io/weatherly/",
    },
    {
      title: "Weatherly",
      category: "Weather App",
      description:
        "A weather application providing real-time forecasts and detailed weather information.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shifa0722",
    },
    {
      title: "TravelDesk",
      category: "Travel Website",
      description:
        "A responsive travel-focused website built with Bootstrap and JavaScript for an interactive user experience.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      github: "https://github.com/shifa0722",
    },
  ];

  const skills = [
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
    },
    {
      title: "Backend",
      items: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Database",
      items: ["MySQL"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          SP<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              JAVA FULL STACK DEVELOPER
            </p>

            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">make an impact.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm Shifa — a Computer Science student passionate about
              building responsive web applications and solving real-world
              problems through code.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get In Touch <span>✉</span>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/shifa0722"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shifa-patel-473932314"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb">
              <div className="orb-inner">
                <span className="orb-initials">SP</span>
                <span className="orb-caption">Developer & Learner</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">{"</>"}</span>
              <div>
                <strong>Clean Code</strong>
                <small>Built with purpose</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Always Learning</strong>
                <small>One project at a time</small>
              </div>
            </div>

            <div className="hero-decoration decoration-one"></div>
            <div className="hero-decoration decoration-two"></div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line"></span>
            Scroll to explore
          </a>
        </section>

        {/* About Section */}
        <section className="section-container section-padding" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              A little about <span className="gradient-text">my journey.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I'm a third-year Computer Science engineering student who
                enjoys turning ideas into useful digital experiences.
              </p>

              <p>
                My journey started with frontend development, where I learned
                how to build responsive interfaces using HTML, CSS,
                JavaScript, and Bootstrap. I'm now expanding my skills with
                React and Java full-stack development.
              </p>

              <p>
                I believe in learning by building. Every project helps me
                strengthen my fundamentals, improve my problem-solving skills,
                and understand how real applications are developed.
              </p>
            </div>

            <div className="about-cards">
              <article className="info-card">
                <span className="info-card-icon">🎓</span>
                <div>
                  <h3>Education</h3>
                  <p>B.Tech in Computer Science</p>
                  <span>Vishwakarma University, Pune</span>
                </div>
              </article>

              <article className="info-card">
                <span className="info-card-icon">💻</span>
                <div>
                  <h3>Current Focus</h3>
                  <p>Java Full Stack Development</p>
                  <span>React · Java · Spring Boot</span>
                </div>
              </article>

              <article className="info-card">
                <span className="info-card-icon">🚀</span>
                <div>
                  <h3>My Approach</h3>
                  <p>Learn. Build. Improve.</p>
                  <span>Practical, project-based learning</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="section-container section-padding"
          id="skills"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>
              Tools I use to <span className="gradient-text">build.</span>
            </h2>
            <p className="section-description">
              Technologies I'm learning and using to create web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          className="section-container section-padding"
          id="projects"
        >
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects I've <span className="gradient-text">built.</span>
              </h2>
            </div>

            <a
              href="https://github.com/shifa0722"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              More on GitHub ↗
            </a>
          </div>

          <Suspense
            fallback={
              <div className="loading-projects">
                Loading projects...
              </div>
            }
          >
            <Projects projects={projects} />
          </Suspense>
        </section>

        {/* Resume Section */}
        <section
          className="section-container section-padding"
          id="resume"
        >
          <div className="resume-card">
            <div className="resume-content">
              <p className="eyebrow">04 / RESUME</p>
              <h2>
                Want to know more
                <br />
                about my <span className="gradient-text">journey?</span>
              </h2>
              <p>
                Explore my education, technical skills, projects, and
                professional development in my resume.
              </p>

              <a
                href="/resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                View My Resume <span>↗</span>
              </a>
            </div>

            <div className="resume-visual" aria-hidden="true">
              <div className="resume-paper">
                <div className="resume-paper-top"></div>
                <div className="resume-paper-line short"></div>
                <div className="resume-paper-line"></div>
                <div className="resume-paper-line"></div>
                <div className="resume-paper-heading"></div>
                <div className="resume-paper-line"></div>
                <div className="resume-paper-line short"></div>
                <div className="resume-paper-heading"></div>
                <div className="resume-paper-line"></div>
              </div>
              <span className="resume-badge">PDF ↗</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="section-container section-padding"
          id="contact"
        >
          <div className="contact-card">
            <p className="eyebrow">05 / CONTACT</p>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>

            <p className="contact-description">
              I'm always open to connecting with developers, learning
              from new opportunities, and collaborating on interesting projects.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn btn-primary"
            >
              <span>✉</span> Say Hello
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/shifa0722"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shifa-patel-473932314"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:your-email@example.com">
                Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer section-container">
        <a href="#home" className="nav-logo">
          SP<span>.</span>
        </a>

        <p>Designed and built by Shifa Patel.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
