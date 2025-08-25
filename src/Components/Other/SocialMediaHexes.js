import React from 'react';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa6';
import '../../css/common/hex-style.css';

function SocialMediaHexes() {
  return (
    <div className="hex-links">
      <a
        href="https://dev.to/davesommerville"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex">
          <FaDev className="hex-icon"/>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/dave-sommerville-2abb50326/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mid hex">
          <FaLinkedin className="hex-icon"/>
        </div>
      </a>

      <a
        href="https://github.com/dave-sommerville"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex">
          <FaGithub className="hex-icon"/>
        </div>
      </a>
    </div>
  );
}
export default SocialMediaHexes;
