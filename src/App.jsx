import { useForm, ValidationError } from "@formspree/react";
import "./index.css";
import "./App.css";

import medicineImage from "./assets/medicine.png";
import taskManagerImage from "./assets/task-manager.png";
import lab1Image from "./assets/lab1.png";
import reactAppImage from "./assets/react-app.png";


/* =========================================
   PROJECT DATA
========================================= */

const projects = [
  {
    number: "01",
    title: "Medicine Inventory System",
    description:
      "A full-stack medicine inventory application with authentication, REST API integration, database persistence, validation, and a responsive React interface.",
    tags: ["React", "Laravel", "SQLite", "REST API"],
    image: medicineImage,
    github:
      "https://github.com/howellsy07/medicine-inventory-system",
    live: "",
  },

  {
    number: "02",
    title: "CCS112 Task Manager",
    description:
      "A full-stack task management application featuring task creation, editing, filtering, completion tracking, validation, and CRUD functionality.",
    tags: ["React", "Laravel", "Inertia", "Vite"],
    image: taskManagerImage,
    github:
      "https://github.com/howellsy07/ccs112-task-manager",
    live: "",
  },

  {
    number: "03",
    title: "CCS112 Lab 1 — Midterm",
    description:
      "A web development project created as part of the CCS112 laboratory and midterm coursework.",
    tags: ["Web Development", "CSS", "JavaScript"],
    image: lab1Image,
    github:
      "https://github.com/howellsy07/ccs112-lab1-midterm",
    live: "",
  },

  {
    number: "04",
    title: "My React App",
    description:
      "A React-based web application showcasing frontend development and component-based UI implementation.",
    tags: ["React", "JavaScript", "Vite"],
    image: reactAppImage,
    github:
      "https://github.com/howellsy07/my-react-app",
    live: "",
  },
];



/* =========================================
   NAVBAR
========================================= */

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-dot" />
        <span>Howell.</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Let's talk <span className="arrow">↗</span>
      </a>
    </header>
  );
}

/* =========================================
   HERO
========================================= */

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />
          Available for new projects
        </div>

        <h1>
          Designing digital
          <br />
          experiences that{" "}
          <span className="gradient-text">feel human.</span>
        </h1>

        <p className="hero-description">
          I'm <strong>Howell Sy</strong>, a designer & frontend developer
          creating thoughtful, modern websites with a focus on simplicity and
          personality.
        </p>

        <div className="hero-actions">
          <a href="#work" className="primary-button">
            View my work <span className="arrow">↗</span>
          </a>

          <a href="#about" className="text-button">
            More about me
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="floating-card card-main">
          <div className="card-top">
            <span>Howell Sy</span>
            <span className="live">● live</span>
          </div>

          <div className="code-lines">
            <span className="line line-purple" />
            <span className="line line-long" />
            <span className="line line-short" />
            <span className="line line-medium" />
            <span className="line line-purple" />
            <span className="line line-long" />
            <span className="line line-small" />
          </div>

          <div className="code-footer">
            <span>creative.dev:01</span>
            <span>✦</span>
          </div>
        </div>

        <div className="floating-card card-small">
          <div className="sparkle">✦</div>

          <div>
            <strong>Ideas made beautiful.</strong>
            <small>Design × Code</small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   MARQUEE
========================================= */

function Marquee() {
  const marqueeItems = [
    "WEB EXPERIENCES",
    "CREATIVE DEVELOPMENT",
    "UI / UX DESIGN",
  ];

  const MarqueeGroup = () => (
    <div className="marquee-group">
      {marqueeItems.map((item, index) => (
        <span key={index}>
          {item} <i>✦</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div className="marquee-track">
      <MarqueeGroup />
      <MarqueeGroup />
      <MarqueeGroup />
      <MarqueeGroup />
      <MarqueeGroup />
      <MarqueeGroup />
      </div>
    </div>
  );
}


/* =========================================
   PROJECT VISUALS
========================================= */

function ProjectVisual({ image, title }) {
  return (
    <div className="project-image">
      <img
        src={image}
        alt={`${title} screenshot`}
      />
    </div>
  );
}

/* =========================================
   WORK
========================================= */

function Work() {
  return (
    <section className="section" id="work">
      <div className="section-heading">
        <div>
          <p className="section-label">01 — Selected work</p>

          <h2>
            Things I've
            <br />
            made.
          </h2>
        </div>

        <p className="section-intro">
          A small selection of projects where design, code, and a little
          curiosity came together.
        </p>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            
            <ProjectVisual
              image={project.image}
              title={project.title}
            />


            <div className="project-info">
              <span className="project-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
              <div className="project-bottom">
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="circle-button"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


/* =========================================
   ABOUT
========================================= */

function About() {
  return (
    <section className="section about" id="about">
      <div className="about-card">
        <div className="about-number">02</div>

        <div className="about-content">
          <p className="section-label">A little about me</p>

          <h2>
            I care about the details that make a website{" "}
            <span>feel just right.</span>
          </h2>

          <p className="about-text">
            I'm Howell Sy, a designer and developer who enjoys turning ideas
            into digital experiences. My approach sits somewhere between
            thoughtful design and clean, purposeful code.
          </p>

          <p className="about-text">
            When I'm not building things for the web, you'll probably find me
            collecting design inspiration, listening to music, making dance covers or drinking an
            unreasonable amount of Iced Milktea, Milo and Chocolate.
          </p>

          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Figma</span>
            <span>UI / UX</span>
            <span>Motion</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="about-decoration">
          <div className="about-orb" />
          <div className="about-ring" />
        </div>
      </div>
    </section>
  );
}

/* =========================================
   CONTACT FORM — FORMSPREE
========================================= */

function ContactForm() {
  const [state, handleSubmit] = useForm("xljdzoan");

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>

        <h3>Message sent.</h3>

        <p>
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your name</label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your email</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>

        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Let's work together"
          required
        />

        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project..."
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        className="contact-button"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send message"}

        {!state.submitting && <span className="arrow">↗</span>}
      </button>

      {state.errors && (
        <p className="form-error">
          Something went wrong. Please check your information and try again.
        </p>
      )}
    </form>
  );
}

/* =========================================
   CONTACT
========================================= */

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="section-label">03 — Get in touch</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's make it real.</span>
        </h2>

        <p className="contact-description">
          Have a project in mind? Send me a message and I'll get back to you
          as soon as possible.
        </p>

        <ContactForm />
      </div>

      <div className="contact-glow" />
    </section>
  );
}

/* =========================================
   FOOTER
========================================= */

function Footer() {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        <span className="logo-dot" />
        <span>Howell</span>
      </a>

      <p>© 2026 Howell Sy. Designed & built with care.</p>

      <div className="socials">
        <a href="#" aria-label="GitHub">
          GH
        </a>

        <a href="#" aria-label="LinkedIn">
          IN
        </a>

        <a href="mailto:your-email@gmail.com" aria-label="Email">
          @
        </a>
      </div>
    </footer>
  );
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
