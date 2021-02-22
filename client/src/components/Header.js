import React, { useEffect, useRef, useState } from 'react'
import Button from '@material-ui/core/Button';
import Logo from '../images/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
  'None',
  'Comedy',
  'Action',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Adventures',
];

const ITEM_HEIGHT = 48;
  
  const useStyles = makeStyles((theme) => ({
    appBarTransparent: {
        backgroundColor: 'transparent'
    },
    appBarSolid: {
        backgroundColor: 'black'
    }
}));

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

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
        top:'0' ,
        width:'100%'
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
            <Button
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color:'whitesmoke'}}
      >
        Categories
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      {/* <NavItem>
              <NavLink href="/admin" style={{color:'whitesmoke'}}>Login</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default Header
