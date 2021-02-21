import React from 'react'
import AddMovie from '../components/AddMovie'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'

const MoviesAdmin = () => {
    const Style={
        backgroundColor: '#161b22',
        width:"100%"
    }
    return (
        <div style={Style} >
            <HeaderAdmin/>
            <AddMovie/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default MoviesAdmin
