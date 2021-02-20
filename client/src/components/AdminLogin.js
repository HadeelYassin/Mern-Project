import React, {  useState } from 'react'
import { Link } from '@reach/router';

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
        width: "20rem", padding: "1rem", marginTop: "10%"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
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
            password
            })
                .then(res=>console.log(res)) // If successful, do something with the response. 
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
        <center>
        <Paper elevation={3} style={styles.paper}>
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
               
                <Button type="submit" variant="contained" color="primary">
                <Link to={"/login" +  "/hi"}>
                Login
                </Link>
                </Button>
            </form>
        </Paper>
        </center>
    )
}
