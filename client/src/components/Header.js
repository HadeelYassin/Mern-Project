import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Header = () => {
    const imageStyle={
        padding: '12px 15px',
        width:'100px',
        height:'70px'
    }
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar style={{backgroundColor:"transparent"}}  light expand="md">
            <img style= {imageStyle} src={Logo} alt="logo"/>
        <NavbarBrand href="/"  style={{color:'whitesmoke'}}>MovieTime</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" style={{color:'whitesmoke'}}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{color:'whitesmoke'}}>Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret  style={{color:'whitesmoke'}}>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Comedy
                </DropdownItem>
                <DropdownItem>
                  Action
                </DropdownItem>
                <DropdownItem>
                 Drama
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default Header
