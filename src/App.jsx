import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            NU<span>.</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">

          <div className="hero-text">
            <p className="small-heading">HELLO, I'M</p>

            <h1>
              Nusrat <span>Nuva</span>
            </h1>

            <h2>Computer Science Student & Developer</h2>

            <p className="hero-description">
              I enjoy creating digital experiences, learning new technologies,
              and turning ideas into meaningful projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View My Work
              </a>

              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>


          <div className="hero-visual">
            <div className="circle"></div>

            <div className="code-card">
              <span className="code-symbol">&lt;/&gt;</span>
              <p>Building ideas<br />into reality.</p>
            </div>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">

          <div className="section-title">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">

            <div className="about-image">
              <div className="about-box">
                <span>01</span>
                <h3>Curious.</h3>
                <h3>Creative.</h3>
                <h3>Always Learning.</h3>
              </div>
            </div>

            <div className="about-text">
              <h3>A little bit about me</h3>

              <p>
                I'm a Computer Science student with an interest in software
                development, web technologies, and creative problem solving.
              </p>

              <p>
                I enjoy learning how things work and experimenting with
                different technologies to build useful and visually appealing
                projects.
              </p>

              <p>
                My goal is to continuously improve my technical skills while
                creating projects that combine functionality with thoughtful
                design.
              </p>

              <div className="about-stats">
                <div>
                  <strong>03+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>05+</strong>
                  <span>Technologies</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Curiosity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="container">

          <div className="section-title">
            <p>WHAT I WORK WITH</p>
            <h2>My Skills</h2>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>Programming</h3>
              <p>
                Building logical solutions and understanding core
                programming concepts.
              </p>

              <div className="skill-tags">
                <span>Java</span>
                <span>C</span>
                <span>C++</span>
                <span>Python</span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>Web Development</h3>
              <p>
                Creating responsive and interactive websites using modern
                frontend technologies.
              </p>

              <div className="skill-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>Tools & Technologies</h3>
              <p>
                Comfortable working with development tools and version
                control systems.
              </p>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">

          <div className="section-title">
            <p>WHAT I'VE BUILT</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">

            <article className="project-card">
              <div className="project-top">
                <span className="project-number">01</span>
                <span className="project-type">WEB</span>
              </div>

              <h3>Portfolio Website</h3>

              <p>
                A responsive personal portfolio website designed to showcase
                my skills, projects, education and interests.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a href="#contact" className="project-link">
                View Project →
              </a>
            </article>


            <article className="project-card">
              <div className="project-top">
                <span className="project-number">02</span>
                <span className="project-type">JAVA</span>
              </div>

              <h3>Self Ordering Cafe System</h3>

              <p> A full-stack cafe ordering system with an interactive menu, 
              order management,and database integration using JavaScript, PHP, and MySQL.</p>


              <div className="project-tech">
                <span>Java</span>
                <span>JavaScript</span>
                <span>Database</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

              <a href="#contact" className="project-link">
                View Project →
              </a>
            </article>


            <article className="project-card">
              <div className="project-top">
                <span className="project-number">03</span>
                <span className="project-type">C++</span>
              </div>

              <h3>Scramble Words Game</h3>

              <p>The game includes interactive gameplay, user input, scoring,
                 and game logic.</p>

              <div className="project-tech">
                <span>C++</span>
                <span>Algorithms</span>
              </div>

              <a href="#contact" className="project-link">
                View Project →
              </a>
            </article>

          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="container">

          <div className="section-title">
            <p>MY ACADEMIC JOURNEY</p>
            <h2>Education</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2024 — PRESENT</span>
                <h3>B.Sc. in Computer Science & Engineering</h3>
                <h4>Metropolitan University</h4>
                <p>
                  Studying computer science fundamentals, programming,
                  algorithms, computer architecture, networking and software
                  development.
                </p>
              </div>
            </div>


            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>PREVIOUS EDUCATION</span>
                <h3>SSC & HSC</h3>
                <h4>Kanaighat Govt. School & College</h4>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">

          <div className="contact-box">

            <div className="contact-text">
              <p className="small-heading">LET'S CONNECT</p>

              <h2>
                Have an idea?
                <br />
                Let's talk.
              </h2>

              <p>
                Whether it's a project, collaboration, or simply a conversation
                about technology, feel free to reach out.
              </p>
            </div>


            <div className="contact-details">

              <a href="mailto:nusratnuva840@gmail.com">
                <span>Email</span>
                nusratnuva840@gmail.com
              </a>

              <a
                href="https://github.com/nusratnuva"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                https://github.com/nusratnuva
              </a>

              <a
                href="https://www.linkedin.com/in/nusrat-nuva-7074082b7/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                https://www.linkedin.com/in/nusrat-nuva
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <div className="container footer-content">
          <p>© 2026 Nusrat Nuva</p>

          <p>
            Designed & built with React.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;

