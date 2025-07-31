import React from 'react';
import '../../css/common/forms.css';

export default function EmailForm() {
  return (
    <form className="message" name="contact" method="POST" data-netlify="true">
      <h5>Send Me a Message</h5>

      {/* Required for Netlify form processing */}
      <input type="hidden" name="form-name" value="contact" />

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
