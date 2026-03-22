import { name } from '../info';

function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#chat', label: 'Ask AI' },
  ];

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">{name}</a>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
