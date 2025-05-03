import React from 'react'
import './SkillsPage.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skillspage = () => {
  return (
    <>
    <div className="heading"><h1><b><i>Skills</i></b></h1>
    <div className='moto'>
      <p>Building digital dreams - one pixel at a time.</p>
    </div>
    
    <div className="container-skills">
    <div className="box-skill">
        <div className="skill">
            <FaHtml5 className='icon'/>
            <h2 className='skill-tag'>HTML5</h2>
        </div>
    </div>
    
    <div className="box-skill">
        <div className="skill">
        <FaCss3Alt className='icon'/>
        <h2 className='skill-tag'>CSS</h2>
        </div>
    </div>
    
    <div className="box-skill">
        <div className="skill">
        <RiTailwindCssFill className='icon'/>
        <h2 className='skill-tag'>Tailwind</h2>
        </div>
    </div>

    <div className="box-skill">
        <div className="skill">
        <IoLogoJavascript className='icon'/>
        <h2 className='skill-tag'>JavaScript</h2>
        </div>
    </div>
    <div className="box-skill">
        <div className="skill">
        <FaReact className='icon'/>
        <h2 className='skill-tag'>React</h2>

        </div>
    </div>
    <div className="box-skill">
        <div className="skill">
        <FaFigma className='icon'/>
        <h2 className='skill-tag'>Figma</h2>

        </div>
    </div>
    </div>

    </div>
    
    
    </>
    
  )
}

export default Skillspage
