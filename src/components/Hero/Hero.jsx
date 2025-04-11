import React from 'react'
import './Hero.css' ;

import file from '../../assets/Resume.pdf'
import { Experience } from '../Experience';
import { Canvas } from "@react-three/fiber";

const hero = () => {

  return (
<>
<div className='whole-contain'>

 <div className='hero'>
<div className="hero-left">
<div className='names'>
  <h2>Hey Welcome I'm <span>SURYA S</span></h2>
  <p>I'm a Full-Stack Developer specializing in Java and the PERN stack — PostgreSQL, Express.js,<br></br>
    React, and Node.js. I build scalable, high-performance web applications with a strong focus on clean, <br></br>
    maintainable code. I'm passionate about solving complex challenges and constantly stay up-to-date with the latest<br></br> 
    trends in both Java and JavaScript ecosystems.</p>
  
    
</div>
<div className="hero-latest-btn">
<a href={file} download="surya resume"><div>Download Resume</div></a>
   
</div>
</div>

<div className="hero-right">



</div>
<Canvas
  shadows
  camera={{ position: [0, 2, 5], fov: 30 }}
  style={{ width: '600px', backgroundColor: 'transparent'  , marginBottom:"30px"}} 
>
  <color attach="background" args={["transparent"]} />  
  <Experience />
</Canvas>

</div>

</div>
</>

   
  )
}
export default hero ;
