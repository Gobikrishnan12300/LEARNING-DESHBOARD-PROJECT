import React from 'react'
import './course details.css'
import  {FaYoutube, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram }from "react-icons/fa";


const Coursedetails= () => {
  
        
   
    
  return (
    
    <div className='Card-details'>
      <div className='card1'>

    
      
       <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/html/'}}>
        
        <p className='container'>HTML</p>
        
        </div>
        <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/css/'}}>
        
        <p className='cointainer' >CSS</p>
        
        </div>
        <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/js/'}}>
        
        <p className='cointainer'>JAVASCRIPT</p>
        
        </div>
        <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/REACT/DEFAULT.ASP'}}>
        
        <p className='cointainer' >REACT JS</p>
        
        </div>
        <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/nodejs/'}}>
        
        <p className='cointainer'>EXPRESS JS</p>
        
        </div>
        <div className='card' onClick={ ()=> {window.location.href='https://www.w3schools.com/mongodb/'}}>
        
        <p className='cointainer'>MONGODB</p>
        </div>

        
        
        
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='card2'>
          <FaYoutube className='Youtube' />
          <FaWhatsapp className='Whatsapp'/>
          <FaFacebook className='Facebook'/>
          <FaTwitter className='Twitter'/>
          <FaInstagram className='Instagram'/>
        </div>
       
        

   </div>

    
    
  )
}

export default Coursedetails