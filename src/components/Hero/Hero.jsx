import React from 'react';
import './Hero.css';
import textb from '../../assets/textb.png'
import file from '../../assets/Resume.pdf';
import { Experience } from '../Experience';
import { Canvas } from "@react-three/fiber";


const Hero = () => {

  return (
    <>
      <div className='whole-contain-hero'>
        <div className='hero'>
          <div className="hero-left">
            <div className='names'>
           <h2 class="hero-title">
  Hey Welcome i'm
  <span class="name-wrapper">
    <img src={textb} alt="splash" class="splash-svg" />
    <span class="name-text">SURYA S</span>
  </span>
</h2>
              <p>
                I'm a<span>Java & PERN stack</span> developer specializing in <span>PostgreSQL</span>,<span>Express.js</span>,<span>React</span>,                and<span>Node.js</span>.I create scalable, high-performance web apps with a focus on clean code.
                Passionate about tackling challenges and staying updated with the latest technologies.
                My knowledge in full stack.
              </p>
            </div>
            <div className="hero-latest-btn">
              <a href={file} download="surya_resume">
                <div className='anchor'>Download Resume</div>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <Canvas
              shadows
              camera={{ position: [0, 2, 5], fov: 30 }}
              style={{
                borderRadius: '30px',
                height: '400px',
                width: '350px',
                backgroundColor: 'none',
                marginBottom: "30px"
              }}
            >
              <color attach="background" args={["transparent"]} />
              <Experience />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
