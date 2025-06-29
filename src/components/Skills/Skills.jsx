import { useState } from 'react';
import '../Skills/Skills.css';

import allpro from '../../assets/allProduct';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Skills() {



  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = allpro.length;
  console.log('length of skills' ,allpro.length)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };



  console.log(currentIndex);
  

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className='container' >
      <div className='title'>
        <div className='skill'>
          <h1 >SKILLS</h1>
        </div>
      </div>
      <div className='prev' onClick={prevImage}>
        <ArrowBackRoundedIcon />
      </div>
      <div className='skills'>
        <div className='mern'>
          {
            allpro.map((imgs, index) => (
              <div key={index}>
                <img className={index === currentIndex ? 'actives-img' : ''} src={imgs} alt={`Skill ${index + 1}`} />
                <div className={index === currentIndex ? 'actives-imgs' : ''} ></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='next' onClick={nextImage}>
        <ArrowForwardRoundedIcon />
      </div>
    </div>
  );
}

export default Skills;
