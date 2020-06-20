import React from "react";
import "./App.css";

function ContactMe() {
  return (
    <div id="Contact-me">
      <h1>Contact</h1>
      <div class="Bar"></div>

      <form className="ContactForm">
        <input
          id="formName"
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Comment"
        ></textarea>

        <input className="submit" type="submit" value="send message" />
      </form>
    </div>
  );
}

export default ContactMe;
