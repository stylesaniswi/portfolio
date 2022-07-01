import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
        
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Awards</h5>
            <small>Merit Scholarship, VIT -1st year</small><br />
            <small>Compex Scholor -2020</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>5+ Projects</small>
          </article>
          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Language</h5>
            <small>Fluently 4 Language</small>
          </article>
          </div>
          <p>
          Hello! I am <b className='name'>Anish Shrestha</b>, an enthusiastic software developer from Nepal with expertise in design, frontend programming and currently working on backend development. I enjoy creating bizarre things with creative goals and I support both teamwork and simplicity.
          <br />
          <small >Computer science and engineering bachelor's degree.<br />

CGPA of 9.22 at Vellore Institute of Technology</small>            
          </p>

          <a href="#experience" className="btn btn-primary">Learn more </a>
        </div>
        </div>

      </section>
  )
}

export default About