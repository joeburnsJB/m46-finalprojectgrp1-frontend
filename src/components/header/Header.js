import logo from './images/piston_logo_black.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.menu');
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className='header-container'>
      <section className='logo-section'>
        <p className='title'>Piston</p>
        <img src={logo} alt="logo" className='logo' />
      </section>
      <div className='search-bar'>
        <form action="">
          <input type="text" placeholder="Search here.." name="search"/>
        </form>
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/userlist">User List</Link></li>
          <li><Link to="/login-register">Login & Register</Link></li>
        </ul>
      </div>
    </header>
  );
}