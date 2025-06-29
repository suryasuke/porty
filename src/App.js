import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch , useSelector } from "react-redux";
import Navbar from './components/Navbar/Navbar.jsx';
import Overview from './Pages/Overview.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projects from './components/Projects/ProjectsCompo.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Activity from './components/Activity/Activity.jsx';
import axios from 'axios';
import PathCompo from "../src/components/PathCompo.jsx";
import '../src/App.css';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import CloseIcon from '@mui/icons-material/Close';
import { ChangePorfileView } from "./components/redux/profileViewToggle.js";
import logo from './assets/logof.jpg' 






function App() {
    

 const value  = useSelector((state) => state.profileView.toggle)
 const toggle = useSelector((state => state.toggle.toggle)) 
 const dispatch = useDispatch();
 console.log( "profile value"  , value);

 console.log("dark mode and light mode toggle " , toggle) ; 
 
  const [done , setdone] = useState(()=>{
    const savedValue = localStorage.getItem('done');
    return savedValue ? JSON.parse(savedValue) : false; 
  });
  const [currentPath , setpath]=  useState (''); 
  const [notes, setNotes] = useState([]);
  const API_URL = "http://localhost:3000/content";



 useEffect(() => {  
    const fetchNotes = async () => {
      try {
        const response = await axios.get(API_URL);
        setNotes(response.data); 
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
      fetchNotes();
  }, []);



  const handleclick = ()=>{
      dispatch(ChangePorfileView());
    }



    useEffect(()=>{
      localStorage.setItem('done' , JSON.stringify(done))
    },[done])

  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor');
  //   const pointer = document.querySelector('.pointer');
  //   cursor.style.display = 'none';

  //   const handleMouseMove = (event) => {
  //     cursor.style.display = 'flex';
  //     if (!cursor.classList.contains('hidden')) {
  //       cursor.style.left = `${event.clientX}px`;
  //       cursor.style.top = `${event.clientY}px`;
  //     }
  //   };

  //   const handleMouseLeave = () => {
  //     cursor.style.display = 'none';
  //   };

  //   const handleMouseDown = () => {
  //     pointer.classList.add('active');
  //   };

  //   const handleMouseUp = () => {
  //     pointer.classList.remove('active');
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mouseleave', handleMouseLeave);
  //   document.addEventListener('mousedown', handleMouseDown);
  //   document.addEventListener('mouseup', handleMouseUp);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.removeEventListener('mouseleave', handleMouseLeave);
  //     document.removeEventListener('mousedown', handleMouseDown);
  //     document.removeEventListener('mouseup', handleMouseUp);
  //   };
  // }, []);

  async function inserting(value) {
    try {
    
      const timestamp = new Date().toISOString();
      const newNote = { value , timestamp };
    console.log('mail' , value.email);


      await axios.post(API_URL, newNote);

      
      const response = await axios.get(API_URL);
      setNotes(response.data);
      
    } catch (error) {
      console.error("Error inserting note:", error);
    }
  }
  const alclick = () =>{
  setdone((prev)=>{
  return !prev ; 
  })
  };
  const bgda = done ? 'doned' : ''  ; 
  
  return (
    <div className={done || value ? `overflow-ah` : ''}>
       <div className= {`${bgda} ${done || value ? `non-intract` : ''}`} >
     
 <BrowserRouter>
 
      <Navbar currentPath={currentPath}/>
      <PathCompo onpathChange={setpath}/> 
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/feedback' element={<Feedback onadd={inserting} note={notes} />} />
        <Route path='/activity' element={<Activity />} />
      </Routes>    
      <Footer />
    </BrowserRouter>
    </div> 
    {
  
  done ? 
  
  <div className="alert-conatain">
    <div className="alert">
      <div id="notice">
       <h1 style={{marginTop :'0px'}}>Notice</h1>
        <p id="icons" onClick={alclick}>
           < DangerousRoundedIcon marginTop='15px' />
        </p>
      </div> 

        <div className="contents">
          <p>
  Hello User,
  If you are accessing this page on a low-resolution screen, mobile device, tablet, or TV, we recommend using a laptop for optimal viewing. Thank you for your understanding.
  Best regards,<br></br>
           <div className="author">
      <b>Surya S</b><br></br>
  <b>Full Stack Developer</b>
  </div>
   
     </p>
   </div>
  </div>
  
  </div>
  : ''
  
  }  


  {
    value ? 
    <>
    <div className="profile-overlay ">
      <div className="Profile-container">
    
        <div   className="wrong-In-Profie">
<div className="icon-wrong"><CloseIcon onClick={()=>{handleclick()}} style={{color : 'white'}} /></div>
        </div>

        <div className="piclogo">
          <img src={logo} alt="logo-pic"/>
        </div>
        
    </div> 
    </div>
    
    
    </> : ''
  }


    </div>
   
  );
}

export default App;
