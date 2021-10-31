import React from 'react';
import './Notfound.css';

const Notfound = () => {
               return (
                              <div className='notfound'>
                              <div className='text-center'>
                              <img className='not-img mx-auto' 
                              src="https://wallpaperaccess.com/full/157134.jpg" alt="" />

                              </div>
                                          <h1 className="error-part text-center">404 </h1>   
                                          <p className ='error-p text-center'>Your page is not  found </p>
                                          
                              </div>
               );
};

export default Notfound;