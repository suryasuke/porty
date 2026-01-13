import React from 'react'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills';
import Photos from '../components/Photos/Photos';  
import Certifications from '../components/Certifications/Certifications'; 

function Overview() {
  return (
    <div>
        <Hero />
        <Skills />  
        <Photos />  
        <Certifications />  
    </div>
  )
}

export default Overview ; 
