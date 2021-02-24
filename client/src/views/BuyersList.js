import React from 'react'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import UsersTable from '../components/UsersTable'


const BuyersList = () => {
    const Style={
        backgroundColor: '#8c8787',
        width:"100%",
        height:"100%"
    }
    return (
        <div style={Style} >
            <br/>
            <br/>
          
            <UsersTable />
            <HeaderAdmin />
            <Footer/>
        </div>
    )
}

export default BuyersList
