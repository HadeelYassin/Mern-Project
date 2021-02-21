import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import '../styles/BuyTicketsComponentStyle.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
    root: {
        minWidth: 275,
        color: 'white',
        background: 'transparent',
        display: 'flex',
        border: 'none',

    },
    cover: {
        width: 290,
        minHeight: 385,
    },
    title: {
        fontFamily: 'Raleway',
        textAlign: 'center',

    },
    pos: {
        fontFamily: 'Raleway',
        fontStyle: 'italic',
        fontDisplay: 'swap',
        fontWeight: 400,
    },
    body: {
        background: 'rgba(0, 0, 0, 0.6)',
        width: 630,
        padding: 0,
    },
    date: {
        color: 'white',
        fontFamily: 'Raleway',
        backgroundColor: 'black',
        margin: 0,

    },
    form: {
        marginTop: 10,
        paddingLeft:40,
        paddingRight:40,
    },
    button:{
        marginTop:10,
        marginBottom:0,
        fontFamily: 'Raleway',
        fontDisplay: 'swap',
        fontWeight: 400,
        width:'70%',
    },
    input:{
        background: 'rgba(0, 0, 0, 0.5)',
        
    }
   
});



export default function BuyTicketsComponent() {

    const classes = useStyles();


    return (

        <div className="containerr">
            <img src="/images/Picture3.png"  ></img>
            <Container className="centeredd" fixed maxWidth="md">
                <Card className={classes.root} >
                    <div>
                        <CardMedia
                            className={classes.cover}
                            image="/images/poster4.jpg"
                        />
                    </div>

                    <CardContent className={classes.body}>
                        <Typography className={classes.date} variant="h5" >FRIDAY, FEBRUARY 12, 2021</Typography>
                        <Typography className={classes.pos} variant="h4" >
                            Joker
                    </Typography>
                        <Typography className={classes.title} variant="h5">
                            Crime, 2 hr 5 min
                     </Typography>
                        
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        className={classes.input}
                                            autoComplete="fname"
                                            name="firstName"
                                             variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            placeholder="First Nmae"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        className={classes.input}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        className={classes.input}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="phone number"
                                            label="Phone Number"
                                            name="phone number"
                                            autoComplete="Phone Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>


                                        <TextField
                                        className={classes.input}
                                            id="outlined-number"
                                            fullWidth
                                            label="Hurry up ! There is still available Seats for you"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"

                                        />
                                    </Grid>


                                </Grid>
                                <Button variant="contained" className={classes.button}>
                                    Book Now
                                 </Button>



                            </form>

                      




                    </CardContent>


                </Card>


            </Container>
        </div>



    );
}


