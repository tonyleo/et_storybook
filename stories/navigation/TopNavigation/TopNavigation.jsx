import React from 'react';
import PropTypes from 'prop-types';
import './TopNavigation.scss';

/**
 * <span className="status-badge workinprogress">Work In Progress</span>
 * 
 * Top Navigation will display as a header with brand and navigation links. Supports a mobile view where the menu links will expand into vertical sidebar menu drawers.
 * 
 */
export const TopNavigation = ({ dark, user, showNavText, ...props }) => {

  const handleSubNav = (e) => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() === 'li' || e.target.tagName.toLowerCase() === 'a'){
      e.target.nextSibling.classList.toggle('show');
    } else {
      e.target.parentNode.nextSibling.classList.toggle('show');
    }
    if(e.target.classList.contains('dropdown-arrow')) {
      e.target.classList.toggle('spin-icon-up');
    } else {
      e.target.parentNode.querySelector('.dropdown-arrow').classList.toggle('spin-icon-up');
    }
  }

  const toggleAccountMenu = (e) => {
    e.preventDefault();
    document.getElementsByClassName('account-menu')[0].classList.toggle('show');
  }

  const topLevelClasses = () => {
    let classes = 'top-navigation ';
    if(dark) { classes += 'dark '};
    if(!showNavText) { classes += 'hide-nav-text '};
    return classes;
  }


  return (
    <header class={topLevelClasses()}>
      <div class="nav-toggle-left">
        <i class="fas fa-bars"></i>
      </div>
      <div class="brand">
        <a href="/">LOGO</a>
      </div>
      <div class="main-navigation">
        <ul>
          <li class="sub-navigation-container">
            <a href="#" class="sub-navigation-toggle" onClick={handleSubNav}>
              <i class="far fa-gear"></i>
              <span>Administration</span>
              <i class="dropdown-arrow far fa-chevron-down"></i>
            </a>
            <ul class="sub-navigation-menu">
              <li>
                <a href="#">
                  <span>Link</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Link</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Link</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="far fa-bomb"></i>
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-rocket-launch"></i>
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-magic-wand-sparkles"></i>
              <span>Link</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="right-navigation">
        <ul>
          <li>
            <a href="#">
              <i class="far fa-bell"></i>
              <span class="badge-container">
                <span class="count">3</span>
              </span>
              <span>Notifications</span>
            </a>
          </li>
          <li class="logged-in-user-container">
            <a href="#" class="logged-in-user account-menu-toggle" onClick={toggleAccountMenu}>
              {user == 'icon' ? <i class="fal fa-circle-user fa-lg"></i> : <img src="https://drive.google.com/uc?id=1ViEHjqPSSMBSpvKhLk3DIzTDv9_Z2YW4" className="user-avatar" />}
              <span class="account-info">
                <span class="username">User Name</span>
                <span class="useremail">user.name@example.com</span>
              </span>
              <i class="far fa-ellipsis-vertical"></i>
            </a>
            <ul class="account-menu">
              <li>
                <a href="#">
                  <span>Notification Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Change Password</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="nav-toggle-right">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

TopNavigation.propTypes = {
  dark: PropTypes.bool,
  user: PropTypes.oneOf(['avatar', 'icon']),
  showNavText: PropTypes.bool
};

TopNavigation.defaultProps = {
  dark: false,
  user: 'icon',
  showNavText: true
};
