import React,{useState,navigate, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


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
    width: 300,
  },
  title:{
    ...theme.typography.button,
    backgroundColor: theme.palette.text.disabled,
    padding: theme.spacing(1),  
}
}));


const AddMovie = () => {
  const [title, setTitle] = useState(""); 
  const [price, setPrice] = useState();
  const[description, setDescription] = useState("")
  const[imageUrl, setImageUrl] = useState("")
  const[showingDate, setShowingDate] = useState("")
  const[trailerUrl, setTrailerUrl] = useState("")
  const[numberOfSeats, setNumberOfSeats] = useState()
  const [categories, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory]=useState("")
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      axios.get('http://localhost:8000/api/getAllCategories')
          .then(res=>{
            setCategories(res.data);
              
          });
  },[loaded])
  const classes = useStyles();
  

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/createmovie', {
        title,
        price,
        description,
        imageUrl,
        trailerUrl,
        showingDate,
        numberOfSeats,
        selectedCategory,
    })
    .then(res=>setLoaded(!loaded))
    .catch(err=>console.log(err))
}
  
  return (
    <div className="containerr">
      <Container  fixed maxWidth="sm" >
      <div className={classes.title} >{"Add Movie"}</div>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
      <Grid item xs={12} ><TextField onChange={(e)=>setTitle(e.target.value)} id="standard-basic" label="Title" fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12}><InputLabel id="demo-simple-select-label">Category</InputLabel>
    
      <Select onChange={(e)=>setSelectedCategory(e.target.value)} >
            {categories.map((category, idx)=>{
                return <MenuItem   key={idx} value={category._id}>{category.Name}</MenuItem>
            })}
        </Select>
      </Grid>
      <Grid item xs={12}><TextField id="standard-multiline-flexible" onChange={(e)=>setDescription(e.target.value)} label="Description" multiline fullWidth rowsMax={10} className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-number" onChange={(e)=>setPrice(e.target.value)} label="Ticket Price" type="number" InputLabelProps={{shrink: true,}} fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-number" onChange={(e)=>setNumberOfSeats(e.target.value)} label="Number Of Seats" type="number" InputLabelProps={{shrink: true,}} fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-basic" onChange={(e)=>setImageUrl(e.target.value)} label="Poster url" fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-basic" onChange={(e)=>setTrailerUrl(e.target.value)} label="Trailer url" fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="datetime-local" onChange={(e)=>setShowingDate(e.target.value)} label="Next appointment" type="datetime-local" defaultValue="2017-05-24T10:30" className={classes.textField} InputLabelProps={{shrink: true,}}/></Grid>
      <Grid item xs={12}><button className="buy" type="submit">Add</button></Grid>
    </form>
      </Container>
    </div>
    )
}
export default AddMovie
