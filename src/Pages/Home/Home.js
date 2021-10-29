import React from 'react';
import Services from '../../Components/Services/Services';
import About from '../../Pages/About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
const Home = () => {
               return (
                              <div>
                                             <h1>home</h1>
                                             
                                             <Banner></Banner>
                                             <About></About>
                                             <Services></Services>
                                             
                              </div>
               );
};

export default Home;