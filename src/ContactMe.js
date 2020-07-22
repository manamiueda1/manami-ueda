import React from "react";
import "./App.css";
import emailjs from "emailjs-com";
// import { render } from "@testing-library/react";

class ContactMe extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_n9tFXoML",
        e.target,
        "user_xY61N1ew46eS4a1SnF4Ff"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      name: "",
      email: "",
      text: "",
    });
  }

  render() {
    return (
      <div id="Contact-me">
        <h1>Contact</h1>
        <div class="Bar"></div>

        <form onSubmit={this.handleSubmit}>
          <input
            id="formName"
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            class="feedback-input"
            placeholder="Name"
            required="required"
          />
          <input
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
            class="feedback-input"
            placeholder="Email"
            required="required"
          />
          <textarea
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
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
}

export default ContactMe;
