import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Video from '../components/Video';
import MoviesList from '../components/MoviesList';
const Home = () => {
    const Style={
        backgroundColor: '#161b22'
    }
    return (
        <div>

        <div style={Style}>
            <Header/>
            <div>
            <Video/>
            <MoviesList/>
        </div>
            <Footer/>
        </div>
        </div>
    )
}

export default Home
