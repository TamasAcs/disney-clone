import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
const [userData, setUserData] = useState({
  name: "",
  email: "",
  message: "",
});

let name, value;
const postUserData = (event) => {
  name = event.target.name;
  value = event.target.value;

  setUserData({ ...userData, [name]: value });
};

// connect with firebase
const submitData = async (event) => {
  event.preventDefault();
  const { name, email, message } = userData;

  if (name && email && message) {
    const res = fetch(
      "https://react-bakery-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );

    if (res) {
      setUserData({
        name: "",
        email: "",
        message: "",
      });
      alert("Message sent");
    } else {
      alert("Please fill in the form");
    }
  } else {
    alert("Please fill in the form");
  }
};

  return (
    <form method="POST">
      <h2>Any Inquiries ?</h2>
      <p>Just let us know!</p>
      <div className="name">
        <label id="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name" 
          value={userData.name}
          onChange={postUserData}
          required
        />
      </div>
      <div className="email">
        <label id="label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={postUserData}
          required
        />
      </div>
      <div className="message">
        <label id="label" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={userData.message}
          onChange={postUserData}
          required
        />
      </div>
      <div className="input__submitBtn">
        <button id="submit" type="submit" onClick={submitData}>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
