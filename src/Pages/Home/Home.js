import React from 'react';
import Services from '../../Components/Services/Services';
import About from '../../Pages/About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
const Home = () => {
               return (
                              <div>
                                             
                                             
                                             <Banner></Banner>
                                             <About></About>
                                             <Services></Services>
                                             <Blogs></Blogs>
                                             
                              </div>
               );
};

export default Home;