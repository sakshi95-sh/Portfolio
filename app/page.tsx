"use client";

import { useEffect, useState } from "react";

const skills = [
  ["01", "Frontend", "React · Next.js · TypeScript · JavaScript · HTML · CSS"],
  ["02", "Backend", "Node.js · Express · REST APIs · PostgreSQL · Prisma · MongoDB"],
  ["03", "AI systems", "OpenAI · Claude APIs · RAG · Claude Skills, Agents & Workflows · Prompt Engineering · Whisper · OCR"],
  ["04", "Cloud & delivery", "AWS S3 / IAM · Git · GitHub Copilot · Jenkins · Postman · Linux · Render · CI/CD"],
];

const softSkills = ["Technical leadership", "Product thinking", "Clear communication", "Cross-functional collaboration", "Root-cause analysis", "Ownership under pressure"];

const experience = [
  {
    years: "2022 TO NOW",
    role: "Senior Technical Lead — Full-Stack Software Engineer",
    company: "Meta · via HCLTech",
    copy: "Design, build, and maintain REST APIs and backend automation on Meta's integration platform — writing the code, debugging distributed systems, and shipping the tooling that keeps 100+ global partner workflows running reliably.",
    impact: [
      "Build and debug REST APIs and AS2 connectivity — configuring endpoints, encryption, certificates, and production validation end to end.",
      "Built a Claude-powered OCR agent from scratch to extract and process purchase-order data, reducing manual processing effort by approximately 80%.",
      "Write SQL monitoring dashboards and n8n automation scripts that catch failures early, cutting manual reconciliation work by 60%.",
      "Debug distributed API failures, data mismatches, and workflow errors using JavaScript, SQL, and REST tooling — root-causing issues rather than just patching symptoms.",
      "Supported onboarding for 100+ enterprise partners, including Walmart, Best Buy, Target, and Arvato, on business-critical supply chain integrations.",
    ],
  },

  {
    years: "2017 TO 2021",
    role: "Software Developer",
    company: "Bebo Technologies",
    copy: "Engineered backend modules, stored procedures, and API integrations; helped reduce recurring production defects by 30% and delivered 20+ releases across the full software lifecycle.",
    impact: ["Developed backend modules, stored procedures, and API integrations for enterprise web applications.", "Led root-cause analysis that reduced recurring production defects by 30%, improving reliability and supportability.", "Delivered 20+ releases across design, coding, testing, deployment, and post-release monitoring in Agile teams."],
  },
];

const study = [
  { year: "2026", title: "Software Engineering Certificate", place: "Springboard", copy: "800+ hours of full-stack engineering across React, Node.js, Express, databases, API design, testing, deployment, and an AI capstone." },
  { year: "2017", title: "Master of Computer Science", place: "Panjab University · Chandigarh", copy: "Advanced study in computer science, software systems, data structures, databases, and application development." },
  { year: "2015", title: "Bachelor of Computer Applications", place: "Panjab University · Chandigarh", copy: "Foundation in programming, computer applications, database systems, and software development." },
];

const projects = [
  {
    title: "Clarix AI",
    kicker: "Turn every file into signal.",
    copy: "A production full-stack content intelligence platform that analyzes PDFs, images, and audio, returning clear summaries, key insights, and action items through a real-time conversational interface.",
    tech: "Node.js · Claude API · REST · Cloud storage · Tailwind . AWS S3 ",
    href: "https://clarix-ai.onrender.com",
    mark: "CX",
    tone: "coral",
  },
  {
    index: "02",
    title: "JobQuest AI",
    kicker: "A sharper path to the next role.",
    copy: "An AI-powered career companion designed to make job discovery and application workflows more focused, combining thoughtful product UX with LLM-driven intelligence and structured data retrieval.",
    tech: "React · TypeScript · Node.js · PostgreSQL · Prisma · RAG",
    href: "#contact",
    mark: "JQ",
    tone: "lime",
    status: "IN PROGRESS",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("seen")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About Me</a>
          <a href="#experience" onClick={closeMenu}> Experience</a>
          <a href="#study" onClick={closeMenu}>Education</a>
          <a href="#project" onClick={closeMenu}>Projects</a>
          <a href="https://docs.google.com/document/d/122cpUuROkknl93t82Uxvu9HyUFjnqjvA/export?format=pdf">Resume ↓</a>
          <a className="navCta" href="#contact" onClick={closeMenu}>Let&apos;s talk <span>↗</span></a>
        </div>
        
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroOrb orbOne" aria-hidden="true" />
        <div className="heroOrb orbTwo" aria-hidden="true" />
        
        {/* <h1><b>Hey, I'm Sakshi Sharma</b></h1>
        <h2><b>Sakshi Sharma</b></h2> */}
        <h1><em>Sakshi </em> <b>Sharma</b>
        </h1>
        <h2>Full-Stack Software Engineer building reliable, AI-powered products.</h2>
        <div className="heroBottom">
            <span className="availability"><i /> Open to Software Engineer & Full-Stack opportunities.</span>
        </div>

        
       
      </section>

      <section className="about section" id="about">
        {/* <div className="heroGlow" aria-hidden="true" />
        <div className="heroOrb orbOne" aria-hidden="true" />
        <div className="heroOrb orbTwo" aria-hidden="true" /> */}
        <div className="sectionLabel reveal" id="aboutsection"><span>01</span></div>
        <div className="aboutGrid">
          <div className="aboutIntro reveal">
            <h2></h2><p className="aboutStatement">
              Building software, systems, and AI to ship products that actually work.
              </p>
            <p>
              Engineering is how I turn curiosity into something useful.</p>
            <div className="aboutImagePair ">
              <figure className="photo-hiking photo-hanging">
                <img src="/sakshi-hiking.jpg" alt="Sakshi exploring a hiking trail" />
              </figure>
              <figure className="photo-hanging">
                <img src="/sakshi-with-dog.jpg" alt="Sakshi relaxing with her dog" />
              </figure>
            </div>
          </div>
          <div className="aboutCopy reveal">
            <p className="lead">I&apos;m a New York based engineer, curious product builder, and lifelong learner who likes making complicated things feel simple.</p>
            <p className="aboutdetails">My background spans full-stack development, API design, database design, and applied AI from React and Node.js to Claude and RAG pipelines. I care about clarity, ownership, and code that still works when real users touch it. I enjoy the craft of engineering, especially when clean architecture meets a product people actually want to use. AI gives me a space to turn curiosity into useful products and learn by shipping.
            </p>
            <p>Outside work, I&apos;m often exploring a trail, experimenting with an independent AI project, discovering a new corner of New York, or spending time with my dog.
          </p>
            <a className="inlineLink" href="https://www.linkedin.com/in/imsakshish/" target="_blank" rel="noreferrer">Meet me on LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="sectionLabel reveal"><span>02</span> SKILLS</div>
        <div className="skillsHead reveal"><h2>Built to ship.<br/><em>Easy to work with.</em></h2><p className="technicalsub">Technical depth matters. So do judgment, communication, ownership, and the ability to move a team toward the right outcome.</p></div>
        <div className="skillsSplit">
          <div className="hardSkills reveal"><div className="skillsColumnHead"><span>01</span><h3>Hard skills</h3><p>What I build with</p>
          </div>{skills.map(([, title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}
          <blockquote>Always learning the next tool.</blockquote>
          </div>
          <div className="softSkills reveal"><div className="skillsColumnHead"><span>02</span><h3>Soft skills</h3><p>How I show up</p></div><div className="softSkillCloud">{softSkills.map((skill, index) => <span style={{"--i": index} as React.CSSProperties} key={skill}>{skill}</span>)}</div><blockquote>Calm in production. Curious in discovery. Clear with people.</blockquote></div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="sectionLabel light reveal"><span>03</span> EXPERIENCE</div>
        <h2 className="reveal">Built in the real world.<br/><em>Refined by it.</em></h2>
        <div className="timeline">
          {experience.map((item) => <article className="timelineRow reveal" key={item.role}>
            <div className="years">{item.years}</div>
            <div className="role"><h3>{item.role}</h3><h4 className="companyname">{item.company}</h4></div>
            <p  className="timelineCopy">{item.copy}</p>
            <details className="impactDetails">
              <summary aria-label={`View full impact for ${item.role}`}><span>View full impact</span><b>+</b></summary>
              <div className="impactPanel"><p>Selected SWE impact</p><ul>{item.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul></div>
            </details>
          </article>)}
        </div>
      </section>

      <section className="study section" id="study">
        <div className="sectionLabel reveal"><span>04</span> STUDY</div>
        <div className="studyLead reveal"><h2>Always<br/>learning.</h2><p>Formal foundations, intensive modern engineering practice, and a habit of learning through building.</p></div>
        <div className="studyTrack">
          {study.map((item) => <article className="studyItem reveal" key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><h4>{item.place}</h4></div><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="sectionLabel reveal"><span>05</span> SELECTED WORK</div>
        <h2 className="reveal">Ideas, shipped.</h2>
        <div className="projects">
          {projects.map((project) => <a className={`project ${project.tone} reveal`} href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={project.title}>
            <div className="projectVisual"><span className="projectMark">{project.mark}</span><span className="orbit orbitA"/><span className="orbit orbitB"/><small>AI / FULL-STACK</small></div>
            <div className="projectText"><span>{project.index}</span>{project.status && <strong className="statusBadge"><i />{project.status}</strong>}<h3>{project.title}</h3><h4>{project.kicker}</h4><p>{project.copy}</p><div className="tech">{project.tech}</div><div className="viewProject">{project.status ? "Follow the build" : "View project"} <b>↗</b></div></div>
          </a>)}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactBurst" aria-hidden="true">✦</div>
        <p className="eyebrow reveal">HAVE A ROLE, A PROBLEM, OR A GOOD IDEA?</p>
        <h2 className="reveal">Let&apos;s make<br/><em>something matter.</em></h2>
        <a className="email reveal" href="mailto:sharmasakshidev@gmail.com">sharmasakshidev@gmail.com <span>↗</span></a>
        <footer>
          <p>© {new Date().getFullYear()} Sakshi Sharma</p>
          <div><a href="https://www.linkedin.com/in/imsakshish/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:sharmasakshidev@gmail.com">Email ↗</a></div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
