import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import jquery from "../../Icons/jquery.svg";
import {
  faCloudDownloadAlt,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="row">
          <div className="about-intro col-md-6">
            <h1>Roxan Estomata</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul className="about-list">
              <li>
                <h3>Skills</h3>
              </li>
              <li>
                <h3>Education</h3>
              </li>
              <li>
                <h3>Hobbies</h3>
              </li>
            </ul>

            <div className="about-detail">
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faNpm}></FontAwesomeIcon>
              <img src={jquery} />
            </div>

            <button className="button">
              Download CV{" "}
              <FontAwesomeIcon icon={faFileArrowDown}></FontAwesomeIcon>
            </button>
          </div>
          <div className="about-img col-md-5 .offset-md-1"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
