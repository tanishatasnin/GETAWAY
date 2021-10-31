import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Bokkig.css';

const Booking = () => {
               const { placeId } = useParams();
    const [place,setplace] = useState({})

useEffect(()=>{
    fetch(`https://protected-journey-97584.herokuapp.com/places/${placeId}`)
    .then(res=>res.json())
    .then(data=> setplace(data))
},[])

               return (
                              <div className='container'>
                                     <div className="place-about">
            <h3> <span className='The-Journal'>{place.name}</span></h3>
            <img src={place.img} alt="" />
            <br />
            <br />
            <h6>{place.text}</h6>
            <br />
            <br />
            <br />
        </div>         
                              </div>
               );
};

export default Booking;