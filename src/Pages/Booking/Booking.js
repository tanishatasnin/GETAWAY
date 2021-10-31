import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
               const { placeId } = useParams();
    const [place,setplace] = useState({})

useEffect(()=>{
    fetch(`https://protected-journey-97584.herokuapp.com/places/${placeId}`)
    .then(res=>res.json())
    .then(data=> setplace(data))
},[])

               return (
                              <div>
                                     <div>
            <h3>{place.name}</h3>
            <h2>this is booking: {placeId}</h2>
        </div>         
                              </div>
               );
};

export default Booking;