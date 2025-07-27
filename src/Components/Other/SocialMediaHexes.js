import React from 'react';
import { FaMastodon, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa6';
import '../../css/social-media-hexes.css';

function SocialMediaHexes() {
  return (
    <div className="flex">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex image-hover">
          <FaYoutube className="hex-icon"/>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/dave-sommerville-2abb50326/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mid hex image-hover">
          <FaLinkedin className="hex-icon"/>
        </div>
      </a>

      <a
        href="https://github.com/dave-sommerville"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex image-hover pointer flex">
          <FaGithub className="hex-icon"/>
        </div>
      </a>
    </div>
  );
}
export default SocialMediaHexes;
