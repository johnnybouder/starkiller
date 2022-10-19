import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { APP_TITLE } from '../../constants';
import logo from '../../../assets/img/logo_starkiller.png';
import { Icon, IconType } from '@starkiller/base';
import './header.scss';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    window.scrollTo({ top: 0 });
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const ref = document.body.classList;
    showMenu ? ref.add('no-scroll') : ref.remove('no-scroll');
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header className={`${'header'} ${showMenu ? 'header-active' : ''}`}>
      <div className="usa-nav-container">
        <div>
          <Link to="/" className="header-logo">
            <img src={logo} alt={`${APP_TITLE} logo.`} />
          </Link>
          <button className="header-menu-button" onClick={handleMenuClick}>
            <Icon
              id="menu-icon"
              type={!showMenu ? IconType.menu : IconType.close}
            />
            {!showMenu ? 'Menu' : 'Close'}
          </button>
        </div>
        <div className="header-content">
          <nav className="header-nav">
            <ul>
              <li className="usa-nav__primary-item">
                <NavLink
                  id="home-link"
                  to="/"
                  className={`usa-nav__link ${
                    location.pathname === '/' ? 'usa-current' : ''
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li className="usa-nav__primary-item">
                <NavLink
                  id="characters-link"
                  to="/characters"
                  className={`usa-nav__link ${
                    location.pathname === '/characters' ? 'usa-current' : ''
                  }`}
                >
                  Characters
                </NavLink>
              </li>
              <li className="usa-nav__primary-item">
                <NavLink
                  id="login-link"
                  to="/login"
                  className={`usa-nav__link ${
                    location.pathname === '/login' ? 'usa-current' : ''
                  }`}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
