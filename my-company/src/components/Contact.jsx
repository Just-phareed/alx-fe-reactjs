import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />

      <button style={{ padding: "8px 12px" }}>
        Send Message
      </button>
    </div>
  );
}

export default Contact;
