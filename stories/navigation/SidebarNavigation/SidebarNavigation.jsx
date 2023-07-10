import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SidebarNavigation.scss';

/**
 * <span className="status-badge workinprogress">Work In Progress</span>
 * 
 * Sidebar will appear full height and if sidebar contents is taller than available viewport allows, will become scrollable.
 * 
 * Supports a light and dark mode. CSS is commented to find colors used in component and can be replaced with palette colors.
 */
export const SidebarNavigation = ({dark, user, ...props }) => {

  const handleSubNav = (e) => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() === 'li' || e.target.tagName.toLowerCase() === 'a'){
      e.target.nextSibling.style.top = e.target.parentNode.offsetTop + "px";
      e.target.nextSibling.classList.toggle('show');
    } else {
      e.target.parentNode.nextSibling.style.top = e.target.parentNode.offsetTop + "px";
      e.target.parentNode.nextSibling.classList.toggle('show');
    }
    if(e.target.classList.contains('dropdown-arrow')) {
      e.target.classList.toggle('spin-icon-up');
    } else {
      e.target.parentNode.querySelector('.dropdown-arrow').classList.toggle('spin-icon-up');
    }
  }

  const toggleSidebarFooter = (e) => {
    e.preventDefault();
    document.getElementsByClassName('sidebar-footer-menu')[0].classList.toggle('show');
  }

  return (
      <div className={dark ? "sidebar-navigation dark" : "sidebar-navigation"}>
        <div className="brand">
          <a href="/">LOGO</a>
        </div>
        <ul className="primary-navigation">
          <li className="sub-navigation-trigger" id="section-subnav">
            <a href="#" onClick={handleSubNav}>
              <i className="far fa-gear fa-fw"></i>
              <span>Link</span>
              <i className="dropdown-arrow far fa-chevron-down fa-fw"></i>
            </a>
            <ul className="sub-navigation-menu">
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
          <li className="nav-heading">Heading</li>
          <li>
            <a href="#">
              <i className="far fa-bomb fa-fw"></i>
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-rocket fa-fw"></i>
              <span>Link</span>
            </a>
          </li>
          <li className="nav-heading">Heading</li>
          <li>
            <a href="#">
              <i className="far fa-magic-wand-sparkles fa-fw"></i>
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-bell fa-fw"></i>
              <span>Link</span>
              <span className="badge-container"><span className="count">3</span></span>
            </a>
          </li>
        </ul>
        <hr />
        <div className="sidebar-footer">
          <a href="#" id="sidebar-footer-toggle" onClick={toggleSidebarFooter}>
            {user == 'icon' ? <i className="fal fa-circle-user fa-lg"></i> : <img src="https://drive.google.com/uc?id=1ViEHjqPSSMBSpvKhLk3DIzTDv9_Z2YW4" className="user-avatar" />}
            <span>
              User Name<br />
              <span className="useremail">user.name@example.com</span>
            </span>
            <i className="dropdown-ellipsis far fa-ellipsis-vertical fa-fw"></i>
          </a>
          <ul className="sidebar-footer-menu">
            <li>
              <a href="#">
                <span>Profile</span>
              </a>
            </li>
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
        </div>
      </div>
  );
};

SidebarNavigation.propTypes = {
  dark: PropTypes.bool,
  user: PropTypes.oneOf(['avatar', 'icon'])

};

SidebarNavigation.defaultProps = {
  dark: false,
  user: 'icon'
};
