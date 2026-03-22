import { name } from '../info';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {name}. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
