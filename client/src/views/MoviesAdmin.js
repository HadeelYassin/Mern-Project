import React from 'react'
import AddCategory from '../components/AddCategory'
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
            <div style={{display:"inline-flex", padding:"20px"}} >
            <AddMovie/>
            <AddCategory/>
            
            </div>
            <HeaderAdmin/>
            
            <Footer/>
        </div>
    )
}

export default MoviesAdmin
