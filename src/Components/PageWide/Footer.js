import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../../css/footer.css';

function Footer() {
  return (
    <footer className="container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Portfolio</h4>
          <ul>
            <li><Link to="/portfolio">Work Examples</Link></li>
            <li><Link to="/releases">Release Page</Link></li>
            <li><a href="https://github.com/dave-sommerville?tab=repositories" target="_blank" rel="noopener noreferrer">Repositories</a></li>
            <li><a href="https://dave-sommerville.github.io/ds-code-releases/data/dave-sommerville-resume-2025.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Interal</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Collaborations</Link></li>
            <li><Link to="/playground">Game  Center</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/">Filler</Link></li>
            <li><Link to="/">Filler</Link></li>
            <li><Link to="/">Filler</Link></li>
            <li><Link to="/">Filler</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Fake Store. All rights reserved.</p>
        <div className="social-icons">
          <a href="mailto:dave.r.sommerville@outlook.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/dave-sommerville" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/dave-sommerville-2abb50326" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@davesommerville-ds-code" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;