import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Container } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';

const Login = () => {
  
    const paperStyle = {  display: 'block',
        padding: '20px',
        height: '310px',
        width: '46%',
        
        position: 'absolute',
       
       
   
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', }
    const btnstyle = { margin: '30px 0' }
    const iconStyle ={color:'#dd1818'}
    const containerStyle={  background: '#333333', /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #333333, #dd1818)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #333333, #dd1818)'}
   const test={
       height:'100hv',
       position:' inherit',
       background:'red',
   }
    return (
        <div style={test}>
<Paper elevation={7} style={paperStyle} >
        <Grid align='center'>
            <LockIcon  style={iconStyle} fontSize="large"/>
            <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required />
        <br></br>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
        <br></br>

        <Button type='submit'   variant="contained" style={btnstyle} fullWidth>Sign in</Button>


    </Paper>
        </div>
    
    )
}

export default Login