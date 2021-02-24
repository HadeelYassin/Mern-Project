import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="containerr">
      <Container  fixed maxWidth="md">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={8}
        />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {options.map((option) => (
          <MenuItem value={option}>
            {option}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
      <TextField
          id="standard-number"
          label="Ticket Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </form>
    </Container>
    </div>

    )
}

export default AddMovie
