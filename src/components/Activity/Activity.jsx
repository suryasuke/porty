import React from 'react'
import '../Activity/Activity.css'
import png1 from '../../assets/1.png'; 
import png2 from '../../assets/2.png';
import png3 from '../../assets/3.png';
import png4 from '../../assets/4.png';
import png5 from '../../assets/5.png';
import png6 from '../../assets/6.png';
import png7 from '../../assets/7.png';
import png8 from '../../assets/8.png' ; 


function Activity() {
  return (
    <div>
      <div className='contain-dot'>

         <div className='dot'></div>
      </div>
       
        <div className='timeline'>
          
            <div className='container-time left-container'>
            <p className='icons'><img src={png1} alt='1 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Got Interest About Coding</h1>
                 <small><i style={{fontSize :'13px'}}>2018 - 2019</i></small>
                 <p>During this period, I focused on developing my coding skills by studying key programming concepts and analyzing real-world coding challenges to enhance my problem-solving abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve coding problems</p>

                </div>
                <span className='left-arrow'></span>

              </div>
              
            </div>
            <div className='container-time right-container'>
            <p className='icons'><img src={png2} style={{position :'absolute' , right :'94.5%'}} alt='2 img'/></p>
              <div className='text-box'>
                <div className='tb'>
                <h1>Improve My Skills in Business</h1>
                 <small><i style={{fontSize :'13px'}}>2018 - 2019</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                
                 <span className='right-arrow'></span>
              </div>
              
            </div>
            <div className='container-time left-container'>
            <p className='icons'><img src={png3} alt='3 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Learned Python Fundamentals</h1>
                 <small><i style={{fontSize :'13px'}}>2021 - 2022</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='left-arrow'></span>
              </div>
              
            </div>
            <div className='container-time right-container'>
            <p className='icons'><img src={png4} style={{position :'absolute' , right :'94.5%'}} alt='4 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Started MERN Stack Course</h1>
                 <small><i style={{fontSize :'13px'}}>2022 - 2023</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='right-arrow'></span>
              </div>
              
            </div>
            <div className='container-time left-container'>
            <p className='icons'><img src={png5} alt='5 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Act as Secretary in CSE Department for 1Year</h1>
                 <small><i style={{fontSize :'13px'}}>2022 - 2023</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='left-arrow'></span>
              </div>
              
            </div>
            <div className='container-time right-container'>
            <p className='icons'><img src={png6} style={{position :'absolute' , right :'94.5%'}} alt='6 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Done my first Internship at Parts2Products(thirunelveli)</h1>
                 <small><i style={{fontSize :'13px'}}>2022 - 2023</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='right-arrow'></span>

              </div>
              
            </div>
            <div className='container-time left-container'>
            <p className='icons'><img src={png7} alt='7 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Developed my own projects without any refernces</h1>
                 <small><i style={{fontSize :'13px'}}>2022 - 2024</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='left-arrow'></span>
              </div>
              
            </div>
            <div className='container-time right-container'>
            <p className='icons'><img src={png8} style={{position :'absolute' , right :'94.5%'}} alt='6 img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>Planned to do PG in Canada (MBA)</h1>
                 <small><i style={{fontSize :'13px'}}>2025 - 2027</i></small>
                 <p>During this period, I focused on developing my business acumen by studying key business concepts and analyzing real-world scenarios to enhance my decision-making abilities. My approach involved not only understanding theoretical frameworks but also applying them in practical, efficient ways to solve business problems</p>

                </div>
                 <span className='right-arrow'></span>

              </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default Activity ;
