import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anish-shrestha-174ab8160/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/stylesaniswi" target='_blank'><FaGithub /></a>
        <a href="mailto:anishshrestha607@gmail.com" target='_blank'><AiOutlineMail /></a>
    </div>
  )
}

export default HeaderSocials