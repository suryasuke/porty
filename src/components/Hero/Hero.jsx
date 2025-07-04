import React from 'react';
import './Hero.css';

import file from '../../assets/Resume.pdf';
import { Experience } from '../Experience';
import { Canvas } from "@react-three/fiber";


const Hero = () => {

  return (
    <>
      <div className='whole-contain'>
        <div className='hero'>
          <div className="hero-left">
            <div className='names'>
            <h2>Hey Welcome i'm<span>SURYA S</span></h2>
              <p>
                I'm a <span>Java & PERN stack</span> developer specializing in <span> PostgreSQL</span> ,<span> Express.js</span> ,<span>React</span> , <br />
                and <span>Node.js</span>. I create scalable, high-performance web apps with a focus on clean code. <br />
                Passionate about tackling challenges and staying updated with the latest technologies. <br />
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
