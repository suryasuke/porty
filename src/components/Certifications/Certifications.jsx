import React from 'react'
import certificate1 from '../../assets/certificate/certificate'   
import './Certifications.css'   
function Certifications() {
  return (
  <div className='certification-whole-contain'> 
  <h1 className='certificate-hr'>Certificates<hr/></h1> 
    <div className='certificate-container'>
         
      {
        certificate1.map((certi)=>{
          return(
            <div key={certi.id} className='certificate-card'>
              <img className='certificate-img' src={certi.image} alt={certi.name} />
              <h3 className='certificate-name'>{certi.name}</h3>
            </div>
          )
        })
      }
    </div>
  </div>
 
  )
}

export default Certifications
