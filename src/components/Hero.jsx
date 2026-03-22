import { name_hero } from '../info';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name">{name_hero}</h1>
        <h2 className="hero-title">Senior Full-Stack Engineer</h2>
        <p className="hero-tagline">
          15+ years building modern, scalable web applications
          <br />
          from pixel-perfect UIs to robust backend systems.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">View My Work</a>
          <a href="#about" className="btn btn-secondary">About Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
