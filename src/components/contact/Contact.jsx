import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>anishshrestha607@gmail.com</h5>
              <a href="mailto:anishshrestha607@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'  />
              <h4>Messenger</h4>
              <h5>Anish Shrestha</h5>
              <a href="https://m.me/vadorsline" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <AiOutlineLinkedin className='contact__option-icon' />
              <h4>LinkedIn</h4>
              <h5>Anish Shrestha</h5>
              <a href="https://www.linkedin.com/in/anish-shrestha-174ab8160/" target="_blank">Send a message</a>
            </article>
          </div>

          <form action=''>
            <input type="text" name="name" placeholder='your full name' required />
            <input type="email" name="email" placeholder='your Email' required />
            <textarea type="message" rows="7"  placeholder='your Message' required />
            <button type='submit' className='btn btn-primary' >Send Message</button> 

          </form>
          <a href="#" className='scroll__up'>scroll up</a>
        </div>
        

      </section>
    )
}

export default Contact