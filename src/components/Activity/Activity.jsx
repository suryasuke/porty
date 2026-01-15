import React from 'react'
import '../Activity/Activity.css'


import activity from '../../assets/Acitivity';


function Activity() {
  return (
    <div className='conatin'>
      <div className='contain-dot'>

         <div className='dot'></div>
      </div>
       
        <div className='timeline'>
          {
               activity.map((value , index)=>{
                return (

                  <div className={`container-time ${value.side}-container`}>
            <p className={`icons hi-img ${value.imgClass}`}><img className={`${value.imgClass ? value.imgClass : 'ni'}`} src={value.image}  alt='img'/></p>
              <div className='text-box'>
              <div className='tb'>
                <h1>{value.title}</h1>
                 <small><i style={{fontSize :'13px'}}>{value.date}</i></small>
                 <p>Skill gained: {value.tech}</p>
                 <p>{value.desc}</p>
                  {
                    value.link ? <a href={value.link} className='webs-link' target='_blank' rel="noreferrer" >{value.link}</a> : null   
                  }
                </div>
                 <span className={`${value.side}-arrow`}></span>

              </div>
            </div>
                )
                
               })
            

          }
           
        </div>
      
    </div>
  )
}

export default Activity ;
