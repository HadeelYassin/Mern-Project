import React,{ useEffect, useRef, useState } from 'react'
import { navigate } from '@reach/router';
import axios from "axios";
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
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  appBarTransparent: {
      backgroundColor: 'transparent'
  },
  appBarSolid: {
      backgroundColor: 'black'
  }
    }));

const HeaderAdmin = () => {
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
        height:'30px'
    }
    const style={
        transition: '2s ease',
        position:'fixed',
        overflow: 'hidden',
        top:'0' ,
        width:'100%'
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleLogoutClick=(e)=> {
      e.preventDefault();
      axios
        .get("http://localhost:8000/api/logout",{withCredentials:true})
        .then(res=>
          { navigate('/') }
        
        )
        .catch(error => {
          console.log("logout error", error);
        });
    }
  
    return (
      <div className={classes.root}>
    <Navbar className={classes.appBarSolid} style={style} light expand="md" className={classes[navRef.current]}>
      <img style= {imageStyle} src={Logo} alt="logo"/>
      <NavbarBrand  href="/login/hi" style={{color:'whitesmoke'}}>MovieTime</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <Button>
          <NavLink href="/admin/movies" style={{color:'whitesmoke'}}>Add Movie</NavLink>
        </Button>
        <Button>
          <NavLink href="/admin/info" style={{color:'whitesmoke'}}>View Tickets</NavLink>
        </Button>
      </Nav>
      {/* <NavItem> */}
        <form onSubmit={handleLogoutClick}>
            <button className="buy" style={{color:'whitesmoke',width:"90px"}}>
          Log Out
          </button>
          </form>
        {/* </NavItem> */}
    </Collapse>
  </Navbar>
    </div>
    )
}
export default HeaderAdmin
