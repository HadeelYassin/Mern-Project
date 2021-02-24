import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Video from '../components/Video';
import MoviesList from '../components/MoviesList';

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
