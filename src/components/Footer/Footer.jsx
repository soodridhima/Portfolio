import React from 'react'
import './Footer.css'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {

  const scrollToTop= () => {
      window.scrollTo({top : 0 , behavior : 'smooth'})
  }
  return (
    <div className='foot'>
      <footer className='footer'>
      <h1 className='foot-1'>Designed and built by Ridhima Sood</h1>
      <div className="linkers">
        <a href="http://www.linkedin.com/in/soodridhima/" target="_blank" rel="noopener noreferrer" className='link-socials'>
        <TbBrandLinkedinFilled />
        </a>
        <a href="http://github.com/soodridhima/" target="_blank" rel="noopener noreferrer" className='link-socials'>
        <FaGithubSquare />
        </a>
        <a href="mailto:rodhimasood56@gmail.com" target="_blank" rel="noopener noreferrer" className='link-socials'>
        <MdEmail />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer" className='link-socials'>
        <FaSquareTwitter />
          </a>
      </div>
      <div className="copy">
        <p>&copy; {new Date().getFullYear()} Ridhima Sood. All rights reserved.</p>
      </div>
      <h1 className='footer-top' onClick={scrollToTop}>
        <p className='p-ico text-3xl'><IoIosArrowDropup /></p>
      <p className='p-comm font-semibold'>Back to top.</p></h1>
      </footer>
    </div>
  )
}

export default Footer
