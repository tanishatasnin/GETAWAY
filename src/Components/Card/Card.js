import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
               const {id,price, follower,For, name,text, img } = service;
               return (
                              <div>
                                       <div style={{ 
      backgroundImage: `url(${img})`
    }} className="img-fluid programs">
           
            <div  className="program-text">
              
            <h3 >{name}</h3>
            
            <h5 > $ {price}  </h5>
           <div className="follow">
           <h6> {For}  <i className="fas fa-history"></i> </h6>
            <p> Following  {follower} <i className="fas fa-heart"></i></p>
           </div>

            <p className="px-3">{}</p>
            <Link to={`/moreinfo/${id}`}>
                <button className="btn text-white fs-6 prgoram-text"> <i class="fas fa-info-circle"></i> BOOKING <i class="fas fa-angle-double-right"></i> </button>
            </Link>


            </div>      
                              </div>
                               </div>
               );
};

export default Card;