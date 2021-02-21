
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import UsersTable from '../components/UsersTable'


const BuyersList = () => {
    const Style={
        backgroundColor: '#161b22'
    }
    return (
        <div style={Style} >
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <UsersTable />
            <Footer/>
        </div>
    )
}

export default BuyersList
