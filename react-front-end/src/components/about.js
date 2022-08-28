import React from "react";
import "./about.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const About = () => {
  return (
    <div className="about-body">
      <div className="about-us">
        <div className="profile">
          <img
            src={require("../assets/avatar2.jpeg")}
            alt="avatar"
            className="avatar"
          />
          <h3>Harshbir Singh</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/singhharshbir/"
                className="icon fa-twitter alt"
              >
                <LinkedInIcon /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SinghH01"
                className="icon fa-github alt"
              >
                <GitHubIcon /> GitHub profile
              </a>
            </li>

            <li>
              <a href="">
                <PhoneIcon /> 587-222-1202
              </a>
            </li>
            <li>
              <a href="mailto:singh.hveer1@gmail.com" className="">
                <MailOutlineIcon /> singh.hveer1@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img
            src={require("../assets/avatar2.jpeg")}
            alt="avatar"
            className="avatar"
          />
          <h3>Edgar Sargsyan</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="icon fa-twitter alt"
              >
                <LinkedInIcon /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Edgarsar"
                className="icon fa-github alt"
              >
                <GitHubIcon /> GitHub profile
              </a>
            </li>

            <li>
              <a href="https://wa.me/+14039289813">
                <PhoneIcon /> 306-216-9949
              </a>
            </li>
            <li>
              <a href="mailto:edgarsargsyan@hotmail.com" className="">
                <MailOutlineIcon /> edgarsargsyan@hotmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img
            src={require("../assets/avatar1.jpeg")}
            alt="avatar"
            className="avatar"
          />
          <h3>Huwaida Khalid</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/huwaida-khalid-271190242/"
                className="icon fa-twitter alt"
              >
                <LinkedInIcon /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Huwaida1990"
                className="icon fa-github alt"
              >
                <GitHubIcon /> GitHub profile
              </a>
            </li>

            <li>
              <a href="https://wa.me/+14039289813">
                <PhoneIcon /> +14039289813
              </a>
            </li>
            <li>
              <a href="mailto:huwaida_khaild@yahoo.com" className="">
                <MailOutlineIcon /> huwaida_khaild@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
