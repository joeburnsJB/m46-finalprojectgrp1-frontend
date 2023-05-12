import logo from './images/piston_logo_black.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

    function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
  }
  
  return (
    <header className='header-container'>
      <section className='logo-section'>
        <p className='title'>Piston</p>
        <img src={logo} className='logo' />
      </section>
      <div className='search-bar'>
        <form action="">
          <input type="text" placeholder="Search here.." name="search"/>
        </form>
      </div>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className='menu'>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login-register">Login & Register</Link></li>
          <li><a href='#'>Link 3</a></li>
          <li><a href='#'>Link 4</a></li>
          <li><a href='#'>Link 5</a></li>
      </ul>
      </div>
    </header>
  );
}
