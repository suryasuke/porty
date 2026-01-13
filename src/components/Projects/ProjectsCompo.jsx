import React, { useState, useEffect } from 'react';
import '../Projects/ProjectsCompo.css';
import projo from '../../assets/Projo';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function ProjectsCompo() {
  const [selectedId, setSelectedId] = useState(() => {
    const savedValue = localStorage.getItem('selectedId');
    return savedValue ? JSON.parse(savedValue) : null;
  });

  const [valid, setValid] = useState(() => {
    const savedValid = localStorage.getItem('valid');
    return savedValid ? JSON.parse(savedValid) : false;
  });

  useEffect(() => {
    localStorage.setItem('selectedId', JSON.stringify(selectedId));
    localStorage.setItem('valid', JSON.stringify(valid));
  }, [selectedId, valid]);

  const handleClick = (id) => {
    setSelectedId(id);
    setValid((prev) => !prev);
  };

  return (
    <div className="conatinering">
      {projo.map((project) => {
        const isActive = selectedId === project.id && valid;
       const needed = isActive ? (
  <>
    Close <ArrowDropUpIcon />
  </>
) : (
  <>
    Read more <ArrowDropDownIcon />
  </>
);


        return (
          <div
            key={project.id}
            className={`proj-container ${isActive ? 'active' : ''}`}
          >
            <div className="title-contain">
              <div className="view">
                <h2>
                  {project.name} <img src={project.src} alt="" />
                </h2>
                <h3>
                  <a
                    style={{ textDecoration: 'none' }}
                    href={project.link}
                  >
                    {project.link && <RemoveRedEyeIcon />}
                  </a>
                </h3>
              </div>

              <p style={{ userSelect: 'text' }}>{project.des}</p>

              <h3
                onClick={() => handleClick(project.id)}
                className="read"
              >
               {project.Description ? needed : null }
              </h3>

              {isActive && <p>{project.Description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsCompo;
