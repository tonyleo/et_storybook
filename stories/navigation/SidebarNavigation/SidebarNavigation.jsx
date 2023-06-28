import React from 'react';
import PropTypes from 'prop-types';
import './SidebarNavigation.scss';
import { Accordion, Dropdown } from "react-bootstrap-storybook";

/**
 * **-- WORK IN PROGRESS --**
 * 
 * Sidebar will appear full height and if sidebar contents is taller than available viewport allows, will become scrollable.
 * 
 * Supports a light and dark mode. CSS is commented to find colors used in component and can be replaced with palette colors.
 */
export const SidebarNavigation = ({dark, ...props }) => {
  return (
      <div className={dark ? "sidebar-navigation dark" : "sidebar-navigation"}>
        <div className="brand">
          <a href="/">LOGO</a>
        </div>
        <hr />
        <ul className="primary-navigation">
          <li className="sub-navigation">
            <Accordion options={[
              {
                title: <span><i className="far fa-gear fa-fw"></i><span>Administration</span></span>,
                component: 
                  <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>,
                id: "1"
              }
            ]}>
            </Accordion>
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
          <Dropdown drop="up"><Dropdown.Toggle id="user-menu"><i className="far fa-circle-user fa-lg" /><span>User Name</span></Dropdown.Toggle><Dropdown.Menu><Dropdown.Item href="#">Profile</Dropdown.Item><Dropdown.Item href="#">Settings</Dropdown.Item><Dropdown.Item href="#">Logout</Dropdown.Item></Dropdown.Menu></Dropdown>
        </div>
      </div>
  );
};

SidebarNavigation.propTypes = {
  dark: PropTypes.bool
};

SidebarNavigation.defaultProps = {
  dark: true
};
