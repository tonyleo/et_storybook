import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap-storybook';

/**
 * Top Navigation Bar with expanded menu for mobile viewers.
 */
export const TopNavigation = ({ showUserName, ...props }) => {
  return (
    <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand href="/">
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation-menu" />
          <Navbar.Collapse id="navigation-menu">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown 
                title={ 
                  <span>
                    <i className="far fa-gear" /> 
                    <span className="pl-1 d-sm-none">Settings</span>
                  </span> 
                }
                id="navigation-dropdown-settings"
              >
                <NavDropdown.Item href="#">
                  Link
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Link
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                  <Nav.Link href="#">
                    <i className="far fa-bomb" /> 
                    <span className="pl-1 d-sm-none">Link</span>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="#">
                    <i className="far fa-rocket" /> 
                    <span className="pl-1 d-sm-none">Link</span>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="#">
                    <i className="far fa-magic-wand-sparkles" /> 
                    <span className="pl-1 d-sm-none">Link</span>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link href="#">
                    <i className="far fa-bell" /> 
                    <span className="pl-1 d-sm-none">Notifications</span>
                  </Nav.Link>
              </Nav.Item>
              <NavDropdown 
                title={ 
                  <span>
                    <i className="far fa-circle-user" /> 
                    {showUserName ? <span className="ml-3 d-sm-none">John Smith</span> : <span className="ml-3">John Smith</span>}
                  </span> 
                }
                id="navigation-dropdown-user"
              >
                <NavDropdown.Item href="#">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
    </Navbar>
  );
};

TopNavigation.propTypes = {
  showUserName: PropTypes.bool
};

TopNavigation.defaultProps = {
  showUserName:true
};
