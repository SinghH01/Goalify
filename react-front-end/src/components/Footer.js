import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import './Footer.css'

const Footer = (props) => (
  <div className="parent">

    <h2 >Contact Info</h2>
    <footer id="footer">
      <section className="special">
        <p className="copyright_nomargin">
          <a href="https://wa.me/+14039289813">
            <BsFillTelephoneForwardFill /> +14039289813
          </a>
          <a href="mailto:huwaida_khaild@yahoo.com" className="">
            <AiOutlineMail /> huwaida_khaild@yahoo.com
          </a>

        </p>
      </section>
      <section className="linkedin_github">
        <a href="https://www.linkedin.com/in/huwaida-khalid-271190242/" className="icon fa-twitter alt">
          <AiFillLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/Huwaida1990"
          className="icon fa-github alt"
        ><AiFillGithub />
          <span className="label"><AiFillGithub /> GitHub</span>
        </a>

      </section>

    </footer>
  </div>

)
export default Footer


