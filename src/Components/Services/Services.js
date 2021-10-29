import React, { useEffect, useState } from 'react';
import './services.css';
import Card from '../Card/Card';

const Services = () => {
               const [services ,setServices] =useState([])
// _________________ data fetch _____________ 
               useEffect(()=>{
                              fetch('./data.json')  
                              .then(res=>res.json())   
                              .then(data=>setServices(data))  
                      },[])
               return (
                              <div className='services'>
                                       <div className="container home ">
                                                      {/* _______ all services dynamicly _  */}
                                                    <h1 className='text-center m-4'>our service</h1>
                              <div className=" row row-cols-1 row-cols-md-2">
                                             {
                                                    services.map(service=><Card
                                                    service={service}>

                                                    </Card>)        
                                             }
                              </div>
                             
                              </div>      
                              </div>
               );
};

export default Services;