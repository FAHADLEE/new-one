import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [Names, setNames] = useState("");
  const [Mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleNamesChange = (e) => {
    setNames(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // App.js
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/send-email", {
        email,
        Names,
        Mobile,
        Subject: "Greetings From NASTAF Technologies",
        message,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error sending email.");
    }
  };

  return (
    <div>
      <h1>Email Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Mobile">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={Names}
          onChange={handleNamesChange}
          required
        />
        <br />
        <label htmlFor="Mobile">Mobile:</label>
        <input
          type="number"
          id="Mobile"
          name="Mobile"
          value={Mobile}
          onChange={handleMobileChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <br />
        <button type="submit">Send Email</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
