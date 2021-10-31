import React, { useEffect, useState } from 'react';
import './services.css';
import Card from '../Card/Card';

const Services = () => {
               const [services ,setServices] =useState([])
// _________________ data fetch _____________ 
               useEffect(()=>{
                              fetch('https://protected-journey-97584.herokuapp.com/places')  
                              .then(res=>res.json())   
                              .then(data=>setServices(data))  
                      },[])
               return (
                    < div className='container program-part'>
                     <div className="our-programs">
                        <h1>OUR New <span className="The-Journal">Programs</span></h1> 
                     </div>
                        <div className="cards row row-cols-1 row-cols-md-2">
                        {
       services.map(service => <Card
           key={service._id}
           service={service}
       ></Card>)
   }
                 </div>        
                 </div>
               );
};

export default Services;