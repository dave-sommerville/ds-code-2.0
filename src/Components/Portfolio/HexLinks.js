import { FaFile, FaGithub, FaBoxOpen } from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import '../../css/common/hex-style.css';

function HexLinks() {
    return (
    <div className="hex-links mt-75">
      <Link
        to="/releases"
        className="pos-rel"
      >
        <div className="hex">
          <FaBoxOpen className="hex-icon" />
        </div>
          <p className="icon-caption top">Releaes</p>
      </Link>
      <a
        href="https://github.com/dave-sommerville?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="pos-rel"
      >
        <div className="mid hex">
          <FaGithub className="hex-icon" />
        </div>
          <p className="icon-caption bottom">Repositories</p>
      </a>
      <a
        href="https://dave-sommerville.github.io/ds-code-releases/data/dave-sommerville-resume-2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pos-rel"
      >
        <div className="hex">
          <FaFile className="hex-icon" />
        </div>
          <p className="icon-caption top">Resume</p>
      </a>
    </div>
  );

}
export default HexLinks;