const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['React (hooks, context)', 'Vue 2/3', 'Svelte', 'AngularJS', 'Redux', 'MobX', 'SPA / SSR', 'Responsive Design', 'Accessibility (WCAG)', 'Performance Optimization', 'JQuery', 'Backbone'],
  },
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript (ES7)', 'TypeScript', 'HTML5', 'CSS3 / LESS / Sass', 'Java', 'C++'],
  },
  {
    title: 'Backend & API',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'NGINX', 'OAuth 2.0', 'SAML', 'JWTs', 'SOAP', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'MySQL', 'Neo4j'],
  },
  {
    title: 'Testing',
    icon: '🧪',
    skills: ['Cypress', 'Jest', 'React Testing Library', 'JUnit', 'Selenium', 'Mocha', 'Jasmine'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Docker', 'Kubernetes', 'Linux', 'Git', 'Webpack', 'Vite', 'Jenkins', 'Drone', 'Jira'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map(({ title, icon, skills }) => (
            <div key={title} className="skill-card">
              <h3 className="skill-card-title">
                <span className="skill-icon">{icon}</span>
                {title}
              </h3>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
