import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import '../../css/common/forms.css';

export default function EmailForm() {
  return (
    <form className="message" name="contact" method="POST" data-netlify="true" netlify netlify-honeypot="bot-field">
      <div className="contact-title">

      <h5>
        Send Me a Message 
      </h5>
        <a href="mailto:dave.r.sommerville@outlook.com" className="btn">
          <FaPaperPlane></FaPaperPlane>
        </a>
      </div>

      {/* Required for Netlify form processing */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <input
        type="text"
        name="name"
        placeholder="NAME"
        required
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        required
      />
      <br /><br />

      <textarea
        name="message"
        rows="6"
        placeholder="SAY SOMETHING"
        required
      ></textarea>
      <br /><br />

      <button type="submit" className="btn pointer hover">
        Send Message
      </button>
    </form>
  );
}
