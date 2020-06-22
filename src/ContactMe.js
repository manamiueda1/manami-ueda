import React from "react";
import "./App.css";
// import formFunc from "./functions/formFunc.js";

function ContactMe() {
  return (
    <div id="Contact-me">
      <h1>Contact</h1>
      <div class="Bar"></div>

      <form
        name="Contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // action="https://mailthis.to/manamiueda1@gmail.com"

        // enctype="multipart/form-data"
      >
        <input
          id="formName"
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
          required="required"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
          required="required"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Comment"
          required="required"
        ></textarea>

        <button className="submit" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
