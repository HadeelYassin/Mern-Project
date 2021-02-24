import React, { useState, navigate, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  table: {
    minWidth: 500,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const UsersTable = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [checked, setChecked] = React.useState();
  const [price, setPrice] = useState();
  const numofTickets=0;
  let totalPrice=price*numofTickets;
  useEffect(() => {
    axios.get('http://localhost:8000/api/getAllMovies')
      .then(res => {
        setMovies(res.data);

      });
  }, [])

  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };
  const callRandom = (event) => {
    let x = event.target.value
    axios.get('http://localhost:8000/api/getMovie/' + x)
      .then(res => {
        setPrice(res.data.price);
        setBuyers(res.data.Buyers);
      });
  }


  return (
    <div>
   
      <FormControl className={classes.formControl} style={{display:"inline-block"}}>
        <InputLabel id="demo-simple-select-label" style={{width:"60%"}}>Movies</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={callRandom}
          style={{width:"60%"}}
        >
          {movies.map((movie, idx) => {
            return <MenuItem key={idx} value={movie._id} >{movie.title}</MenuItem>
          })}
        </Select>
        <TextField disabled id="standard-disabled" label="Ticket Price" defaultValue={price} style={{width:"30%",marginLeft:"10px"}} />
      </FormControl>


      <Container fixed maxWidth="md" >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead >
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Phone Number</StyledTableCell>
                <StyledTableCell align="center"># Tickets&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Total Price&nbsp;</StyledTableCell>
                <StyledTableCell align="center">Paid&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buyers.map((buyer, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {buyer.firstName} {buyer.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{buyer.phoneNumber}</StyledTableCell>
                  <StyledTableCell align="center">{buyer.numberOfTickets}</StyledTableCell>
                  <StyledTableCell align="center">{buyer.numberOfTickets*price}</StyledTableCell>
                  <Checkbox
                    style={{ color: 'red' }}
                    checked={checked}
                    onChange={handleChange1}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default UsersTable
