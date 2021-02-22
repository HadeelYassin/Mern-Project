import React, {  useState } from 'react'
import { Link,navigate } from '@reach/router';
import LockIcon from '@material-ui/icons/Lock';

import axios from 'axios';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "40%", padding: "1rem",
        margin: 0,
        position: 'absolute',
        top:' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    input: {
        margin: "1rem"
    },
    
    iconStyle:
    {color:'#dd1818'},
    btnstyle:{
        margin: '10px 0'
    },
    divStyle:{
        background:'#333333', /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #333333, #dd1818)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #333333, #dd1818)',
        position: 'relative',
        height: '560px',
        padding:0,
    }
}
export default function LoginForm() {
    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

     //handler when the form is submitted

        const onSubmitHandler = e => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/register', {
            userName,
            password,
            })
                .then(res=> {if(res.data.errors == null)
                    { navigate('/login/hi') }else{
                        console.log(res.data.errors);
                    }

                }
                ) // If successful, do something with the response. 
                .catch(err=>{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })
    }
    return (
        <div style={styles.divStyle}>
             <Paper elevation={4} style={styles.paper}>
             <LockIcon  style={styles.iconStyle} fontSize="large"/>
            <h2>Login Admin</h2>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
                </FormControl>
               
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </FormControl>
                <br/>
               
                <Button type='submit'   variant="contained" style={styles.btnstyle} >Sign in</Button>
            </form>
        </Paper>
       
        </div>
       
    )
}
