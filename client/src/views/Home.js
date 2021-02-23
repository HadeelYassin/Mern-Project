import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Video from '../components/Video';
<<<<<<< HEAD
import MoviesList from '../components/MoviesList'
=======
import MoviesList from '../components/MoviesList';

>>>>>>> ffbfb6f42ab754adef68374056a9273d184bbaa6
const Home = () => {
    const Style={
        backgroundColor: '#202020'
    }
    return (
        
        <div style={Style}>
            <Video/>
            <MoviesList/>
            <Header/>    
            <Footer/>
        </div>
    )
}

export default Home
