const experiences = [
  {
    company: 'Personal Sabbatical',
    location: '',
    period: 'January 2023 – Present',
    title: '',
    highlights: [
      'Designed and executed a self-directed rehabilitation program for EDS and skeletal muscular misalignments, achieving ~80% recovery to functional baseline.',
      'Studied philosophical frameworks (Existentialism, Daoism) and Jungian psychology to deepen emotional regulation and sustained focus.',
      'Developed advanced techniques for composure and analytical focus in high-pressure environments through disciplined meditation.',
      'Expanded into low-level systems using C++ for microcontroller programming and integrated AI-assisted development into daily workflow.',
    ],
  },
  {
    company: 'REI',
    location: 'Remote',
    period: '05/2021 – 01/2023',
    title: 'Senior Web Developer (Consultant)',
    highlights: [
      'Led UI development for the migration of high-traffic "Expert Advice" pages from WordPress to a custom internal Vue.js solution.',
      'Collaborated with UX teams to validate design feasibility and engineered solutions for complex interface edge cases.',
    ],
  },
  {
    company: 'Target',
    location: 'Minneapolis, MN',
    period: '01/2017 – 03/2021',
    title: 'Senior Web Developer (Consultant)',
    highlights: [
      'Owned frontend architecture for Radar: routing, state management, error handling, and backend integration boundaries.',
      'Led two end-to-end proof-of-concept applications as the solo developer, from vague business goals to deployed prototypes.',
      'Helped migrate services from CentOS VMs to Docker containers and assisted with the Jenkins-to-Drone CI migration.',
      'Solely engineered an interactive HTML Canvas tool for exploring many-to-many relationships in Target\'s Big Data, used by hundreds of data scientists.',
      'Secured internal metadata platforms by implementing IAM authentication backed by a Redis cluster.',
    ],
  },
  {
    company: 'Securian Financial',
    location: 'St. Paul, MN',
    period: '05/2016 – 01/2017',
    title: 'Senior Web Developer (Consultant)',
    highlights: [
      'Spearheaded the modernization of legacy JSPs into a responsive AngularJS 1.5 web application.',
      'Streamlined development workflows by establishing a reverse proxy allowing local UI environments to interact seamlessly with production services.',
    ],
  },
  {
    company: 'Best Buy',
    location: 'Richfield, MN',
    period: '05/2015 – 05/2016',
    title: 'Web Developer',
    highlights: [
      'Maintained critical e-commerce infrastructure including the shopping cart and developer portal, impacting millions of users annually.',
      'Architected SAML authentication using Node.js to support secure access for commerce partners.',
      'Reduced initial page payload by 80% and decreased page load time by 0.2s through API improvements and REST contract optimization.',
    ],
  },
  {
    company: 'PTC',
    location: 'Blaine, MN',
    period: '10/2008 – 04/2015',
    title: 'Software Developer',
    highlights: [
      'Served as the primary UI point of contact, guiding multiple internal teams on AngularJS best practices and modular architecture.',
      'Developed modular UI components implementing corporate-wide unified styling guidelines adopted by 2 teams.',
      'Drove a documentation culture for both code and business processes, simplifying onboarding and improving task assignment.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map(({ company, location, period, title, highlights }) => (
            <div key={company + period} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{company}</h3>
                    {title && <p className="timeline-title">{title}</p>}
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{period}</span>
                    {location && <span className="timeline-location">{location}</span>}
                  </div>
                </div>
                <ul className="timeline-highlights">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
