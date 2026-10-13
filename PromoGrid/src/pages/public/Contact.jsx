import { useState } from "react";

import "../../styles/info.css";
import "../../styles/auth.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setNotice("Please complete all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setNotice("Please enter a valid email address.");
      return;
    }

    setNotice(
      "Your form is valid. Message sending will be connected to the backend later.",
    );
  }

  return (
    <main className="info-page">
      <section className="info-hero">
        <span className="home-eyebrow">CONTACT US</span>
        <h1>Let's talk.</h1>
        <p>
          Have a question, suggestion, or feedback about PromoGrid? Send us a
          message using the form below.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-intro">
          <h2>We'd love to hear from you.</h2>
          <p>
            Your feedback can help us make the marketplace more useful and
            easier to use.
          </p>
          <p className="contact-note">
            This is a project contact form. Messages are not sent or stored
            until a backend service is connected.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is your message about?"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
          </div>

          {notice && (
            <p className="auth-message" role="status">
              {notice}
            </p>
          )}

          <button className="auth-submit" type="submit">
            Submit Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
