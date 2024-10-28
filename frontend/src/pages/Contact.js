import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form >
        <label>
          Name:<br />
          <input
            type="text"
            name="name"

            required
          />
        </label><br /><br />
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            required
          />
        </label><br /><br />
        <label>
          Message:<br />
          <textarea
            name="message"
            required
          />
        </label><br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;