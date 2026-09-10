import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="hero-content">
      <span className="hero-eyebrow">Build &nbsp;•&nbsp; Learn &nbsp;•&nbsp; Solve</span>

      <span className="hero-badge">Hi, I'm</span>

      <h1 className="hero-name">
        <span className="line-black">PRATYUSH</span>
        <span className="line-accent">BANERJEE</span>
      </h1>

      <p className="hero-role">Full Stack Developer</p>
      <p className="hero-focus-line">
        AI / LLM Integration <span className="dot" aria-hidden="true" /> Backend{" "}
        <span className="dot" aria-hidden="true" /> MERN
      </p>

      <p className="hero-desc">
        I build intelligent web applications, backend systems and AI-powered
        products that solve real-world problems.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          View My Work <ArrowRight size={16} />
        </a>
        <a
          href="https://github.com/CodedBy-Pratyush"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/pratyush-banerjee-0a0642284"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="mailto:pratyushbanerjee75@gmail.com" className="btn-secondary">
          <Mail size={16} /> Email
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">10+</div>
          <div className="hero-stat-label">Projects Built</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">MERN</div>
          <div className="hero-stat-label">Primary Stack</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">AI + Web</div>
          <div className="hero-stat-label">Areas of Focus</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
