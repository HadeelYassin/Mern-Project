import React from 'react'
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




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Amal Ahmad', 5999999, 6.0),
  createData('Basim Freij', 5999999, 9.0),
  createData('Diana Bast', 5999999, 16.0),
  createData('Ekram Suliman',5999999, 3),
  createData('Fatima Hasan', 5999999, 16.0),
  createData('Fadi Hasan', 5999999, 6.0),
  createData('Hasan Mhesen', 5999999, 9.0),
  createData('Eclair', 5999999, 16.0),
  createData('Cupcake', 5999999, 3),
  createData('Gingerbread', 5999999, 16.0),
];


const useStyles = makeStyles((theme) => ({
  // root: {
  //   '& .MuiTextField-root': {
  //     margin: theme.spacing(1),
  //     width: '25ch',
  //   },
  // },
  table: {
    minWidth: 500,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
  

const UsersTable = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Movies</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'Avengers'}>Avengers</MenuItem>
          <MenuItem value={'Quiet Place'}>Quiet Place</MenuItem>
          <MenuItem value={'Purge'}>Purge</MenuItem>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
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
