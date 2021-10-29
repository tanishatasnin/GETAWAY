import React from 'react';

const Card = ({service}) => {
               const {id,  name,text, img } = service;
               return (
                              <div>
                                       <div style={{ 
      backgroundImage: `url(${img})`
    }} className="programs">
           
            <div  className="program-text">
            <h3 >{name}</h3>
            <h5  > "{text} ... </h5>
            <p className="px-3">{}</p>
            {/* <Link to={`/moreinfo/${id}`}>
                <button className="btn text-white fs-3 prgoram-text"> <i class="fas fa-info-circle"></i> Learn more <i class="fas fa-angle-double-right"></i> </button>
            </Link> */}
            </div>      
                              </div>
                              </div>
               );
};

export default Card;