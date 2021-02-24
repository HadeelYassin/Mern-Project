import React from 'react'
import { Card } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {'Copyright © '}
      <Link color="red" href="/">
      Movie Time
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
     marginTop: 'auto',
    backgroundColor:'transparent',
    position:'fixed',
    bottom:0,
    minWidth:"100%"
  },
}));



const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{align:"center"}} >
      <footer className={classes.footer}>
        <Container minWidth="sm" style={{ color: 'white' }}>
            <Copyright />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon/>
        </Container>
      </footer>
    </div>
    )
}
export default Footer
{/* <Card style={{backgroundColor:"#21262d", color:'whitesmoke', fontSize:'12px',position:'bottom',bottom:0}} elevation={3}>
                <p style={{marginBottom: 0}}>Movie Time © 2021</p>
                <FacebookIcon style={{ color: '#0168e4' }}/>
                <TwitterIcon style={{ color: '#1093f3' }}/>
                <InstagramIcon olor="pink"/>
            </Card> */}
