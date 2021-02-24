import React, { useState, useEffect } from 'react';
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
            <AddCategory/>
            <AddMovie/>
             <HeaderAdmin/>
            
            <Footer/>
        </div>
    )
}

export default MoviesAdmin
