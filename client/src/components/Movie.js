import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const Movie = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>

      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie'></img>
          {/* <div
            onClick={() => props.handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          > */}
          {/* </div> */}
        </div>
      ))}
    </>


  );
};

export default Movie;





    // {props.movies.map((movie, index) => (
    //   <Card>
    //   {/* <CardHeader/> */}
    //   <CardMedia style={{ height: "100px" }}  />
    //   <CardContent>
    //   <img src={movie.Poster} alt='movie'></img>
    //     <Typography>
    //       {movie.Title}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">BUY NOW</Button>
    //   </CardActions>
    // </Card>
    // ))}