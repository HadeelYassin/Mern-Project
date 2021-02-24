import React,{useState,navigate, useEffect} from 'react'
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

function createData(name, phone, ticket,paid) {
  return { name, phone, ticket ,paid};
}

const rows = [
  createData('Amal Ahmad', 5999999, 6.0,false),
  createData('Basim Freij', 5999999, 9.0,false),
  createData('Diana Bast', 5999999, 16.0,false),
  createData('Ekram Suliman',5999999, 3,false),
  createData('Fatima Hasan', 5999999, 16.0,false),
  createData('Fadi Hasan', 5999999, 6.0,false),
  createData('Hasan Mhesen', 5999999, 9.0,false),
  createData('Eclair', 5999999, 16.0,false),
  createData('Cupcake', 5999999, 3,false),
  createData('Gingerbread', 5999999, 16.0,false),
];


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
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
  

const UsersTable = () => {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [checked, setChecked] = React.useState(rows.paid);

    useEffect(()=>{
      axios.get('http://localhost:8000/api/getAllMovies')
          .then(res=>{
            setMovies(res.data);
              
          });
  },[])
  const handleChange1 = (event) => {
    setChecked(event.target.checked);
  };

 

    return (
      <div>
      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">Movies</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          {movies.map((movie, idx)=>{
                return <MenuItem   key={idx} value={movie._id}>{movie.title}</MenuItem>
            })}
        </Select>
      </FormControl>
        <Container  fixed maxWidth="md">
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center"># Tickets&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Paid&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.ticket}</StyledTableCell>
              <Checkbox
              style={{color:'red'}}
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
