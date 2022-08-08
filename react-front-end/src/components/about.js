import React from 'react'
import './about.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <div className='body'>
      <div className='header'>
        <h1>about us</h1>
        <p>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien.
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et ultricies sapien.
          Paragraph. Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className='about-us'>
        <div className='profile'>
          <img src={require('../assets/avatar2.jpeg')} alt='avatar' className='avatar' />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/huwaida-khalid-271190242/" className="icon fa-twitter alt">
                <AiFillLinkedin /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Huwaida1990"
                className="icon fa-github alt"
              ><AiFillGithub /> GitHub profile</a>
            </li>

            <li>
              <a href="https://wa.me/+14039289813">
                <BsFillTelephoneForwardFill /> +14039289813
              </a>
            </li>
            <li>
              <a href="mailto:huwaida_khaild@yahoo.com" className="">
                <AiOutlineMail /> huwaida_khaild@yahoo.com
              </a>
            </li>
          </ul>
        </div>
        <div className='profile'>
          <img src={require('../assets/avatar2.jpeg')} alt='avatar' className='avatar' />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/huwaida-khalid-271190242/" className="icon fa-twitter alt">
                <AiFillLinkedin /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Huwaida1990"
                className="icon fa-github alt"
              ><AiFillGithub /> GitHub profile</a>
            </li>

            <li>
              <a href="https://wa.me/+14039289813">
                <BsFillTelephoneForwardFill /> +14039289813
              </a>
            </li>
            <li>
              <a href="mailto:huwaida_khaild@yahoo.com" className="">
                <AiOutlineMail /> huwaida_khaild@yahoo.com
              </a>
            </li>
          </ul>
        </div>
        <div className='profile'>
          <img src={require('../assets/avatar1.jpeg')} alt='avatar' className='avatar' />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/huwaida-khalid-271190242/" className="icon fa-twitter alt">
                <AiFillLinkedin /> LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Huwaida1990"
                className="icon fa-github alt"
              ><AiFillGithub /> GitHub profile</a>
            </li>

            <li>
              <a href="https://wa.me/+14039289813">
                <BsFillTelephoneForwardFill /> +14039289813
              </a>
            </li>
            <li>
              <a href="mailto:huwaida_khaild@yahoo.com" className="">
                <AiOutlineMail /> huwaida_khaild@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About