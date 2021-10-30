import React, { useEffect, useState } from 'react';

const Manage = () => {
               const [services, setServices] = useState([]);
               useEffect(()=>{
                              fetch('http://localhost:5000/places')
                              .then(res=>res.json())
                              .then(data => setServices(data))

               },[])
               const handleDelete =id =>{
                              const url =    `http://localhost:5000/places/${id}`;
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
                              <div>
                                    <h1>Manage all Services </h1> 
                                    {
                                                         services.map(service => <div key={service._id}>
               <h3>{service.name}</h3>
               <button onClick={()=> handleDelete(service._id)}>Delete</button>

                                                         </div>)
                                         
                                         }         
                              </div>
               );
};

export default Manage;