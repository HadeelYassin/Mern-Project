import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';



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
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="containerr">
      <Container  fixed maxWidth="sm" >
    <form className={classes.root} noValidate autoComplete="off">
    <Grid item xs={12} ><TextField id="standard-basic" label="Name" fullWidth className={classes.textField}/></Grid>
    <Grid item xs={12} sm={6}><InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          fullWidth
          className={classes.textField}
        >
          {options.map((option) => (
          <MenuItem value={option} fullWidth  className={classes.textField}>
            {option}
          </MenuItem >
        ))}
        </Select></Grid>
    <Grid item xs={16} ><TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          fullWidth
          rowsMax={10}
          className={classes.textField}
        /></Grid>
      {/* <Grid item xs={16} ><FormControl className={classes.formControl}> */}
      
      {/* </FormControl></Grid> */}
      <Grid item xs={12} ><TextField
          id="standard-number"
          label="Ticket Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          className={classes.textField}
        /></Grid>
        <Grid item xs={12} ><TextField id="standard-basic" label="Poster url" fullWidth className={classes.textField}/></Grid>
        <Grid item xs={12} ><TextField id="standard-basic" label="Trailer url" fullWidth className={classes.textField}/></Grid>
        <Grid item xs={12} ><TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /></Grid>
    </form>
    </Container>
    </div>

    )
}

export default AddMovie
