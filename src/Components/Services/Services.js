import React, { useEffect, useState } from 'react';
import './services.css';
import Card from '../Card/Card';

const Services = () => {
               const [services ,setServices] =useState([])
// _________________ data fetch _____________ 
               useEffect(()=>{
                              fetch('http://localhost:5000/places')  
                              .then(res=>res.json())   
                              .then(data=>setServices(data))  
                      },[])
               return (
                    < div className='program-part'>
                     <div className="our-programs">
                         OUR Programs
                     </div>
                        <div className=" row row-cols-1 row-cols-md-2">
                        {
       services.map(service => <Card
           key={service.id}
           service={service}
       ></Card>)
   }
                 </div>        
                 </div>
               );
};

export default Services;