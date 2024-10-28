import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <div className="section"> 
      <h1>Message Me</h1>
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
      <div className="section">
        <h1>Contact Info</h1>
        <p><strong>Email:</strong> chanbria@oregonstate.edu</p>
      </div>
    </div>
  );
}

export default Contact;