import React from 'react'
import Navbar from './components/NavigationBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import Skillspage from './components/Pages/SkillsPage/Skillspage';
import ProjectPage from './components/Pages/ProjectsPage/ProjectPage';
import ContactMe from './components/Pages/ContactMe/ContactMe';
import ResumePage from './components/Pages/ResumePage/ResumePage';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <section id='home'>
      <HomePage />
      </section>
      
      <section id='skills'>
      <Skillspage />
      </section>

      <section id='projects'>
      <ProjectPage />
      </section>
      
      <section id='resume'>
      <ResumePage />
      </section>

      <section id='contact'>
      <ContactMe />
      </section>
      
      <Footer />
    </div>
  )
}

export default App
