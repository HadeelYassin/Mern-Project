import React, {  useState,useEffect } from 'react'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import UsersTable from '../components/UsersTable'
import axios from "axios";
import { navigate } from '@reach/router';
const BuyersList = () => {
    const Style={
        backgroundColor: '#8c8787',
        width:"100%"
    }
     // const [loaded, setLoaded] = useState(false);
    //useEffect((e)=>{
     //   axios.get('http://localhost:8000/api/admin')
      //          .then(res=> {if(res.data.cookie == !null)
       //             { 
         //           setLoaded(true); 
         //          }
        //            else{
         //               navigate('/admin');
         //           }

         //       }
         //       )  // If successful, do something with the response. 
         //   .catch(err=>{
         //    console.log("error");
        //    })
       // }, [])
    
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
