import React from 'react';
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


export const BuyTicket = () => {
  const classes = useStyles2();
  const styles = useStyles();
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: 'black',
  });

  return (
    <Card className={styles.card} elevation={0}>
      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia
          className={styles.media}
          image={
            'http://image.tmdb.org/t/p/w500//ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg'
          }
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
          <h2 className={styles.heading}>FRIDAY, FEBRUARY 23</h2>
        </div>
        <div className={styles.labelTitle}>
          <h2 className={styles.heading}>Avengers</h2>
          <h5 className={styles.category}>Category</h5>
        </div>
        <form className={classes.root} Validate>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              label="First Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              disabled
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label="Ticket Price"
              variant="outlined"
            />
            <TextField
              className={classes.margin}
              label="Last Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label="Tickets Number"
              type="number"
              variant="outlined"
            />
            <TextField
              className={classes.margin}
              label="Phone Mumber"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              disabled
              className={classes.margin}
              id="mui-theme-provider-outlined-input"
              label="Total Price"
              variant="outlined"
            />
            <ColorButton variant="outlined" color="primary" className={classes.margin} id="mui-theme-provider-outlined-input">
              Book Now
      </ColorButton>
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