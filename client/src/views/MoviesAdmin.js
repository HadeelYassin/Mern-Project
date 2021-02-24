import React ,{useState, useEffect} from 'react'
import AddCategory from '../components/AddCategory'
import AddMovie from '../components/AddMovie'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import axios from 'axios'
const MoviesAdmin = () => {
    const Style={
        backgroundColor: '#8c8787',
        width:"100%"
    }
    const [categories, setCategories] = useState([]);
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/getAllCategories')
    //         .then(res=>{
    //           setCategories(res.data);
    //         });
    // },[])
    const change=(bol)=>{
        axios.get('http://localhost:8000/api/getAllCategories')
            .then(res=>{
              setCategories(res.data);
            });
    }
    return (
        <div style={Style} >
            <br/>
            <br/>
            <br/>
            <AddCategory change={change}/>
            <AddMovie categoriess={categories}/>
            <HeaderAdmin/>
            
            <Footer/>
        </div>
    )
}

export default MoviesAdmin
