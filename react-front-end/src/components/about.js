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
          A web ...
        </p>

      </div>
      <div className='header'>
        <h1>Tech Stack</h1>
        <p>
          <ul>
            <li> Frontend : React, CSS, Bootstrap</li>
            <li> Backend : Express,  Nodejs ,Socket.IO</li>
            <li> Database : PostgreSQL</li>
          </ul>
        </p>
      </div>
      <div className='header'>
        <h1>Features</h1>
        <p>
          <ul>
            <li> Login and explore goals listings</li>
            <li> Search for goals </li>
            <li> Logged-in users can fav goals and view them later</li>
            <li> user can create, delete and edit goal listings</li>
          </ul>
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