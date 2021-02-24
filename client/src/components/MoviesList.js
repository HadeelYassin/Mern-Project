import '../styles/movies.css';
import Movies from './Movies'
import React, { useState, useEffect } from 'react';


const APIURL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MoviesList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(APIURL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results)
			});
	}, []);

	return (
		<div className='movie-container'>
			{movies.length > 0 &&
				movies.map((movie) => <Movies key={movie.id} {...movie} />)}

			<div className="movie" >
				<img src="http://image.tmdb.org/t/p/w500//ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" alt="wo" />
				<div className="movie-date">
					<h4>{"FRIDAY, FEBRUARY 12"}<br />
						{"10:00 am "}</h4>
				</div>
				<div className="overview">
					<div>
						<iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1" height="100%" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
						<h4>{"category"}</h4>
						
					</div>
					<h6>{"There is a ticket !!"}</h6>

					<button className="buy">Book Now</button>

				</div>
			</div>
			<div className="movie" >
				<img src="http://image.tmdb.org/t/p/w500//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg" alt="wo" />
				<div className="movie-date">
					<h4>{"FRIDAY, FEBRUARY 12"}<br />
						{"10:00 am "}</h4>
				</div>
				<div className="overview">
					<div>
						<iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1" height="100%" width="100%" title="W3Schools Free Online Web Tutorials"></iframe>
						<h4>{"category"}</h4>
						
					</div>
					<h6>{"There is a ticket !!"}</h6>

					<button className="buy">Book Now</button>

				</div>
			</div>
		</div>
	);
}

export default MoviesList;
