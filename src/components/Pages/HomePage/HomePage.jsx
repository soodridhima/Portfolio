import React from 'react'
import './HomePage.css'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
    <div className='wrapper'>
      
        <div className="container-img"></div> 
        <div className="introduction">
            <p>
            <b><i>Hello and welcome! 👋</i></b><br />
I'm Ridhima Sood, a passionate frontend developer and tech enthusiast based in Shimla, Himachal Pradesh.
I love blending creativity with code to craft beautiful, responsive, and user-friendly websites. <br />

With a background in Electronics and Communication, and a growing expertise in HTML, CSS, JavaScript, React js and Figma, I'm always excited to bring ideas to life on the web.
When I'm not coding, you’ll often find me exploring renewable energy innovations, sketching designs, or learning something new! 🌱🎨. <br />

Thanks for stopping by — feel free to explore my work and connect with me! 🚀✨
            </p>
        </div>
        <div className="links-social">
            <a href="http://www.linkedin.com/in/soodridhima/" target="_blank" rel="noopener noreferrer" className='link-social'>
                <TbBrandLinkedinFilled />
            </a>
            <a href="http://github.com/soodridhima/" target="_blank" rel="noopener noreferrer" className='link-social'>
                <FaGithubSquare />
            </a>
            <a href="mailto:rodhimasood56@gmail.com" target="_blank" rel="noopener noreferrer" className='link-social'>
                <MdEmail />
            </a>
            <h1 className='link-social'><FaSquareTwitter /></h1>
        </div>
    </div>
    </>
  )
}

export default HomePage
