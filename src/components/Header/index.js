import React from 'react';
import './styles.css';

function Header( { black } ) {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
          </a>  
          <div>
            Clone
          </div>
        </div>
        <div className="header--user">
          <a href="/Contact" className='text-white'>
            Contact us
          </a>
        </div>
        <div className="header--user" >
          <a href="/" className='text-white'>
            Privacy Policy
          </a>
        </div>
        <div className="header--user">
          <a href="/" className='text-white'>
            Terms and Conditions
          </a>
        </div>
        <div className="header--sub text-red-500">
          <div className='text-white'>
            Subscribe
          </div>
        </div>
        <div className="header--user">
          <a href="/Signin">
            <img alt="Usuário" src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg" />
          </a>
        </div>
    </header>
  );
}

export default Header;
