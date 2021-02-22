import React from 'react'
import Footer from '../components/Footer'
import Video from '../components/Video';
import MoviesList from '../components/MoviesList';
import HeaderAdmin from '../components/HeaderAdmin';

const AdminHome = () => {
    return (
        <div>
            <Video/>
            <MoviesList/>
            <HeaderAdmin/>    
            <Footer/>
        </div>
    )
}

export default AdminHome
