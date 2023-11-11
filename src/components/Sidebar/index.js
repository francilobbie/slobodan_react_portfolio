import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);


  return (
    <div className='nav-bar'>
      <Link to="/" className="logo">
        <img src={LogoS} alt="Logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''} >
        <NavLink onClick={() => setShowNav(false)} exact to="/" activeClassName="active">
          <FontAwesomeIcon icon={faHome} color="#4D4D4E" />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact to="/about" className="about-link" activeClassName="active">
          <FontAwesomeIcon icon={faUser} color="#4D4D4E" />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact to="/portfolio" className="portfolio-link" activeClassName="active">
          <FontAwesomeIcon icon={faSuitcase} color="#4D4D4E" />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact to="/contact" className="contact-link" activeClassName="active">
          <FontAwesomeIcon icon={faEnvelope} color="#4D4D4E" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faLinkedin} color="#4D4D4E" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faGithub} color="#4D4D4E" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faYoutube} color="#4D4D4E" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
