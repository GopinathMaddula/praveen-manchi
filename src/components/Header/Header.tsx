import React from 'react';
import { Link } from 'react-router';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to='/'>
      <img src={praveenLogo} alt="Praveen Manchi" />
      </Link>
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/about-me">ABOUT ME</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/resource">Resource</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;