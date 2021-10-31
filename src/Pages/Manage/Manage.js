import React, { useEffect, useState } from 'react';
import './Manage.css'

const Manage = () => {
               const [services, setServices] = useState([]);
               useEffect(()=>{
                              fetch('https://protected-journey-97584.herokuapp.com/places')
                              .then(res=>res.json())
                              .then(data => setServices(data))

               },[])
               const handleDelete =id =>{
                              const url =    `https://protected-journey-97584.herokuapp.com/places/${id}`;
                              fetch(url,{
                                             method:'DELETE'
                              })
                              .then(res=>res.json())
                              .then(data => {console.log(data);
                                             alert("DELETED");
                              const remaining = services.filter(service => service._id !== id);
                              setServices(remaining);
                              })
               }

               return (
                              <div className="manage">
                                    <h1>Manage all Services </h1> 
                                    {
                                                         services.map(service => <div className="manage-all" key={service._id}>
               <h5>{service.name}</h5>
               <p>{service.For}</p>

               <p>{service.follower}<i className="fas fa-heart"></i></p>

               <button onClick={()=> handleDelete(service._id)}>Delete</button>

                                                         </div>)
                                         
                                         }         
                              </div>
               );
};

export default Manage;