import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Footer";

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <h1>CONTACT</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Let's create the future</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <form
              action="mailto:contact@yourdomain.com"
              method="POST"
              enctype="multipart/form-data"
              name="emailForm"
              className="emailForm"
            >
              <div className="form-group col-md-12">
                <h3>Get in touch</h3>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name *"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject *"
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <textarea
                  name="message"
                  rows="6"
                  cols="20"
                  placeholder="Message *"
                  className=""
                  required
                ></textarea>
              </div>

              <div className="form-group col-md-12">
                <input type="submit" value="Send Message" className="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
