import React from 'react';
import { FaMastodon, FaLinkedin, FaGithub } from 'react-icons/fa6';

function SocialMediaHexes() {
  return (
    <div className="flex">
      <a
        href="https://mastodon.social/@ds_code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex pointer image-hover flex">
          <FaMastodon />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/dave-sommerville-2abb50326/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex pointer image-hover mid-hex flex">
          <FaLinkedin />
        </div>
      </a>

      <a
        href="https://github.com/dave-sommerville"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="hex image-hover pointer flex">
          <FaGithub />
        </div>
      </a>
    </div>
  );
}
export default SocialMediaHexes;
