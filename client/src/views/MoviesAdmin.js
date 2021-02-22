import React from 'react'
import AddMovie from '../components/AddMovie'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'

const MoviesAdmin = () => {
    const Style={
        backgroundColor: '#8c8787',
        width:"100%"
    }
    return (
        <div style={Style} >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <AddMovie/>
            <HeaderAdmin/>
            
            <Footer/>
        </div>
    )
}

export default MoviesAdmin
