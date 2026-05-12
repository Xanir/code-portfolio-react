import { Link } from 'react-router-dom';
import './CaseStudies.css';

const caseStudiesData = [
  {
    id: 'Radar-url-state',
    title: 'URL-Driven State Architecture',
    overview: 'In modern SPAs, essential state often gets trapped in volatile memory (like Redux or React State), losing context when shared or refreshed. This case study details shifting an application to a "URL as the Single Source of Truth" model, maximizing shareability, providing zero-state persistence, and drastically reducing UI bugs.',
    skills: ['State Management', 'SPA Architecture', 'UX', 'Frontend Patterns']
  },
  {
    id: 'Radar-auth',
    title: 'Side-Channel Token Exchange Auth',
    overview: 'When navigating strict corporate IAM rules that mandated a rigid SAML 301 Redirect to the homepage, deep-linking was rendered useless. This study explores designing a Node.js microservice backed by Redis to perform a popup-based handshake, preserving the user\'s local state and circumventing disruptive redirects securely.',
    skills: ['Authentication (SAML)', 'System Architecture', 'Security', 'Node.js', 'Redis', 'Axios']
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <h2 className="section-title">Featured Case Studies</h2>
        <div className="case-studies-grid">
          {caseStudiesData.map(cs => (
            <Link key={cs.id} to={`/case-study/${cs.id}`} className="case-study-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="case-study-card-content">
                <h3>{cs.title}</h3>
                <p className="case-study-overview">{cs.overview}</p>
                <div className="case-study-skills">
                  {cs.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <span className="read-more-btn">
                Read Case Study &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}