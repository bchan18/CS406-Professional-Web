import React, { useState } from 'react';

function Contact() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

function handleStateChange(e) {
  setMailerState((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}

const submitEmail = async (e) => {
  e.preventDefault();
  console.log({ mailerState });
  const response = await fetch("http://localhost:3001/send", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ mailerState }),
  })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    })
    .then(() => {
      setMailerState({
        email: "",
        name: "",
        message: "",
      });
    });
};

<form onSubmit={submitEmail}></form>

  return (
    <div className="contact-page">
      <div className="section"> 
        <h1>Message Me</h1>
        <form onSubmit={submitEmail}>
          <label>Name:</label>
            <input
              type="text"
              onChange={handleStateChange}
              name="name"
              value={mailerState.name}
              aria-label="Name"
              required
            />
            <label>Email:</label>
            <input
              type="email"
              onChange={handleStateChange}
              name="email"
              value={mailerState.email}
              aria-label="Email"
              required
            />
            <label>Message:</label>
            <textarea
              onChange={handleStateChange}
              name="message"
              value={mailerState.message}
              aria-label="Message"
              required
            />
            <button className="contact-button" type="submit">Send Message</button>
          </form>
      </div>
      <div className="section">
        <h1>Contact Info</h1>
          <p>
            <strong>Email: </strong> <a className="email-link" href="mailto:chanbria@oregonstate.edu"> chanbria@oregonstate.edu</a>
          </p>
          <p>
            <strong>Linkedin: </strong>
              <a 
                className="linkedin-link"
                href="https://www.linkedin.com/in/brianchan562/" 
                target="_blank" 
              >
              https://www.linkedin.com/in/brianchan562/
              </a>
          </p>
          <p>
            <strong>GitHub: </strong>
              <a 
                className="github-link"
                href="https://github.com/bchan18" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                https://github.com/bchan18
              </a>
          </p>
      </div>
    </div>
  );
}

export default Contact;
