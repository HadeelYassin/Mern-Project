
import React from 'react'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import UsersTable from '../components/UsersTable'


const BuyersList = () => {
    const Style={
        backgroundColor: '#8c8787',
        width:"100%"
    }
    return (
        <div style={Style} >
            <HeaderAdmin />
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
