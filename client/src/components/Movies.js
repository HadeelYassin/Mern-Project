import axios from "axios";
import { useEffect, useState } from "react";
import { navigate, Link } from "@reach/router"
import '../styles/movies.css';
// import { Button } from '@material-ui/core';



const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const Movies = ({ poster_path, title, vote_average, overview, video, release_date }) => {

  return (

    <div className="movie" >
      {/* <div class="movie-info">
        <h4>{title}</h4>
      </div> */}
      <img src={IMGPATH + poster_path} alt={title} />
      <div className="movie-date">
        <h4>{"FRIDAY, FEBRUARY 12"}<br/>
        {"10:00 am "}</h4>
      </div>
      <div className="overview">
        <div>
          <iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1" height="100%" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
          <h4>{"category"}</h4>
          <p>{overview}</p>
        </div>
        <h6>{"There is a ticket !!"}</h6>

        <button className="buy" onClick={()=>navigate("/new")}>Book Now</button>
        {/* <Button variant="contained" color="primary" disableElevation>
          Buy Now!!
        </Button> */}

      </div>
    </div>
  );
};

export default Movies;