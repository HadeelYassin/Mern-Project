import React,{useState,navigate} from 'react'
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
}));
const options = [
  'None',
  'Comedy',
  'Action',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Adventures',
];

const AddMovie = () => {
  const [title, setTitle] = useState(""); 
  const [price, setPrice] = useState("");
  const[description, setDescription] = useState("")
  const[imageUrl, setImageUrl] = useState("")
  const[showingDate, setShowingDate] = useState("")
  const[trailerUrl, setTrailerUrl] = useState("")

  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/createmovie', {
        title,
        price,
        description,
        imageUrl,
        trailerUrl,
        showingDate
    })
    .then(() => navigate("/"))
    .catch(err=>console.log(err))
}
  
  return (
    <div className="containerr">
      <Container  fixed maxWidth="sm" >
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
      <Grid item xs={12} ><TextField onChange={(e)=>setTitle(e.target.value)} value={title} id="standard-basic" label="Title" fullWidth className={classes.textField}/></Grid>
      <Grid item xs={12} sm={6}><InputLabel id="demo-simple-select-label" >Category</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} onChange={(e)=>setCategory(e.target.value)} fullWidth className={classes.textField}>
        {options.map((option) => (
        <MenuItem value={option} fullWidth  className={classes.textField}>
          {option}
        </MenuItem >
        ))}
      </Select></Grid>
      <Grid item xs={16}><TextField id="standard-multiline-flexible" onChange={(e)=>setDescription(e.target.value)} label="Description" multiline fullWidth rowsMax={10} value={description} className={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-number" onChange={(e)=>setPrice(e.target.value)} label="Ticket Price" type="number" InputLabelProps={{shrink: true,}}value={price} fullWidthclassName={classes.textField}/></Grid>
      <Grid item xs={12}><TextField id="standard-basic" onChange={(e)=>setImageUrl(e.target.value)} label="Poster url" fullWidth className={classes.textField} value={imageUrl}/></Grid>
      <Grid item xs={12}><TextField id="standard-basic" onChange={(e)=>setTrailerUrl(e.target.value)} label="Trailer url" fullWidth className={classes.textField} value={trailerUrl}/></Grid>
      <Grid item xs={12}><TextField id="datetime-local" onChange={(e)=>setShowingDate(e.target.value)} label="Next appointment" value={showingDate} type="datetime-local" defaultValue="2017-05-24T10:30" className={classes.textField} InputLabelProps={{shrink: true,}}/></Grid>
      <button className="buy">Add</button>
    </form>
      </Container>
    </div>
    )
}
export default AddMovie
