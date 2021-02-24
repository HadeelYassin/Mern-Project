import React,{useState,navigate, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    title:{
        // ...theme.typography.button,
        backgroundColor: theme.palette.text.disabled,
        padding: theme.spacing(1),
        minWidth:"10ch"
        
    }
  }));
  
const AddCategory = () => {
    const [name, setName] = useState("");
    const [selectedCategory,setSelectedCategory]=useState("Categories")
    const [loaded, setLoaded] = useState(false);
    const classes = useStyles();
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createcategory', {
            name
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div className="containerr">
            
            <Container >
            <Grid ><div className={classes.title} fullWidth >Add Category</div></Grid>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
                <Grid item xs={12} ><TextField value={name} onChange={(e)=>setName(e.target.value)} id="standard-basic" label="Add Category" className={classes.textField}/></Grid>
                <Grid item xs={12}><button type="submit"className="buy">Add</button></Grid>
            </form>
            </Container>
        </div>
    )
}

export default AddCategory
