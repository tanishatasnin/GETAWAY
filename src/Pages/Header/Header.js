import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

import './Header.css';
// ______________________________ header part ______ 
const Header = () => {
  const{user,logOut}=useAuth();
               return (
                              <div >
                                             <header >
  <div class="container ">
    <div class="logo-box ">
      <a href="/">
        <img  src=""/>
      </a>
    </div>
    <nav>
    <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="/details">Details</Link></li>
      <li><Link to="/login">login</Link></li> 
      {/* ______ button for log out ____  */}
      <span>{user.displayName}</span>
      {user?.email &&  <button onClick={logOut}>Log out</button>}
      {/* _____ close________  */}
      <li><Link to="/information">Informations</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
   </ul>
  </nav>
  </div>
</header>

                              </div>
               );
};

export default Header;