import React, { useEffect, useRef, useState } from 'react'
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
  } from 'reactstrap';
import { makeStyles } from '@material-ui/core';


  
  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'transparent'
    },
    appBarSolid: {
        backgroundColor: 'black'
    }
}));

const Header = () => {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
  
    const imageStyle={
        padding: '12px 15px',
        width:'100px',
        height:'70px'
    }
    const style={
        // backgroundColor:'transparent',
        transition: '1s ease',
        position:'fixed',
        overflow: 'hidden',
        top:'0' 
    }
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div className={classes.root}>
            <Navbar className={classes.appBarTransparent} style={style} light expand="md" className={classes[navRef.current]}>
            <img style= {imageStyle} src={Logo} alt="logo"/>
        <NavbarBrand  href="/"  style={{color:'whitesmoke'}}>MovieTime</NavbarBrand>
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
              <DropdownMenu right  >
                <DropdownItem >
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
