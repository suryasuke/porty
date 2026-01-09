import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Skills.css'   
import Stack from '../../ui/Stack';
import react from '../../assets/react-svgrepo-com.svg'
import js from '../../assets/js-svgrepo-com.svg'
import node from '../../assets/node-js-svgrepo-com.svg'
import api from '../../assets/api-settings-svgrepo-com.svg'
import netlify from '../../assets/netlify-svgrepo-com.svg'
import github from '../../assets/github-142-svgrepo-com.svg'
import git from '../../assets/git-svgrepo-com.svg'
import docker from '../../assets/docker-svgrepo-com.svg'
import psql from '../../assets/postgresql-logo-svgrepo-com.svg'
import html from '../../assets/html5-01-svgrepo-com.svg'
import css from '../../assets/css-3-svgrepo-com.svg'        

function Skills() {


const images = [
react,
js,
node,
api,  
netlify,  
github, 
git,  
docker, 
psql, 
html, 
css 
];
  return (
    <div className='skills-c'>
      <h1 className='skills-h1'>Skills i have learned</h1> <hr/>
      <div className='skills-content'>
        <div className='skills-left'>
  <p>
    Self-driven learner with strong exposure to technology through structured online platforms. 
    Applied analytical and problem-solving skills by working on multiple real-world
    <a className='project-link' href='/projects'>
      <span className='project-text'> projects</span>
      <ArrowForwardIcon className='arrow-small' fontSize='15px' />
    </a>.
    Developed a practical understanding of business processes, operations, and digital solutions.
    Gained experience in teamwork, planning, and execution through hands-on project work.
    Earned certifications from recognized platforms, demonstrating commitment to continuous learning.
    Actively exploring opportunities to combine technology knowledge with management and business strategy.
    Highly motivated to grow as a management professional and contribute to organizational success.
  </p>
</div>
        <div className='cardsda'>
  <Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={true}
    cards={images.map((src, i) => (
      <img 
        key={i} 
        src={src} 
        alt={`card-${i + 1}`} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    ))}
  />
</div>
      </div>
    </div>
  )
}

export default Skills
