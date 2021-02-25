import React,{useState,useEffect} from 'react';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import '../styles/buyTicket.css';
import axios from 'axios';
import { navigate } from '@reach/router';


const lightColor = 'white';
const borderRadius = 12;

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    overflow: 'visible',
    background: 'none',
    display: 'flex',
    margin: 'auto',
    marginTop: 80,
    maxWidth: '80%',
    height: 450,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
    '& $moveLeft, $moveRight': {
      transition: '3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: 'translateX(-20px)',
      },
      '& $moveRight': {
        transform: 'translateX(20px)',
      },
    },
    [breakpoints.up('sm')]: {
      width: '80%',
    },
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: '25%',
    backgroundColor: lightColor,

  },
  media: {
    width: '100%',
    height: '100%',

  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'sans-serif',

  },
  labelDate: {
    backgroundColor: 'black',
    color: 'white',
    width: '90%',
    height: '10%',
    margin: 'auto',
    padding: 7,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    fontFamily: 'sans-serif',
  },

  heading: {
    fontSize: 32,
    fontFamily: 'sans-serif',
  },
  category: {
    fontSize: 24,
    fontFamily: 'sans-serif',

  },
  moveLeft: {},
  moveRight: {},
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(7),


  },
}));

// const ValidationTextField = withStyles({
//   root: {
//     '& input:valid + fieldset': {
//       borderColor: 'red',
//       borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//       borderColor: 'red',
//       borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//       borderLeftWidth: 6,
//       padding: '4px !important', 
//     },
//   },
// })(TextField);

const theme = createMuiTheme({
  palette: {
    primary: red,
    margin: '5px',

  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: 'red',
    width: '35%',
    fontFamily: 'sans-serif',
    margin:'auto',

  },
}))(Button);


export const BuyTicket = (props) => {
  const classes = useStyles2();
  const styles = useStyles();
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: 'black',
  });
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const[phoneNumber, setPhoneNumber] = useState("")
  const[numberOfTickets, setNumberOfTickets] = useState("")
  const [errors, setErrors] = useState([])
  const [movie, setMovie] = useState({})
  const  id = props.id
  
    
    useEffect(()=>{
      axios.get('http://localhost:8000/api/movie/'+ id)
        .then(res=>{
          setMovie(res.data);
console.log(res.data)
        });
    },[])
  
  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/createuser', {
      firstName,
      lastName,
      phoneNumber,
      numberOfTickets,
      id
    })
    .then(()=>navigate('/login/hi'))
    .catch(err =>{
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
    
    <Card className={styles.card} elevation={0}>
      {movie.title}
      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia
          className={styles.media}
          image={movie.imageUrl}
        />
      </div>
      
      <VerticalTicketRip
        classes={{
          ...ripStyles,
          left: cx(ripStyles.left, styles.moveLeft),
          right: cx(ripStyles.right, styles.moveRight),
        }}
      />
      <div className={cx(styles.right, styles.moveRight)}>
        <div className={styles.labelDate}>
          <h2 className={styles.heading}>{movie.showingDate}</h2>
        </div>
        <div className={styles.labelTitle}>
          <h2 className={styles.heading}>{movie.title}</h2>
          <h5 className={styles.category}>{movie.category}</h5>
        </div>
        <form className={classes.root} Validate onSubmit={onSubmitHandler}>
          <ThemeProvider theme={theme}>
          {
           errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
            }
                      
            <TextField
              className={classes.margin}
              label="First Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e)=>setFirstName(e.target.value)}
            />
            <TextField
              disabled
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label={movie.price}
              variant="outlined"
            />
            <TextField
              className={classes.margin}
              label="Last Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e)=>setLastName(e.target.value)}
            />
            <TextField
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label="Tickets Number"
              type="number"
              variant="outlined"
              onChange={(e)=>setNumberOfTickets(e.target.value)}
            />
            <TextField
              className={classes.margin}
              label="Phone Mumber"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            <TextField
              disabled
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label={numberOfTickets*movie.price}
              variant="outlined"
            />
            <button variant="outlined" color="primary" className={classes.margin} id="mui-theme-provider-outlined-input">
              Book Now
      </button>
<br></br>
<br></br>

     
      {/* <ColorButton variant="outlined"  className={classes.margin} id="mui-theme-provider-outlined-input">
      Back
      </ColorButton> */}
      </ThemeProvider>
      <Link href='/'>back</Link>
        </form>
      </div>
    </Card>
  );
};

export default BuyTicket;