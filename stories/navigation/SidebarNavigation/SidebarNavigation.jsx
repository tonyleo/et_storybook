import React from 'react';
import PropTypes from 'prop-types';
import './SidebarNavigation.scss';

/**
 * **-- WORK IN PROGRESS --**
 * 
 * Sidebar will appear full height and if sidebar contents is taller than available viewport allows, will become scrollable.
 * 
 * Supports a light and dark mode. CSS is commented to find colors used in component and can be replaced with palette colors.
 */
export const SidebarNavigation = ({dark, lockedFooter, ...props }) => {
  return (
      <div className={dark ? "sidebar-navigation dark" : "sidebar-navigation"}>
        <div className="brand">
          <a href="/">LOGO</a>
        </div>
        <hr />
        <ul className="primary-navigation">
          <li className="sub-navigation-trigger" id="section-subnav">
            <a href="#">
              <i className="far fa-gear fa-fw"></i>
              <span>Link</span>
              <i className="far fa-chevron-down fa-fw"></i>
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
            </a>
          </li>
        </ul>
        <hr />
        <div className="sidebar-footer">
          <a href="#">
            <i className="far fa-circle-user fa-lg"></i>
            <span>User Name</span>
            <i className="far fa-ellipsis-vertical fa-fw"></i>
          </a>
          <ul className="sidebar-footer-menu">
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
        </div>
      </div>
  );
};

SidebarNavigation.propTypes = {
  dark: PropTypes.bool,
  lockedFooter: PropTypes.bool
};

SidebarNavigation.defaultProps = {
  dark: true,
  lockedFooter: true
};
